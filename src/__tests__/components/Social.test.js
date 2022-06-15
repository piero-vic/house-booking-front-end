import renderer from 'react-test-renderer';
import Social from '../../components/Social';

it('renders correctly', () => {
  const tree = renderer
    .create(<Social />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});