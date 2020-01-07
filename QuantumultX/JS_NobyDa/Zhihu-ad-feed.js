/*
Remove Zhihu ads

Regex: ^https://api.zhihu.com/moments\?(action|feed_type)
*/
/**
 * @supported BC368C084B87 ADADD31E6563
 */
let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=>{
     if(element.hasOwnProperty('ad')){      
       body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})

// by onewayticket255