import { useState, useEffect } from 'react';

export default function ReservationForm({
  timeSlots,
  availableTimes,
  dispatch,
  occasions
}) {
  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0];

  const [date, setDate] = useState(formattedToday);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState(occasions[0]);

  function handleDate(e) {
    setDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setDate(formattedToday);
    setGuests(1);
    setOccasion(occasions[0]);
    dispatch({
      type: 'submitted'
    });

    console.log('submitted!');
  }

  useEffect(() => {
    console.log(date);
    console.log(availableTimes);
    console.log(guests);
    console.log(occasion);
  })

  return (
    <form
      className="form"
      aria-label='reserve a table'
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose Date</label>
      <input
      type="date"
      id="res-date"
      onChange={handleDate}
      value={date}
      min={formattedToday}
      />
      <label htmlFor="res-time">Choose Time</label>
      <select
        id="res-time"
        onChange={(e) => dispatch({
          type: 'selected_time',
          selectedTime: e.target.value
        })}
      >
        {timeSlots.map((time) => (
          <option
            key={time}
            value={time}
          >
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of Guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        onChange={(e) => setOccasion(e.target.value)}
      >
        {occasions.map((occasion) => {
          if (occasion === 'Birthday') {
            return <option selected>{occasion}</option>
          }
          return (
            <option>{occasion}</option>
          )
        })}
      </select>
      <input type="submit" value="make your reservation" />
    </form>
  );
}