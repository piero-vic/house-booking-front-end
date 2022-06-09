import { RiFacebookCircleLine } from 'react-icons/ri';
import { AiFillGoogleCircle, AiFillTwitterCircle } from 'react-icons/ai';
import '../styles/houses.css';

const Social = () => (
  <div className="social">
    <ul className="list">
      <li>
        {' '}
        <AiFillGoogleCircle className="icon" />
      </li>
      <li><AiFillTwitterCircle className="icon" /></li>
      <li><RiFacebookCircleLine className="icon" /></li>
    </ul>

  </div>
);

export default Social;
