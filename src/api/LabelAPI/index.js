import { DefaultAPIInstance } from "@/api"

export const LabelAPI = {
    createLabels(labels) {
        const url = "/labels"
        return DefaultAPIInstance.post(url, labels)
    },
    deleteLabels(ids) {
        const url = "/deleteLabels"
        const data = ids
        return DefaultAPIInstance.post(url, data)
    },
    getLabels(data) {
        const url = "/getLabels"
        return DefaultAPIInstance.post(url, data)
    },
    changeLabels(data) {
        const url = "/changeLabels"
        return DefaultAPIInstance.post(url, data)
    },
}

















// router.post('/labels', authMiddleware, labelController.create)
// router.delete('/labels', authMiddleware, labelController.delete)
// router.post('/getLabels', authMiddleware, labelController.getLabels)
// router.post('/changeLabels', authMiddleware, labelController.changeLabels)


// class LabelController
// {
// 	async create (req, res)
// 	{
// 		try
// 		{ //* Принимает массив объектов [{"barcode":"2312312"}]
// 			const userId = Jwt.decode(req.headers.authorization.split(' ')[1]).id
// 			const sendedLabels = req.body.map(e => ({ ...e, user_id: userId }))
// 			const labels = await Label.create(sendedLabels)
// 			return res.json(labels)
// 		}
// 		catch(error) { res.status(500).json(error) }
// 	}
// 	async delete (req, res)
// 	{
// 		try
// 		{ //* Принимает массив строк ["1","2"]
// 			const sendedIds = req.body
// 			const deletedLabels = await Label.deleteMany({ _id: { $in: sendedIds } })
// 			return res.json(deletedLabels)
// 		}
// 		catch(error) { res.status(500).json(error) }
// 	}
// 	async getLabels (req, res)
// 	{
// 		try
// 		{

// 			//? Принимает ОБЪЕКТ
// 			//* {
// 			//* 	"sortBy": "",
// 			//* 	"sortOrder": "asc",
// 			//* 	"page": "1",
// 			//* 	"limit": "10",
// 			//* 	"search": "c"
// 			//* }

// 			const userId = Jwt.decode(req.headers.authorization.split(' ')[1]).id

// 			const { sortBy, sortOrder, page, limit, search } = req.body

// 			//* Построение объекта поиска
// 			const searchObj = { user_id: userId, }
// 			if(search)
// 			{
// 				const searchFields = [ //* Поля для поиска
// 					"barcode",
// 					"sku",
// 					"color",
// 					"size",
// 					"name",
// 					"seller",
// 					"date",
// 					"country",
// 					"brand",
// 					"composition",
// 					"freeTitle",
// 				]
// 				searchObj.$or = searchFields.map(field => ({ [field]: { $regex: search, $options: 'i' } }))
// 			}

// 			//* Построение объекта сортировки
// 			const sortObj = {}
// 			//* -1 для сортировки по убыванию, 1 для сортировки по возрастанию
// 			if(sortBy && sortOrder)
// 				sortObj[sortBy] = sortOrder === 'desc' ? -1 : 1

// 			//* Выполнение запроса к базе данных
// 			const skip = (page - 1) * limit
// 			const labels = await Label.find(searchObj)
// 				.sort(sortObj)
// 				.skip(skip)
// 				.limit(limit)

// 			return res.json(labels)
// 		}
// 		catch(error) { res.status(500).json(error) }
// 	}
// 	async changeLabels (req, res)
// 	{
// 		try
// 		{ //* Принимает массив объектов [{"barcode":"2312312"}]
// 			const userId = Jwt.decode(req.headers.authorization.split(' ')[1]).id
// 			const changedLabels = req.body

// 			const results = await Promise.all(
// 				changedLabels.map(obj => Label.updateMany({ _id: obj._id, user_id: userId }, obj))
// 			)

// 			return res.json({ message: "Обновлено", count: results.length, documents: results })
// 		}
// 		catch(error) { res.status(500).json("Ошибка при обновлении:", error) }
// 	}
// }

// export default new LabelController()
