import { MdSupervisedUserCircle } from 'react-icons/md'
import styles from './card.module.css'

const Staffcard = () => {
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={20} />
            <div className={styles.text}>
                <span className={styles.title}>Total Staff</span>
                <span className={styles.number}>10</span>
                <span className={styles.detail}>
                    <span className={styles.positive}>12%</span>more than yesterday
                </span>
            </div>
        </div>
    );
};

export default Staffcard;