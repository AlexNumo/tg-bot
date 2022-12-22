import { TableSize } from './ScheduleTable.styled';
import SignUp from 'Components/SignUp/SignUp';
import { useState } from 'react';

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
  data2000
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dayTime, setDayTime] = useState('');
  const [kind_trainee, setKind_trainee] = useState('');
  const NotFoundTrainee = ({ item }) => {
    if (item.kind_trainee === "-") {
      return null;
    }
    return(
      <>
        <span>, тренер "{item.name_Coach }"</span>
      </>
    )
  }

  const onSignUp = (e) => {
    if (isOpen === true) {
      return setIsOpen(false);
    }
    setIsOpen(true);
    setDayTime(e.target.id);
    setKind_trainee(e.target.className);
  }
  // console.log(data0800);
  console.log("kind_trainee ", kind_trainee);
  console.log("dayTime: ", dayTime);
  return (
    <>
      <tr className='time'>
        {isOpen ? <SignUp/> : null}
        <td>8:00</td>
        {data0800.map(item => (
        <TableSize
          key={item.id}
          id={item.day}
          className={item.day}>
          {/* <button id={item.id} className={item.kind_trainee} onClick={(e) => { console.log(e.target.className) }}> */}
            <button
              id={item.id}
              className={item.kind_trainee}
              onClick={onSignUp}>
            {item.kind_trainee}
            <NotFoundTrainee
              item={item}
            /> 
          </button>
        </TableSize>
        ))}
      </tr>
      <tr className='time'>
        <td>9:00</td>
      {data0900.map(item => (
        <TableSize
          key={item.id}
          id={item.day}
          className={item.day}>
          {item.kind_trainee}
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
          className={item.day}>
          {item.kind_trainee}
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
          className={item.day}>
          {item.kind_trainee}
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
          className={item.day}>
          {item.kind_trainee}
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
          className={item.day}>
          {item.kind_trainee}
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
          className={item.day}>
          {item.kind_trainee}
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
          className={item.day}>
          {item.kind_trainee}
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
          className={item.day}>
          {item.kind_trainee}
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
          className={item.day}>
          {item.kind_trainee}
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
          className={item.day}>
          {item.kind_trainee}
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
          className={item.day}>
          {item.kind_trainee}
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
          className={item.day}>
          {item.kind_trainee}
          <NotFoundTrainee
            item={item}
          />
        </TableSize>
        ))}
      </tr>
    </>
  )
}

export default ScheduleTable;