import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Animal from '../components/Animal';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loader from '../components/Loader';
import { addToCart } from '../actions/cartActions'; // Import the action creator

import '../styles/Create.css';
import { getAnimal, getAnimals } from '../get_animals';

function Item() {
    const [animals, setAnimals] = useState([]);
    const [animalIndex, setAnimalIndex] = useState(0);
    const [showLoader, setShowLoader] = useState(true);

    const dispatch = useDispatch(); // Use useDispatch hook
    const cart = useSelector((state) => state.cart); // Access cart state using useSelector

    useEffect(() => {
        (async () => {
            setShowLoader(true);
            // const response = await axios.get('http://localhost:3047/animals?filter1=all&filter2=all&filter3=');
            // const response_json = await response.data;
            const _animals = await getAnimal(window.location.pathname.split('/')[2]);
            // alert(_animals);

            setShowLoader(false);
            setAnimals([_animals]);
        })();
        const index = window.location.pathname.split('/')[2];
        setAnimalIndex(index);
    }, []);

    function handleAddToCart(id) {
        // alert("Added to a cart!")
        dispatch(addToCart(id)); // Dispatch action to add to cart
    }

    const [amount, setAmount] = useState(1);

    return (
        <div className="App">
            <Header />

            <div className="container">
                {showLoader ? <Loader /> :
                    <Animal animal={animals[0]} amount={amount} children={<>
                        <button className="buy-button" onClick={() => {
                            alert("Added to a cart!")
                            for (let i = 0; i < amount; i++)
                                handleAddToCart(animals.filter((animal) => animal.id == animalIndex)[0])
                        }
                        }>
                            Buy
                        </button>
                        <br />
                        <>
                            <button className="add" onClick={() => { setAmount(Math.max(amount + 1, 1)) }}>+</button>
                            <div>{amount}</div>
                            <button className="remove" onClick={() => { setAmount(Math.max(amount + 1, 1)) }}>-</button>
                        </>
                    </>
                    } />
                }
            </div>

            <Footer />
        </div>
    );
}

export default Item;
