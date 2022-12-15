import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from './../store/ui/uiSlice';

const Notification = () => {

    const dispatch = useDispatch();

    const {showNotification, notification} = useSelector(state => state.ui);

    useEffect(() => {
        if(showNotification && notification.type === 'error') {
            toast.error(notification.message);
            dispatch(uiActions.hideNotification());
        }
        else if(showNotification && notification.type === 'success') {
            toast.success(notification.message);
            dispatch(uiActions.hideNotification());
        }
        else if(showNotification && notification.type === 'warning') {
            toast.warning(notification.message);
            dispatch(uiActions.hideNotification());
        }
    }, [dispatch, showNotification, notification])

    return (
        <ToastContainer rtl={true} />
    );
}

export default Notification;