import {
  instance,
  tgSandra
} from './api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastInfo from 'Components/ToastInfo/ToastInfo';


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
  try {
    const res = await instance.post(`/tgbot`, { id, info });
    ToastInfo({day_translate, info});
    return res;
  } catch (e) {
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

export const getDataALLUsers = async () => {
  try {
    const result = await instance.get(`/tgbot`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

const sendTgRecord = async ({id, day_translate, clientName, kind_trainee, time, date}) => {
  try {
    const res = await tgSandra.post(`Записався клієнт ${clientName} на тренування ${kind_trainee} в ${day_translate} о ${time}. Номер телефону клієнта ${id}, дата тренування: ${date}`,);
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
  deleteDataUsers,
  getDataALLUsers,
  sendTgRecord
};