
import React from "react";
import { Redirect, Link } from "react-router-dom";

import Film from "../Containers/FilmContainer";

class FilmPage extends React.Component {

  componentDidMount(){
    const characterId = this.props.match.params.characterId;

    const character = findCharacterById(this.props.characters, characterId);

    if(character && !character.films){
      console.log("no films yet");
      this.props.requestCharacterDetails(character);
    }
    else{
      console.log("we have the films");
      this.props.receiveCharacterDetails(character);
    }
  }

  render(){
    const characterId = this.props.match.params.characterId;
    const character = findCharacterById(this.props.characters, characterId);

    return (
      <div>
        Film Page
        <Link to="/">
          <div>
            Back
          </div>
        </Link>
        <div style={{display:"flex"}}>
          {
            character && character.films
            ? character.films.map(film => (
                <Film key={film.episode_id} film={film} />
              ))
            : <span>Loading</span>
          }
        </div>
      </div>
    );
  }
}

//
//
//
function findCharacterById(characters, id){
  const match = characters.find(char => {
    // matching string to number here
    return id == char.id;
  });

  return match;
}

export default FilmPage;
