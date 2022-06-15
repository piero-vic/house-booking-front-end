import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Reservations from '../../pages/reservations';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Reservations />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
// import { Provider } from 'react-redux';
// import { render as rtlRender } from '@testing-library/react';
// import Reservations from '../pages/reservations';
// import store from '../redux/store';

// const render = (Reservations) => rtlRender(
//   <Provider store={store}>
//     {Reservations}
//   </Provider>,
// );

// describe('Reservations page', () => {
//   test('Display all the Reservations with details', () => {
//     render(<Reservations />);
//   });
// });
