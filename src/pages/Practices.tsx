
import { useEffect } from 'react';
import areasOfPracticePhoto from '../assets/areasofpractice.jpg'
import AreasOfPractice from "./AreasOfPractice";

const Practices = () => {


  useEffect(() => {
    // Set the tab title when this component is mounted
    document.title = "Leff Law Group - Areas Of Practice";
  }, []);


  return (
    <div className="w-full">
      {/* Hero Image Section */}
      <div className="relative w-full h-[300px] lg:h-[400px] overflow-hidden">
        <img 
          className="w-full h-full object-cover" 
          src={areasOfPracticePhoto} 
          alt="Areas of Practice"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
      </div>

      {/* Content Section */}
      <AreasOfPractice />
    </div>
  );
};

export default Practices;
