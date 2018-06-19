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

export const createUrl = () => {
    return this.state.sortQuery
        ? `${this.state.domain}${this.state.endPoint}?page=${this.state.page}&${
              this.state.query
          }sort=${this.state.sortQuery}`
        : `${this.state.domain}${this.state.endPoint}?page=${this.state.page}&${
              this.state.query
          }`;
};
