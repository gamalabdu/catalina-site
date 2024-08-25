// import beverlyHills from '../assets/beverlyhills1.jpeg'
// import laJolla from '../assets/lajolla.jpg'

// const Contact = () => {

//   return (

//     <div className="h-[calc(100vh-60px)] w-full mt-[60px] p-5">

//         <div className="flex flex-col gap-4">

//             <img src={beverlyHills} />

//             <img src={laJolla} />

//         </div>

//     </div>
//   )

// }

// export default Contact







// import { useState } from "react";
// import beverlyHills from "../assets/beverlyhills1.jpeg";
// import laJolla from "../assets/lajolla.jpg";
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// const Contact = () => {
//   const [toast, setToast] = useState("");

//   const position1 : [number, number] = [34.07126300316557, -118.40242592256439]
//   const position2 : [number, number] = [32.84675959921757, -117.27594914467083]

//   const handleCopy = (address: string) => {
//     navigator.clipboard.writeText(address);
//     setToast(`Address copied!`);
//     setTimeout(() => setToast(""), 3000); // Hide toast after 3 seconds
//   };

//   return (
//     <div className="h-[calc(100vh-60px)] w-full mt-[60px] p-10">
//       <div className="p-4">
//         <h1 className="text-2xl font-bold text-gray-900 mb-2">
//           Welcome to Leff Law Group
//         </h1>

//         <p className="text-md text-gray-800 pb-4 font-semibold">
//           At Leff Law Group, we take pride in serving our clients from two of
//           California's most prestigious and iconic locations. Whether you're
//           nestled in the tranquil, coastal enclave of La Jolla or the glamorous,
//           world-renowned streets of Beverly Hills, our commitment to exceptional
//           legal service remains unwavering.
//         </p>

//         <p className="text-md text-gray-800 pb-4 mt-2 font-semibold">
//           Our <b>La Jolla</b> office, situated in the heart of San Diego County,
//           offers a serene environment where you can confidently address your
//           legal needs against the backdrop of stunning ocean views and coastal
//           charm. This location is ideal for clients seeking the peace and
//           expertise of a boutique law firm with the resources of a metropolitan
//           powerhouse.
//         </p>

//         <p className="text-md text-gray-800 pb-4 mt-2 font-semibold">
//           In contrast, our <b>Beverly Hills </b> office is located within one of
//           the most affluent and vibrant communities in the world. Here, our team
//           provides cutting-edge legal solutions in a dynamic, fast-paced
//           setting, reflecting the energy and sophistication of the city itself.
//         </p>

//         <p className="text-md text-gray-800 pb-4 mt-2 font-semibold">
//           At both locations, our experienced attorneys are dedicated to
//           delivering personalized, strategic, and results-driven counsel. We
//           invite you to visit us at the location most convenient for you and
//           discover how Leff Law Group can assist you with your legal needs.
//         </p>
//       </div>

//       <div className="flex flex-col gap-4">
//         {/* Beverly Hills Image with Overlay */}

//         <div className="flex gap-4">


//           <div className="relative group">
//             <img
//               src={beverlyHills}
//               alt="Beverly Hills"
//               className="w-full h-80 object-cover rounded-md"
//             />
//             <div className="absolute inset-0 bg-black h-80 rounded-md bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <p className="text-white text-lg mb-2 font-bold p-2 text-center">
//                 9440 S Santa Monica Blvd, Beverly Hills, CA 90210
//               </p>
//               <button
//                 onClick={() =>
//                   handleCopy(
//                     "9440 S Santa Monica Blvd, Beverly Hills, CA 90210"
//                   )
//                 }
//                 className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-900"
//               >
//                 Copy Address
//               </button>
//             </div>
//           </div>



//           <div className="w-full h-80 mb-6">
//             <MapContainer
//               center={position1}
//               zoom={15}
//               scrollWheelZoom={false}
//               className="w-full h-80 rounded-lg z-0"
//             >
//               <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//               <Marker position={position1}>
//                 <Popup>9440 S Santa Monica Blvd, Beverly Hills, CA 90210</Popup>
//               </Marker>
//             </MapContainer>
//           </div>


//         </div>



//         <div className="flex gap-4">


//         {/* La Jolla Image with Overlay */}
//         <div className="relative group">


//           <img
//             src={laJolla}
//             alt="La Jolla"
//             className="w-full h-80 object-cover rounded-md"
//           />


//          <div className="absolute inset-0 bg-black h-80 rounded-md bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <p className="text-white text-lg mb-2 font-bold p-2 text-center">
//               888 Prospect St, La Jolla, CA 92037
//             </p>
//             <button
//               onClick={() => handleCopy("888 Prospect St, La Jolla, CA 92037")}
//               className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-900"
//             >
//               Copy Address
//             </button>
//           </div>


//         </div>




//         <div className="w-full h-80 mb-6">
//             <MapContainer center={position2} zoom={15} scrollWheelZoom={false} className="w-full h-full rounded-lg z-0">
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               />
//               <Marker position={position2}>
//                 <Popup>888 Prospect St, La Jolla, CA 92037</Popup>
//               </Marker>
//             </MapContainer>
//           </div>


//           </div>


//       </div>

//       {/* Toast Notification */}
//       {toast && (
//         <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-950 text-white px-4 py-2 rounded-md">
//           {toast}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;























import { useState } from "react";
import beverlyHills from "../assets/beverlyhills1.jpeg";
import laJolla from "../assets/lajolla.jpg";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
  const [toast, setToast] = useState("");

   const position1 : [number, number] = [34.07126300316557, -118.40242592256439]
   const position2 : [number, number] = [32.84675959921757, -117.27594914467083]

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setToast(`Address copied!`);
    setTimeout(() => setToast(""), 3000); // Hide toast after 3 seconds
  };

  return (
    <div className="h-[calc(100vh-60px)] w-full mt-[60px] p-10">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome to Leff Law Group
        </h1>

        <p className="text-md text-gray-800 pb-4 font-semibold">
          At Leff Law Group, we take pride in serving our clients from two of
          California's most prestigious and iconic locations. Whether you're
          nestled in the tranquil, coastal enclave of La Jolla or the glamorous,
          world-renowned streets of Beverly Hills, our commitment to exceptional
          legal service remains unwavering.
        </p>

        <p className="text-md text-gray-800 pb-4 mt-2 font-semibold">
          Our <b>La Jolla</b> office, situated in the heart of San Diego County,
          offers a serene environment where you can confidently address your
          legal needs against the backdrop of stunning ocean views and coastal
          charm. This location is ideal for clients seeking the peace and
          expertise of a boutique law firm with the resources of a metropolitan
          powerhouse.
        </p>

        <p className="text-md text-gray-800 pb-4 mt-2 font-semibold">
          In contrast, our <b>Beverly Hills </b> office is located within one of
          the most affluent and vibrant communities in the world. Here, our team
          provides cutting-edge legal solutions in a dynamic, fast-paced
          setting, reflecting the energy and sophistication of the city itself.
        </p>

        <p className="text-md text-gray-800 pb-4 mt-2 font-semibold">
          At both locations, our experienced attorneys are dedicated to
          delivering personalized, strategic, and results-driven counsel. We
          invite you to visit us at the location most convenient for you and
          discover how Leff Law Group can assist you with your legal needs.
        </p>
      </div>

      <div className="w-full text-center text-sm text-neutral-600 mb-4"> (Click image to copy address) </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Beverly Hills Image with Overlay */}
        <div className="relative group lg:w-1/2">
          <img
            src={beverlyHills}
            alt="Beverly Hills"
            className="w-full h-80 object-cover rounded-md"
          />
          <div className="absolute inset-0 bg-black h-80 rounded-md bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg mb-2 font-bold p-2 text-center">
              9440 S Santa Monica Blvd, Beverly Hills, CA 90210
            </p>
            <button
              onClick={() =>
                handleCopy(
                  "9440 S Santa Monica Blvd, Beverly Hills, CA 90210"
                )
              }
              className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-900"
            >
              Copy Address
            </button>
          </div>
        </div>

        {/* Map for Beverly Hills */}
        <div className="lg:w-1/2 h-80">
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

      <div className="flex flex-col lg:flex-row gap-4 mt-4">
        {/* La Jolla Image with Overlay */}
        <div className="relative group lg:w-1/2">
          <img
            src={laJolla}
            alt="La Jolla"
            className="w-full h-80 object-cover rounded-md"
          />
          <div className="absolute inset-0 bg-black h-80 rounded-md bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg mb-2 font-bold p-2 text-center">
              888 Prospect St, La Jolla, CA 92037
            </p>
            <button
              onClick={() => handleCopy("888 Prospect St, La Jolla, CA 92037")}
              className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-900"
            >
              Copy Address
            </button>
          </div>
        </div>

        {/* Map for La Jolla */}
        <div className="lg:w-1/2 h-80">
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

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-950 text-white px-4 py-2 rounded-md">
          {toast}
        </div>
      )}
    </div>
  );
};

export default Contact;
