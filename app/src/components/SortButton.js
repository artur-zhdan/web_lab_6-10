function SortButton(props) {
    return (
        <div class="sort-options">
            <label for="sort-expensive">Sort by the most expensive animals</label>
            <input type="checkbox" id="sort-expensive" onclick="sortAnimals()" />
        </div>
    );
}

export default SortButton;