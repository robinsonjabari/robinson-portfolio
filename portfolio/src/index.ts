dotenv.config()

import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import buildingsRouter from "./routes/buildings"
import locationsRouter from "./routes/locations"
import usersRouter from "./routes/users"
import parkingLotsRouter from "./routes/parkingLots"

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

// test route
app.get("/api/health", (_req, res) => {
  res.json({ ok: true })
})

app.use("/api/buildings", buildingsRouter)
app.use("/api/locations", locationsRouter)
app.use("/api/users", usersRouter)
app.use("/api/parkingLots", parkingLotsRouter)

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`✅ API running on port ${port}`)
})
