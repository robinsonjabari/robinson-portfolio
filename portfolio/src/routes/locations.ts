import { Router } from "express"
const router = Router()

// GET /api/locations
router.get("/", async (req, res) => {
  // TODO: Fetch locations from DB
  res.json([{ id: 1, name: "Sample Location" }])
})

export default router
