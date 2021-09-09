import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const {id, name, hp, sprites} = pokemon;
  const [img, setImg] = useState(sprites.front);

  function changeImg() {
    img === sprites.front ? setImg(sprites.back) : setImg(sprites.front);
  }

  return (
    <Card onClick={changeImg}>
      <div>
        <div className="image">
          <img alt={name} src={img}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
