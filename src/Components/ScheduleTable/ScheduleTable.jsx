import {TableSize} from './ScheduleTable.styled';

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
  // console.log(data0800);
  return (
    <>
      <tr className='time'>
        <td>8:00</td>
        {data0800.map(item => (
        <TableSize
          key={item.id}
          id={item.day}
          className={item.day}>
          <button id={item.id} onClick={(e) => { console.log(e.target.id) }}>
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