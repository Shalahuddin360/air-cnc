import { DateRange } from "react-date-range";

const DatePicker = ({ value, handleSelect }) => {
  return (
    <DateRange
      ranges={[value]}
      onChange={handleSelect}
      rangeColors={["#F43F5E"]}
      date={value.startDate}
      direction="vertical"
      showDateDisplay={false}
      minDate={value.endDate}
    />
  );
};

export default DatePicker;
