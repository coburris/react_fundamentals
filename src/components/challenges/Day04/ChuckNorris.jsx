import React, { useState } from 'react';

const ChuckNorris = () => {
    const [joke, setJokes] = useState("")
    function fetchJoke(){
        const url = "https://api.chucknorris.io/jokes/random"
        fetch(url)
        .then(response => response.json())
        .then((json) => {
            setJokes(json.value)
            console.log(json.value)})
        } 
    

    return(
        <div>
            <button onClick={fetchJoke}>Chuck Joke</button>
            {joke}
        </div>
    );
};

export default ChuckNorris