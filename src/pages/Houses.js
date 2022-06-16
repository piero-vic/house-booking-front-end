import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';
import { useEffect, useState, useRef } from 'react';
import { displayHouses } from '../redux/actions/houses';
import Social from '../components/Social';
import PageHeading from '../components/PageHeading';

const Houses = () => {
  const houses = useSelector((state) => state.houses);
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
    <div className="container relative h-screen pt-20 sm:pt-32">
      <PageHeading title="YOUR FAVOURITE HOUSES" subtitle="Please select a house model" />

      <div className="flex gap-7 overflow-hidden w-72 sm:max-w-screen-lg mx-auto sm:w-4/5">
        <div ref={houseCard} className="flex gap-7 w-full">
          {
           houses.map((house) => (
             <Link key={house.id} to={`/houses/${house.id}`}>
               <div className="flex flex-col items-center">
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
             </Link>
           ))
        }
        </div>
        <button
          type="button"
          className="bg-lime-400 slider-buttons rounded-tl-3xl rounded-bl-3xl absolute right-0 top-1/3 flex items-center pl-2 sm:pl-4 w-9 h-6 sm:w-20 sm:h-11"
          onClick={nextSlide}
        >
          <VscTriangleRight className="text-white brightness-50 opacity-15" />
        </button>
        <button type="button" onClick={prevSlide} className="bg-slate-300 slider-buttons justify-end flex items-center rounded-br-3xl rounded-tr-2xl absolute top-1/3 pr-2 sm:pr-4 w-9 h-6 left-0 sm:w-20 sm:h-11">
          <VscTriangleLeft className="brightness-50 opacity-15 text-white " />
        </button>
      </div>

    </div>
  );
};

export default Houses;
