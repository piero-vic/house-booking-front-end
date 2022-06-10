import { RiFacebookCircleLine } from 'react-icons/ri';
import { AiFillGoogleCircle, AiFillTwitterCircle } from 'react-icons/ai';
// import '../styles/houses.css';

const Social = () => (
  <div className="social">
    <ul className="flex gap-5 brightness-200 opacity-10 font-bold mt-4 justify-center">
      <li>
        {' '}
        <AiFillGoogleCircle className="cursor-pointer h-14 w-10 " />
      </li>
      <li><AiFillTwitterCircle className="cursor-pointer h-14 w-10 " /></li>
      <li><RiFacebookCircleLine className="cursor-pointer h-14 w-10 " /></li>
    </ul>

  </div>
);

export default Social;
