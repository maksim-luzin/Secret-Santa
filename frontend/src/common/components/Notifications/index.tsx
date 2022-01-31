import { useState } from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

interface INotifications {
  message: string;
}

const Notifications = ({ message }: INotifications) => {
  const [getMessage, setMessage] = useState('');
  if (Boolean(message) && getMessage !== message) {
    NotificationManager.error(message, '', 5000);
    setMessage(message);
  }
  return (
    <NotificationContainer />
  )
};

export { Notifications };
