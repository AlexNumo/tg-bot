import { toast } from 'react-toastify';
// import { KindStyle } from './ToastInfo.styled';
import 'react-toastify/dist/ReactToastify.css';

const ToastInfo = ({ info }) => {
  return (
    toast.info(`${info.name}, Ви записалися на тренування ${info.kind_trainee} об ${info.time} у ${info.day}`, {
        position: "top-left",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 1,
        theme: "dark",
        })
      )
};

export default ToastInfo;