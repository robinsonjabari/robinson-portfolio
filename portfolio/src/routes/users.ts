import { Router } from "express"
const router = Router()

// GET /api/users
router.get("/", async (req, res) => {
  // TODO: Fetch users from DB
  res.json([{ id: 1, email: "test@uncp.edu", name: "Test User" }])
})

export default router
