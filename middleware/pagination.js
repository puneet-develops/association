// middleware/pagination.js

const paginate = (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const filterField = req.query.filterField;
    const filterValue = req.query.filterValue;

    req.pagination = {
        limit,
        offset,
        filterField,
        filterValue,
    };

    next();
};

module.exports = paginate;
