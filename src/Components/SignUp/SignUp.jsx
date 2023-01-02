import { Formik } from 'formik';
import { clientAPI } from '../../service/axios.config';
import DayOfWeek from 'Components/DayOfWeek/DayOfWeek';
import {
  Wrapper,
  Dialog,
  KindStyle,
  SubBTN,
} from './SignUp.styled';

const SignUp = ({ Close, kind_trainee, day, time, date }) => {

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
          <h4>Ви обрали <KindStyle>{kind_trainee} об <DayOfWeek day={day} time={time} /></KindStyle></h4><br />
          <h4>Будь ласка, введіть наступні дані</h4><br />
          <Formik
            initialValues={{
              id: "",
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