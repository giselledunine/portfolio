import { useState } from "react";
import { Waypoint } from "react-waypoint";
import moment from "moment";
import "moment/dist/locale/fr";
moment.locale("fr");
import "./index.scss";

export default function Resume() {
    const experiences = [
        {
            year: "2023",
            items: [
                {
                    date: {
                        start: moment("2023-03").format("MMMM-Y"),
                        end: moment("2023-09").format("MMMM-Y"),
                    },
                    location: "92130 Issy-les-Moulineaux",
                    title: "Développeuse Fullstack ReactJS/PHP - Withings",
                    description: [
                        "Front : Conception d’applications de suivis de métrique de santé (poids, rythme cardiaque, taux de glucose ...). React / ViteJs / Zustand / Jest / Test unitaire",
                        "Back : API en PHP pour récupérer les données",
                        "Stratégie SCRUM, méthode Agile, Jira Software, Code Review, Mise en production",
                    ],
                },
            ],
        },
        {
            year: "2022 - 2020",
            items: [
                {
                    date: {
                        start: moment("2022-10").format("MMMM-Y"),
                        end: moment("2022-12").format("MMMM-Y"),
                    },
                    title: "Bridge",
                    description: [
                        "Conception et maintenance de connecteurs bancaires",
                    ],
                },
                {
                    date: {
                        start: moment("2020-09").format("MMMM-Y"),
                        end: moment("2022-06").format("MMMM-Y"),
                    },
                    title: "Bioculture",
                    description: [
                        "Refonte de la totalité du site e-commerce de l’entreprise",
                        "Front : Conception du site d’achat et de la plateforme entreprise pour gérer les produits et les commandes en ReactJS",
                        "Back : API NodeJS et base de données MongoDB",
                        "Outils de collaboration Github",
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
        <div id="v1">
            <div className="years">
                {experiences.map((exp) => (
                    <a key={exp.year} href={`#${exp.year}`} className="year">
                        <span>{exp.year}</span>
                    </a>
                ))}
            </div>
            <div id="parcours" className="content">
                <div className="timeline">
                    <div className="line"></div>
                    {experiences.map((exp) => (
                        <div
                            key={`${exp.year} - experience`}
                            id={exp.year}
                            className="timestamps">
                            <div className="time">
                                <span className="date">{exp.year}</span>
                                <div className="dot"></div>
                            </div>
                            <div className="experiences">
                                {exp.items.map((item, idx) => (
                                    <div key={idx}>
                                        <div className="title-timestamp">
                                            <ListTitle item={item} />
                                        </div>
                                        <p className="duration">
                                            {item.date.start.replace("-", " ")}{" "}
                                            - {item.date.end.replace("-", " ")}
                                        </p>
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
