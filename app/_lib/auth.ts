import { db } from "@/app/_lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const fetchUser = async (email: string) => {
  const user = await db.user.findUnique({ where: { email } });
  return user;
};

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials, req) {
        try {
          if (!credentials?.email || !credentials?.password) return null;
          const { email, password } = credentials;

          const user = await db.user.findUnique({ where: { email } });

          if (!user) throw { message: "Usuário não encontrado!" };
          if (!user.password) throw { message: "No password found" };

          if (!user.email) throw { message: "No email found" };

          if (user && bcrypt.compareSync(password, user.password)) {
            return { id: user.id, name: user.name, email: user.email };
          } else {
            throw { message: "Senha inválida" };
          }
        } catch (error) {
          console.error(error);
          throw { message: "Informações inválidas" };
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      const currentUser = await fetchUser(session.user.email);
      session.user = currentUser as { id: string; name: string; email: string };
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
};
