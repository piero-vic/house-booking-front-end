import renderer from 'react-test-renderer';
import PageHeading from '../../components/PageHeading';

it('renders correctly', () => {
  const tree = renderer
    .create(<PageHeading title='titleTest' />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});