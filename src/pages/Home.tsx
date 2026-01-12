import { useNavigate } from 'react-router-dom'
import beverlyHills from '../assets/beverlyHills.mp4'
import lawLogo3 from '../assets/lawLogo3.png'
import './styles.css'
import { FaLocationDot, FaAward, FaHandshake } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { useEffect } from 'react';

const Home = () => {

    const navigate = useNavigate()

    useEffect(() => {
      // Set the tab title when this component is mounted
      document.title = "Leff Law Group - Home";
    }, []);


  return (

    <div className="h-[calc(100vh-60px)] w-full relative overflow-hidden"> 
    
    {/* Video Background */}
    <video 
      className="object-cover h-screen w-full absolute top-0 left-0" 
      src={beverlyHills} 
      autoPlay={true}
      loop 
      muted 
      playsInline
    />

    {/* Overlay with gradient for better text readability */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

    {/* Main Content Container */}
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
      
      {/* Logo with fade-in animation */}
      <div className="mb-6 animate-fadeIn">
        <img 
          src={lawLogo3} 
          alt="Logo" 
          className='law-logo w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' 
        />
      </div>

      {/* Firm Name */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-center tracking-tight animate-fadeIn" style={{ animationDelay: '0.1s' }}>
        Leff Law Group
      </h1>

      {/* Professional Tagline */}
      <div className="w-full max-w-4xl mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-4 leading-tight">
          Expert Immigration Law Representation
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-200 font-light leading-relaxed px-4">
          Providing comprehensive legal services to individuals, families, and businesses 
          navigating complex immigration matters
        </p>
      </div>

      {/* Trust Indicators */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <FaAward className="text-white text-xl" />
          <span className="font-medium">Experienced Attorneys</span>
        </div>
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <FaHandshake className="text-white text-xl" />
          <span className="font-medium">Trusted Representation</span>
        </div>
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <FaGlobeAmericas className="text-white text-xl" />
          <span className="font-medium">Nationwide Service</span>
        </div>
      </div>

      {/* Locations */}
      <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-10 text-base sm:text-lg font-medium animate-fadeIn' style={{ animationDelay: '0.4s' }}>
        <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20'>
          <FaLocationDot className="text-white" /> 
          <span>Beverly Hills, CA</span>
        </div>
        <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20'>
          <FaLocationDot className="text-white" /> 
          <span>La Jolla, San Diego County</span>
        </div>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
        <button 
          onClick={() => navigate('/contact')} 
          className='bg-blue-950 hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-blue-800'
        > 
          Schedule Consultation
        </button>
        <button 
          onClick={() => navigate('/about')} 
          className='bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm'
        > 
          Learn More
        </button>
      </div>

    </div>

  </div>
  )

}

export default Home















