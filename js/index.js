/* 
    Quando clicar no pokémon da listagem o pokemon que esta no cartão deve ser trocado, para isso vamos trabalhar com dois elementos 1- a listagem e 2- os cartões.
    precisamos criar duas variáveis js para trabalhar com elementos da tela.
    vamos precisar trabalhar com evento de clique feito pelo usuário na listagem de pokemon.
    - Remover a classe aberto só do cartão que está aberto.
    - Ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual pokémon mostrar.
    - Remover a classe ativo que marca o pokémon selecionado.
    -  adicionar a classe ativo no item da lista selecionado.
*/

//Precisamos criar duas variéveis no js para trabalhar com elementos da tela 
const listaSelecaopokemons = document.querySelectorAll('.pokemon')
const Pokemonscard = document.querySelectorAll('.cartao-pokemon')

listaSelecaopokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
       
        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)

        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})