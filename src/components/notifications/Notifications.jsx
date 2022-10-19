import React from 'react'
import styles from '../notifications/notifications.module.css';
import {GoPrimitiveDot} from 'react-icons/go'


const Notifications = ({notifications, toggleRead}) => {
    return (
        <ul ul className={styles['notifications-container']}>
            {notifications.map((notification) => (
                <li 
                    className={notification.isRead === false ? styles['notification-card-new'] : styles['notification-card']} 
                    onClick={() => toggleRead(notification.id)}
                    key={notification.id}
                >
                    <div className={styles['user-profile-container']}>
                        <img className={styles['user-profile']} src={notification.userProfile} alt="User profile" />
                    </div>
                    <div className={styles['notification-card-text-content']}>
                        <button className={styles['user-name']}>{notification.userName}</button>{" "}
                        <span className={styles.action}>{notification.action}</span>{" "}
                        {notification.type === "withLink" && <a href="nolink" className={styles.link}>{notification.link}</a>}
                        {notification.isRead === false && <GoPrimitiveDot className={styles['orange-dot']} />}
                        <p className={styles.time}>{notification.time}</p>
                        {notification.type === "withMessage" && <button className={styles['privat-message']}>{notification.message}</button>}
                    </div>
                        {notification.type === "withPicture" && (
                            <button className={styles['referred-picture-container']}>
                                <img className={styles['referred-picture']} src={notification.picture} alt="Referenced pic" />
                            </button>
                        )}
                    
                </li>
            ))}
        </ul>
    )
}
export default Notifications