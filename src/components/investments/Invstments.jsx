import App from "../../App";

export default function Investments() {
    return (
        <>
            <div className="invest">
                <h1>My investments</h1>
                <p>View all</p>
            </div>
            <div className="apple">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_6nh70Kmo7ZR3NsUR9gHz2g8W0fPZpgMEw&s" alt="" />
                <h1>Apple</h1>
            </div>
            <div className="tesla">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS49koxFZ1DJSA8ZgYuJDBy9K82vJ_nAvXjg&s" alt="" />
                <h1>Tesla</h1>
            </div>
            <div className="nike">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC1B0OR3V6oxP4_YJJsAg_C6YI0c1RZuq5xg&s" alt="" />
                <h1>Nike</h1>
            </div>
            <div className="netflix">
                <img src="https://images.seeklogo.com/logo-png/44/1/netflix-black-logo-png_seeklogo-441652.png" alt="" />
                <h1>Netflix</h1>
            </div>
            <div className="amazon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF81-vrdIjQEMPdAhvRKqjls7U2n9447IZhQ&s" alt="" />
                <h1>Amazon</h1>
            </div>
            <div className="coca-cola">
                <img src="https://static.cdnlogo.com/logos/c/65/coca-cola-light.svg" alt="" />
                <h1>Coca-cola</h1>
            </div>
            <div className="viewall-3">
                <div className="apple">
                    <h1>$129.89</h1>
                    <p>+3.5%</p>
                </div>
                <div className="tesla">
                    <h1>$210.93</h1>
                    <p>-12%</p>
                </div>
                <div className="nike">
                    <h1>$124.43</h1>
                    <p>+2.8%</p>
                </div>
                <div className="netflix">
                    <h1>$909.05</h1>
                    <p>+1.2%</p>
                </div>
                <div className="amazon">
                    <h1>$185.97</h1>
                    <p>-2.6%</p>
                </div>
                <div className="coca-cola">
                    <h1>$327.25</h1>
                    <p>+1.8%</p>
                </div>
            </div>
        </>
    )
}