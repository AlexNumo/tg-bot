import { toast } from 'react-toastify';
// import { KindStyle } from './ToastInfo.styled';
import 'react-toastify/dist/ReactToastify.css';

const ToastInfo = ({ day_translate, info }) => {
  return (
    toast.info(`${info.name}, Ви записалися на тренування ${info.kind_trainee} о ${info.time} у ${day_translate}`, {
      position: "top-left",
      autoClose: false,
      width: "100px",
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