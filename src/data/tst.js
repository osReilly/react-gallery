var arr=[];

for(var i=1;i<=24;i++){
 var tmp={
    "fileName":i+".jpg",
    "title":"测试数据，这是第"+i+"条",
   "desc":"这是第"+i+"张测试图片"
  };

arr.push(tmp);
}
console.log(arr)
