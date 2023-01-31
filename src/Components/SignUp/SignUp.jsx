import { clientAPI } from '../../service/axios.config';
import DayOfWeek from 'Components/DayOfWeek/DayOfWeek';
import Input from 'react-phone-number-input/input';
import { ToastContainer } from 'react-toastify';
import {
  Wrapper,
  Dialog,
  KindStyle,
  SubBTN,
} from './SignUp.styled';
import { useEffect, useState } from 'react';
import * as yup from 'yup';


const SignUp = ({ Close, kind_trainee, day, time, date }) => {
  const [dayTranslate, setDayTranslate] = useState('');
  const [tel, setTel] = useState('');
  const [clientName, setClientName] = useState('');
  const [currentErrorName, setCurrentErrorName] = useState('');
  const [currentErrorTel, setCurrentErrorTel] = useState('');
  const [validForm, setValidForm] = useState(false);
  const [onSubmit, setOnSubmit] = useState({
    id: "",
    day_translate: "",
    info: {
      date: "",
      day: "",
      time: "",
      kind_trainee: "",
      name: "",
    }
  })

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

  useEffect(() => {
    setOnSubmit({
      id: tel,
      day_translate: dayTranslate,
      info: {
        date: date,
        day: day,
        time: time,
        kind_trainee: kind_trainee,
        name: clientName,
    }
    })
  },[clientName, date, day, dayTranslate, kind_trainee, time, tel])

  const userName = yup.object({
    name: yup.string()
      .min(3, "Ім'я може містити мінімум 3 символи")
      .max(15, "Ім'я може містити максимум 15 символів")
      .required("Ім'я обов'язкове до заповнення"),
  });

  const userTel = yup.object({
    id: yup.string()
      .min(13, "Номер телефону має містити 13 символів")
      .max(13, "Номер телефону має містити 13 символів")
      .required("Номер телефону обов'язковий до заповнення"),
  });

  const validateUserName = (e) => {
    const name = e.target.value;
    setClientName(name);
    userName.validate({ name: name })
      .catch((err) => {
        setCurrentErrorName(err.errors);
        setValidForm(false);
      });
    userName.isValid({ name: name })
      .then(function (valid) {
        if (valid === true) {
          setCurrentErrorName('');
          setValidForm(true);
          return;
        }
      })
  };

  const ValidateUserID = (e) => {
    const userID = e;
    setTel(e);
    console.log(e);
    userTel.validate({ id: userID })
      .catch((err) => {
        setCurrentErrorTel(err.errors);
        setValidForm(false);
      });
    userTel.isValid({ id: userID })
      .then(function (valid) {
        if (valid === true) {
          setCurrentErrorTel('');
          setValidForm(true);
          return;
        }
      })
  };  
  
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (validForm === true) {
      console.log(validForm)
      const { id, day_translate, info } = onSubmit;
      clientAPI.sendDataUsers({ id, day_translate, info });
      console.log(onSubmit)
      // new Promise(resolve => setTimeout(resolve, 500));
      // alert(JSON.stringify(onSubmit, null, 2));
      return;
    }
    return;
  }
  
  return (
    <Wrapper>
      <Dialog>
          <h4>Ви обрали <KindStyle>{kind_trainee} об <DayOfWeek day={day} time={time} /></KindStyle></h4><br />
          <h4>Будь ласка, введіть наступні дані</h4><br />
        <form>
          <label htmlFor="name">
            Ім'я:</label><br />
            <input
              name="name"
              type="text"
              // onChange={e =>{setClientName(e.target.value)}}
            onChange={validateUserName}
          /><br />
          <div>
            {currentErrorName ?
              <div style={{ color: "red", width: "180px" }}>
                <p style={{ fontSize: "14px" }}>{currentErrorName}</p>
              </div> :
              null
            }
          </div>
          <label htmlFor="id">
            Номер телефону:</label><br />
            <Input
              name="id"
              id="id"
              value={tel}
              onChange={ValidateUserID}
              country="UA"
              international
              withCountryCallingCode
          /><br />
            {currentErrorTel ?
              <div style={{ color: "red", width: "180px" }}>
                <p style={{ fontSize: "14px" }}>{currentErrorTel}</p>
              </div> :
              null
            }
            <SubBTN type="button" onClick={Close}>
              Закрити
            </SubBTN>
            <SubBTN type="submit" onClick={HandleSubmit} disabled={!validForm}>
              Записатися
            </SubBTN>
          </form>
      </Dialog>
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
    </Wrapper>
  )
};

export default SignUp;