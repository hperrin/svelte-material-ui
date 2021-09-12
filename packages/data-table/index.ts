import DataTable from './DataTable.svelte';
export * from './DataTable.types';

import Head from './Head.svelte';
export * from './Head.types';
import Body from './Body.svelte';
export * from './Body.types';
import Row from './Row.svelte';
export * from './Row.types';
import Cell from './Cell.svelte';
export * from './Cell.types';
import Pagination from './Pagination.svelte';
import Label from '@smui/common/CommonLabel.svelte';

export default DataTable;

export { Head, Body, Row, Cell, Pagination, Label };
