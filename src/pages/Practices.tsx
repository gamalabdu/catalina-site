
import areasOfPracticePhoto from '../assets/areasofpractice.jpg'
import AreasOfPractice from "./AreasOfPractice";

const Practices = () => {
  return (
    <div className="h-[calc(100vh-60px)] w-full mt-[60px] flex flex-col items-center align-middle">

      <div className="object-contain">

        <img className="h-[250px] w-screen object-cover" src={areasOfPracticePhoto} />

      </div>


      <div className="w-[90%] p-4">
            <AreasOfPractice />
      </div>


    </div>
  );
};

export default Practices;
