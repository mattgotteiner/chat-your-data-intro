import { Tutorial } from "./Tutorial";

import styles from "./Tutorial.module.css";

import openai from "../../assets/openai.svg"
import embeddings from "../../assets/embeddings.svg"
import search from "../../assets/search.svg"
import agents from "../../assets/agents.svg"

export type TutorialModel = {
    title: string;
    id: number;
    icon: string;
};

const TUTORIALS: TutorialModel[] = [
    {
        title: "Language Models",
        id: 0,
        icon: openai
    },
    {
        title: "Embeddings",
        id: 1,
        icon: embeddings
    },
    {
        title: "Retrieval Augmented Generation",
        id: 2,
        icon: search
    },
    {
        title: "Agents",
        id: 3,
        icon: agents
    }
];

interface Props {
    onTutorialClicked: (id: number) => void;
}

export const TutorialList = ({ onTutorialClicked }: Props) => {
    return (
        <ul className={styles.tutorialsNavList}>
            {TUTORIALS.map((x, i) => (
                <li key={i}>
                    <Tutorial title={x.title} id={x.id} icon={x.icon} onClick={onTutorialClicked} />
                </li>
            ))}
        </ul>
    );
};
