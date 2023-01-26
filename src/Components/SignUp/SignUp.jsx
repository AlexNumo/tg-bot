import { Formik } from 'formik';
import { clientAPI } from '../../service/axios.config';
// import * as Yup from 'yup';
// import { useFormik } from 'formik';
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
  console.log("tel: ", tel);
  console.log("clientName: ", clientName);
  const CheckKindTrainee = () => {
    if (kind_trainee === "-") {
      return (
        <>
          <Dialog>
            <h3>Вибачте, але Ви обрали день та час на який не заплановано заняття. Будь ласка, оберіть інше тренування</h3>
            <button type="button" onClick={Close}>
              Закрити
            </button>
          </Dialog>
        </>
      )
    };
    const InputClientName = ({handleBlur}) => {
      return (
        <>
        <label
      // htmlFor="info.name"
        >
          Ваше ім'я
        </label><br />
        <input
          // type='text'
          id="name"
          autoFocus
          maxLength='16'
          // value={clientName}
          // onBlur={handleBlur}
          // onChange={(e)=>{setClientName(e.target.value)}}
            onChange={setClientName}
        /><br />
        </>
      )
    }
    return (
      <>
        <Dialog>
          <h4>Ви обрали <KindStyle>{kind_trainee} об <DayOfWeek day={day} time={time} /></KindStyle></h4><br />
          <h4>Будь ласка, введіть наступні дані</h4><br />
          <Formik
            initialValues={{
              id: tel,
              day_translate: dayTranslate,
              info: {
                date: date,
                day: day,
                time: time,
                kind_trainee: kind_trainee,
                name: clientName,
              }
            }}
            onSubmit={async values => {
              await clientAPI.sendDataUsers(values);
              // await new Promise(resolve => setTimeout(resolve, 500));
              // alert(JSON.stringify(values, null, 2));
            }}
          >
            {props => {
              const {
                // values,
                isSubmitting,
                // handleChange,
                handleBlur,
                handleSubmit,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  {InputClientName(handleBlur)}
                  <label
                  // htmlFor="id"
                  >
                    Ваш номер телефону
                  </label><br />
                  <Input
                    id="id"
                    
                    maxLength='16'
                    value={tel}
                    onBlur={handleBlur}
                    // value={values.value}
                    onChange={setTel}
                    // defaultCountry="UA"
                    country="UA"
                    international
                    withCountryCallingCode
                  /><br />
                  <SubBTN type="button" onClick={Close}>
                    Закрити
                  </SubBTN>
                  <SubBTN type="submit" disabled={isSubmitting}>
                    Записатися
                  </SubBTN>
                </form>
              );
            }}
          </Formik>
          <div>
            <ToastContainer
              style={{ marginTop: '55px', marginLeft: '25px', width: '250px' }}
              position="top-left"
              autoClose={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              theme="dark"
            />
          </div>
        </Dialog>
      </>)
  };

  return (
    <Wrapper>
      <CheckKindTrainee />
    </Wrapper>
  )
};

export default SignUp;