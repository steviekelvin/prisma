import { Request, Response } from "express";
import {
  userFindIdValidation,
  userValidation,
} from "../validations/user.validation";

import {
  createUser,
  deleteUser,
  getAll,
  getById,
  updateUser,
} from "../repositories/user.repository";
import bcrypt from "bcrypt";

export const create = async (req: Request, res: Response) => {
  try {
    await userValidation.validate(req.body);
    const { name, email, phone } = req.body;
    const user = await createUser({
      ...{ name, email, phone },
      password: await bcrypt.hash(req.body.password, 10),
    });
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const users = await getAll();
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const getId = async (req: Request, res: Response) => {
  try {
    await userFindIdValidation.validate(req.params);
    const users = await getById(Number(req.params.id));
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    await userFindIdValidation.validate(req.params);
    const users = await updateUser(Number(req.params.id), req.body);
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    await userFindIdValidation.validate(req.params);
    await deleteUser(Number(req.params.id));
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
};
