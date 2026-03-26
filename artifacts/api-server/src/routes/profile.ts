import { Router, type IRouter } from "express";
import { GetProfileResponse } from "@workspace/api-zod";
import { profile, experiences, skills } from "../data/mockData";

const router: IRouter = Router();

router.get("/profile", (_req, res) => {
  const data = GetProfileResponse.parse({ profile, experiences, skills });
  res.json(data);
});

export default router;
