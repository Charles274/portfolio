import { Router } from "express";

const router = Router();

import {
  getWebAppProjectItems,
  getWebAppProjectItemById,
  createWebAppProjectItem,
  updateWebAppProjectItem,
  deleteWebAppProjectItem,
} from "../controllers/web-applications";

// Define routes for your civil engineering projects
router.get("/", getWebAppProjectItems);
router.post("/", createWebAppProjectItem);
router.get("/:id", getWebAppProjectItemById);
router.put("/:id", updateWebAppProjectItem);
router.delete("/:id", deleteWebAppProjectItem);

// Export the router
export default router;
