import Search from "@/ui/dashboard/search/search";
import Pagination from "@/ui/dashboard/pagination/pagination"
import styles from "@/ui/dashboard/staffs/staffs.module.css"
import Image from "next/image"
import Link from "next/link"
import { fetchUsers } from "../../../pages/api/test/data"

const StaffsPage = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count,users} = await fetchUsers(q,page);


  return (
    <div className={styles.container}>
      <div className={styles.top}>
      <Search placeholder="Search for a Admin.." />
        <Link href="/dashboard/staffs/add">
          <button className={styles.addButton}>New Admin</button>
        </Link>
      </div>
      {/* <div className={styles.table}></div> */}
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Role</td>
            <td>Status</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map(user=>(
          <tr key={user.id}>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                {user.username}
              </div>
            </td>
            <td>{user.isAdmin ? "Admin": "Client"}</td>
            <td>{user.isActive ? "Active": "passive"}</td>
            <td>{user.email}</td>           
            <td>
              <div className={styles.button}>
                <Link href={'/dashboard/staffs/${user.id}'}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default StaffsPage;