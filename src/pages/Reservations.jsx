import ReservationForm from "../components/ReservationForm"
import { useReducer } from 'react';

const timeSlots = [
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
];

const occasions = [
  'Birthday',
  'Anniversary'
];


function updateTimes(availableTimes, action) {
  if (action.type === 'selected_time') {
    return action.selectedTime;
  }
  if (action.type === 'submitted') {
    return timeSlots;
  }
}


export default function Reservations() {
  const [availableTimes, dispatch] = useReducer(updateTimes, timeSlots);

  return (
    <div className="reservations">
      <h1>Reservations</h1>
      <ReservationForm
      timeSlots={timeSlots}
      availableTimes={availableTimes}
      dispatch={dispatch}
      occasions={occasions}
      />
    </div>
  )
}