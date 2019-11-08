import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Films = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [films, setFilms] = useState([]);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    useEffect(() => {
        props.films.forEach(element => {
            axios.
                get(element)
                .then(response => {
                    films.push(response);
                    setFilms(films);
                })

        })
    }, [])

    films.forEach((film) => {
        console.log(film.data.title);
    });

    const slidesFilms = films.map((film, index) => {
        return (
            <DropdownItem>
                {film.data.title}
            </DropdownItem>
        );
    });
 

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret className="button">
                Films
        </DropdownToggle>
            <DropdownMenu>
                {slidesFilms}
            </DropdownMenu>
        </Dropdown>
    );
}

export default Films;