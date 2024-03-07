//Icons
import icon from "../../assets/icons/icon.svg";

import "./index.scss";

export default function Header({ trigger }: { trigger: boolean }) {
    return (
        <div className="header">
            <div className={`navbar ${trigger && "white"}`}>
                <a className="image-link" href="#home">
                    <img src={icon} alt="icon" />
                </a>
                {/* <div className="menu">
                    <div>
                        <span>Parcours scolaire</span>
                        <span>Expériences</span>
                        <span>Projects</span>
                    </div>
                </div> */}
                <div className="menu">
                    <a href="#parcours" className="menu-link">
                        Parcours
                    </a>
                    <a href="#projects" className="menu-link">
                        Projects
                    </a>
                </div>
            </div>
            <div className="margin">
                <div></div>
            </div>
        </div>
    );
}
