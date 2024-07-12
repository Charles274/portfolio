import { Express, Request, Response, Router } from "express";
const router = Router();

// Define routes for your Web Application projects
router.get("/", (req: Request, res: Response) => {
  res.send("List of Web Application projects");
});

router.post("/", (req: Request, res: Response) => {
  res.send("Add a new Web Application project");
});

router.get("/:id", (req: Request, res: Response) => {
  res.send("Details of Web Application project with id " + req.params.id);
});

router.put("/:id", (req: Request, res: Response) => {
  res.send("Update Web Application project with id " + req.params.id);
});

router.delete("/:id", (req: Request, res: Response) => {
  res.send("Delete Web Application project with id " + req.params.id);
});

// Export the router
export default router;
