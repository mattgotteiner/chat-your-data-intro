import styles from "./Tutorial.module.css";

interface Props {
    title: string;
    id: number;
    icon: string;
    onClick: (id: number) => void;
}

export const Tutorial = ({ title, icon, id, onClick }: Props) => {
    return (
        <div className={styles.tutorial} onClick={() => onClick(id)}>
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
