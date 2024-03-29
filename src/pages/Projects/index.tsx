import { useState } from "react";
import { Waypoint } from "react-waypoint";
import moment from "moment";
import "moment/dist/locale/fr";
moment.locale("fr");
import "./index.scss";
import bioculture from "../../assets/bioculture.png";
import minimalistic from "../../assets/minimalistic.png";

export default function Projects() {
    const experiences = [
        {
            title: "Bioculture",
            items: [
                {
                    link: "https://www.panier-bio-paris.fr/",
                    thumbnail: bioculture,
                    context: "Alternance",
                    title: "Site de e-commerce pour l'entreprise Bioculture",
                    description: [
                        "Stack: ReactJS, AWS, workflow github, test Jest",
                    ],
                },
            ],
        },
        {
            title: "Minimalistic",
            items: [
                {
                    link: "https://minimalistic-pegasus-agency.netlify.app/",
                    thumbnail: minimalistic,
                    title: "Projet final Bachelor - Site de mentoring",
                    description: [
                        "Stack: VueJS, Firebase",
                        "Features: Création de compte, Authentification, Ajouter un mentor, Consulter les programmes, Suivre son avancement",
                    ],
                },
            ],
        },
    ];

    const ListTitle = ({ item }: { item: { title: string } }) => {
        const [listVisible, setListVisible] = useState("visible");

        const handleListDisapear = (e: Waypoint.CallbackArgs) => {
            const { currentPosition } = e;
            console.log("currentPostion", currentPosition);
            if (currentPosition === "above") {
                setListVisible("hidden");
            } else if (currentPosition === "inside") {
                setListVisible("visible");
            }
        };
        return (
            <>
                <div className={`list`}></div>
                <Waypoint
                    topOffset={400.5}
                    onPositionChange={(e) => handleListDisapear(e)}>
                    <span className={`title ${listVisible}`}>{item.title}</span>
                </Waypoint>
            </>
        );
    };
    return (
        <div id="projects-section">
            <div className="years">
                <h2>Projects</h2>
            </div>
            <div id="projects" className="content">
                <div className="timeline">
                    <div className="line"></div>
                    {experiences.map((exp) => (
                        <div
                            key={`${exp.title} - experience`}
                            id={exp.title}
                            className="timestamps">
                            <div className="time">
                                <span className="date">{exp.title}</span>
                                <div className="dot"></div>
                            </div>
                            <div className="experiences">
                                {exp.items.map((item, idx) => (
                                    <div key={idx}>
                                        <div className="title-timestamp">
                                            <ListTitle item={item} />
                                        </div>
                                        <a href={item.link} target="_blank">
                                            <img
                                                src={item.thumbnail}
                                                alt="thumbnail"
                                                width={"100%"}
                                                style={{
                                                    marginLeft: "37px",
                                                    marginTop: "1rem",
                                                    border: "3px solid black",
                                                    borderRadius: "8px",
                                                }}
                                            />
                                            <div className="link">
                                                {item.link}
                                            </div>
                                        </a>
                                        <ul className="description">
                                            {item.description.map(
                                                (des, idx) => (
                                                    <li key={idx}>{des}</li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
