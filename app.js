import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const showBackground = true;
const background = (
    <img class="background" src="/images/ocean.jpg" alt="ocean" />
);

const title = "";
const images = [];

function displayFact(e) {
    const facts = animals[e.target.alt].facts;
    const randomiser = Math.floor(Math.random() * facts.length);
    const fact = facts[randomiser];
    document.getElementById("fact").innerHTML = fact;
}

for (const animal in animals) {
    images.push(
        <img
            key={animal}
            className="animal"
            alt={animal}
            src={animals[animal].image}
            aria-label={animal}
            role="button"
            onClick={displayFact}
        />
    );
}

const animalFacts = (
    <div>
        <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
        {showBackground && background}
        <div className="animals">{images}</div>
        <p id="fact"></p>
    </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));
