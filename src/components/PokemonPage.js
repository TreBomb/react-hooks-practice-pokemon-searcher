import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeList, setPokeList] = useState([]);
  const [defaultList, setDefaultList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
    .then(r => r.json())
    .then(pokes => {
      setPokeList(pokes);
      setDefaultList(pokes);
    })
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokeList={pokeList} setPokeList={setPokeList}/>
      <br />
      <Search pokeList={pokeList} setPokeList={setPokeList} defaultList={defaultList}/>
      <br />
      <PokemonCollection pokeList={pokeList}/>
    </Container>
  );
}

export default PokemonPage;
