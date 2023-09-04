/// <reference types="./ambient-data-table" />

import DataTable from './DataTable.svelte';
export * from './DataTable.types.js';

import Head from './Head.svelte';
export * from './Head.types.js';
import Body from './Body.svelte';
export * from './Body.types.js';
import Row from './Row.svelte';
export * from './Row.types.js';
import Cell from './Cell.svelte';
export * from './Cell.types.js';
import Pagination from './Pagination.svelte';
import { Label } from '@smui/common';

export default DataTable;

export { Head, Body, Row, Cell, Pagination, Label };
