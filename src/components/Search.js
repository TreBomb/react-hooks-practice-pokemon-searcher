import React, {useState} from "react";

function Search({ pokeList, setPokeList, defaultList }) {
  const [text, setText] = useState("");

  function filterPoke(search) {
    setText(search);
    setPokeList(defaultList);
    if (search !== "") {
      const newList = pokeList.filter(poke => poke.name.toLowerCase().startsWith(search));
      console.log(newList);
      setPokeList(newList);
    }
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={e => filterPoke(e.target.value)} value={text}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
