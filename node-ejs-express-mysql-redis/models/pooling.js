/**
 * Created by Monarch on 2016/9/13.
 */
//连接池配置
var mysql=require("mysql");

var DB_NAME = 'nodesample';

var db_config = {
    host     : '127.0.0.1',
    user     : 'root',
    password : 'gemini',
    database : 'nodesample'
};
var pool = mysql.createPool(db_config);

pool.on('connection', function(connection) {
    connection.query('SET SESSION auto_increment_increment=1');
});

//避免sql可以使用?作为标识符的占位符
var getConnection=function(sql,callback){
    pool.getConnection(function(err,conn){
        if(err){
            handleError();
            query();
            setInterval(query, 5000);
            callback(err,null,null);
        }else{
            conn.query(sql,function(qerr,vals,fields){
                //释放连接
                conn.release();
                //事件驱动回调
                callback(qerr,vals,fields);
            });
