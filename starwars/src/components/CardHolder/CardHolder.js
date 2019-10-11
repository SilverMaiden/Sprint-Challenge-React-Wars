
import React from 'react';
import CharacterCard from '../Card/Card';

const CharacterCardHolder = (props) => {
    return (
        <div className="card-holder">
            {props.peopleList.map(element =>
                                  <div>
                                      <CharacterCard name={element.name} birthYear={element.birth_year} films={element.films}/>
                                  </div>
                                          )}
         </div>

    )
}

export default CharacterCardHolder;
