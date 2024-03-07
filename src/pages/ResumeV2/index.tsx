import { useState } from "react";
import { Waypoint } from "react-waypoint";
import moment from "moment";
import "moment/dist/locale/fr";
moment.locale("fr");
import "./index.scss";

export default function Resume() {
    const experiences = [
        {
            id: "With",
            date: {
                start: "2023-03",
                end: "2023-09",
            },
            location: "92130 Issy-les-Moulineaux",
            title: "Développeuse Fullstack ReactJS/PHP - Withings",
            description: [
                "Front : Conception d’applications de suivis de métrique de santé (poids, rythme cardiaque, taux de glucose ...). React / ViteJs / Zustand / Jest / Test unitaire",
                "Back : API en PHP pour récupérer les données",
                "Stratégie SCRUM, méthode Agile, Jira Software, Code Review, Mise en production",
            ],
        },
        {
            id: "Brid",
            date: {
                start: "2022-10",
                end: "2022-12",
            },
            title: "Bridge",
            description: ["Conception et maintenance de connecteurs bancaires"],
        },
        {
            id: "Bioc",
            date: {
                start: "2020-09",
                end: "2022-06",
            },
            title: "Bioculture",
            description: [
                "Refonte de la totalité du site e-commerce de l’entreprise",
                "Front : Conception du site d’achat et de la plateforme entreprise pour gérer les produits et les commandes en ReactJS",
                "Back : API NodeJS et base de données MongoDB",
                "Outils de collaboration Github",
            ],
        },
    ];

    const years = [2023, 2022, 2021, 2020];

    const ListTitle = () => {
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
            <Waypoint
                topOffset={223.5}
                onPositionChange={(e) => handleListDisapear(e)}>
                <div className={`list`}></div>
            </Waypoint>
        );
    };

    const YearTimeline = () => {
        const yearHeight: { [currentYear: number]: number } = {};
        const experienceHeight: { [id: string]: number } = {};
        const [heightTable, setHeightTable] = useState([]);

        // useEffect(() => {
        //     const test = experiences.map((exp) => {
        //         const divHeight = document.getElementById(exp.id)?.offsetHeight;
        //         console.log("divHeight", divHeight);
        //         return { id: exp.id, height: divHeight };
        //     });
        //     console.log("test", test);
        //     setHeightTable(test);
        // }, []);

        experiences.forEach((experience) => {
            const duration =
                Math.round(
                    moment(experience.date.end).diff(
                        moment(experience.date.start),
                        "months",
                        true
                    )
                ) + 1;
            console.log("duration", duration);
            experienceHeight[experience.id] = duration * 40;

            const yearLap = Array(
                Number(moment(experience.date.end).format("YYYY")) -
                    Number(moment(experience.date.start).format("YYYY")) +
                    1
            ).fill(0);

            console.log("yearLap", yearLap);

            yearLap.map((lap, idx) => {
                let diff = 0;
                const currentYear =
                    Number(moment(experience.date.start).format("YYYY")) + idx;
                if (yearLap.length > 1) {
                    if (idx === 0) {
                        diff = Math.round(
                            moment(
                                `${moment(experience.date.start).format(
                                    "YYYY"
                                )}-12`
                            ).diff(
                                moment(experience.date.start).add(1),
                                "months",
                                true
                            )
                        );
                    } else if (idx === yearLap.length - 1) {
                        diff = Math.round(
                            moment(experience.date.end).diff(
                                moment(
                                    `${moment(experience.date.end)
                                        .subtract(1, "years")
                                        .format("YYYY")}-12`
                                ).add(1),
                                "months",
                                true
                            )
                        );
                    } else {
                        diff = 12;
                    }
                }

                // const current1MonthHeight =
                //     heightTable.find((el) => (el.id = experience.id))?.height /
                //     duration;

                // console.log("current1MonthHeight", current1MonthHeight);
                // console.log("currentYear", currentYear);

                // yearHeight[currentYear] = yearHeight[currentYear]
                //     ? yearHeight[currentYear]
                //     : 0;

                // console.log(
                //     "height",
                //     yearLap.length > 1
                //         ? current1MonthHeight * diff
                //         : current1MonthHeight * duration
                // );

                // yearHeight[currentYear] =
                //     yearLap.length > 1
                //         ? yearHeight[currentYear] + current1MonthHeight
                //             ? current1MonthHeight * diff
                //             : 0
                //         : yearHeight[currentYear] + current1MonthHeight
                //         ? current1MonthHeight * duration
                //         : 0;
            });
        });

        console.log("yearHeaight", yearHeight);

        return (
            <>
                <div>
                    {years.map((el) => (
                        <div>
                            <div style={{ height: 480 }}>
                                <div className="time">
                                    <span className="date">{el}</span>
                                    <div className="dot"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="line"></div>
                <div className="experience-timeline">
                    {experiences.map((exp, idx) => (
                        <div
                            style={{ height: experienceHeight[exp.id] }}
                            key={`${idx} - experience`}
                            className="timestamps">
                            <div id={exp.id} className="experiences">
                                <div key={idx}>
                                    <div className="title-timestamp">
                                        <ListTitle />
                                        <span className="title">
                                            {exp.title}
                                        </span>
                                    </div>
                                    <p className="duration">
                                        {moment(exp.date.start)
                                            .format("MMMM-Y")
                                            .replace("-", " ")}{" "}
                                        -{" "}
                                        {moment(exp.date.end)
                                            .format("MMMM-Y")
                                            .replace("-", " ")}
                                    </p>
                                    <ul className="description">
                                        {exp.description.map((des, idx) => (
                                            <li key={idx}>{des}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    };

    return (
        <div id="v2">
            <div className="years"></div>

            <div
                style={{ scrollMarginBlockStart: "177px" }}
                id="parcours"
                className="content">
                <YearTimeline />
            </div>
        </div>
    );
}
