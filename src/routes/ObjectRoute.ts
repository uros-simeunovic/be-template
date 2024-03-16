import { Router } from "express";
import {
  createObject,
  getObjectById,
  getObjects,
} from "../controllers/ObjectController";

const router = Router();

router.get("/", getObjects);
router.get("/:id", getObjectById);

router.post("/", createObject);

export default router;
