import App from "../../App";

export default function CentreTop() {
    return (
        <>
            <div className="card-top-centre">
                <div className="balance-card">
                    <h1>Balance</h1>
                    <p>$10 524.15</p>
                    <input type="button" value="Add new card" />
                </div>
                <div className="master-card">
                    <img src="https://www.mastercard.co.in/content/dam/public/mastercardcom/sg/en/consumers/find-a-card/images/standard-mastercard-card-debit_1280x720.png" alt="" />
                </div>
                <div className="visa">
                    <img src="https://pngimg.com/d/credit_card_PNG118.png" alt="" />
                </div>
            </div>
        </>
    )
}