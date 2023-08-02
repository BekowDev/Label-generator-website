import Label from "./Models/Label.js"
import Jwt from "jsonwebtoken"

class LabelController {

    async create(req, res) {
        try { //* Принимает массив объектов [{"barcode":"2312312"}]
            const userId = Jwt.decode(req.headers.authorization.split(' ')[1]).id
            const sendedLabels = req.body.map(e => ({ ...e, user_id: userId }))

            for (const label of sendedLabels) {
                await Label.create(label)
                await new Promise(resolve => setTimeout(resolve, 50))
            }

            return res.json('успешно созданы')
        }
        catch (error) { res.status(500).json(error) }
    }

    async delete(req, res) {
        try { //* Принимает массив строк ["1","2"]
            const sendedIds = req.body
            const deletedLabels = await Label.deleteMany({ _id: { $in: sendedIds } })
            return res.json(deletedLabels)
        }
        catch (error) { res.status(500).json(error) }
    }
    async getLabels(req, res) {
        try {
            const userId = Jwt.decode(req.headers.authorization.split(' ')[1]).id

            const { sortBy, sortOrder, page, limit, search } = req.body

            const sortObj = sortBy && sortOrder ? {} : false
            if (sortObj) {
                sortObj[sortBy] = sortOrder === 'desc' ? -1 : 1
            }

            const skip = (page - 1) * limit

            const labelsFilter = {
                user_id: userId,
                $or: [
                    { barcode: { $regex: search, $options: 'i' } },
                    { sku: { $regex: search, $options: 'i' } },
                    { color: { $regex: search, $options: 'i' } },
                    { size: { $regex: search, $options: 'i' } },
                    { name: { $regex: search, $options: 'i' } },
                    { seller: { $regex: search, $options: 'i' } },
                    { date: { $regex: search, $options: 'i' } },
                    { country: { $regex: search, $options: 'i' } },
                    { brand: { $regex: search, $options: 'i' } },
                    { composition: { $regex: search, $options: 'i' } },
                    { freeTitle: { $regex: search, $options: 'i' } }
                ],
            }

            const labels = await Label.find(labelsFilter)
                .sort(sortObj).skip(skip).limit(limit)

            const totalPage = await Label.countDocuments(labelsFilter).sort(sortObj)

            return res.json({ labels, totalPage })
        }
        catch (error) { res.status(500).json(error) }
    }
    async changeLabels(req, res) {
        try { //* Принимает массив объектов [{"barcode":"2312312"}]
            const userId = Jwt.decode(req.headers.authorization.split(' ')[1]).id
            const changedLabels = req.body

            const results = await Promise.all(
                changedLabels.map(obj => Label.updateMany({ _id: obj._id, user_id: userId }, obj))
            )

            for (const label of changedLabels) {
                label.addedDate = Date.now()
                await Label.updateOne({ _id: label._id, user_id: userId }, label)
                await new Promise(resolve => setTimeout(resolve, 50))
            }

            return res.json({ message: "Обновлено", count: results.length, documents: results })
        }
        catch (error) { res.status(500).json("Ошибка при обновлении:", error) }
    }
}

export default new LabelController()
