import React from "react";
// import ReactDOM from "react-dom";
import MemesData from "../MemesData"

export default function MainContent() {
    let [meme, setMeme] = React.useState({
        // url: '',
        // name: ''
    });
    function getMemeImage() {
        const memesArray = MemesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        console.log(MemesData);
        console.log(MemesData.data.memes[1]);
        let newMeme = MemesData.data.memes[randomNumber];
        setMeme(prevState => newMeme)
        console.log(meme.url);
        console.log(randomNumber);
    }
    return (
        <main className="main">
            <div className="container">
                <div className="">
                    <form className="form">
                        <div className="input-group">
                            <input type="text" placeholder="Top Text" className="input" />
                            <input type="text" placeholder="Bottom Text" className="input" />
                        </div>
                        <button className="btn" type="button" onClick={getMemeImage}>Get a new meme image  🖼</button>
                    </form>
                </div>
                <div className="memes-container">
                    {/* {meme.url} */}
                    <img src={meme.url} alt={meme.name} className="" width="100%" />
                    </div>
            </div>
        </main>
    )
}