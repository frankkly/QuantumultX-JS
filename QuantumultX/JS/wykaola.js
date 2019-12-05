/** 
 * @supported BC368C08
 */
var obj = JSON.parse($response.body);
obj.body = null;
$done({body: JSON.stringify(obj)}); 