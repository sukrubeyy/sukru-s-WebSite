import "./TopBar.scss"
import { Person, Mail, Twitter, Instagram, GitHub, LinkedIn, MenuBook } from "@material-ui/icons"


export default function TopBar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">

                    <a href="#intro" className="logo">
                        <span>J. Game Developer</span>
                    </a>

                    <div className="itemContainer">
                        <a href="https://github.com/sukrubeyy">
                            <GitHub className="icon" />
                            <span>GitHub</span>
                        </a>
                    </div>

                    <div className="itemContainer">
                        <a href="https://github.com/sukrubeyy">
                            <MenuBook className="icon" />
                            <span>Medium</span>
                        </a>
                    </div>

                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/şükrü-çay-a0a8461a3/">
                            <LinkedIn className="icon" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.instagram.com/sukru.beyy/">
                            <Instagram className="icon" />
                            <span>Instagram</span>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://twitter.com/sukrubeyyy">
                            <Twitter className="icon" />
                            <span>Twitter</span>
                        </a>
                    </div>

                    <div className="itemContainer">
                        <a href="mailto:sukru.beyy@outlook.com">
                            <Mail className="icon" />
                            <span>E-Mail</span>
                        </a>
                    </div>

                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
