import React from "react"
import Header from "./Components/Header.js"
import Buttons from "./Components/Buttons.js"
import Main from "./Components/Main.js"
import Footer from "./Components/Footer.js"



export default function App(){
    return(
        <div>
            <img src="./image/Profile-picture.png" className="profile-img" />
            <div className="main-body">
                <Header />
                <Buttons />
                <Main />
                <Footer />
            </div>
        </div>
    )
}