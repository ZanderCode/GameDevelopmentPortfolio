import React, {Component} from "react";
import {ReactComponent as TopBlobFlipped} from "./../svgs/FrontPageStyle_bottom.svg";
import "../Styles/GameViewStyle.css"

class GameView extends Component{

    render(){
        return <div className="game-view">
            <div class="splash-container-game-view">
                <TopBlobFlipped className="splash-style splash-flipped" height={"auto"} width={"100%"}/>
            </div>

            <div className="game-content-grid">
                <div className="grid-image">
                    <div className="grid-image-container"></div>
                    <h1 className="grid-header">New: Game Name</h1>
                    <p className="grid-image-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus tellus, aliquet ut aliquet ut, ullamcorper nec nunc. Nunc finibus iaculis hendrerit. Quisque ut leo dignissim</p>
                </div>
                <div className="grid-blank"></div>
                <div className="grid-slideshow">
                    <div className="grid-slider">
                        <div className="slideshow-image"></div>
                        <div className="slideshow-image"></div>
                        <div className="slideshow-image"></div>
                        <div className="slideshow-image"></div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default GameView; 