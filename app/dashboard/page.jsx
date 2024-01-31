import Card from "../ui/dashboard/card/card";
import Staffcard from "../ui/dashboard/card/staffcard"
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Staffcard />
          {/* <Card /> you can add another card*/}
        </div>
        <div className={styles.ts}>
          {/* <Transactions /> */}
          <Chart />
        </div>

      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;