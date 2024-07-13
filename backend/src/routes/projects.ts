import { Express, Request, Response, Router } from "express";
const router = Router();

// Define routes for your projects
router.get("/", (req: Request, res: Response) => {
  res.send("List of projects");
});

router.post("/", (req: Request, res: Response) => {
  res.send("Add a new project");
});

router.get("/:id", (req: Request, res: Response) => {
  res.send("Details of project with id " + req.params.id);
});

router.put("/:id", (req: Request, res: Response) => {
  res.send("Update project with id " + req.params.id);
});

router.delete("/:id", (req: Request, res: Response) => {
  res.send("Delete project with id " + req.params.id);
});

// Export the router
export default router;
