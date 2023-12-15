import Animal from '../components/Animal';
import Header from '../components/Header';
import ExpenseCounter from '../components/ExpenseCounter';
import '../styles/App.css';
import SortButton from '../components/SortButton';
import Footer from '../components/Footer';

import { useAnimalContext } from '../animal_context';

import axios from 'axios';

import { Link } from 'react-router-dom';

import { useState, useRef, useEffect } from 'react';
import Loader from '../components/Loader';
import { getAnimals } from '../get_animals';

function Catalog() {

    const [animalIndex, setAnimalIndex] = useState(0);

    const { setAnimal } = useAnimalContext();

    const [animals, setAnimals] = useState([]);
    const [maxAmount, setMaxAmount] = useState(3);

    const [filter1setting, setFilter1setting] = useState('all');
    const [filter2setting, setFilter2setting] = useState('all');
    const [filter3setting, setFilter3setting] = useState('');

    const [showLoader, setShowLoader] = useState(true);

    const searchBarRef = useRef(null);

    useEffect(() => {
        (async () => {
            setShowLoader(true);
            // filter params passed in as query params
            // const response = await axios.get('http://localhost:3047/animals?filter1=' + filter1setting + '&filter2=' + filter2setting + '&filter3=' + filter3setting);
            const _animals = await getAnimals(filter1setting, filter2setting, filter3setting);

            setShowLoader(false);
            setAnimals(_animals);

            // const animals_ = [

        })()
    }, [filter1setting, filter2setting, filter3setting])


    function loadMore() {
        setMaxAmount(maxAmount + 3);
    }
    function showLess() {
        setMaxAmount(3);
    }

    function filter1(event) {
        const value = event.target.value;
        setFilter1setting(value)
    }

    function filter2(event) {
        const value = event.target.value;

        setFilter2setting(value);
    }

    function filter3(event) {
        const value = event.target.value;

        setFilter3setting(value);
    }



    function applyFilters() {
        let filteredAnimals = animals;


        const filter1 = filter1setting;
        const filter2 = filter2setting;
        const filter3 = filter3setting;



        if (filter1 !== 'all') {
            filteredAnimals = filteredAnimals.filter((animal) => {
                return animal.type === filter1;
            });
        }

        if (filter2 === 'expensive') {
            filteredAnimals = filteredAnimals.sort((a, b) => {
                return b.price - a.price;
            });
        }

        if (filter2 === 'cheap') {
            filteredAnimals = filteredAnimals.sort((a, b) => {
                return a.price - b.price;
            });
        }

        if (filter3 !== '') {
            filteredAnimals = filteredAnimals.filter((animal) => {
                return animal.name.toLowerCase().includes(filter3.toLowerCase());
            });
        }


        return filteredAnimals;
    }





    return (
        <div className="App">
            <Header searchBar={<>
                <div class="search-bar">
                    <input type="text" placeholder="Type something..." class="search-input" onChange={filter3} />
                </div>
            </>} />


            <div>
                <div>
                    <label for="sort-expensive">Filter by type</label>
                    <select name="filter1" id="filter1" onChange={filter1}>
                        <option value="all">All</option>
                        <option value="mammal">Mammal</option>
                        <option value="fish">Fish</option>
                    </select>
                </div>
                <div>
                    <label for="sort-expensive">Sort by the most expensive animals</label>
                    <select name="filter2" id="filter2" onChange={filter2}>
                        <option value="all">All</option>
                        <option value="expensive">Expensive</option>
                        <option value="cheap">Cheap</option>
                    </select>
                </div>
            </div>

            <div class="container">
                <div class="animal-grid">
                    {showLoader ? <Loader /> :
                        (animals).map((animal, index) => {
                            return <div style={{ width: "30%" }} onClick={() => { setAnimalIndex(index) }}>{Animal({
                                animal, showMini: false, children:
                                    <Link to={{ pathname: `/item/${animal.id}` }} onClick={() => { setAnimal(animal) }}>View More</Link>
                            })}</div>
                        })}
                </div>
                {/* {animals.length > maxAmount ? <button class="load-more" onClick={loadMore}>Load more</button> : <button class="load-more" onClick={showLess}>Show less</button>} */}
            </div>

            <Footer />

        </div>
    );
}

export default Catalog;
