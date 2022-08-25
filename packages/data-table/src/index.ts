import type { ComponentType } from 'svelte';

import DataTable from './DataTable.svelte';
import type { DataTableComponentDev } from './DataTable.types.js';
export * from './DataTable.types.js';

import HeadComponent from './Head.svelte';
import type { HeadComponentDev } from './Head.types.js';
export * from './Head.types.js';
const Head = HeadComponent as ComponentType<HeadComponentDev>;
import BodyComponent from './Body.svelte';
import type { BodyComponentDev } from './Body.types.js';
export * from './Body.types.js';
const Body = BodyComponent as ComponentType<BodyComponentDev>;
import RowComponent from './Row.svelte';
import type { RowComponentDev } from './Row.types.js';
export * from './Row.types.js';
const Row = RowComponent as ComponentType<RowComponentDev>;
import CellComponent from './Cell.svelte';
import type { CellComponentDev } from './Cell.types.js';
export * from './Cell.types.js';
const Cell = CellComponent as ComponentType<CellComponentDev>;
import PaginationComponent from './Pagination.svelte';
import type { PaginationComponentDev } from './Pagination.types.js';
export * from './Pagination.types.js';
const Pagination = PaginationComponent as ComponentType<PaginationComponentDev>;
import { Label } from '@smui/common';

export default DataTable as ComponentType<DataTableComponentDev>;

export { Head, Body, Row, Cell, Pagination, Label };
