import { RequestHandler } from "express";
import { prisma } from "../db";

interface RequestParams {}
interface ResponseBody {}
interface RequestBody {
  objectType: "KUCA" | "STAN";
  address: string;
  numberOfRooms: number;
  area: number;
}
interface RequestQuery {
  skip: string;
  limit: string;
}

export const getObjects: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQuery
> = async (req, res) => {
  const skip = parseInt(req.query.skip);
  const limit = parseInt(req.query.limit);

  const objects = await prisma.object.findMany({
    skip: skip,
    take: limit,
  });

  res.json({ data: objects, skip: skip, take: limit });
};

export const getObjectById: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const object = await prisma.object.findUnique({
    where: { id: parseInt(id) },
  });
  res.json({ data: object });
};

export const createObject: RequestHandler<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQuery
> = async (req, res) => {
  const object = await prisma.object.create({ data: req.body });
  res.json({ data: object, message: "Object successfully created" });
};
