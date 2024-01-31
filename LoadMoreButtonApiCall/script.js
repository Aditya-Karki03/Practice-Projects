

async function fetchData(){
    const request=await fetch(`https://dummyjson.com/products?limit=10`);
    const response=request.json();
    console.log(response);
}
fetchData();