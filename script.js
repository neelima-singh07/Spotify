//spotify javascript 
async function main(){
    let a =await fetch("http://127.0.0.1:5500/songs.json");
    let response=await a.text();
    console.log(response);


}

main();