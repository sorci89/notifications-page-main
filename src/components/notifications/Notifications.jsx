import React from 'react'
import styles from '../notifications/notifications.module.css';
import {GoPrimitiveDot} from 'react-icons/go'


const Notifications = ({notifications, toggleRead}) => {
    return (
        <ul ul className={styles.notificationsContainer}>
            {notifications.map((notification) => (
                <li 
                    className={notification.isRead === false ? styles.notificationCardNew : styles.notificationCard} 
                    onClick={() => toggleRead(notification.id)}
                    key={notification.id}
                >
                    <div className={styles.userProfileContainer}>
                        <img className={styles.userProfile} src={notification.userProfile} alt="User profile" />
                    </div>
                    <div className={styles.notificationCardTextContent}>
                        <button className={styles.userName}>{notification.userName}</button>{" "}
                        <span className={styles.action}>{notification.action}</span>{" "}
                        {notification.type === "withLink" && <button className={styles.link}>{notification.link}</button>}
                        {notification.isRead === false && <GoPrimitiveDot className={styles.orangeDot} />}
                        <p className={styles.time}>{notification.time}</p>
                        {notification.type === "withMessage" && <p className={styles.privatMessage}>{notification.message}</p>}
                    </div>
                        {notification.type === "withPicture" && (
                            <button className={styles.referredPictureContainer}>
                                <img className={styles.referredPicture} src={notification.picture} alt="Referenced pic" />
                            </button>
                        )}
                    
                </li>
            ))}
        </ul>
    )
}
export default Notifications