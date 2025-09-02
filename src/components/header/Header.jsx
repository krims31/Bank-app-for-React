import App from "../../App";

export default function Header() {
    return (
        <>
            <div className="container">
                <div className="header-logo">
                    <h1>Pillar.</h1>
                </div>
                <div className="input">
                    <input type="text" placeholder="Search" name="search" />
                    <i className='bx bx-search'></i>
                </div>
                <div className="notif">
                    <i class='bx  bx-bell'  ></i> 
                </div>
                <div className="user">
                    <i class='bx  bx-user-circle'  ></i> 
                </div>
            </div>
        </>
    )
}