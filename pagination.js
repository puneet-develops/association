// different logic for pagination
//  router.get('/items', async (req, res) => {
//     const { page = 1, limit = 10, sort = 'id', order = 'ASC', filter } = req.query;

//     try {
//         const items = await Item.findAll({
//             offset: (page - 1) * limit,
//             limit: parseInt(limit),
//             order: [[sort, order]],
//             where: filter ? { [filter.field]: filter.value } : undefined,
//         });

//         res.json(items);
//     } catch (error) {
//         res.status(500).json({ error: 'An error occurred while fetching items.' });
//     }
// });
