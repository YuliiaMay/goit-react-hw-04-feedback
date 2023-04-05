import PropTypes from 'prop-types';
import { NotificationWrapper, NotificationEl } from './Notification.styled';


const Notification = ({ message }) => {
    return (
        <NotificationWrapper>
            <NotificationEl>{message}</NotificationEl>
        </NotificationWrapper>
    )
}


Notification.propTypes = {
    message: PropTypes.string,
}


export default Notification;

