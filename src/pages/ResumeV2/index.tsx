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

    const YearTimeline = () => {
        const yearHeight: { [currentYear: number]: number } = {};
        const experienceHeight: { [id: string]: number } = {};

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
                                        <div className={`list`}></div>
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
