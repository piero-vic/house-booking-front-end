import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import getReservations from '../redux/actions/reservations';
import PageHeading from '../components/PageHeading';

const reservations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
  },
  []);

  const reservations = useSelector((state) => state.reservations);

  return (
    <div className="container w-4/5 mx-auto h-screen pt-20 sm:pt-32">
      <PageHeading title="RESERVATIONS" subtitle="Take a look at your reservations" />
      <DataTable
        pagination
        columns={
          [
            { name: 'Reserved On', selector: (row) => row.date },
            { name: 'Reserved House', selector: (row) => row.house },
            { name: 'Reservation Owner', selector: (row) => row.user },
          ]
        }
        data={reservations}
      />
    </div>
  );
};

export default reservations;
