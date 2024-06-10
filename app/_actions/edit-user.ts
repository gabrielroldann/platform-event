"use server";

import { db } from "../_lib/prisma";
import bcrypt from "bcrypt";

interface EditNameProps {
  email: string;
  newName: string;
}

interface EditEmailProps {
  email: string;
  newEmail: string;
}

export const EditName = async ({ email, newName }: EditNameProps) => {
  const updatedUser = await db.user.update({
    where: {
      email: email,
    },
    data: {
      name: newName,
    },
  });

  return updatedUser;
};

export const EditEmail = async ({ email, newEmail }: EditEmailProps) => {
  // TODO: UPDATE ACADEMIC WORKS

  const updatedUser = await db.user.update({
    where: {
      email: email,
    },
    data: {
      email: newEmail,
    },
  });

  return updatedUser;
};

const ValidatePassword = (password: string) => {
  const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/);

  return regex.test(password);
};

interface EditPasswordProps {
  email: string;
  newPassword: string;
  oldPassword: string;
}

export const EditPassword = async ({
  email,
  newPassword,
  oldPassword,
}: EditPasswordProps) => {
  const validPassword = ValidatePassword(newPassword);
  const user = await db.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    return {
      error: "Usuário não encontrado",
    };
  }

  const checkPassword = user.password
    ? await bcrypt.compare(oldPassword, user.password)
    : false;

  console.log("test:", checkPassword);

  if (checkPassword === false) {
    return {
      error: "Senha antiga incorreta",
    };
  }

  if (!validPassword)
    return {
      error:
        "A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
    };

  const passwordHash = await bcrypt.hash(newPassword, 10);

  const updatedUser = await db.user.update({
    where: {
      email: email,
    },
    data: {
      password: passwordHash,
    },
  });

  return {
    success: {
      message: "Senha trocada com sucesso!",
      email: updatedUser.email,
    },
  };
};

interface EditTypeUserProps {
  email: string;
  typeUser: string;
}

export const SaveTypeUser = async ({ email, typeUser }: EditTypeUserProps) => {
  const updatedUser = await db.user.update({
    where: {
      email: email,
    },
    data: {
      typeUser: typeUser,
    },
  });

  return updatedUser;
};
