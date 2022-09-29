import React from 'react'
import styles from '../notifications/notifications.module.css';


const Notifications = ({notifications, countUnread}) => {

    const markOneRead = ({ notification }) => {
        notification.isRead = true;
        countUnread();
      };
    
    return (
        <div>
            {notifications.map((notification) => (
        <div onClick={() => markOneRead({ notification })}>
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
    )
}
export default Notifications