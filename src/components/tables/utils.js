export const buildQuery = values => {
    let query = "";
    if (values) {
        Object.entries(values).forEach(([key, value]) => {
            if (value && value.length) {
                query += `${key}=${value}&`;
            }
        });
    }
    return query;
};
