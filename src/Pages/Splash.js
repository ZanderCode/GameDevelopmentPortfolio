import React, { Component } from 'react';
import {ReactComponent as TopBlob} from "./../svgs/FrontPageStyle_top.svg";
import {ReactComponent as BottomBlob} from "./../svgs/FrontPageStyle_bottom.svg";
import "../Styles/Splash.css"

class Splash extends Component{

    render(){
        return <div className="main-splash">

            <div class="splash-container">
                <TopBlob className="splash" height={"auto"} width={"100%"}/>
            </div>

            <div className="title-header-container">
                <h1 className="title-header-text main-title">Zander Codes Games</h1>
                <h4 className="title-header-text">Alex Lamarche Game Development Portfolio</h4>
                <div className="navigation-container">
                    <ul className="navigation">
                        <li>Games</li>
                        <li>Tools</li>
                        <li>About</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>

            <div class="splash-container">
                <BottomBlob className="splash splash-2" height={"auto"} width={"100%"}/>
            </div>
        </div>
    }
}

export default Splash;