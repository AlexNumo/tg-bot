import { clientAPI } from '../../service/axios.config';
// import * as Yup from 'yup';
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

const SignUp = ({ Close, kind_trainee, day, time, date }) => {
  const [dayTranslate, setDayTranslate] = useState('');
  const [tel, setTel] = useState('');
  const [clientName, setClientName] = useState('');
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

  const HandleSubmit = (e) => {
    const {id, day_translate, info} = onSubmit;
    clientAPI.sendDataUsers({id, day_translate, info});
    e.preventDefault();
    // new Promise(resolve => setTimeout(resolve, 500));
    // alert(JSON.stringify(onSubmit, null, 2));
  }
  return (
    <Wrapper>
      <Dialog>
          <h4>Ви обрали <KindStyle>{kind_trainee} об <DayOfWeek day={day} time={time} /></KindStyle></h4><br />
          <h4>Будь ласка, введіть наступні дані</h4><br />
          <form>
            <input
              name="name"
              type="text"
              maxLength='16'
              onChange={e =>{setClientName(e.target.value)}}
            />
            <Input
              name="id"
              id="id"
              maxLength='16'
              value={tel}
              onChange={setTel}
              country="UA"
              international
              withCountryCallingCode
            /><br />
            <SubBTN type="button" onClick={Close}>
              Закрити
            </SubBTN>
            <SubBTN type="submit" onClick={HandleSubmit}>
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