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
console.log(teststr.replace(/[a-dA-D]\-/g, "1"));

/*
\d [0-9] 数字字符
\D [^0-9]非数字字符 
\s [\t\n\x0B\f\r] 空白符
\S [^\t\n\x0B\f\r] 非空白符
\w [a-zA-Z_0-9] 单词字符（数字、字母、下划线）
\W [^a-zA-Z_0-9] 非单词字符（数字、字母、下划线）
*/
// ab+数字+字符串  ab[0-9][^\r\n]
console.log(teststr.replace(/ab\d./g, "1"));

/*
字符边界
^ 以xxx开始
$ 以xxx结束
/b 单词边界
/B 非单词边界
*/

'@123@abc@'.replace(/@./g,"Q");
'@123@abc@'.replace(/^@./g,"Q");
'@123@abc@'.replace(/.@/g,"Q");
'@123@abc@'.replace(/.@$/g,"Q");
/*   
/m  指多行匹配
*/
'@123@456@789'.replace(/@\d/g,"Q");
'@123@456@789'.replace(/@\d/gm,"Q");



/*
量词
*/
/*
？  出现0次或者1次
+  出现1次或者多次
*  出现0次或者多次
{n} 出现n次
{n,m} 出现n-m次
{n,} 至少出现n次



*/

// 匹配一个数字20次

'@123@456@789'.replace(/\d{20}/g,"Q");


// 贪婪模式
// 匹配一个数字3-6次，默认最大 6
'12345678'.replace(/\d{3,6}/g,x);
// 匹配一个数字3-6次，默认最小 3
'12345678'.replace(/\d{3,6}？/g,x);

// 分组
// （）
//匹配一个字母加数字，出现3次
'a1b2c3d4'.replace(/[a-z]\d{3}/g,"x")
'a1b2c3d4'.replace(/([a-z]\d){3}/g,"x")

//或
// a|b

'ByronCasper'.replace(/Byr(on|Ca)sper/g,"X");

'ByroncasperByronCasper'.replace(/Byr(on|Ca)sper/g,"X");

//反向引用
// 
'2019-12-04'.replace(/(\d{4})-(\d{2})-(\d{2})/g,"$1/$2/$3")
'2019-12-04'.replace(/(\d{4})-(\d{2})-(\d{2})/g,"$3/$2/$1")

// 忽略分组
'2019-12-04'.replace(/(?:\d{4})-(\d{2})-(\d{2})/g,"$2/$1")















