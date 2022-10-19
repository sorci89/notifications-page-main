import { useState, useEffect } from "react";
import styles from "./app.module.css";
import { data } from "./data/data";
import Notifications from "./components/notifications/Notifications";

function App() {
  const [notifications, setNotifications] = useState(data);

  const toggleRead = (value) => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, isRead: value }))
    );
  };

  const toggleOneAsRead = (id) => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isRead:
          notification.id === id ? !notification.isRead : notification.isRead,
      }))
    );
  };

  const nbrOfUnread = notifications.filter(
    ({ isRead }) => isRead === false
  ).length;
  const allToggled = nbrOfUnread !== 0;

  return (
    <div className={styles.container}>
      <div className={styles["notification-headline"]}>
        <p className={styles["notification-title"]}>Notifications</p>
        <div className={styles["notifications-number"]}>{nbrOfUnread}</div>
        <button
          className={styles["all-marker"]}
          onClick={() => toggleRead(allToggled)}
        >
          {allToggled ? "Mark all as unread" : "Mark all as read"}
        </button>
      </div>
      <Notifications
        notifications={notifications}
        toggleRead={toggleOneAsRead}
      />
    </div>
  );
}

export default App;
