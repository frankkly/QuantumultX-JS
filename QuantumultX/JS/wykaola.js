/** 
 * @supported BC368C084B87
 */
var obj = JSON.parse($response.body);
obj.body = null;
$done({body: JSON.stringify(obj)}); 