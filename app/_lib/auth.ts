import { db } from "@/app/_lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        // Add logic to verify credentials here
        if (!credentials?.email || !credentials?.password) return null;
        const { email, password } = credentials;

        // Fetch user and password hash from your database
        const user = await db.user.findUnique({ where: { email } });

        if (!user) throw new Error("No user found");
        if (!user.password) throw new Error("Wrong password");
        if (!user.email) throw new Error("Email does not exist");

        // && bcrypt.compareSync(password, user.password)
        if (user && bcrypt.compareSync(password, user.password)) {
          return { id: user.id, name: user.name, email: user.email };
        } else {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user = { ...session.user, id: user.id } as {
        id: string;
        name: string;
        email: string;
      };

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
};
