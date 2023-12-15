import "../styles/Animal.css"

function Animal(props) {
    let { animal, showMini, showRow, children, amount } = props;

    if (!amount) {
        amount = 1;
    }
    return (
        <div class={`${(showRow ? "animal-card-row" : "animal-card")}`}>
            <img src={animal.imgSrc} alt="animal" />
            <div className="animal-description">
                <h3>{animal.name}</h3>
                <p>{animal.description}</p>
                {!showMini && <>
                    <p>{animal.lastUpdated}</p>
                    <p>Price: {animal.price * amount}</p>
                    {children}
                </>}
            </div>
        </div>
    );
}

export default Animal;