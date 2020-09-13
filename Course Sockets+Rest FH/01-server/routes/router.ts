import { Router, Request, Response } from "express";

const ROUTER = Router();

ROUTER.get("/message", (req: Request, res: Response) => {
  res.json({ ok: true, message: "GET - Todo esta bien!!" });
});

ROUTER.post("/message", (req: Request, res: Response) => {
  let from = req.body.from,
    to = req.body.to;

  res.json({
    ok: true,
    from,
    to,
  });
});

ROUTER.post("/message/:id", (req: Request, res: Response) => {
  let id = req.params.id,
    from = req.body.from,
    to = req.body.to;

  res.json({
    ok: true,
    id,
    from,
    to,
  });
});

export default ROUTER;
