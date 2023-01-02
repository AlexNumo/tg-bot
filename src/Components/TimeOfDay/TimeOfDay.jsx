const TimeOfDay = ({ time }) => {
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
};

export default TimeOfDay;