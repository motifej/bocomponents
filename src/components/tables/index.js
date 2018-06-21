import Pagination from "./pagination";
import Subscribe from "./sub";

import DefaultTable from "./default-table";

// const Enhanced = Subscribe(Pagination);
// const Table = Subscribe(DefaultTable);

export const BuildDefaultTable = config => Subscribe(DefaultTable, config);
	