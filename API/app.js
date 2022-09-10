
let container = document.querySelector('.container');

async function callAPI(){
    let response = await fetch ('https://swapi.dev/api/films/') ;
    let data = await response.json();
    let apiData = data.results;
    console.log(apiData);
    let dataMap = data.results;
          dataMap.map((val)=>{
            let p = document.createElement('p');
            p.innerHTML = val.director;
            container.append(p);
           return val.director;
        })
}







