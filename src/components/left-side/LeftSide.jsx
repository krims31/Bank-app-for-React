import App from "../../App";

export default function LeftSize() {
    return (
        <>
            <div className="content-left">
                <div className="recent">
                    <h1>Recent transactions</h1>
                    <p>View all</p>
                </div>
                <div className="starbucks">
                    <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/763px-Starbucks_Corporation_Logo_2011.svg.png" alt="" />
                    <h1>Starbucks Coffee</h1>
                    <p>Aug 24, 05:27 PM</p>
                </div>
                <div className="Dior">
                    <img src="https://i.pinimg.com/564x/c1/90/fd/c190fdbabd6a6ae85bdf12c22d9a6de3.jpg" alt="" />
                    <h1>DIOR</h1>
                    <p>Aug 06, 05:12 PM</p>
                </div>
                <div className="dkny">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkHHzhaZDkvpjmZFYvqYV3GKl-xbUkiDgMw&s" alt="" />
                    <h1>DKNY</h1>
                    <p>Aug 20, 02:14 PM</p>
                </div>
                <div className="Netflix">
                    <img src="https://images.seeklogo.com/logo-png/44/1/netflix-black-logo-png_seeklogo-441652.png" alt="" />
                    <h1>Netflix</h1>
                    <p>Aug 12, 07:25 PM</p>
                </div>
                <div className="viewall">
                    <div className="starbucks">
                        <h1>-$14.99</h1>
                        <p>**** 4568</p>
                    </div>
                    <div className="DIOR">
                        <h1>-$268.00</h1>
                        <p>**** 4568</p>
                    </div>
                    <div className="dkny">
                        <h1>-$40.00</h1>
                        <p>**** 4568</p>
                    </div>
                    <div className="Netflix">
                        <h1>-$70.00</h1>
                        <p>**** 4568</p>
                    </div>
                </div>
            </div>
            <div className="my-goals">
                    <h1>My Goals</h1>
                    <p>View all</p>
                <div className="iphone">
                    <img src="https://png.klev.club/uploads/posts/2024-05/png-klev-club-u26w-p-korobka-aifona-png-31.png" alt="" />
                    <h1>New iPhone</h1>
                    <p>$500 of $1 099</p>
                </div>
                <div className="health">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/023/465/813/small/heart-dark-mode-glyph-ui-icon-like-button-expressing-love-reaction-user-interface-design-white-silhouette-symbol-on-black-space-solid-pictogram-for-web-mobile-isolated-illustration-vector.jpg" alt="" />
                    <h1>Health checkup</h1>
                    <p>$1500 of $2 000</p>
                </div>
                <div className="Laptop">
                    <img src="https://img.freepik.com/free-vector/laptop-cartoon_78370-508.jpg" alt="" />
                    <h1>Laptop</h1>
                    <p>$1500 of $2 000</p>
                </div>
                <div className="clothes">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ7VDA0cFzvAH9ltu9cvKFVwTa4Dtr5cdS_A&s" alt="" />
                    <h1>New clothes</h1>
                    <p>$400 of $2 400</p>
                </div>
                <div className="Traveling">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZsJ3W4KHzB-2D3C6kDRpJq5cPjoWieOPyA&s" alt="" />
                    <h1>Traveling</h1>
                    <p>$0 of $10 000</p>
                </div>
                <div className="viewall-2">
                    <div className="iphone-2">
                        <h1>$1 099</h1>
                    </div>
                    <div className="health-2">
                        <h1>$2 000</h1>
                    </div>
                    <div className="laptop-2">
                        <h1>$1 800</h1>
                    </div>
                    <div className="clothes-2">
                        <h1>$2 400</h1>
                    </div>
                    <div className="Traveling-2">
                        <h1>$10 000</h1>
                    </div>
                </div>
                <div className="add-goal">
                    <input type="button" value="Add new goal" />
                    <i class='bx  bx-plus'  ></i> 
                </div>
            </div>
        </>
    )
}