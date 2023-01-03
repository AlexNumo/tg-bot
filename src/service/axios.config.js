import instanceClientAPI from './api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastInfo from 'Components/ToastInfo/ToastInfo';


export const sendData = async ({ id, day, time, kind_trainee, name_Coach }) => {
  try {
    const res = await instanceClientAPI.post(`/api`, { id, day, time, kind_trainee, name_Coach });
    toast.success('Зміни відправлено');
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};

export const getData = async ({id}) => {
  try {
    const result = await instanceClientAPI.put(`/api`, { id });
    return result;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const getDataALL = async () => {
  try {
    const result = await instanceClientAPI.get(`/api`);
    // console.log(result)
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const sendDataUsers = async ({ id, day_translate, info }) => {
  try {
    const res = await instanceClientAPI.post(`/tgbot`, { id, info });
    console.log(day_translate);
    ToastInfo({day_translate, info});
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};

export const deleteDataUsers = async ({id}) => {
  try {
    const result = await instanceClientAPI.put(`/tgbot`, { id });
    return result;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const getDataALLUsers = async () => {
  try {
    const result = await instanceClientAPI.get(`/tgbot`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const clientAPI = {
  sendData,
  getData,
  getDataALL,
  sendDataUsers,
  deleteDataUsers,
  getDataALLUsers
};