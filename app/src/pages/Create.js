import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Create.css';
import { Link } from 'react-router-dom';

function Create() {

    const animals = [
        {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ocelot_%28Jaguatirica%29_Zoo_Itatiba.jpg/1200px-Ocelot_%28Jaguatirica%29_Zoo_Itatiba.jpg',
            name: 'Ocelot',
            description: 'It lives in South and Central America, as far up as Mexico. It has been reported as far north as Texas.',
            lastUpdated: 'Last updated 3 mins ago',
            price: '1000'
        },
        {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Octopus2.jpg/1200px-Octopus2.jpg',
            name: 'Octopus',
            description: 'It lives in South and Central America, as far up as Mexico. It has been reported as far north as Texas.',
            lastUpdated: 'Last updated 3 mins ago',
            price: '1500'
        },
        {
            imgSrc: 'https://www.thesprucepets.com/thmb/4H4K_nta-Zvv4yJgndStugkeqtg=/2782x0/filters:no_upscale():strip_icc()/calico-cats-profile-554694-hero-c7ba9806ce1f4fb1b4d4edc2fd820a0d.jpg',
            name: 'Calico Cat',
            description: 'It lives in South and Central America, as far up as Mexico. It has been reported as far north as Texas.',
            lastUpdated: 'Last updated 3 mins ago',
            price: '2000'
        },
    ];

    return (
        <div className="App">
            <Header />

            <div class="container">
                <h1>Create animal</h1>

                <div id="create-animal-form">
                    <label for="image-url">Image URL</label>
                    <input type="url" id="image-url" placeholder="https://example.com/image.jpg" required pattern="https?://.+" />

                    <label for="title">Title</label>
                    <input type="text" id="title" placeholder="Text..." required minlength="2" maxlength="100" />

                    <label for="description">Description</label>
                    <textarea id="description" rows="4" placeholder="Text..." required minlength="10"
                        maxlength="500"></textarea>

                    <label for="daily-expense">Price ($)</label>
                    <input type="number" id="daily-expense" required min="0" />

                    <button type="submit">Submit</button>
                </div>

                <div class="error-message" id="error-message">
                    Oh snap! Change a few things up and try submitting again.
                </div>
            </div>

            <Footer />

        </div>
    );
}

export default Create;
