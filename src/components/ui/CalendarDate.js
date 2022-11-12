import './CalendarDate.css';

const CalendarDate = (props) => {
  const year = props.cal.getFullYear();
  const month = props.cal.toLocaleString("en-US", { month: "short" });
  const date = props.cal.getDate();

  return (
    <div className='calendar-date'>
      <div className='calendar-date__year'>{year}</div>
      <div className='calendar-date__month'>{month}</div>
      <div className='calendar-date__day'>{date}</div>
    </div>
  );
}

export default CalendarDate;
