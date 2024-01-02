import { toast } from 'react-toastify';
// import { KindStyle } from './ToastInfo.styled';
import 'react-toastify/dist/ReactToastify.css';

// const ToastInfo = ({ day_translate, info }) => {
//   return (
//     toast.info(`${info.name}, Ви записалися на тренування ${info.kind_trainee} о ${info.time} у ${day_translate} до тренера ${info.coach}`, {
//       position: "top-left",
//       autoClose: false,
//       width: "100px",
//       hideProgressBar: true,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: 1,
//       theme: "dark",
//       })
//     )
// };

const ToastInfo = ({ day_translate, name, kind_trainee, time, finalCoachName }) => {
  // Розділити значення info.coach за пробілом та взяти перше слово
  // const firstWordOfCoach = info.coach.split(' ')[0];

  // // Перевірити, чи перше слово рівне 'Сирота'
  // const coachName = (firstWordOfCoach === 'Сирота') ? 'Анастасія' : info.coach;

  return (
    toast.info(`${name}, Ви записалися на тренування ${kind_trainee} о ${time} у ${day_translate} до тренера ${finalCoachName}`, {
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
  );
};




const ToastInfoDublicateTrainings = () => {
  return (
    toast.error(`Вибачте, вле Ви намагаєтеся повторно записатися на тренування, на яке вже записані`, {
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

export {
  ToastInfo,
  ToastInfoDublicateTrainings
};