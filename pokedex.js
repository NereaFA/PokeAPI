const pokemonContainer = document.querySelector(".pokedex");
let pokemons =[];

const fetchPokemon = async (name) =>{
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    let res = await response.json();
    pokemons = [...pokemons,res];
    createPokemon(res);
};

//fetchPokemon(1);

const allPokemon = async (number) =>{
 for(let i = 1; i<= number; i++){
 await fetchPokemon(i);
}
}


function createPokemon (pokemon){

    const tarjeta = document.createElement('div');
    tarjeta.classList.add('card');

    // tarjeta.onclick = () => {
    //     clickOnPoke(pokemon.url);
    //   };

    const spriteContent = document.createElement('div');
    spriteContent.classList.add('sprite-cont')

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContent.appendChild(sprite);

    const nombre = document.createElement('h4');
    nombre.classList.add('name');
    nombre.textContent = pokemon.name;

    const numero = document.createElement('p');
    numero.classList.add('numero');
    numero.textContent = pokemon.id;

    const tipo = document.createElement('p');
    tipo.classList.add ('tipo');
    tipo.textContent = "Type: " + pokemon.types[0].type.name;
    tipo.classList.add (pokemon.types[0].type.name);

    tarjeta.appendChild(spriteContent)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(tipo)
    tarjeta.appendChild(numero)
    

    pokemonContainer.appendChild(tarjeta);
}

const searchPokemon = async () => {
    try {
    //   document.querySelector('#loader').style.display = 'block';
    //   await delay(1);
      const search = document.querySelector('#form_search').value;
      const buscaPokemon = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()));
      console.log(buscaPokemon);
    //   document.querySelector('#loader').style.display = 'none';
    pokemonContainer.innerHTML = '';
    for (const pokemon of buscaPokemon) {
        createPokemon(pokemon); 
           
    }
    
    } catch (error) {
      console.log(error);
    }
  };
  

const onAppLoad = async () => {
    try {
        await allPokemon(151);
      document.querySelector('#btn_search').onclick = searchPokemon;
    } catch (error) {
      console.log(error)
    }
  };
  
  window.onload = onAppLoad;

//allPokemons(151);



// function fetchPokemon (name) {
//     fetch (`https://pokeapi.co/api/v2/pokemon/${name}/`)
//     .then ((res) => res.json())
//     .then(data => {
//         createPokemon(data);
//     });
// }

// function allPokemons (number){
//     for (let i=1; i<= number; i++){
//         fetchPokemon(i);
//     }
// }