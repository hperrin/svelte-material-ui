import DataTable from './DataTable.svelte';
import type { DataTableComponentDev } from './DataTable.types.js';
export * from './DataTable.types.js';

import HeadComponent from './Head.svelte';
import type { HeadComponentDev } from './Head.types.js';
export * from './Head.types.js';
const Head = HeadComponent as typeof HeadComponentDev;
import BodyComponent from './Body.svelte';
import type { BodyComponentDev } from './Body.types.js';
export * from './Body.types.js';
const Body = BodyComponent as typeof BodyComponentDev;
import RowComponent from './Row.svelte';
import type { RowComponentDev } from './Row.types.js';
export * from './Row.types.js';
const Row = RowComponent as typeof RowComponentDev;
import CellComponent from './Cell.svelte';
import type { CellComponentDev } from './Cell.types.js';
export * from './Cell.types.js';
const Cell = CellComponent as typeof CellComponentDev;
import PaginationComponent from './Pagination.svelte';
import type { PaginationComponentDev } from './Pagination.types.js';
export * from './Pagination.types.js';
const Pagination = PaginationComponent as typeof PaginationComponentDev;
import { Label } from '@smui/common';

export default DataTable as typeof DataTableComponentDev;

export { Head, Body, Row, Cell, Pagination, Label };
