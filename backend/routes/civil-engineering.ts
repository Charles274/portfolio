import { Router, Request, Response } from "express";

const router = Router();

// Define routes for your civil engineering projects
router.get("/", (req: Request, res: Response) => {
  res.send("List of civil engineering projects");
});

router.post("/", (req: Request, res: Response) => {
  res.send("Add a new civil engineering project");
});

router.get("/:id", (req: Request, res: Response) => {
  res.send(`Details of civil engineering project with id ${req.params.id}`);
});

router.put("/:id", (req: Request, res: Response) => {
  res.send(`Update civil engineering project with id ${req.params.id}`);
});

router.delete("/:id", (req: Request, res: Response) => {
  res.send(`Delete civil engineering project with id ${req.params.id}`);
});

// Export the router
export default router;
