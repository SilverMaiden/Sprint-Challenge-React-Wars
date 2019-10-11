import React from 'react';

import { Card, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap';

const CharacterCard = (props) => {
  return (
    <div>
      <Card style={{width:300}}>

        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>Born: {props.birthYear}</CardSubtitle>

          <CardText> Number of Films: {props.films.length}</CardText>
        </CardBody>
      </Card>

  </div>
  )
}

export default CharacterCard;
