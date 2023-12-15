import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Animal from '../components/Animal';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loader from '../components/Loader';
import { addToCart } from '../actions/cartActions'; // Import the action creator
// import { withRouter } from 'react-router-dom';

import '../styles/Create.css';

import { useAnimalContext } from '../animal_context';

function Item() {
    const [animals, setAnimals] = useState([]);
    const [animalIndex, setAnimalIndex] = useState(0);
    const [showLoader, setShowLoader] = useState(false);

    const dispatch = useDispatch(); // Use useDispatch hook
    const cart = useSelector((state) => state.cart); // Access cart state using useSelector

    const { animal } = useAnimalContext();

    useEffect(() => {

        console.log("animal", animal);
        // setAnimals([props.animal]);

        // (async () => {
        //     setShowLoader(true);
        //     const response = await axios.get('http://localhost:3047/animals?filter1=all&filter2=all&filter3=');
        //     const response_json = await response.data;

        //     setShowLoader(false);
        //     setAnimals(response_json.animals);
        // })();
        // const index = window.location.pathname.split('/')[2];
        // setAnimalIndex(index);
    }, []);

    function handleAddToCart(id) {
        dispatch(addToCart(id)); // Dispatch action to add to cart
    }

    return (
        <div className="App">
            <Header />

            <div className="container">
                {showLoader ? <Loader /> :
                    <Animal animal={animal} children={
                        <button className="buy-button" onClick={() => handleAddToCart(animal)}>
                            Buy
                        </button>
                    } />
                }
            </div>

            <Footer />
        </div>
    );
}

export default Item;
