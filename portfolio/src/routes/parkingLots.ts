import { Router } from "express"
const router = Router()

// GET /api/parkingLots
router.get("/", async (req, res) => {
  // TODO: Fetch parking lots from DB
  res.json([{ id: 1, name: "Lot A" }])
})

export default router
