import React, { useState, useEffect } from "react";
import axios from "axios";
import Star from "./Star";

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';


const StarWars = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.
            get('https://swapi.co/api/people/')
           // get("https://lambda-swapi.herokuapp.com/api/people/")
            .then(response => {                
                setItems(response.data.results);
                //console.log(response.data.results);
            })
    }, [])


    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
                className="text"
            >
                <Star 
                birth_year={item.birth_year}
                eye_color={item.eye_color}
                gender={item.gender}
                hair_color={item.hair_color}
                height={item.height}
                mass={item.mass}
                name={item.name}
                skin_color={item.skin_color}
                films={item.films}
                />
          </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="text"
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default StarWars;
