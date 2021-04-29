const http=require("http");


//dummy data
var data={
    name:"Rishabh",
    friend:"ambesh",
    age:20
}
//create a server

http.createServer((request,response)=>{
    //first parameter will always work as request
    //second parameter will always work as response

    //create API here

    if(request.url==="/hit" && request.method==="GET"){
        data=JSON.stringify(data);
        response.writeHead(200,{
            'content-type':'application/json',
            'Access-Control-Allow-Origin':'*'
        })
        //send response here
        response.write(data);
        response.end();
    }
})
//server ko chlaane k liye
.listen(8081,()=>{
    console.log("server has started");
})