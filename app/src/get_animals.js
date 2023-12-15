

import axios from 'axios';



export async function getAnimals(filter1 = "all", filter2 = "all", filter3 = "") {
    const response = await axios.get('http://localhost:3047/animals?filter1=' + filter1 + '&filter2=' + filter2 + '&filter3=' + filter3);
    const response_json = await response.data;
    return response_json.animals;
}

export async function getAnimal(id) {
    // alert(id)
    const response = await axios.get('http://localhost:3047/animals/' + id);
    const response_json = await response.data;

    return response_json.animals;
}