import { RiArrowUpWideLine } from "react-icons/ri";
import styles from "./Footer.module.css";

export const Footer = ({ handleViewHeader, ref }) => {
    console.log(styles);
    return (
        <div className={styles.main_container} ref={ref}>
            <div>Footer</div>
            <div className={styles.down_arrow_button} onClick={handleViewHeader}>
                <RiArrowUpWideLine />
            </div>
        </div>
    );
};
