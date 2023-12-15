import "../styles/Footer.css";
import logo from "../logo.svg";

function Footer() {
    return (
        <footer>
            <div class="footer-container">
                <div className="branding">
                    <h1>Animal Kingdom</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </div>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <i class="fab fa-facebook-f">Facebook</i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <i class="fab fa-instagram">Instagram</i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <i class="fab fa-twitter">Twitter</i>
                    </a>
                </div>
            </div>
            <div class="footer-bottom">
                @2021 Animal Kingdom
            </div>
        </footer>
    );
}

export default Footer;