import App from "../../App";

export default function Transfer() {
    return (
        <>
            <div className="transfer">
                <h1>Fast transfer</h1>
                <i className="bx bx-dots-vertical-rounded"></i>
            </div>
            <div className="limit">
                <h2>Limit in April:</h2>
                <h1>$500</h1>
                <p>/$2000</p>
            </div>
            <div className="from">
                <h1>From</h1>
                <input type="button" value="" />
                <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png" alt="" />
                <p>**6893</p>
            </div>
            <div className="To">
                <h1>To</h1>
                <input type="button" value="" />
                <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" />
                <p>**2278</p>
            </div>
            <div className="amount">
                <h1>Amount</h1>
                <input type="text" placeholder="" />
                <p>$3 540.00</p>
            </div>
            <div className="transfer-btn">
                <input type="button" value="Transfer" />
            </div>
            <div className="button-profile">
                <i class="fa-solid fa-plus"></i>
            </div>
        </>
    )
}