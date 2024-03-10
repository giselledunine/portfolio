import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Resume from "./pages/Resume";
// import Projects from "./pages/Projects";
import { gsap } from "gsap";

//Images
import profil from "./assets/protfolio-profil.svg";
import name from "./assets/name.svg";
import linkedin from "./assets/linkedin.png";
import malt from "./assets/malt.png";

//Icons
import arrow from "./assets/icons/arrow.svg";

function App() {
    const [trigger, setTrigger] = useState(false);
    addEventListener("mousemove", (e) => {
        gsap.to(".followCursor", {
            y: e.pageY - 20,
            x: e.pageX - 20,
            scaleX: 1,
            scaleY: 1,
            duration: 0.5,
        });
    });
    useEffect(() => {
        addEventListener("scroll", () => {
            const lastKnownScrollPosition = window.scrollY;
            if (lastKnownScrollPosition > 695) {
                setTrigger(true);
            } else {
                setTrigger(false);
            }
        });
    }, []);

    return (
        <>
            <div className="followCursor"></div>
            <Header trigger={trigger} />
            <div id="home" className="presentation">
                <div className="presentation-container">
                    <img className="name-img" src={name} alt="name" />
                    <div>
                        <img src={profil} alt="profil" />
                        <div>
                            <h1>Développeuse Fullstack</h1>
                            <h3>
                                Bienvenue, dans mon portfolio. Tout ce que vous
                                avez besoin de savoir sur moi et mon parcours
                                professionnel se trouve ici :)
                            </h3>
                        </div>
                    </div>
                </div>
                <div className={`arrow`}>
                    <a href="#parcours">
                        <img src={arrow} alt="arrow" />
                    </a>
                </div>
            </div>
            <Resume />
            {/* <Projects /> */}
            <div className="footer">
                <div>
                    <img
                        style={{ filter: "invert(1)" }}
                        height={100}
                        src={profil}
                        alt="profil"
                    />
                    <div>
                        <div>
                            <a
                                href="https://www.malt.fr/profile/sophiahmamouche"
                                aria-label="malt">
                                <img
                                    style={{ filter: "grayscale(1)" }}
                                    height={30}
                                    src={malt}
                                    alt="linkedin"
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/sophia-hmamouche-290625175/">
                                <img
                                    style={{ filter: "invert(1)" }}
                                    height={30}
                                    src={linkedin}
                                    alt="linkedin"
                                />
                            </a>
                        </div>
                        <p>sophia.hmamouche@outlook.com</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
