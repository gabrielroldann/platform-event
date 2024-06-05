"use server";

import { NextResponse } from "next/server";
import { db } from "../_lib/prisma";
import bcrypt from "bcrypt";

interface RegisterParams {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const ValidateEmail = (email: string) => {
  const regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);

  return regex.test(email);
};

const ValidatePassword = (password: string) => {
  const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/);

  return regex.test(password);
};

const ValidatePasswordLength = (password: string) => {
  const minLength = 8;
  return password.length >= minLength;
};

export const RegisterUser = async ({
  name,
  email,
  password,
  confirmPassword,
}: RegisterParams) => {
  const validPasswordLength = ValidatePasswordLength(password);
  const validPassword = ValidatePassword(password);
  const validEmail = ValidateEmail(email);

  // const passwordHash = await bcrypt.hash(password, 10);

  if (!name) return { error: "Digite seu nome" };

  if (!validEmail) return { error: "Digite um email válido" };

  if (!confirmPassword) return { error: "Confirme sua senha" };
  if (password !== confirmPassword) return { error: "As senhas não coincidem" };

  if (!validPasswordLength)
    return { error: "A senha deve conter no mínimo 8 caracteres" };

  if (!validPassword)
    return {
      error:
        "A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
    };

  const user = await db.user.findUnique({ where: { email: email } });

  if (user) return { error: "Email já cadastrado" };

  const newUser = await db.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });

  return {
    success: {
      message: "Cadastrado com sucesso!",
      email: newUser.email,
      password: newUser.password,
    },
  };
};
