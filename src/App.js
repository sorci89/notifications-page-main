import { useState, useEffect } from "react";
import "./App.css";
import { notifications } from "./Data/notifications";
function App() {
  const data = [...notifications];

  console.log(data);

  const [nbrOfUnread, setNbrOfUnread] = useState(Number);

  const countUnread = () => {
    const unreadNotifications = data.filter(
      (notification) => notification.isRead === false
    );
    setNbrOfUnread(unreadNotifications.length);
  };

  const markAllUnRead = () => {
    data.map((notification) => (notification.isRead = false));
    countUnread();
  };

  const markAllRead = () => {
    data.map((notification) => (notification.isRead = true));
    countUnread();
  };

  const rewrite = ({ notification }) => {
    notification.isRead = true;
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
      {data.map((notification) => (
        <div onClick={() => rewrite({ notification })}>
          <div>
            <img src={notification.userProfile} alt="User profile" />
          </div>
          <span>{notification.userName}</span>{" "}
          <span>{notification.action}</span>{" "}
          {notification.type === "withLink" && <span>{notification.link}</span>}
          {notification.isRead === false && <div>orange dot</div>}
          <p>{notification.time}</p>
          {notification.type === "withMessage" && <p>{notification.message}</p>}
          {notification.type === "withPicture" && (
            <div>
              <img src={notification.picture} alt="User profile" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
