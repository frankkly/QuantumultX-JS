/**
 * @supported BC368C084B87 ADADD31E6563
 */
let obj = JSON.parse($response.body);
obj["result"]["user_status"]["vip"] = 1;
$done({body: JSON.stringify(obj)});