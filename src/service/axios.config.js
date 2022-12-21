import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import instanceClientAPI from './api';

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
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const addTrainee = async ({ name_Coach, info }) => {
  try {
    const res = await instanceClientAPI.post(`/trainee`, { name_Coach, info });
    toast.success('Зміни відправлено');
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};

export const findTrainee = async ({name_Coach}) => {
  try {
    const result = await instanceClientAPI.put(`/trainee`, { name_Coach });
    console.log(result);
    return result;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const getAllTrainee = async () => {
  try {
    const result = await instanceClientAPI.get(`/trainee`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const getAllCoach = async () => {
  try {
    const result = await instanceClientAPI.get(`/coach`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const addCoach = async ({ name_Coach, tel, instagram }) => {
  try {
    const res = await instanceClientAPI.post(`/coach`, { name_Coach, tel, instagram });
    toast.success('Нового тренера додано');
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};

export const deleteCoach = async (name_Coach) => {
  try {
    console.log(name_Coach);
    const result = await instanceClientAPI.put(`/coach`, { name_Coach });
    toast.success('Тренера видалено');
    return console.log(result);
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const getAllClient = async () => {
  try {
    const result = await instanceClientAPI.get(`/client`);
    return result.data;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const addClient = async ({ name_client, tel }) => {
  try {
    const res = await instanceClientAPI.post(`/client`, { name_client, tel });
    toast.success('Нового тренера додано');
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};

export const deleteClient = async ({name_client}) => {
  try {
    const result = await instanceClientAPI.put(`/client`, { name_client });
    return result;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const sendNewKindTrainee = async ({ id, value, label }) => {
  try {
    const res = await instanceClientAPI.post(`/kindtrainee`, { id, value, label });
    toast.success('Зміни відправлено');
    return res;
  } catch (e) {
      toast.error('Щось пішло не так');
  }
};

export const deleteKindTrainee = async ({id}) => {
  try {
    const result = await instanceClientAPI.put(`/kindtrainee`, { id });
    return result;
  } catch (error) {
    toast.error('Упс, щось пішло не так');
    console.error(error.message);
  }
};

export const getKindTraineeAll = async () => {
  try {
    const result = await instanceClientAPI.get(`/kindtrainee`);
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
  addTrainee,
  findTrainee,
  getAllTrainee,
  addCoach,
  deleteCoach,
  getAllCoach,
  getAllClient,
  addClient,
  sendNewKindTrainee,
  deleteKindTrainee,
  getKindTraineeAll
};