console.log('Peticiones')

const obtenerPokemon = async () => {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    const data = await respuesta.json()
    console.log(data)
}
obtenerPokemon()
