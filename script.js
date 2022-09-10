let input = document.querySelector('input');
let button = document.querySelector('button');
let present = document.querySelector('.present');

const getUsers = () => {
    axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
            const users = response.data.results;
            console.log( input.value);
            users.map((val)=>{
                console.log(val.name);
                present.innerHTML += `
                <div class = m-3>
                <p> name :${val.name} </p>
                <p> species:${val.species} </p>
                <p>origin:${val.origin.name} </p>
                <p>status:${val.status} </p>
                 <img src="${val.image}" alt="">
                 </div>
                 `})
            function filtte(){
                present.innerHTML = '';
                users.map((val)=>{
                    if(val.name.toLowerCase().includes(input.value.toLowerCase())){
                    present.innerHTML += `
                    <div class = m-3>
                    <p> name :${val.name} </p>
                    <p> species:${val.species} </p>
                    <p>origin:${val.origin.name} </p>
                    <p>status:${val.status} </p>
                     <img src="${val.image}" alt="">
                     </div>
                     `
                }
            })
        }
            button.addEventListener('click' , function(){
                filtte();
            })
        })
        .catch(error => console.error(error));
};
getUsers()
