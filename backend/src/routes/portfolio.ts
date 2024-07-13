import { Router } from "express";
import { Express, Request, Response } from "express";
const router = Router();

// Define routes for your civil engineering projects
router.get("/", (req: Request, res: Response) => {
  res.send("List of Portfolio projects");
});

// Export the router
export default router;
