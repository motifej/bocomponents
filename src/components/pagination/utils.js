const utils = {
	extractCount(response) {
		const count = response.data[0].count;
		return Math.ceil(count / 50);
	},
};

export default utils;