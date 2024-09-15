import { Component } from "react";
import "./Header.css"
export default class Header extends Component {
    constructor() {

        super()
    }
    render() {
        return <>
            <div className="Head">
                <div className="textArea">

                    <h1>Hady Mohamed </h1>
                    <h2> web Developer & Designer </h2>
                    <button className="cta-button"> Contant Me</button>
                </div>
                <div className="photoArea">

                    <img src="https://png.pngtree.com/thumb_back/fw800/background/20220129/pngtree-handsome-businessman-ponders-against-black-backdrop-success-handsome-suit-photo-image_35155762.jpg" alt="photoforhead"></img>

                </div>


            </div>
        </>
    }
}



