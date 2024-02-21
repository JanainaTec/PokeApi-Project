const loadMoreButton = document.getElementById('loadMoreButton');
const pokemonsList = document.getElementById('pokemonsList');
const limit = 4;
let offset = 0;

function createPokemonTypesLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type ${typeSlot.type.name}">${typeSlot.type.name}</li>`)
};

function createPokemonLi(pokemon){
    let firstType = pokemon.types[0]
    return `
    <li class ="pokemon ${firstType.type.name} ">
        <span class="number">#${pokemon.id}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">${createPokemonTypesLi(pokemon.types).join('')}</ol>             
            <img src="${pokemon.sprites.other.dream_world.front_default}" 
            alt=${pokemon.name}>
        </div>
    </li>
 `
};

function loadMore(offset,limit){
    pokeApi.getPokemons(offset,limit).then((pokemons = []) => {
        pokemonsList.innerHTML += pokemons.map(createPokemonLi).join('');
    })
};

loadMore(offset,limit);

loadMoreButton.addEventListener('click',() => {
    offset += limit
    loadMore(offset,limit)
});






