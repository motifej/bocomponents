import Pagination from "./pagination";
import Subscribe from "./subscribe";

import DefaultTable from "./default-table";

export const BuildDefaultTable = config => Subscribe(DefaultTable, config);