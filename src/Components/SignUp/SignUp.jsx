import { Formik } from 'formik';
import { clientAPI } from '../../service/axios.config';
import DayOfWeek from 'Components/DayOfWeek/DayOfWeek';
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

    
    return (
      <>
        <Dialog>
          <h4>Ви обрали <KindStyle>{kind_trainee} об <DayOfWeek day={day} time={time} /></KindStyle></h4><br />
          <h4>Будь ласка, введіть наступні дані</h4><br />
          <Formik
            initialValues={{
              id: "",
              day_translate: dayTranslate,
              info: {
                date: date,
                day: day,
                time: time,
                kind_trainee: kind_trainee,
                name: "",
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
                values,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              } = props;
              return (
                <form
                  onSubmit={handleSubmit}
                >
                  <label htmlFor="info.name">
                    Ваше ім'я
                  </label><br/>
                  <input
                    id="info.name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.value}
                  /><br/>
                  <label htmlFor="id">
                    Ваш номер телефону
                  </label><br/>
                  <input
                    id="id"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.value}
                  /><br/>
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
              style={{marginTop: '55px', width: '100vw'}}
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
      </>
    )
  }

  return (
    <Wrapper>
      <CheckKindTrainee />
    </Wrapper>
  )
};

export default SignUp;