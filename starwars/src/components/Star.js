import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Films from "./Films";

const Star = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid className="text">
                    <img src="https://source.unsplash.com/random" className="text"></img>
                    <h1 className="App-header">{props.name}</h1>
                    <p className="App-p">birth_year : {props.birth_year}</p>
                    <p className="App-p">eye_color : {props.eye_color}</p>
                    <p className="App-p">gender : {props.gender}</p>
                    <p className="App-p">hair_color : {props.hair_color}</p>
                    <p className="App-p">height : {props.height}</p>
                    <p className="App-p">mass : {props.mass}</p>
                    <p className="App-p">skin_color : {props.skin_color}</p>
                    <Films films={props.films}/>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Star;