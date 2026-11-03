//FetchDataCallback.js
function fetchDataWithCallback(callback){
    setTimeout(function(){
        try{
            let error = false;
            if (error) {
                throw new Error('Fetch Failed');
            }
            callback('Data Fetched');
        } catch (err) {
            console.error("Error: " + err.message);
        }
    }, 2000);
}

fetchDataWithCallback(function(result){
    console.log(result);
})