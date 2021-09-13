import DataTable from './DataTable.svelte';
import type { DataTableComponentDev } from './DataTable.types';
export * from './DataTable.types';

import HeadComponent from './Head.svelte';
import type { HeadComponentDev } from './Head.types';
export * from './Head.types';
const Head = HeadComponent as typeof HeadComponentDev;
import BodyComponent from './Body.svelte';
import type { BodyComponentDev } from './Body.types';
export * from './Body.types';
const Body = BodyComponent as typeof BodyComponentDev;
import RowComponent from './Row.svelte';
import type { RowComponentDev } from './Row.types';
export * from './Row.types';
const Row = RowComponent as typeof RowComponentDev;
import CellComponent from './Cell.svelte';
import type { CellComponentDev } from './Cell.types';
export * from './Cell.types';
const Cell = CellComponent as typeof CellComponentDev;
import PaginationComponent from './Pagination.svelte';
import type { PaginationComponentDev } from './Pagination.types';
export * from './Pagination.types';
const Pagination = PaginationComponent as typeof PaginationComponentDev;
import { Label } from '@smui/common';

export default DataTable as typeof DataTableComponentDev;

export { Head, Body, Row, Cell, Pagination, Label };
