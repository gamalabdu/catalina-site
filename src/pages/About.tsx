
import { Link } from "react-router-dom";

import catalinaPhoto from '../assets/catalinaPhoto2.png'
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
    <div className="h-[calc(100vh-60px)] w-full mt-[60px] p-5">
      <div className="flex flex-col lg:flex-row h-full w-full gap-6">
        {/* About Section */}
        <div className="w-full lg:w-[70%] bg-white p-8 rounded-lg">
          <div className="relative">
            <img
              src={catalinaPhoto}
              alt="Lawyer"
              className="w-[50%] lg:w-[300px] h-auto mb-4 lg:mb-2 lg:float-left lg:mr-4 rounded-lg mx-auto lg:mx-0"
            />
            <div className="text-lg text-gray-800">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                About Our Firm
              </h1>
              <p className="mb-4">
                With over two decades of expertise in immigration law, Catalina
                Leff offers invaluable guidance and expertise on employee visas
                to numerous companies situated near the San Diego-Mexico border,
                as well as to businesses across Latin America, Europe, and
                Canada.
              </p>

              <p className="mb-4">
                Currently serving as Of Counsel for several law firms thorough
                the United States she provides insights on a wide range of
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

              <p className="mb-4">
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

              <p className="mb-4">
                Attorney Leff also remains committed to aiding these vulnerable
                populations whenever her schedule allows. She is licensed to
                practice in the Supreme Court of California and the Ninth
                Circuit. Ms. Leff earned her bachelor's degree in international
                relations from Pitzer College in Claremont, CA, and completed a
                master's program in international business at Bocconi University
                in Milan, Italy, along with a law degree from Thomas Jefferson
                School of Law in San Diego, CA. She is proficient in several
                languages, including Spanish and Italian, and can converse in
                French. Currently, she also advocates for detained individuals
                before the 9th circuit.
              </p>

              {/* <div className="flex flex-wrap justify-evenly items-center gap-2">
                <img
                  src={lawAward1}
                  alt="Law Award 1"
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-md"
                />
                <img
                  src={lawAward2}
                  alt="Law Award 2"
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-md"
                />
                <img
                  src={lawAward3}
                  alt="Law Award 3"
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-md"
                />
              </div> */}


            </div>
          </div>
        </div>

        {/* Maps and Services Section */}
        <div className="flex flex-col justify-start items-center w-full lg:w-[30%] p-4 gap-6">
          {/* Map Container 1 */}
          <div className="w-full h-[200px] sm:h-[300px] mb-6">
            <div className="font-semibold text-sm">
              9440 S Santa Monica Blvd, Beverly Hills, CA 90210
            </div>
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

          {/* Map Container 2 */}
          <div className="w-full h-[200px] sm:h-[300px] mb-6">
            <div className="font-semibold text-sm">
              888 Prospect St, La Jolla, CA 92037
            </div>
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

          {/* Services Section */}
          <h1 className="underline font-bold text-xl mb-4">Our Services</h1>
            <div className="bg-blue-950 flex flex-col gap-5 p-6 rounded-md w-full text-md font-bold text-neutral-100 text-left">
              <Link to="/areasofpractice" className="hover:underline">
                Employment-Based Immigration{" "}
              </Link>
              <Link to="/areasofpractice" className="hover:underline">
                Humanitarian Visas{" "}
              </Link>
              <Link to="/areasofpractice" className="hover:underline">
                Family Law Immigration{" "}
              </Link>
              <Link to="/areasofpractice" className="hover:underline">
                {" "}
                Non-Immigrant Options through Employment or Investment{" "}
              </Link>
              <Link to="/areasofpractice" className="hover:underline">
                Permanent Residency Through Employment, Self-Petition or
                Investment
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
