import { useSelector, useDispatch } from 'react-redux';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';
import { useEffect, useState, useRef } from 'react';
import { displayHouses } from '../redux/actions/houses';
// import '../styles/houses.css';
import Social from '../components/Social';

const Houses = () => {
  const houses = useSelector((state) => state.HousesReducer);
  const [slideIndex, setSlideIndex] = useState(0);
  const dispatch = useDispatch();
  const lenghtHouses = houses.length;
  const houseCard = useRef();
  const size = 250;

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
    <div className="container">
      <div className="mt-12 mb-10 sm:text-center">
        <h2 className="font-bold text-2xl mb-2 ml-8 ">YOUR FAVORITE HOUSES </h2>
        <p className="text-sm font-semibold ml-20 text-neutral-300 sm:ml-9">Please select a house model</p>
      </div>

      <div className="flex gap-7 overflow-hidden w-72 sm:max-w-screen-lg mx-auto sm:w-4/5">
        <div ref={houseCard} className="flex gap-7 w-full">
          {
           houses.map((house) => (
             <div key={house.id} className="flex flex-col items-center">
               <div className="w-72">
                 <img className="rounded-md" src={house.image} alt="house-img" />
               </div>
               <div className="flex flex-col items-center">
                 <p className="text-base font-bold mt-3 mb-4">
                   Address:
                   {house.address}
                 </p>
                 <div className="flex gap-4 justify-center">
                   <p className="text-base font-bold  text-neutral-300">
                     Price:
                     {house.price}
                     $
                   </p>
                   <p className="text-base font-bold  text-neutral-300">
                     City:
                     {house.city}
                   </p>
                 </div>
               </div>
               <Social />
             </div>
           ))
        }
        </div>
        <div className="bg-lime-400 content-center rounded-tl-3xl rounded-bl-3xl absolute right-0 top-1/3 pl-2 w-9 h-6 sm:w-20 sm:h-11">
          <button
            type="button"
            className="btn-slide"
            onClick={prevSlide}
          >
            <VscTriangleLeft className="prev" />
          </button>
        </div>
        <div className="bg-slate-300 content-center rounded-br-3xl rounded-tr-2xl absolute top-1/3 pl-2 w-9 h-6 left-0 sm:w-20 sm:h-11 sm:left-72">
          <button
            type="button"
            className="sm:text-justify"
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
