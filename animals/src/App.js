import './App.css';
import {useState} from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal(){
    const animalList = ["bird", "dog", "horse", "cat", "gator", "cow"];
    return animalList[Math.floor(Math.random() * animalList.length)];
}

function App(){
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    }

    const randomAnimalDiv = animals.map((animal, index) =>{
        return <AnimalShow type={animal} key={index}/>;
    })

    return (
        <div className = "app">
        <button onClick={handleClick}>Add Animals</button>
        <div className="animal-list">{randomAnimalDiv}</div>
        </div>
    );
}

export default App;