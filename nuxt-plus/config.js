#!/usr/bin/env node

var path = process.argv[2], // 请输入项目路径
    exec = require('child_process').exec,
    fs   = require('fs'),
    dir  = './file',
    __dirname = path;

function fileMerge(fileSource, exportFilePath) {

  var readFiles = [];
  var newFileSize = 0;
  var newFileData = "";
  var mergeFileProgress = 0;

  function searchFile(path) {
    try{
      var stats = fs.statSync(path);
      if(stats.isFile()){
        newFileSize += stats.size;
        readFiles.push({absPath:path,size:stats.size});
      }else if(stats.isDirectory()){
        //合并路径下所有文件
        var dirfiles = fs.readdirSync(path);
        for(let i = 0;i<dirfiles.length;i++){
          searchFile(path.join(path,dirfiles[i]));
        }
      }
    }catch(err){
      console.log("error not find "+path);
    }
  }

  for(let i=0;i<fileSource.length;i++){
    searchFile(fileSource[i]);
  }

  for(var i = 0;i<readFiles.length;i++){
    newFileData += fs.readFileSync(readFiles[i].absPath);
    mergeFileProgress++;
    // console.log("读取第"+mergeFileProgress+"个文件。");
  }

  fs.writeFile(exportFilePath,newFileData,err =>{
    if(null != err){
    throw err;
  }else{
    // console.log("总共合并 "+readFiles.length+"个文件 "+newFileSize+" bytes");
  }
});
}

/**
 * 复制文件到指定文件
 * @param src {String} 要复制的文件
 * @param dist {String} 复制到目标文件
 */
function copyFile(src, dist) {
  fs.writeFileSync(dist, fs.readFileSync(src));
}
/**
 * 复制目录、子目录，及其中的文件
 * @param src {String} 要复制的目录
 * @param dist {String} 复制到目标目录
 */
function copyDir(src, dist, callback) {
  fs.access(dist, function(err){
    if(err){
      // 目录不存在时创建目录
      fs.mkdirSync(dist);
    }
    _copy(null, src, dist);
  });

  function _copy(err, src, dist) {
    if(err){
      callback(err);
    } else {
      fs.readdir(src, function(err, paths) {
        if(err){
          callback(err)
        } else {
          paths.forEach(function(path) {
            var _src = src + '/' +path;
            var _dist = dist + '/' +path;
            fs.stat(_src, function(err, stat) {
              if(err){
                callback(err);
              } else {
                // 判断是文件还是目录
                if(stat.isFile()) {
                  console.log(path+'添加成功')
                  fs.writeFileSync(_dist, fs.readFileSync(_src));
                } else if(stat.isDirectory()) {
                  // 当是目录是，递归复制
                  copyDir(_src, _dist, callback)
                }
              }
            })
          })
        }
      })
    }
