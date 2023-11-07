import styles from "./Tutorial.module.css";

interface Props {
    title: string;
    question: string;
    id: number;
    icon: string;
    onClick: (question: string, id: number) => void;
}

export const Tutorial = ({ title, question, icon, id, onClick }: Props) => {
    return (
        <div className={styles.tutorial} onClick={() => onClick(question, id)}>
            <img
                src={icon}
                alt="Tutorial logo"
                aria-label={`Link to ${title} tutorial`}
                className={styles.logo}
            />
            <p className={styles.tutorialText}>{title}</p>
        </div>
    );
};
