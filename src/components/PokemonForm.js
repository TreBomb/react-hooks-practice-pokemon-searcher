import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokeList, setPokeList }) {
  const [newPoke, setNewPoke] = useState({
    name: "",
    hp: "",
    front: "",
    back: ""
  });

  function handleChange(e, key) {
    const value = e.target.value;
    setNewPoke({...newPoke, [key]: value});
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          console.log("submitting form...");
          fetch(`http://localhost:3001/pokemon`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "name": newPoke.name,
              "hp": newPoke.hp,
              "sprites": {
                "front": newPoke.front,
                "back": newPoke.back
              },
            })
          })
          setPokeList([...pokeList]);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={newPoke.name} onChange={e => handleChange(e, "name")} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={newPoke.hp} onChange={e => handleChange(e, "hp")} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={e => handleChange(e, "front")}
            value={newPoke.front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={e => handleChange(e, "back")}
            value={newPoke.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
