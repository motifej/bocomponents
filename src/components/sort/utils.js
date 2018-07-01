const sortUtils = {
    handleSort(property, stateOrderBy, stateOrder) {
        const orderBy = property;
        let order = "desc";
        if (stateOrderBy === property && stateOrder === "desc") {
            order = "asc";
        }
        const sortQuery = order === "desc" ? `-${orderBy}` : `${orderBy}`;
        const result = { orderBy, order, sortQuery };
        return result;
    }
};

export default sortUtils;
