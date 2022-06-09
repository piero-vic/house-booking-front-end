import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import getReservations from '../redux/actions/reservations';

const reservations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
  },
  []);

  const { data } = useSelector((state) => state.reservations);

  return (
    <div className="container w-4/5 mx-auto">
      <DataTable
        title="Reservations"
        pagination
        columns={
          [
            { name: 'Reserved On', selector: (row) => row.date },
            { name: 'Reserved House', selector: (row) => row.house },
            { name: 'Reservation Owner', selector: (row) => row.user },
          ]
        }
        data={data}
      />
    </div>
  );
};

export default reservations;
