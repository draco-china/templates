import * as mysql from 'mysql';
import CONF from '../config';

export default (sql: string, params: Array<any>, callback: any) => {
  const connection = mysql.createConnection(CONF.DATABASE);
  connection.connect(err => {
    if (err) {
      console.log('数据库连接失败');
