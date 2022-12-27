import { Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {clientAPI} from '../../service/axios.config';
import {
  Wrapper,
  Dialog,
  KindStyle,
  SubBTN,
} from './SignUp.styled';

const SignUp = ({ Close, kind_trainee, day, time }) => {
  const TimeOfDay = () => {
    if (time === "0800") {
      return (
        <>
          <KindStyle>8:00</KindStyle>
        </>
      )
    };
    if (time === "0900") {
      return (
        <>
          <KindStyle>9:00</KindStyle>
        </>
      )
    };
    if (time === "1000") {
      return (
        <>
          <KindStyle>10:00</KindStyle>
        </>
      )
    };
    if (time === "1100") {
      return (
        <>
          <KindStyle>11:00</KindStyle>
        </>
      )
    };
    if (time === "1200") {
      return (
        <>
          <KindStyle>12:00</KindStyle>
        </>
      )
    };
    if (time === "1300") {
      return (
        <>
          <KindStyle>13:00</KindStyle>
        </>
      )
    };
    if (time === "1400") {
      return (
        <>
          <KindStyle>14:00</KindStyle>
        </>
      )
    };
    if (time === "1500") {
      return (
        <>
          <KindStyle>15:00</KindStyle>
        </>
      )
    };
    if (time === "1600") {
      return (
        <>
          <KindStyle>16:00</KindStyle>
        </>
      )
    };
    if (time === "1700") {
      return (
        <>
          <KindStyle>17:00</KindStyle>
        </>
      )
    };
    if (time === "1800") {
      return (
        <>
          <KindStyle>18:00</KindStyle>
        </>
      )
    };
    if (time === "1900") {
      return (
        <>
          <KindStyle>19:00</KindStyle>
        </>
      )
    };
    if (time === "2000") {
      return (
        <>
          <KindStyle>20:00</KindStyle>
        </>
      )
    };
    return (
      <>
        <h3>Сталася помилка при виборі часу</h3>
      </>
    );
  }

  const DayOfWeek = () => {
    if (day === "monday") {
      return (
        <>
          <TimeOfDay />
          <KindStyle> у понеділок</KindStyle>
        </>
      )
    };
    if (day === "tuesday") {
      return (
        <>
          <TimeOfDay />
          <KindStyle> у вівторок</KindStyle>
        </>
      )
    };
    if (day === "wednesday") {
      return (
        <>
          <TimeOfDay />
          <KindStyle> у середу</KindStyle>
        </>
      )
    };
    if (day === "thursday") {
      return (
        <>
          <TimeOfDay />
          <KindStyle> у четвер</KindStyle>
        </>
      )
    };
    if (day === "friday") {
      return (
        <>
          <TimeOfDay />
          <KindStyle> у п'ятницю</KindStyle>
        </>
      )
    };
    if (day === "saturday") {
      return (
        <>
          <TimeOfDay />
          <KindStyle> у середу</KindStyle>
        </>
      )
    };
    if (day === "sunday") {
      return (
        <>
          <TimeOfDay />
          <KindStyle> у неділю</KindStyle>
        </>
      )
    }
    return (
      <>
        <h3>Сталася помилка при виборі дня тижня</h3>
      </>
    );
  };
  function App2(){
    const notify = () => toast("Wow so easy!");

    return (
      <>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </>
    );
  }
  const notify = () => toast("Wow so easy!");
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
    }
    return (
      <>
        <Dialog>
          <h4>Ви обрали <KindStyle>{kind_trainee} на </KindStyle><DayOfWeek /></h4><br />
          <h4>Будь ласка, введіть наступні дані</h4><br />
          <Formik
            initialValues={{
              id: "",
              day: day,
              time: time,
              kind_trainee: kind_trainee,
              name: "",
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
                  <label htmlFor="name">
                    Ваше ім'я
                  </label><br/>
                  <input
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.value}
                  /><br/>
                  <label htmlFor="name">
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