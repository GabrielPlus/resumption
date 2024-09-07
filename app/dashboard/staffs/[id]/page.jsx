import styles from "@/ui/dashboard/staffs/singleStaff/singleStaff.module.css";
import Image from "next/image";

const SingleStaffPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Pius Gabriel
      </div>
      <div className={styles.formContainer}>
      <form action="" className={styles.form}>
        <label>Username</label>
        <input type="text" placeholder="username" name="username" required />
        <label>Email</label>
        <input type="email" placeholder="email" name="email" required />
        <label>Password</label>
        <input type="password" placeholder="Pius" name="password" required />
        <label>Is Admin</label>
        <select name="isAdmin" id="isAdmin">
          <option value={false}>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <label>Is Active</label>
        <select name="isActive" id="isActive">
          <option value={true}>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default SingleStaffPage;
