import troll from "../assets/images/Troll Face.png";

export default function Header() {
    return (
        <header className="App-header">
            <div className="container">
                <nav className="nav">
                    <div className="logo-container">
                        <img src={troll} alt="Troll face" className="App-logo" width="35px" />
                        <span className="">Meme Generator</span>
                    </div>
                    <div className="">React Course - Project 3</div>
                </nav>
            </div>
        </header>
    )
}