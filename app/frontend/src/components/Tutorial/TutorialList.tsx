import { Tutorial } from "./Tutorial";

import styles from "./Tutorial.module.css";

import openai from "../../assets/openai.svg" 

export type TutorialModel = {
    title: string;
    id: number;
    icon: string;
};

const TUTORIALS: TutorialModel[] = [
    {
        title: "Intro to Language Models",
        id: 0,
        icon: openai
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
