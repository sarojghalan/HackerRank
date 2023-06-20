const timerPromise = (message) => new Promise((resolve) => setTimeout(resolve, 3000,message));

async function timeAsync(){
    const result = await timerPromise("Promise Resolve");
    console.log(result);
}

timeAsync();