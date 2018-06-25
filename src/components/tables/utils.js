import React from "react";
import pick from "lodash/pick";

import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import SubscribeSort from "./sorting";

export const utils = {
	createUrl(domain, endPoint, page, sortQuery, query, action) {
		let url = `${domain}${endPoint}?${query}`;
		if (action === "SORTED_DATA" || sortQuery.length > 0)
			return `${url}&page=${page}&sort=${sortQuery}`;
		if (action === "TOTAL_PAGES") return `${url}&p_count`;
		return `${url}&page=${page}`;
	},
	buildQuery(values) {
		let query = "";
		if (values) {
			Object.entries(values).forEach(([key, value]) => {
				if (value && value.length) {
					query += `${key}=${value}&`;
				}
			});
		}
		return query;
	},
	fixData(response, header) {
		return response.map(result =>
			pick(result, header.map(col => col.value))
		);
	},
	createUrl(domain, endPoint, page, sortQuery, query, action) {
		let url = `${domain}${endPoint}?${query}`;
		if (action === "SORTED_DATA" || sortQuery.length > 0)
			return `${url}&page=${page}&sort=${sortQuery}`;
		if (action === "TOTAL_PAGES") return `${url}&p_count`;
		return `${url}&page=${page}`;
	},
	buildQuery(values) {
		let query = "";
		if (values) {
			Object.entries(values).forEach(([key, value]) => {
				if (value && value.length) {
					query += `${key}=${value}&`;
				}
			});
		}
		return query;
	},
	extractCount(response) {
		const count = response.data.result[0]["count(*)"];
		return Math.ceil(count / 50);
	},
	fixData(response, header) {
		return response.map(result =>
			pick(result, header.map(col => col.value))
		);
	}
};
