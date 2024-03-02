import styles from "../styles/buttons.module.css";

export const MainBtn = ({ icon, label }) => {
    return (
        <button className={`${styles.main_btn} flex items-center p-2 px-4 rounded-lg`}>
            <span className="mr-2">{icon}</span>
            <span>{label}</span>
        </button>
    );
};

export const FollowBtn = ({ label }) => {
    return (
        <button className={`${styles.main_btn} flex justify-center items-center p-2 px-4  w-full rounded-lg`}>
            <span>{label}</span>
        </button>
    );
};