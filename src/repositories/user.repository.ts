import { prisma } from "../services/prisma";

const select = {
  id: true,
  name: true,
  email: true,
  password: false,
  phone: true,
  createdAt: true,
  updatedAt: true,
};

export const createUser = async (data: any) => {
  return await prisma.user.create({ data, select });
};

export const getAll = () => prisma.user.findMany({ select });

export const getById = (id: number) =>
  prisma.user.findFirst({ where: { id }, select });

export const updateUser = (id: number, data: any) => {
  return prisma.user.update({
    where: { id },
    data: {
      ...data,
      updatedAt: new Date(),
    },
    select,
  });
};

export const deleteUser = (id: number) => prisma.user.delete({ where: { id } });