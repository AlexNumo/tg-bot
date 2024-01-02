import {
  instance,
  tgSandra
} from './api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ToastInfo, ToastInfoDublicateTrainings} from 'Components/ToastInfo/ToastInfo';


export const sendData = async ({ id, day, time, kind_trainee, name_Coach }) => {
  try {
    const res = await instance.post(`/api`, { id, day, time, kind_trainee, name_Coach });
    toast.success('Зміни відправлено');
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};

export const getData = async ({id}) => {
  try {
    const result = await instance.put(`/api`, { id });
    return result;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const getDataALL = async () => {
  try {
    const result = await instance.get(`/api`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const sendDataUsers = async ({ id, day_translate, info }) => {
  const name = info.name;
  const kind_trainee = info.kind_trainee;
  const time = info.time
  const firstWordOfCoach = info.coach.split(' ')[0];
  const coachName = (firstWordOfCoach === 'Сирота') ? 'Анастасія' : firstWordOfCoach;
  const finalCoachName = (coachName === 'Алина') ? 'Аліна' : coachName;
  console.log(finalCoachName)
  
  try {
    const res = await instance.post(`/tgbot`, { id, info });
    // console.log("info: ", info)
    if (res.data.message === "User already has this info") {
      return ToastInfoDublicateTrainings();
      // console.log("GOOD")
    }
    ToastInfo({ day_translate, name, kind_trainee, time, finalCoachName });
    // console.log("res: ", res);
    return res;
  } catch (e) {
    console.log(e)
      toast.error('Щось пішло не так');
  }
};

export const upgradeDataUsers = async ({ id, info }) => {
  try {
    // console.log(id, info)
    const res = await instance.put(`/tgbot/upgradeUsers`, { id, info })
    return res;
  } catch (e) {
    console.log(e)
      toast.error('Щось пішло не так');
  }
};

export const deleteDataUsers = async ({id}) => {
  try {
    const result = await instance.put(`/tgbot`, { id });
    return result;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const findDataUsers = async (id) => {
  // console.log(id)
  try {
    const result = await instance.put(`/tgbot/find`, id);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const getDataALLUsers = async () => {
  try {
    const result = await instance.get(`/tgbot`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

const sendTgRecord = async ({id, clientName, kind_trainee, time, date, instaNickName}) => {
  // 163995726 - sandra
  // 525427019 - alexnumo
  // 163995726&text=
  try {
    const dateNew = new Date(date);
    const weekdays = ['неділю', 'понеділок', 'вівторок', 'середу', 'четвер', 'п\'ятницю', 'суботу'];
    const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
    const dayOfWeek = weekdays[dateNew.getDay()];
    const dayOfMonth = dateNew.getDate();
    const month = months[dateNew.getMonth()];
    const newDateRender = `у ${dayOfWeek} ${dayOfMonth} ${month}`;
    instaNickName.substring(1);
    const urlInsta = `https://www.instagram.com/${instaNickName.substring(1)}/`
    // console.log(`Записався клієнт ${clientName} на тренування ${kind_trainee} ${newDateRender} о ${time}. Номер телефону клієнта ${id}, Instagram: ${urlInsta}`)

    // const instaNickNameConvertation =
    // instaNickName.substring(1);
    // const urlInsta = `https://www.instagram.com/${instaNickName.substring(1)}/`
    // https://www.instagram.com/koksik839/
    const res = await tgSandra.post(`Записався клієнт ${clientName} на тренування ${kind_trainee} ${newDateRender} о ${time}. Номер телефону клієнта ${id}, Instagram: ${urlInsta}`,);
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};

export const clientAPI = {
  sendData,
  getData,
  getDataALL,
  sendDataUsers,
  upgradeDataUsers,
  deleteDataUsers,
  getDataALLUsers,
  sendTgRecord,
  findDataUsers,
};
