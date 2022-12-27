import {
  TableSize,
} from './ScheduleTable.styled';
import { useState } from 'react';
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

  const NotFoundTrainee = ({ item }) => {
    if (item.kind_trainee === "-") {
      return null;
    }
    return (null
      // <>
      //   <span>, тренер "{item.name_Coach }"</span>
      // </>
    )
  };

  const Close = (e) => {
    if (modalOpen === true) {
      return [
        setModalOpen(false),
        setKind_trainee(''),
        setDay(''),
        setTime('')
      ];
    }
    setModalOpen(true);
    setKind_trainee(e.target.outerText);
    setDay(e.target.id);
    setTime(e.target.name);
  };

  // console.log("kind_trainee: ", kind_trainee);

  const BTN = ({ item }) => {
    // if (item.kind_trainee === "-") {
    //   return (null)
    // }
    return (
      <>
        <button style={{width: '80px'}}
          key={item.id}
          id={item.day}
          name={item.time}
          kind_trainee={item.kind_trainee}
          onClick={Close}
        >
          {item.kind_trainee}
        </button>
      </>
    )
  }

  return (
    <>
      <tr className='time'>
        <td>8:00</td>
        {data0800.map(item => (
        <TableSize
          key={item.id}
          id={item.day}
          time={item.time}>
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
        />
        :
        null}
    </>
  )
}
export default ScheduleTable;