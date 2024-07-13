import { Router } from "express";

const router = Router();

import {
  getCivilProjectItems,
  getCivilProjectItemById,
  createCivilProjectItem,
  updateCivilProjectItem,
  deleteCivilProjectItem,
} from "../controllers/civil-engineering";

// Define routes for your civil engineering projects
router.get("/", getCivilProjectItems);
router.post("/", createCivilProjectItem);
router.get("/:id", getCivilProjectItemById);
router.put("/:id", updateCivilProjectItem);
router.delete("/:id", deleteCivilProjectItem);

// Export the router
export default router;
