import { useNavigate } from 'react-router-dom'
import beverlyHills from '../assets/beverlyHills.mp4'
import lawLogo3 from '../assets/lawLogo3.png'
import './styles.css'

const Home = () => {


    const navigate = useNavigate()

  return (

    <div className="h-[calc(100vh-60px)] w-full mt-[60px]">

    <video 
      className="object-cover h-full w-full" 
      src={beverlyHills} 
      autoPlay 
      loop 
      muted 
    />


     <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white bg-black bg-opacity-50 gap-8">

        <img src={lawLogo3} alt="Logo" className='law-logo' />

        <h1 className="text-4xl font-bold">Catalina Leff</h1>

        <h2 className=" text-xl">
            Providing Representation To Individuals, Families And Businesses
                With Immigration Law Concerns
        </h2>

        <button onClick={ () => navigate('/about') } className='bg-blue-950 text-neutral-100 pt-2 pb-2 pl-4 pr-4 rounded-md font-bold hover:bg-slate-800'> Learn More </button>

     </div>




  </div>
  )

}

export default Home