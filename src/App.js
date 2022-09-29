import { useState, useEffect } from "react";
import "./App.css";
import { data } from "./data/data";
import Notifications from "./components/notifications/Notifications";

function App() {
  const notifications = [...data];

  const [nbrOfUnread, setNbrOfUnread] = useState(Number);

  const countUnread = () => {
    const unreadNotifications = notifications.filter(
      (notification) => notification.isRead === false
    );
    setNbrOfUnread(unreadNotifications.length);
  };

  const markAllUnRead = () => {
    notifications.map((notification) => (notification.isRead = false));
    countUnread();
  };

  const markAllRead = () => {
    notifications.map((notification) => (notification.isRead = true));
    countUnread();
  };

  useEffect(() => {
    countUnread();
  }, []);

  return (
    <div className="App">
      <p>Notifications</p>
      <div>{nbrOfUnread}</div>
      {nbrOfUnread === 0 ? (
        <div onClick={() => markAllUnRead()}>Mark all as unread</div>
      ) : (
        <div onClick={() => markAllRead()}>Mark all as read</div>
      )}
      <Notifications notifications={notifications} countUnread={countUnread} />
    </div>
  );
}

export default App;
