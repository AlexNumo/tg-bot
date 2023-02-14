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
  const [currentErrorInsta, setCurrentErrorInsta] = useState('');
  const [instaNickName, setInstaNickName] = useState('@');
  const [validForm, setValidForm] = useState(false);
  const [validFormName, setValidFormName] = useState(false);
  const [validFormTel, setValidFormTel] = useState(false);
  const [validFormInsta, setValidFormInsta] = useState(false);
  const [onSubmit, setOnSubmit] = useState({
    id: "",
    day_translate: "",
    info: {
      date: "",
      day: "",
      time: "",
      kind_trainee: "",
      name: "",
      instaNickName: ""
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
        instaNickName: instaNickName
      }
    })
  }, [clientName, date, day, dayTranslate, kind_trainee, time, tel, instaNickName]);

  useEffect(() => {
    if (validFormName === true & validFormTel === true & validFormInsta === true) {
      return (setValidForm(true));
    }
    return (setValidForm(false));
  }, [validFormName, validFormTel, validFormInsta]);

  // console.log(kind_trainee)

  const userName = yup.object({
    name: yup.string()
      .min(3, "Ім'я може містити мінімум 3 символи")
      .max(25, "Ім'я може містити максимум 25 символів")
      .required("Ім'я обов'язкове до заповнення"),
  });

  const userTel = yup.object({
    id: yup.string()
      .min(13, "Номер телефону має містити 13 символів")
      .max(13, "Номер телефону має містити 13 символів")
      .required("Номер телефону обов'язковий до заповнення"),
  });

    const userInsta = yup.object({
    instaNickName: yup.string()
      .min(3, "Nickname може містити мінімум 3 символи")
      .max(25, "Nickname може містити максимум 25 символів")
      .required("Nickname обов'язкове до заповнення"),
  });

  const validateUserName = (e) => {
    const name = e.target.value;
    setClientName(name);
    userName.validate({ name: name })
      .catch((err) => {
        setCurrentErrorName(err.errors);
        setValidFormName(false);
      });
    userName.isValid({ name: name })
      .then(function (valid) {
        if (valid === true) {
          setCurrentErrorName('');
          setValidFormName(true);
          return;
        }
      })
  };

  const ValidateUserID = (e) => {
    const userID = e;
    setTel(e);
    userTel.validate({ id: userID })
      .catch((err) => {
        setCurrentErrorTel(err.errors);
        setValidFormTel(false);
      });
    userTel.isValid({ id: userID })
      .then(function (valid) {
        if (valid === true) {
          setCurrentErrorTel('');
          setValidFormTel(true);
          return;
        }
      })
  };

  const validateUserInsta = (e) => {
    const nickname = e.target.value;
    // console.log(nickname)
    setInstaNickName(nickname)
    userInsta.validate({ instaNickName: nickname })
      .catch((err) => {
        // console.log(instaNickName);
        setCurrentErrorInsta(err.errors);
        setValidFormInsta(false);
      });
    userInsta.isValid({ instaNickName: nickname })
      .then(function (valid) {
        // console.log(instaNickName)
        if (valid === true) {
          setCurrentErrorInsta('');
          setValidFormInsta(true);
          return;
        }
      })
  };
  
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (validForm === true) {
      const { id, day_translate, info } = onSubmit;
      // const  = info.day;
      clientAPI.sendDataUsers({ id, day_translate, info }).then(setValidForm(false));
      clientAPI.sendTgRecord({id, day_translate, clientName, kind_trainee, time, date, instaNickName});
      // new Promise(resolve => setTimeout(resolve, 500));
      // alert(JSON.stringify(onSubmit, null, 2));
      return;
    }
    return;
  };

  // console.log(instaNickName)

  return (
    <Wrapper>
      <Dialog>
        {kind_trainee ?
        <>  
          <h4>Ви обрали <KindStyle>{kind_trainee} об <DayOfWeek day={day} time={time} /></KindStyle></h4><br />
          <h4>Будь ласка, введіть наступні дані</h4><br />
          <form>
            <label htmlFor="name">
              Прізвище та ім'я:</label><br />
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
            <label htmlFor="nick-name">
              Nickname on Instagram:</label><br />
              <input
                name="nick-name"
                type="text"
                // onChange={e => { setInstaNickName(e.target.value) }}
                value={instaNickName}
                onChange={validateUserInsta}
            /><br />
            <div>
              {currentErrorInsta ?
                <div style={{ color: "red", width: "180px" }}>
                  <p style={{ fontSize: "14px" }}>{currentErrorInsta}</p>
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
          </>
          :
          <>
            <p>Ви обрали час на який не заплановано заняття. Будь ласка, оберіть інший час</p>
            <SubBTN type="button" onClick={Close}>
              Закрити
            </SubBTN>
          </>}
        
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