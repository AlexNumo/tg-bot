// import { Formik, useFormik } from 'formik';
// import { clientAPI } from '../../service/axios.config';
// import * as Yup from 'yup';
import { useFormik } from 'formik';
import DayOfWeek from 'Components/DayOfWeek/DayOfWeek';
// import IMask from 'imask';
// import InputMask from 'react-input-mask';
import Input from 'react-phone-number-input/input';
// import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';
import { ToastContainer } from 'react-toastify';
import {
  Wrapper,
  Dialog,
  KindStyle,
  SubBTN,
} from './SignUp.styled';
import { useEffect, useState } from 'react';

const SignUp = ({ Close, kind_trainee, day, time, date }) => {
  const [dayTranslate, setDayTranslate] = useState('');
  const [tel, setTel] = useState('');
  const [clientName, setClientName] = useState('');

  useEffect(() => {
    const DayOfWeekTranslate = () => {
      if (day === "monday") {
        return (setDayTranslate('понеділок'));
      };
      if (day === "tuesday") {
        return (setDayTranslate('вівторок'));
      };
      if (day === "wednesday") {
        return (setDayTranslate('середу'));
      };
      if (day === "thursday") {
        return (setDayTranslate('четвер'));
      };
      if (day === "friday") {
        return (setDayTranslate(`п'ятницю`));
      };
      if (day === "saturday") {
        return (setDayTranslate('суботу'));
      };
      if (day === "sunday") {
        return (setDayTranslate('неділю'));
      };
      return (null);
    };
    DayOfWeekTranslate();
  }, [day]);

  const InputValueClientName = (e) => {
    setClientName(e.target.value);
    e.preventDefault();
  };

    const InputValueTel = (e) => {
    setTel(e.target.value);
    e.preventDefault();
  }

  // const initialValues = {
  //   id: tel,
  //   day_translate: dayTranslate,
  //   info: {
  //     date: date,
  //     day: day,
  //     time: time,
  //     kind_trainee: kind_trainee,
  //     name: clientName,
  //   }
  // };
  const formik = useFormik({
    // initialValues,
    onSubmit: values => {
      // const { id, day_translate, info } = values;
      // clientAPI.sendDataUsers(values);
      console.log(values);
      new Promise(resolve => setTimeout(resolve, 500));
      alert(JSON.stringify(values, null, 2));
    }
  })

  return (
    <Wrapper>
      <Dialog>
        <h4>Ви обрали <KindStyle>{kind_trainee} об <DayOfWeek day={day} time={time} /></KindStyle></h4><br />
        <h4>Будь ласка, введіть наступні дані</h4><br />
        <form action="">
          <input
            type="text"
            value={clientName}
            onChange={e => {setClientName(e.target.value)}}
          />
        </form>
      </Dialog>
    </Wrapper>
  )
};

export default SignUp;