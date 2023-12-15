import React, { createContext, useContext, useState } from 'react';

// Create a context
const AnimalContext = createContext();

// Create a context provider component
export const AnimalProvider = ({ children }) => {
    const [animal, setAnimal] = useState(null);

    return (
        <AnimalContext.Provider value={{ animal, setAnimal }}>
            {children}
        </AnimalContext.Provider>
    );
};

// Custom hook to access the context
export const useAnimalContext = () => useContext(AnimalContext);
