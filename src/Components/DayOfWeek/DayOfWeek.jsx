const DayOfWeek = ({ day, time }) => {
    if (day === "monday") {
      return (
        <>
          <span>{time} у понеділок</span>
        </>
      )
    };
    if (day === "tuesday") {
      return (
        <>
          <span>{time} у вівторок</span>
        </>
      )
    };
    if (day === "wednesday") {
      return (
        <>
          <span>{time} у середу</span>
        </>
      )
    };
    if (day === "thursday") {
      return (
        <>
          <span>{time} у четвер</span>
        </>
      )
    };
    if (day === "friday") {
      return (
        <>
          <span>{time} у п'ятницю</span>
        </>
      )
    };
    if (day === "saturday") {
      return (
        <>
          <span>{time} у суботу</span>
        </>
      )
    };
    if (day === "sunday") {
      return (
        <>
          <span>{time} у неділю</span>
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