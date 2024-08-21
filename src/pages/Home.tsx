import { useNavigate } from 'react-router-dom'
import beverlyHills from '../assets/beverlyHills.mp4'
import lawLogo3 from '../assets/lawLogo3.png'
import './styles.css'
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {

    const navigate = useNavigate()


  return (

    <div className="h-[calc(100vh-60px)] w-full "> 
    
    {/* Might be this margintop  */}

    <video 
      className="object-cover h-screen w-full" 
      src={beverlyHills} 
      autoPlay={true}
      loop 
      muted 
    />


     <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-white bg-black bg-opacity-50 gap-10">

        <img src={lawLogo3} alt="Logo" className='law-logo' />

        <h1 className="text-4xl font-bold">Leff Law Group</h1>

        <h2 className="p-4 text-xl text-center">
            Providing Representation To Individuals, Families And Businesses
                With Immigration Law Concerns
        </h2>

        <div className='flex flex-col items-center gap-4 text-center text-base font-semibold'>
              <div className='flex align-middle items-center gap-2'> <FaLocationDot /> Beverly Hills, CA </div>
              <div className='flex align-middle items-center gap-2'> <FaLocationDot /> La Jolla, San Diego County </div>
        </div>

        <button onClick={ () => navigate('/about') } className='bg-blue-950 text-neutral-100 pt-2 pb-2 pl-4 pr-4 rounded-md font-bold hover:bg-slate-800'> Learn More </button>

     </div>




  </div>
  )

}

export default Home