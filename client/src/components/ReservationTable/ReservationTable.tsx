// client/src/components/ReservationTable/ReservationTable.tsx
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import axios from '../axiosInstance';

interface Reservation {
  _id: string;
  place: string;
  user: string;
  checkIn: Date;
  checkOut: Date;
  name: string;
  phone: string;
  price: number;
}

const ReservationTable = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('/reservation/:userId');
        setReservations(response.data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };
    fetchReservations();
  }, []);

  return (
    <div>
      <h2>Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Place</th>
            <th>User</th>
            <th>Check-In</th>
            <th>Check-Out</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation._id}>
              <td>{reservation.place}</td>
              <td>{reservation.user}</td>
              <td>{new Date(reservation.checkIn).toLocaleDateString()}</td>
<td>{new Date(reservation.checkOut).toLocaleDateString()}</td>
              <td>{reservation.name}</td>
              <td>{reservation.phone}</td>
              <td>{reservation.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationTable;
