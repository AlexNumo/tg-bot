import TimeOfDay from "Components/TimeOfDay/TimeOfDay";

const DayOfWeek = ({day, time}) => {
    if (day === "monday") {
      return (
        <>
          <TimeOfDay time={time} />
          <span> у понеділок</span>
        </>
      )
    };
    if (day === "tuesday") {
      return (
        <>
          <TimeOfDay time={time} />
          <span> у вівторок</span>
        </>
      )
    };
    if (day === "wednesday") {
      return (
        <>
          <TimeOfDay time={time} />
          <span> у середу</span>
        </>
      )
    };
    if (day === "thursday") {
      return (
        <>
          <TimeOfDay time={time} />
          <span> у четвер</span>
        </>
      )
    };
    if (day === "friday") {
      return (
        <>
          <TimeOfDay time={time} />
          <span> у п'ятницю</span>
        </>
      )
    };
    if (day === "saturday") {
      return (
        <>
          <TimeOfDay time={time} />
          <span> у суботу</span>
        </>
      )
    };
    if (day === "sunday") {
      return (
        <>
          <TimeOfDay time={time} />
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
  
export default DayOfWeek;