import { furnitureModel } from "../models/firstModel.js";

export const Controller = {
    getAll: async (req, res) => {
        let elem = await furnitureModel.find()
        res.send(elem)
    },
    getById: async (req, res) => {
        let id = req.params.id
        let myElem = await furnitureModel.findById(id)
        res.send({
            message: "find by id",
            data: myElem
        })
    },
    deleteElement: async (req, res) => {
        let { id } = req.params
        await furnitureModel.findByIdAndDelete(id)
        res.send({
            message: "deleted"
        }
        )
    },
    postElement: async (req, res) => {
        let id = req.params.id
        let newElement = furnitureModel(req.body)
        await newElement.save()
        res.send({
            message: "posted",
            data: req.body
        })
    }
}