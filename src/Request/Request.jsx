const api_key="47de66d220msh0120b1b7d859f73p1884c0jsn2a06b42ec45f";
const api_key_1="9b7c77dfd2msh95a5f169f87bd9ep1c989fjsn9b0825ec762c"
let name=""
const Requestfunc = (data) => {
    request.coindetails=`coin/${data}?rapidapi-key=${api_key}`
}
const request={
    coin:`coins?rapidapi-key=${api_key}`,
    coindetails:``,
    news:`news?rapidapi-key=${api_key_1}`,
    headling:`news/search?rapidapi-key=${api_key_1}`   
}


export {request,Requestfunc}
