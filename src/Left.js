function Left() {
    return (
        <div className="left">

            <div className="available">
                <h2>Availability</h2>
                <h4>In stock (47)</h4>
                <h4>Out of stock (2)</h4>
            </div>

            <div className="price">
                <h3>Price</h3>
                <label for="customRange1" class="form-label"></label>
                <input type="range" class="form-range" id="customRange1"></input>
            </div>

            <div className="product">
                <h2>Product type</h2>
                <h4>Clocks (51)</h4>
            </div>

            <div className="Brands">
                <h2>Brands</h2>
                <h4>Hermle (23)</h4>
                <h4>Bulova (18)</h4>
                <h4>Howard Miller (15)</h4>
                <h4>Seiko (10)</h4>
                <h4>Ajanta Group (7)</h4>
                <h4>Antique Clocks (6)</h4>
            </div>

            <div className="reset">
                <h2>Reset filters</h2>
                <div className="reset-button">
                <button type="button" class="btn btn-outline-secondary btn-lg">Reset</button>
                </div>
            </div>

        </div>
    )
}
export default Left;