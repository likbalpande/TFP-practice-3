import styles from "./Header.module.css";
import { RiArrowDownWideLine } from "react-icons/ri";

export const Header = ({ handleViewFooter, ref }) => {
    return (
        <div className={styles.main_container} ref={ref}>
            <div>Header</div>
            <div className={styles.down_arrow_button} onClick={handleViewFooter}>
                <RiArrowDownWideLine />
            </div>
        </div>
    );
};
