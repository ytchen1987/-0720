
//分组捕获

var str = 'abcde';
var patt = new RegExp(/(a(b(c)))/,'g');

var result = patt.exec(str);
console.log(result); // ['abc','abc','bc','c']   $1 = abc  $2 = bc $3 = c

