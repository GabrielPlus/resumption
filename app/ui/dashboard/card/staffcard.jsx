import { MdSupervisedUserCircle } from 'react-icons/md'
import styles from './card.module.css'

const Staffcard = () => {
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={20} />
            <div className={styles.text}>
                <span className={styles.title}>Total Staff</span>
                <span className={styles.number}>coming soon....</span>
            </div>
        </div>
    );
};

export default Staffcard;