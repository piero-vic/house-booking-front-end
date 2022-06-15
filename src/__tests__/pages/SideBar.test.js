import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import SideBar from '../../pages/Sidebar';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <SideBar />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
