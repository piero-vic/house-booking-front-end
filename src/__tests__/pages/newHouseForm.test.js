import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import NewHouseForm from '../../components/newHouseForm';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <NewHouseForm />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
