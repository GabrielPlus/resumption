import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css"
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdAdminPanelSettings,
  MdOutlineCalendarMonth,
  MdLogout,
} from "react-icons/md";
import { auth, signOut } from "@/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Students",
        path: "/dashboard/students",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Staff",
        path: "/dashboard/staffs",
        icon: <MdAdminPanelSettings />,
      },
      {
        title: "Attendance",
        path: "/dashboard/attendance",
        icon: <MdOutlineCalendarMonth />,
      },
    ],
  },

  {
    title: "User",
    list: [

    ],
  },
];

const Sidebar = async () => {
  const { user } = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50" />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>

    </div>
  );
};

export default Sidebar;

