import { useEffect, useState } from "react";
import beverlyHills from "../assets/beverlyhills1.jpeg";
import laJolla from "../assets/lajolla.jpg";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  useEffect(() => {
    // Set the tab title when this component is mounted
    document.title = "Leff Law Group - Contact";
  }, []);

  const [toast, setToast] = useState("");

  const position1: [number, number] = [34.07126300316557, -118.40242592256439];
  const position2: [number, number] = [32.84675959921757, -117.27594914467083];

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
          At Leff Law Group, we take great pride in providing our legal services
          from two of California's most esteemed and recognizable locations.
          Whether you find yourself in the serene coastal community of La Jolla
          or the illustrious and globally recognized streets of Beverly Hills,
          our dedication to delivering outstanding legal assistance remains
          steadfast.
        </p>

        <p className="text-md text-gray-800 pb-4 mt-2 font-semibold">
          Our <b>La Jolla</b> office, located in the center of San Diego County,
          is conveniently positioned near the San Diego/Mexico border, making it
          an ideal hub for serving cross-border businesses with Mexico. We also
          specialize in NAFTA visas and other immigration needs related to
          global and border business. This location is perfect for clients who
          seek the personalized attention of a boutique law firm while
          benefiting from the resources of an international metropolitan leader.
          Additionally, we are committed to combating human trafficking through
          humanitarian visas, a pressing issue at our borders. Our firm is
          equipped with a dedicated team that specializes in appellate
          litigation within the Ninth Circuit, specifically for individuals who
          are currently detained.
        </p>

        <p className="text-md text-gray-800 pb-4 mt-2 font-semibold">
          Our <b>Beverly Hills </b> office is situated in one of the most
          prosperous and lively communities worldwide. In this vibrant
          environment, our team offers innovative visa legal solutions tailored
          to the fast-paced entertainment industry, mirroring the city's energy
          and sophistication.
        </p>

        <p className="text-md text-gray-800 pb-4 mt-2 font-semibold">
          At both locations, our skilled attorneys are devoted to providing
          personalized, strategic, and results-oriented legal counsel. We
          encourage you to visit the office that is most convenient for you and
          explore how Leff Law Group can support your legal requirements. Please
          contact us today to schedule an appointment
        </p>
      </div>

      <div className="w-full text-center text-sm text-neutral-600 mb-4">
        {" "}
        (Click image to copy address){" "}
      </div>

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
                handleCopy("9440 S Santa Monica Blvd, Beverly Hills, CA 90210")
              }
              className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-900"
            >
              Copy Address
            </button>
          </div>

          <div className="w-full text-center mt-2 font-semibold">
            Telephone: (310) 887-1401{" "}
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
          <div className="w-full text-center mt-2 font-semibold">
            {" "}
            Telephone: (310)887-1401{" "}
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
