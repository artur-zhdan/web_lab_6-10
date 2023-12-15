const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3047;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// allow CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, authorization"
    );
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});


const animals = [
    {
        id: 0,
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ocelot_%28Jaguatirica%29_Zoo_Itatiba.jpg/1200px-Ocelot_%28Jaguatirica%29_Zoo_Itatiba.jpg',
        name: 'Ocelot',
        description: 'It lives in South and Central America, as far up as Mexico. It has been reported as far north as Texas.',
        lastUpdated: 'Last updated 3 mins ago',
        price: '1000',
        type: 'mammal'
    },
    {
        id: 1,
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Octopus2.jpg/1200px-Octopus2.jpg',
        name: 'Octopus',
        description: 'It lives in South and Central America, as far up as Mexico. It has been reported as far north as Texas.',
        lastUpdated: 'Last updated 3 mins ago',
        price: '1500',
        type: 'fish'
    },
    {
        id: 2,
        imgSrc: 'https://www.thesprucepets.com/thmb/4H4K_nta-Zvv4yJgndStugkeqtg=/2782x0/filters:no_upscale():strip_icc()/calico-cats-profile-554694-hero-c7ba9806ce1f4fb1b4d4edc2fd820a0d.jpg',
        name: 'Calico Cat',
        description: 'It lives in South and Central America, as far up as Mexico. It has been reported as far north as Texas.',
        lastUpdated: 'Last updated 3 mins ago',
        price: '2000',
        type: 'mammal'
    },
    {
        id: 3,
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/440px-Walking_tiger_female.jpg',
        name: 'Tiger',
        description: 'It lives in South and Central America, as far up as Mexico. It has been reported as far north as Texas.',
        lastUpdated: 'Last updated 3 mins ago',
        price: '1000',
        type: 'mammal'
    },
    {
        id: 4,
        imgSrc: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcStHKdtkM6vMfrXJBTRmxwQOcarmAiP1sX05TPX_lgSQGzzfgfotnuu1KBfum76rYw3dYurNEYgjPxYTTE',
        name: 'Fishy',
        description: 'It lives in South and Central America, as far up as Mexico. It has been reported as far north as Texas.',
        lastUpdated: 'Last updated 3 mins ago',
        price: '1500',
        type: 'fish'
    },
    {
        id: 5,
        imgSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS',
        name: 'Dog',
        description: 'It lives in South and Central America, as far up as Mexico. It has been reported as far north as Texas.',
        lastUpdated: 'Last updated 3 mins ago',
        price: '2100',
        type: 'mammal'
    },
];
// get request handler
// filter params are passed in the query string
app.get('/animals', (req, res) => {
    // get the filter params from the query string
    const filter1 = req.query.filter1;
    const filter2 = req.query.filter2;
    const filter3 = req.query.filter3;

    // apply the filters
    let filteredAnimals = animals;

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


    // sleep for 0.5 seconds
    setTimeout(() => {
        res.json({
            animals: filteredAnimals
        });
    }, 500);

    // Send back the data to the client
    // res.json({
    //     animals: filteredAnimals
    // });

});

app.get('/animals/:id', (req, res) => {

    const id = req.params.id;
    console.log(id)

    const animal = animals.find((animal) => {
        return animal.id == id;
    }
    );

    // sleep for 0.5 seconds
    setTimeout(() => {
        res.json({
            animals: animal
        });
    }, 500);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
