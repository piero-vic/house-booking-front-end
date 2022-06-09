import { useSelector, useDispatch } from 'react-redux';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';
import { useEffect, useState, useRef } from 'react';
import { displayHouses } from '../redux/actions/houses';
import '../styles/houses.css';
import Social from '../components/Social';

const Houses = () => {
  const houses = useSelector((state) => state.HousesReducer);
  const [slideIndex, setSlideIndex] = useState(0);
  const dispatch = useDispatch();
  const lenghtHouses = houses.length;
  const houseCard = useRef();
  const size = 50;

  useEffect(() => {
    if (houses.length === 0) {
      dispatch(displayHouses());
    }
  }, []);

  const nextSlide = () => {
    if (slideIndex === lenghtHouses - 1) return;
    const current = slideIndex + 1;
    houseCard.current.style.transform = `translateX(${-size * current}px)`;
    setSlideIndex(current);
  };

  const prevSlide = () => {
    if (slideIndex === 0) return;
    const current = slideIndex - 1;
    houseCard.current.style.transform = `translateX(${-size * current}px)`;
    setSlideIndex(current);
  };

  return (
    <div className="container wrap">
      <div className="header">
        <h2 className="heading-secondary">YOUR FAVORITE HOUSES </h2>
        <p className="paraghraph">Please select a house model</p>
      </div>

      <div className="slider-items">
        <div ref={houseCard} className="items">
        {
           houses.map((house) => (
             <div key={house.id}  className="house-card">
               <div className="wrap-img">
                 <img className="img" src={house.image} alt="house-img" />
               </div>
               <div>
                 <h3 className="heading-tertiary">
                   Price:
                   {house.price}
                   $
                 </h3>
                 <p className="heading-tertiary">
                   City:
                   {house.city}
                 </p>
                 <p className="heading-tertiary">
                   Address:
                   {house.address}
                 </p>
               </div>
               <Social />
             </div>
           ))
        }
        </div>
        <div className="btn-background-prev">
          <button
            type="button"
            className="btn-slide"
            onClick={prevSlide}
          >
            <VscTriangleLeft className="prev" />
          </button>
          {/* <BtnSliderLeft moveSlide={prevSlide} /> */}
        </div>
        <div className="btn-background-next">
          {/* <BtnSliderRight moveSlide={nextSlide} /> */}
          <button
            type="button"
            className="btn-slide"
            onClick={nextSlide}
          >
            <VscTriangleRight className="next" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Houses;
