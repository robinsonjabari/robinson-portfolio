import { Router } from "express"
const router = Router()

// GET /api/buildings
router.get("/", async (req, res) => {
  // TODO: Fetch buildings from DB
  res.json([{ id: 1, name: "Sample Building" }])
})

export default router
