import "./intro.scss"
import { init } from 'ityped'
import { useEffect,useRef } from "react"

export default function Intro() {

    const textREF=useRef();
useEffect(()=>{
    init(
        textREF.current, { 
        showCursor: false, 
        backDelay:1500,
        backSpeed:50,
        showCursor:true,
        strings: ['Game Developer','Unity','Unreal Engine 4', 'Cocos2d-X', 'Machine Learning','Basic 3D Modelling','Basic Discord Bot' ] })
},[])



    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/suko.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Sukru Cay</h1>
                    <h3>Freelance <span ref={textREF}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
