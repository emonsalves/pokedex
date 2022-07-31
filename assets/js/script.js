"use strict";

const url151Pokemon = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151";
const urlApi = "https://pokeapi.co/api/v2/pokemon/";
const boxPokemon = document.querySelector(".pokemones");

const getPokemons = async () => {
    const resApi = await fetch(url151Pokemon);
    const data = await resApi.json();
    const arrayPokemons151 = data.results.map(item => {
        const container = {};
        container.name = item.name;
        return container;
    })
    // const arrayPokemons151 = data.results.map((pokemon) => pokemon.name);
    // console.table(arrayPokemons151);
}

const arrayPokemons = getPokemons();

const renderPokemon = async (pokemonBuscado) => {
    const resApi = await fetch(`${urlApi}${pokemonBuscado}`);
    const data = await resApi.json();
    console.log(data);
    const ataques = [];
    data.moves.forEach((ataque) => ataques.push(ataque.move.name));
    // console.table(ataques);  
    const estados = [];
    data.stats.forEach((status) => estados.push({ estado: status.stat.name, valor: status.base_stat }));
    console.table(estados);
    // const tipo = data.types[0].type.name;
    // console.log(tipo);
    // const urlImgPokemon = data.sprites.front_default;
    let html = `<div class="pokemon">
    <h1>${data.name.toUpperCase()}</h1>
    <h2>Numero: ${data.id}</h2>
    <img src="${data.sprites.front_default}" id="img-pokemon">    
    <h2> Es del tipo: ${data.types[0].type.name.toUpperCase()}</h2>
    <h2>Estadisticas Generales</h2>
    <h3>${estados[0].estado.toUpperCase()} - ${estados[0].valor}</h3>
    <h3>${estados[1].estado.toUpperCase()} - ${estados[1].valor}</h3>
    <h3>${estados[2].estado.toUpperCase()} - ${estados[2].valor}</h3>
    <h3>${estados[3].estado.toUpperCase()} - ${estados[3].valor}</h3>
    <h3>${estados[4].estado.toUpperCase()} - ${estados[4].valor}</h3>
    </div>
     `;
    console.log(html);
    boxPokemon.innerHTML = html;
  
}

const pokemon = renderPokemon(25);