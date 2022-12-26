import { Formik } from 'formik';
import {
  Wrapper,
  Dialog
} from './SignUp.styled';

const SignUp = ({ Close, kind_trainee, day, time }) => {
  const TimeOfDay = () => {
    if (time === "0800") {
      return (
        <>
          <span>8:00</span>
        </>
      )
    };
    if (time === "0900") {
      return (
        <>
          <span>9:00</span>
        </>
      )
    };
    if (time === "1000") {
      return (
        <>
          <span>10:00</span>
        </>
      )
    };
    if (time === "1100") {
      return (
        <>
          <span>11:00</span>
        </>
      )
    };
    if (time === "1200") {
      return (
        <>
          <span>12:00</span>
        </>
      )
    };
    if (time === "1300") {
      return (
        <>
          <span>13:00</span>
        </>
      )
    };
    if (time === "1400") {
      return (
        <>
          <span>14:00</span>
        </>
      )
    };
    if (time === "1500") {
      return (
        <>
          <span>15:00</span>
        </>
      )
    };
    if (time === "1600") {
      return (
        <>
          <span>16:00</span>
        </>
      )
    };
    if (time === "1700") {
      return (
        <>
          <span>17:00</span>
        </>
      )
    };
    if (time === "1800") {
      return (
        <>
          <span>18:00</span>
        </>
      )
    };
    if (time === "1900") {
      return (
        <>
          <span>19:00</span>
        </>
      )
    };
    if (time === "2000") {
      return (
        <>
          <span>20:00</span>
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
          <span> у понеділок</span>
        </>
      )
    };
    if (day === "tuesday") {
      return (
        <>
          <TimeOfDay />
          <span> у вівторок</span>
        </>
      )
    };
    if (day === "wednesday") {
      return (
        <>
          <TimeOfDay />
          <span> у середу</span>
        </>
      )
    };
    if (day === "thursday") {
      return (
        <>
          <TimeOfDay />
          <span> у четвер</span>
        </>
      )
    };
    if (day === "friday") {
      return (
        <>
          <TimeOfDay />
          <span> у п'ятницю</span>
        </>
      )
    };
    if (day === "saturday") {
      return (
        <>
          <TimeOfDay />
          <span> у середу</span>
        </>
      )
    };
    if (day === "sunday") {
      return (
        <>
          <TimeOfDay />
          <span> у неділю</span>
        </>
      )
    }
    return (
      <>
        <h3>Сталася помилка при виборі дня тижня</h3>
      </>
    );
  };

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
          <h3>Ви обрали {kind_trainee} на <DayOfWeek/></h3>
          <Formik
            initialValues={{
              id: "",
              day: day,
              time: time,
              kind_trainee: kind_trainee,
              name: "",
            }}
            onSubmit={async values => {
              // await clientAPI.sendData(values);
              await new Promise(resolve => setTimeout(resolve, 500));
              alert(JSON.stringify(values, null, 2));
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
                  <input
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.value}
                  />
                  <input
                    id="tel_number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.value}
                  />
                  <button type="submit" disabled={isSubmitting}>
                    Записатися
                  </button>
                  <button type="button" onClick={Close}>
                    Закрити
                  </button>
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
      <CheckKindTrainee/>
    </Wrapper>
  )
};

export default SignUp;