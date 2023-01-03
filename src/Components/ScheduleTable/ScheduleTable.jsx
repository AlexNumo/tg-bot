import {
  TableSize,
} from './ScheduleTable.styled';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import SignUp from 'Components/SignUp/SignUp';

const ScheduleTable = ({ 
  data0800,
  data0900,
  data1000,
  data1100,
  data1200,
  data1300,
  data1400,
  data1500,
  data1600,
  data1700,
  data1800,
  data1900,
  data2000,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [kind_trainee, setKind_trainee] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [dateClickOnBTN, setDateClickOnBTN] = useState('');
  const [sunday, setSunday] = useState('');
  const [monday, setMonday] = useState('');
  const [tuesday, setTuesday] = useState('');
  const [wednesday, setWednesday] = useState('');
  const [thursday, setThursday] = useState('');
  const [friday, setFriday] = useState('');
  const [saturday, setSaturday] = useState('');

  useEffect(() => {
  const DateToday = () => {
    const dateClickOnBTN = moment().format('dddd');  
    if (dateClickOnBTN === "Monday") {
      return [
        setSunday(moment().add(6, 'days')._d),
        setMonday(moment().add( 0 ,'days')._d),
        setTuesday(moment().add(1 , 'days')._d),
        setWednesday(moment().add(2, 'days')._d),
        setThursday(moment().add(3, 'days')._d),
        setFriday(moment().add(4, 'days')._d),
        setSaturday(moment().add(5, 'days')._d)]
    };
    if (dateClickOnBTN === "Tuesday") {
      return [
        setSunday(moment().add(5, 'days')._d),
        setMonday(moment().add(6,'days')._d),
        setTuesday(moment().add(0 , 'days')._d),
        setWednesday(moment().add(1, 'days')._d),
        setThursday(moment().add(2, 'days')._d),
        setFriday(moment().add(3, 'days')._d),
        setSaturday(moment().add(4, 'days')._d)]
    };
    if (dateClickOnBTN === "Wednesday") {
      return [
        setSunday(moment().add(4, 'days')._d),
        setMonday(moment().add(5,'days')._d),
        setTuesday(moment().add(6, 'days')._d),
        setWednesday(moment().add(0, 'days')._d),
        setThursday(moment().add(1, 'days')._d),
        setFriday(moment().add(2, 'days')._d),
        setSaturday(moment().add(3, 'days')._d)]
    };
    if (dateClickOnBTN === "Thursday") {
      return [
        setSunday(moment().add(3, 'days')._d),
        setMonday(moment().add(4,'days')._d),
        setTuesday(moment().add(5, 'days')._d),
        setWednesday(moment().add(6, 'days')._d),
        setThursday(moment().add(0, 'days')._d),
        setFriday(moment().add(1, 'days')._d),
        setSaturday(moment().add(2, 'days')._d)]
    };
    if (dateClickOnBTN === "Friday") {
      return [
        setSunday(moment().add(2, 'days')._d),
        setMonday(moment().add(3,'days')._d),
        setTuesday(moment().add(4, 'days')._d),
        setWednesday(moment().add(5, 'days')._d),
        setThursday(moment().add(6, 'days')._d),
        setFriday(moment().add(0, 'days')._d),
        setSaturday(moment().add(1, 'days')._d)]
    };
    if (dateClickOnBTN === "Saturday") {
      return [
        setSunday(moment().add(1, 'days')._d),
        setMonday(moment().add(2,'days')._d),
        setTuesday(moment().add(3, 'days')._d),
        setWednesday(moment().add(4, 'days')._d),
        setThursday(moment().add(5, 'days')._d),
        setFriday(moment().add(6, 'days')._d),
        setSaturday(moment().add(0, 'days')._d)]
    };
    if (dateClickOnBTN === "Sunday") {
      return [
        setSunday(moment().add(0, 'days')._d),
        setMonday(moment().add(1,'days')._d),
        setTuesday(moment().add(2, 'days')._d),
        setWednesday(moment().add(3, 'days')._d),
        setThursday(moment().add(4, 'days')._d),
        setFriday(moment().add(5, 'days')._d),
        setSaturday(moment().add(6, 'days')._d)]
    };
    };
    DateToday();
  },[setSunday])

  const NotFoundTrainee = ({ item }) => {
    if (item.kind_trainee === "-") {
      return null;
    }
    return (null)
  };

  const Close = (e) => {
    if (modalOpen === true) {
      return [
        setModalOpen(false),
        setKind_trainee(''),
        setDay(''),
        setTime(''),
        setDateClickOnBTN('')
      ];
    }
    setModalOpen(true);
    setKind_trainee(e.target.outerText);
    setDay(e.target.id);
    setTime(e.target.name);
    setDateClickOnBTN(e.target.className);
  };

  const BTN = ({ item }) => {
    if (item.day === "monday") {
      return (
        <>
          <button style={{ width: '80px' }}
            key={item.id}
            id={item.day}
            name={item.time}
            kind_trainee={item.kind_trainee}
            className={monday}
            onClick={Close}
          >
            {item.kind_trainee}
          </button>
        </>
      )
    };
    if (item.day === "tuesday") {
      return (
        <>
          <button style={{ width: '80px' }}
            key={item.id}
            id={item.day}
            name={item.time}
            kind_trainee={item.kind_trainee}
            className={tuesday}
            onClick={Close}
          >
            {item.kind_trainee}
          </button>
        </>
      )
    };
    if (item.day === "wednesday") {
      return (
        <>
          <button style={{ width: '80px' }}
            key={item.id}
            id={item.day}
            name={item.time}
            kind_trainee={item.kind_trainee}
            className={wednesday}
            onClick={Close}
          >
            {item.kind_trainee}
          </button>
        </>
      )
    };
    if (item.day === "thursday") {
      return (
        <>
          <button style={{ width: '80px' }}
            key={item.id}
            id={item.day}
            name={item.time}
            kind_trainee={item.kind_trainee}
            className={thursday}
            onClick={Close}
          >
            {item.kind_trainee}
          </button>
        </>
      )
    };
    if (item.day === "friday") {
      return (
        <>
          <button style={{ width: '80px' }}
            key={item.id}
            id={item.day}
            name={item.time}
            kind_trainee={item.kind_trainee}
            className={friday}
            onClick={Close}
          >
            {item.kind_trainee}
          </button>
        </>
      )
    };
    if (item.day === "saturday") {
      return (
        <>
          <button style={{ width: '80px' }}
            key={item.id}
            id={item.day}
            name={item.time}
            kind_trainee={item.kind_trainee}
            className={saturday}
            onClick={Close}
          >
            {item.kind_trainee}
          </button>
        </>
      )
    };
    if (item.day === "sunday") {
      return (
        <>
          <button style={{ width: '80px' }}
            key={item.id}
            id={item.day}
            name={item.time}
            kind_trainee={item.kind_trainee}
            className={sunday}
            onClick={Close}
          >
            {item.kind_trainee}
          </button>
        </>
      )
    };
  }
  // return (
  //   <tr>
  //     <td>
  //       <button onClick={TEST}>DATE</button>
  //     </td>
  //   </tr>
  // )
  // console.log()
  return (
    <>
      <tr className='time'>
        <td>8:00</td>
        {data0800.map(item => (
        <TableSize
          key={item.id}
          id={item.day}
          time={item.time}
          // className="dsaasd"
          >
          <BTN item={item} />
        </TableSize>
        ))}
      </tr>
      <tr className='time'>
        <td>9:00</td>
      {data0900.map(item => (
        <TableSize
          key={item.id}
          id={item.day}
          time={item.time}>
          <BTN item={item} />
          <NotFoundTrainee
            item={item}
          />
        </TableSize>
        ))}
      </tr>
      <tr className='time'>
      <td>10:00</td>
      {data1000.map(item => (
        <TableSize
          key={item.id}
          id={item.day}
          time={item.time}>
          <BTN item={item} />
          <NotFoundTrainee
            item={item}
          />
        </TableSize>
        ))}
      </tr>
      <tr className='time'>
      <td>11:00</td>
      {data1100.map(item => (
        <TableSize
          key={item.id}
          id={item.day}
          time={item.time}>
          <BTN item={item} />
          <NotFoundTrainee
            item={item}
          />
        </TableSize>
        ))}
      </tr>
      <tr className='time'>
      <td>12:00</td>
      {data1200.map(item => (
        <TableSize
          key={item.id}
          id={item.day}
          time={item.time}>
          <BTN item={item} />
          <NotFoundTrainee
            item={item}
          />
        </TableSize>
        ))}
      </tr>
      <tr className='time'>
      <td>13:00</td>
      {data1300.map(item => (
        <TableSize
          key={item.id}
          id={item.day}
          time={item.time}>
          <BTN item={item} />
          <NotFoundTrainee
            item={item}
          />
        </TableSize>
        ))}
      </tr>
      <tr className='time'>
      <td>14:00</td>
      {data1400.map(item => (
        <TableSize
          key={item.id}
          id={item.day}
          time={item.time}>
          <BTN item={item} />
          <NotFoundTrainee
            item={item}
          />
        </TableSize>
        ))}
      </tr>
      <tr className='time'>
      <td>15:00</td>
      {data1500.map(item => (
        <TableSize
          key={item.id}
          id={item.day}
          time={item.time}>
          <BTN item={item} />
          <NotFoundTrainee
            item={item}
          />
        </TableSize>
        ))}
      </tr>
      <tr className='time'>
      <td>16:00</td>
      {data1600.map(item => (
        <TableSize
          key={item.id}
          id={item.day}
          time={item.time}>
          <BTN item={item} />
          <NotFoundTrainee
            item={item}
          />
        </TableSize>
        ))}
      </tr>
      <tr className='time'>
      <td>17:00</td>
      {data1700.map(item => (
        <TableSize
          key={item.id}
          id={item.day}
          time={item.time}>
          <BTN item={item} />
          <NotFoundTrainee
            item={item}
          />
        </TableSize>
        ))}
      </tr>
      <tr className='time'>
      <td>18:00</td>
      {data1800.map(item => (
        <TableSize
          key={item.id}
          id={item.day}
          time={item.time}>
          <BTN item={item} />
          <NotFoundTrainee
            item={item}
          />
        </TableSize>
        ))}
      </tr>
      <tr className='time'>
      <td>19:00</td>
      {data1900.map(item => (
        <TableSize
          key={item.id}
          id={item.day}
          time={item.time}>
          <BTN item={item} />
          <NotFoundTrainee
            item={item}
          />
        </TableSize>
        ))}
      </tr>
      <tr className='time'>
      <td>20:00</td>
      {data2000.map(item => (
        <TableSize
          key={item.id}
          id={item.day}
          time={item.time}>
          <BTN item={item} />
          <NotFoundTrainee
            item={item}
          />
        </TableSize>
        ))}
      </tr>
      {modalOpen ?
        <SignUp
          Close={Close}
          kind_trainee={kind_trainee}
          day={day}
          time={time}
          date={dateClickOnBTN}
        />
        :
        null}
    </>
  )
}
export default ScheduleTable;