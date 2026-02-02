
import { Link } from "react-router-dom";

import catalinaPhoto from '../assets/catalinaPhoto3.jpeg'
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// import lawAward1 from '../assets/lawAward2.jpeg'
// import lawAward2 from '../assets/lawAward3.jpg'
// import lawAward3 from '../assets/lawAward3.png'
import { useEffect } from "react";

const About = () => {


  useEffect(() => {
    // Set the tab title when this component is mounted
    document.title = "Leff Law Group - About";
  }, []);

     const position1 : [number, number] = [34.07126300316557, -118.40242592256439]
     const position2 : [number, number] = [32.84675959921757, -117.27594914467083]

  return (
    <div className="min-h-[calc(100vh-60px)] w-full bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* About Section */}
          <div className="w-full lg:w-[68%] bg-white p-8 lg:p-12 rounded-xl shadow-xl border border-gray-200">
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                About Our Firm
              </h1>
              <div className="w-20 h-1 bg-blue-950 rounded-full"></div>
            </div>

            {/* Image and Introduction */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start mb-10">
              <div className="flex-shrink-0 mx-auto lg:mx-0">
                <img
                  src={catalinaPhoto}
                  alt="Catalina Leff, Immigration Attorney"
                  className="w-[300px] lg:w-[320px] h-auto rounded-lg shadow-xl border-2 border-gray-100 object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg lg:text-xl text-gray-800 leading-relaxed font-light">
                  With over two decades of expertise in immigration law, Catalina
                  Leff offers invaluable guidance and expertise on employee visas
                  to numerous companies situated near the San Diego-Mexico border,
                  as well as to businesses across Latin America, Europe, and
                  Canada.
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6 text-gray-700">
              {/* Practice Areas Section */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                  Practice Overview
                </h2>
                <p className="text-base lg:text-lg leading-[1.8] font-light">
                  Currently serving as Of Counsel for several law firms throughout
                  the United States, she provides insights on a wide range of
                  business immigration issues, including investment visas, work
                  visas, and NAFTA visas for Mexico and Canada. Alongside serving
                  as Of Counsel to multiple firms, she manages her own law
                  practice with locations in Beverly Hills and San Diego,
                  California. Her primary focus lies in obtaining entertainment
                  visas for international talent in the film and music industries.
                  Additionally, she provides guidance to numerous businesses
                  looking to hire foreign workers and assists investors seeking
                  immigration opportunities, particularly those involved with the
                  EB-5 program.
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-8"></div>

              {/* Humanitarian Work Section */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                  Humanitarian Commitment
                </h2>
                <p className="text-base lg:text-lg leading-[1.8] font-light">
                  After graduating from law school, Ms. Leff began her
                  professional journey as a private defense attorney for
                  immigrants facing deportation, dedicating a significant portion
                  of her career to advocating for immigrant rights and assisting
                  countless families in their quest to stay in the U.S. She has
                  also volunteered her time pro bono with various non-profit
                  organizations, helping unaccompanied minors navigate deportation
                  proceedings and secure visas to remain in the country.
                  Furthermore, she has collaborated with UNICEF and other
                  humanitarian groups to support victims of trafficking, including
                  children and young women, as well as survivors of domestic
                  violence, in obtaining humanitarian visas under the Violence
                  Against Women Act (VAWA).
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-8"></div>

              {/* Credentials Section */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                  Credentials & Education
                </h2>
                <p className="text-base lg:text-lg leading-[1.8] font-light mb-4">
                  Attorney Leff also remains committed to aiding these vulnerable
                  populations whenever her schedule allows. She is licensed to
                  practice in the Supreme Court of California and the Ninth
                  Circuit.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-950">
                  <p className="text-base lg:text-lg leading-[1.8] font-light text-gray-800">
                    <span className="font-semibold text-gray-900">Education:</span> Ms. Leff earned her bachelor's degree in international
                    relations from Pitzer College in Claremont, CA, and completed a
                    master's program in international business at Bocconi University
                    in Milan, Italy, along with a law degree from Thomas Jefferson
                    School of Law in San Diego, CA.
                  </p>
                  <p className="text-base lg:text-lg leading-[1.8] font-light text-gray-800 mt-3">
                    <span className="font-semibold text-gray-900">Languages:</span> She is proficient in several
                    languages, including Spanish and Italian, and can converse in
                    French.
                  </p>
                  <p className="text-base lg:text-lg leading-[1.8] font-light text-gray-800 mt-3">
                    <span className="font-semibold text-gray-900">Current Practice:</span> Currently, she also advocates for detained individuals
                    before the 9th circuit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Maps and Services Section */}
          <div className="w-full lg:w-[32%] flex flex-col gap-6">
            {/* Office Locations */}
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 lg:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                Office Locations
              </h2>
              
              {/* Map Container 1 */}
              <div className="mb-8">
                <div className="font-semibold text-base text-gray-900 mb-2">
                  Beverly Hills Office
                </div>
                <div className="text-sm text-gray-600 mb-4 leading-relaxed">
                  9440 S Santa Monica Blvd<br />
                  Beverly Hills, CA 90210
                </div>
                <div className="w-full h-[240px] rounded-lg overflow-hidden border border-gray-200 shadow-md">
                  <MapContainer
                    center={position1}
                    zoom={15}
                    scrollWheelZoom={false}
                    className="w-full h-full rounded-lg z-0"
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={position1}>
                      <Popup>9440 S Santa Monica Blvd, Beverly Hills, CA 90210</Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 mb-8"></div>

              {/* Map Container 2 */}
              <div>
                <div className="font-semibold text-base text-gray-900 mb-2">
                  La Jolla Office
                </div>
                <div className="text-sm text-gray-600 mb-4 leading-relaxed">
                  888 Prospect St<br />
                  La Jolla, CA 92037
                </div>
                <div className="w-full h-[240px] rounded-lg overflow-hidden border border-gray-200 shadow-md">
                  <MapContainer
                    center={position2}
                    zoom={15}
                    scrollWheelZoom={false}
                    className="w-full h-full rounded-lg z-0"
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={position2}>
                      <Popup>888 Prospect St, La Jolla, CA 92037</Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-xl shadow-xl p-6 lg:p-8">
              <h2 className="text-2xl font-semibold text-neutral-100 mb-6 tracking-tight">
                Our Services
              </h2>
              <div className="flex flex-col gap-3">
                <Link 
                  to="/areasofpractice" 
                  className="text-neutral-100 hover:text-blue-200 transition-all duration-200 text-base leading-relaxed border-l-4 border-blue-300 pl-4 py-2 hover:border-blue-200 hover:bg-blue-900/30 rounded-r"
                >
                  Employment-Based Immigration
                </Link>
                <Link 
                  to="/areasofpractice" 
                  className="text-neutral-100 hover:text-blue-200 transition-all duration-200 text-base leading-relaxed border-l-4 border-blue-300 pl-4 py-2 hover:border-blue-200 hover:bg-blue-900/30 rounded-r"
                >
                  Humanitarian Visas
                </Link>
                <Link 
                  to="/areasofpractice" 
                  className="text-neutral-100 hover:text-blue-200 transition-all duration-200 text-base leading-relaxed border-l-4 border-blue-300 pl-4 py-2 hover:border-blue-200 hover:bg-blue-900/30 rounded-r"
                >
                  Family Law Immigration
                </Link>
                <Link 
                  to="/areasofpractice" 
                  className="text-neutral-100 hover:text-blue-200 transition-all duration-200 text-base leading-relaxed border-l-4 border-blue-300 pl-4 py-2 hover:border-blue-200 hover:bg-blue-900/30 rounded-r"
                >
                  Non-Immigrant Options through Employment or Investment
                </Link>
                <Link 
                  to="/areasofpractice" 
                  className="text-neutral-100 hover:text-blue-200 transition-all duration-200 text-base leading-relaxed border-l-4 border-blue-300 pl-4 py-2 hover:border-blue-200 hover:bg-blue-900/30 rounded-r"
                >
                  Permanent Residency Through Employment, Self-Petition or Investment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
