import { useState } from "react";
import "./Works.scss"

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Makine Öğrenmes",
            desc:
                "İthalat, İhracat, Faiz, Enflasyon oranlarını baz alarak ekonomi tahmini yapan uygulama.",
            img:
                "data:image/png;base64,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",
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Mobile Application",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "Branding",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
        setCurrentSlide(currentSlide<data.length-1 ? currentSlide+1 : 0);
    };


    return (
        <div className="works" id="works">
            <div className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                            <img src={d.img} alt="" />
                            </div>
                        </div>
                        ))
                    </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />
        </div>
    );
}
