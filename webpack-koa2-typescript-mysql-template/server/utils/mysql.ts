import * as mysql from 'mysql';
import CONF from '../config';

export default (sql: string, params: Array<any>, callback: any) => {
