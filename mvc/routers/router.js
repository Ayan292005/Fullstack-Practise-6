import express from "express"

import { Controller } from "../controllers/controller.js"

export const route=express.Router()

route.get("/",Controller.getAll)
route.get("/:id",Controller.getById)
route.delete("/:id",Controller.deleteElement)
route.post("/",Controller.postElement)

