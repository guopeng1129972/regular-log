/*
   元字符
*/


/*
    1. a b c 就是匹配a b c
    元字符一般分为两种
    2.\b 就是带含义的，还有 \t \v \n \r \0 \f \cX(ctrl+x)
    3以及 * + ? $ ^ . | \ ( ) { } [ ] 这些都是有特殊含义的
*/


/*
   字符类
*/

/*
   使用元字符[]构造符合某些特性的类
*/
var teststr = "i have a cai, i have a xu kun , en he, cai xu kun!";
// 将字符串中的abc替换成X
console.log(teststr.replace(/[abc]/g, "X"));
// ^ 为创建取反
//将字符串中的非abc替换成X
console.log(teststr.replace(/[^abc]/g, "X"));


/*
   范围类
*/
var teststr = "i have a cai, i have a xu kun , en he, cai xu kun! I LIKE RAP JUMP SING BASKTBALL";
//[a-z]中的任意字符
console.log(teststr.replace(/[a-d]/g, "1"));
// 这其中是可以连写的 [a-zA-Z]
console.log(teststr.replace(/[a-dA-D]/g, "1"));