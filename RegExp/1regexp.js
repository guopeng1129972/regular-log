/*
   RegExp对象
*/

//有两种方法，一种是自面量
// \b 代表单词边界  /*** */g 代表全局
var reg = /\ba\b/;
var teststr = "i have a cai, i have a xu kun , en he, cai xu kun!";
//replace(a,b) a表示正则规则，b表示替换成的值
console.log(teststr.replace(reg, "A"));
var reg = /\ba\b/g;
console.log(teststr.replace(reg, "A"));
//另一种是构造函数
var reg = new RegExp('\\bi\\b');
console.log(teststr.replace(reg, "I"));
var reg = new RegExp('\\bi\\b','g');
console.log(teststr.replace(reg, "I"));


/*
   像g这种就是修饰符，类似的还有
    g   :代表全局
    i   :忽略大小写
    m   :代表多行搜索
    var reg = new RegExp('\\bi\\b','gi');
    var reg = /\ba\b/gi;
    这就是全局搜索忽略大小写
*/


