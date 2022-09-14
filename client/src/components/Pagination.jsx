import React from "react"
import "../Styles/Pagination.css"

export default function Pagination({pokemonsXPage, allPokemons, pagination, pageNumber}) {
    const numberOfPage = []

    for (let i = 0; i < Math.ceil(allPokemons/pokemonsXPage); i++) {
        numberOfPage.push(i+1)
    }
    return (
        <nav>
            <ul className="ul1">
                {numberOfPage&&numberOfPage.map(number => (
                    <ul className="ul2" key={number}>
                            {pageNumber(number)? <a className="a1" onClick={() => pagination(number)}>{number}</a>:
                        <a className="a2" onClick={() => pagination(number)}>{number}</a>}
                    </ul>
                ))}
            </ul>
        </nav>
    )
}