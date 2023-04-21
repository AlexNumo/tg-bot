import { clientAPI } from '../../service/axios.config';
import DayOfWeek from 'Components/DayOfWeek/DayOfWeek';
import Input from 'react-phone-number-input/input';
import { IoIosClose } from "react-icons/io";
import {ClockLoader} from "react-spinners";
import { ToastContainer } from 'react-toastify';
import {
  Wrapper,
  Dialog,
  KindStyle,
  SubBTN,
  InputStyle,
} from './SignUp.styled';
import { useEffect, useState, CSSProperties } from 'react';
import * as yup from 'yup';

const SignUp = ({ Close, kind_trainee, day, time, date, nameCoach }) => {
  const [dayTranslate, setDayTranslate] = useState('');
  const [tel, setTel] = useState('');
  const [clientName, setClientName] = useState('');
  const [currentErrorName, setCurrentErrorName] = useState('');
  const [currentErrorTel, setCurrentErrorTel] = useState('');
  const [currentErrorInsta, setCurrentErrorInsta] = useState('');
  const [instaNickName, setInstaNickName] = useState('');
  const [waitingResponse, setWaitingResponse] = useState(true);
  const [loading, setLoading] = useState(true);
  const [validForm, setValidForm] = useState(false);
  const [clickBTN, setClickBTN] = useState(false);
  const [validFormName, setValidFormName] = useState(false);
  const [validFormTel, setValidFormTel] = useState(false);
  const [validFormInsta, setValidFormInsta] = useState(false);
  // const [changeTel, setChangeTel] = useState(false);
  const [findUserByID, setFindUserByID] = useState('');
  const [onSubmit, setOnSubmit] = useState({
    id: "",
    day_translate: "",
    info: {
      date: "",
      day: "",
      time: "",
      kind_trainee: "",
      name: "",
      instaNickName: "",
      coach: ""
    }
  });

  const override: CSSProperties = {
  display: "block",
  margin: "20px auto",
  borderColor: "#44c767",
};

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
  
  // if (findUserByID) {
  //   console.log(findUserByID.info[findUserByID.info.length - 1].instaNickName)
  // }
  
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
        instaNickName: instaNickName,
        coach: nameCoach
      }
    })
  }, [clientName, date, day, dayTranslate, kind_trainee, time, tel, instaNickName, findUserByID, nameCoach]);

  // useEffect(() => {
  //   console.log('The value of "tel" has changed:', tel);
  // }, [tel]);

  const changeTelNumber = (e) => {
    setTel(e);
    if (tel !== e) {
      setWaitingResponse(true);
    }
  }

  // const handleTelBlur = () => {
  //   setWaitingResponse(true);
  // };
    
  // useEffect(() => {
  //   const findingTel = { id: tel };
  //   const res = async () => {
  //     if (tel.length === 13 && waitingResponse) {
  //       const find = await clientAPI.findDataUsers(findingTel);
  //       setWaitingResponse(false);
  //       setFindUserByID(find);
  //       // return null;
  //     };
  //     if (findUserByID) {
  //       setClientName(clientName ? clientName : (findUserByID ? findUserByID.info[findUserByID.info.length - 1].name : ''));
  //       setInstaNickName(findUserByID ? findUserByID.info[findUserByID.info.length - 1].instaNickName : '');
  //     }
  //     if (!findUserByID) {
  //       setClientName(clientName ? clientName : (findUserByID ? findUserByID.info[findUserByID.info.length - 1].name : ''));
  //       setInstaNickName(instaNickName ? instaNickName : (findUserByID ? findUserByID.info[findUserByID.info.length - 1].instaNickName : ''));
  //     }
  //     return null;
  //   };
  //   res();
  // }, [tel, clientName, instaNickName, findUserByID, waitingResponse]);

  useEffect(() => {
    const findingTel = { id: tel };
    const res = async () => {
      if (tel.length === 13 && waitingResponse) {
        setLoading(false);
        const find = await clientAPI.findDataUsers(findingTel).then(setLoading(true));
        setWaitingResponse(false);
        setFindUserByID(find);
      }
    };
    res();
    }, [tel, waitingResponse]);
  
  useEffect(() => {
    if (findUserByID) {
      setClientName(clientName ? clientName : (findUserByID ? findUserByID.info[findUserByID.info.length - 1].name : ''));
      setInstaNickName(instaNickName ? instaNickName : (findUserByID ? findUserByID.info[findUserByID.info.length - 1].instaNickName : ''));
    }
    if (!findUserByID && !waitingResponse) {
      setClientName(clientName ? clientName : '');
      setInstaNickName(instaNickName ? instaNickName : '');
      setWaitingResponse(true)
    }
  }, [findUserByID, clientName, instaNickName, waitingResponse]);

  useEffect(() => {
    if (!waitingResponse) {
      const userName = yup.object({
        name: yup.string()
          .min(3, "Ім'я може містити мінімум 3 символи")
          .max(25, "Ім'я може містити максимум 25 символів")
          .required("Ім'я обов'язкове до заповнення")
      });

      const userTel = yup.object({
        id: yup.string()
          .min(13, "Номер телефону має містити 13 символів")
          .max(13, "Номер телефону має містити 13 символів")
          .required("Номер телефону обов'язковий до заповнення")
      });

      const userInsta = yup.object({
        instaNickName: yup.string()
          .min(3, "Nickname може містити мінімум 3 символи")
          .max(25, "Nickname може містити максимум 25 символів")
          .required("Nickname обов'язкове до заповнення")
      });

      const name = clientName;
      const userID = tel;
      const nickname = instaNickName;
      if (name) {
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
      }
      if (userID) {
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
      }
      if (nickname) {
        userInsta.validate({ instaNickName: nickname })
          .catch((err) => {
            setCurrentErrorInsta(err.errors);
            setValidFormInsta(false);
          });
        userInsta.isValid({ instaNickName: nickname })
          .then(function (valid) {
            if (valid === true) {
              setCurrentErrorInsta('');
              setValidFormInsta(true);
              return;
            }
          })
      }
      if (validFormName === true & validFormTel === true & validFormInsta === true) {
        return (setValidForm(true));
      }
    }
}, [clientName, tel, instaNickName, validFormName, validFormTel, validFormInsta, waitingResponse]);
  
  // const HandleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validForm === true) {
  //     setClickBTN(true)
  //     const { id, day_translate, info } = onSubmit;
  //     // clientAPI.sendDataUsers({ id, day_translate, info });
  //     // clientAPI.sendTgRecord({ id, clientName, kind_trainee, time, date, instaNickName });
  //     // clientAPI.upgradeDataUsers({ id, info });
  //     new Promise(resolve => setTimeout(resolve, 500));
  //     alert(JSON.stringify(onSubmit, null, 2));
  //     return;
  //   }
  //   return;
  // };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (validForm === true) {
      setClickBTN(true);
      setLoading(true);
      const { id, day_translate, info } = onSubmit;
      try {
        await clientAPI.sendDataUsers({ id, day_translate, info }).then(setLoading(false));
        await clientAPI.sendTgRecord({ id, clientName, kind_trainee, time, date, instaNickName });
        await clientAPI.upgradeDataUsers({ id, info });
        // alert(JSON.stringify(onSubmit, null, 2));
      } catch (error) {
        console.error(error);
      }
      setLoading(true);
      return;
    }
    return;
  };

  return (
    <Wrapper>
      <Dialog>
        <IoIosClose
          style={{ position: 'absolute', marginLeft: '195px', marginTop: '-26px', color: '#7a7272' }}
          size={30}
          onClick={() => {
            Close();
            setOnSubmit({
              id: "",
              day_translate: "",
              info: {
                date: "",
                day: "",
                time: "",
                kind_trainee: "",
                name: "",
                instaNickName: "",
                coach: ""
              }
            });
          }}
        />
        {kind_trainee && kind_trainee !== 'Персональні' ?
        <>
          <h4>Ви обрали <KindStyle>{kind_trainee} об <DayOfWeek day={day} time={time} /></KindStyle></h4><br />
          <h4>Будь ласка, введіть наступні дані: </h4><br />
          {/* <input type="text" onChange={HandleFindNumber}/> */}
          <form>
            <label htmlFor="id">
              Номер телефону:</label><br />
              <Input
                name="id"
                id="id"
                value={tel}
                onChange={changeTelNumber}
                // onBlur={handleTelBlur}
                country="UA"
                international
                withCountryCallingCode
                // placeholder='5898556'
                style={{backgroundColor: 'inherit', borderRadius: '22px', width: '200px', boxShadow: '2px 2px 5px rgba(66,66,66,.75)', paddingLeft: '10px'}}
            /><br/>
              {currentErrorTel ?
                <div style={{ color: "red", width: "180px" }}>
                  <p style={{ fontSize: "14px"}}>{currentErrorTel}</p>
                </div> :
                null
              }
              {findUserByID ? null :
                <>
                  <label htmlFor="name">
                    Прізвище та ім'я:</label><br />
                    <InputStyle
                      name="name"
                      type="text"
                      value={clientName}
                      // onChange={e =>{setClientName(e.target.value)}}
                      onChange={e => setClientName(e.target.value)}
                      placeholder='Sandrochka Strong'
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
                      <InputStyle
                        name="nick-name"
                        type="text"
                        // onChange={e => { setInstaNickName(e.target.value) }}
                        value={instaNickName}
                        onChange={e => setInstaNickName(e.target.value)}
                        placeholder='arsfit_studio'
                    /><br />
                  <div>
                      {currentErrorInsta ?
                        <div style={{ color: "red", width: "180px" }}>
                          <p style={{ fontSize: "14px" }}>{currentErrorInsta}</p>
                        </div> :
                        null
                      }
                    </div>
                </>}
              {loading ?
                <SubBTN type="submit" onClick={HandleSubmit} disabled={!validForm || clickBTN} className={clickBTN ? 'inactive' : (validForm ? 'active' : '')}>
                  Записатися
                </SubBTN> : 
                <ClockLoader
                  color={'#44c767'}
                  loading={!loading}
                  cssOverride={override}
                  size={50}
                />
                }
            </form>
          </>
          :
          <>
            <p>Ви обрали час, на який не заплановано заняття або неможливо здійснити запис на обраний напрямок.</p>
            <p>Будь ласка, оберіть інший час та вид тренування.</p>
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
