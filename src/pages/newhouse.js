import NewHouseForm from '../components/newHouseForm';
import PageHeading from '../components/PageHeading';

const NewHouse = () => (
  <div className="container w-4/5 mx-auto pt-10">
    <PageHeading title="New House" />
    <hr className="mt-3 mb-5" />
    <NewHouseForm />
  </div>
);

export default NewHouse;
