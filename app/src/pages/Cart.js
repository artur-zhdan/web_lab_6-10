import Animal from '../components/Animal';
import Header from '../components/Header';
import ExpenseCounter from '../components/ExpenseCounter';
import '../styles/App.css';
import SortButton from '../components/SortButton';
import Footer from '../components/Footer';


import { addToCart, removeFromCart } from '../actions/cartActions'; // Import the action creator

import { useDispatch } from 'react-redux';

import axios from 'axios';

import { Link } from 'react-router-dom';

import { useState, useRef, useEffect } from 'react';
import Loader from '../components/Loader';

import { useSelector } from 'react-redux';

function Catalog() {

    const cartItems = useSelector(state => state.items); // Access cart items from store


    const [animalIndex, setAnimalIndex] = useState(0);

    const [animals, setAnimals] = useState([]);
    const [maxAmount, setMaxAmount] = useState(3);

    const [filter1setting, setFilter1setting] = useState('all');
    const [filter2setting, setFilter2setting] = useState('all');
    const [filter3setting, setFilter3setting] = useState('');

    const [showLoader, setShowLoader] = useState(true);

    const searchBarRef = useRef(null);

    const dispatch = useDispatch(); // Use useDispatch hook



    useEffect(() => {
        (async () => {
            setShowLoader(true);
            // filter params passed in as query params
            const animals_ = cartItems;

            setShowLoader(false);
            setAnimals(animals_);
        })()
        console.log("cartItems", cartItems);
    }, [filter1setting, filter2setting, filter3setting])



    function addItem(animal) {
        console.log("add item", animal);
        dispatch(addToCart(animal)); // Dispatch action to add to cart
    }

    function deleteItem(animal) {
        console.log("delete item", animal);
        dispatch(removeFromCart(animal)); // Dispatch action to add to cart
    }

    function deleteFully(animal) {
        console.log("delete item", animal);
        const amount = animal.amount;
        for (let i = 0; i < amount; i++)
            dispatch(removeFromCart(animal)); // Dispatch action to add to cart
    }





    useEffect(() => {

        const animals_ = cartItems;

        // delete duplicates, add amount field to each animal
        const amounts = {};
        for (let animal of animals_) {
            if (amounts[animal.id]) {
                amounts[animal.id] += 1;
            } else {
                amounts[animal.id] = 1;
            }
        }
        for (let animal of animals_) {
            animal.amount = amounts[animal.id];
        }

        // remove duplicates
        const uniqueAnimals = [];
        for (let i = 0; i < animals_.length; i++) {
            let animal = animals_[i];
            if (!uniqueAnimals.find((uniqueAnimal) => uniqueAnimal.id === animal.id)) {
                uniqueAnimals.push(animal);
            }
        }
        console.log("uniqueAnimals", uniqueAnimals);

        setAnimals(uniqueAnimals);

    }, [cartItems])

    return (
        <div className="App">
            <Header />


            <div class="container">
                <div style={{ fontSize: 20 }}>Price: {cartItems.reduce((acc, animal) => acc + parseInt(animal.price), 0)}</div>
                <div class="animal-grid">
                    {showLoader ? <Loader /> :
                        animals.map((animal, index) => {
                            return <div style={{ width: "30%" }} onClick={() => { setAnimalIndex(index) }}>{Animal({
                                animal, showMini: false, amount: animal.amount, children:
                                    <>
                                        <button className="add" onClick={() => addItem(animal)}>+</button>
                                        <div>{animal.amount}</div>
                                        <button className="remove" onClick={() => deleteItem(animal)}>-</button>
                                        <br />
                                        <button className="add" onClick={() => { deleteFully(animal) }}>Delete</button>
                                    </>
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
