import React from 'react'
import styles from '../notifications/notifications.module.css';
import {GoPrimitiveDot} from 'react-icons/go'


const Notifications = ({notifications, countUnread}) => {

    const markOneRead = ({ notification }) => {
        notification.isRead = true;
        countUnread();
      };
    
    return (
        <div className={styles.notificationsContainer}>
            {notifications.map((notification) => (
                <div className={styles.notificationCard} onClick={() => markOneRead({ notification })}>
                    <div className={styles.userProfileContainer}>
                        <img src={notification.userProfile} alt="User profile" />
                    </div>
                    <span className={styles.userName}>{notification.userName}</span>{" "}
                    <span className={styles.action}>{notification.action}</span>{" "}
                    {notification.type === "withLink" && <span className={styles.link}>{notification.link}</span>}
                    {notification.isRead === false && <GoPrimitiveDot className={styles.orangeDot} />}
                    <p className={styles.time}>{notification.time}</p>
                    {notification.type === "withMessage" && <p className={styles.privatMessage}>{notification.message}</p>}
                    {notification.type === "withPicture" && (
                        <div className={styles.referredPicture}>
                            <img src={notification.picture} alt="Referenced pic" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
export default Notifications