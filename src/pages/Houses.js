import { useSelector, useDispatch } from 'react-redux';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';
import { useEffect, useState } from 'react';
import { displayHouses } from '../redux/actions/houses';
// import BtnSliderRight from '../components/BtnSliderRight';
// import BtnSliderLeft from '../components/BtnSliderLeft';
import '../styles/houses.css';
import Social from '../components/Social';

const Houses = () => {
  const houses = useSelector((state) => state.HousesReducer);
  const [slideIndex, setSlideIndex] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (houses.length === 0) {
      dispatch(displayHouses());
    }
  }, []);

  const nextSlide = () => {
    if (slideIndex !== houses.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === houses.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(houses.length);
    }
  };

  return (
    <div className="container wrap">
      <div className="header">
        <h2 className="heading-secondary">YOUR FAVORITE HOUSES </h2>
        <p className="paraghraph">Please select a house model</p>
      </div>

      <div className="slider-items">
        {
           houses.map((house) => (
             <div key={house.id} className="house-card">
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
