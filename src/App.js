import "./App.css";
import { notifications } from "./Data/notifications";
function App() {
  return (
    <div className="App">
      <p>Notifications</p>
      {notifications.map((notification) => (
        <div>
          <div>
            <img src={notification.userProfile} alt="User profile" />
          </div>
          <span>{notification.userName}</span>{" "}
          <span>{notification.action}</span>{" "}
          {notification.type === "withLink" && <span>{notification.link}</span>}
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
