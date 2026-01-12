import { useEffect, useState } from "react";
import beverlyHills from "../assets/beverlyhills1.jpeg";
import laJolla from "../assets/lajolla.jpg";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  useEffect(() => {
    // Set the tab title when this component is mounted
    document.title = "Leff Law Group - Contact";
  }, []);

  const [toast, setToast] = useState("");

  const position1: [number, number] = [34.07126300316557, -118.40242592256439];
  const position2: [number, number] = [32.84675959921757, -117.27594914467083];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setToast(`${text.includes("@") ? "Email" : "Address"} copied!`);
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <div className="min-h-[calc(100vh-60px)] w-full bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Contact Us
          </h1>
          <div className="w-20 h-1 bg-blue-950 rounded-full mb-6"></div>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
            At Leff Law Group, we take great pride in providing our legal services
            from two of California's most esteemed and recognizable locations.
            Whether you find yourself in the serene coastal community of La Jolla
            or the illustrious and globally recognized streets of Beverly Hills,
            our dedication to delivering outstanding legal assistance remains
            steadfast.
          </p>
        </div>

        {/* Contact Information Card */}
        <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-xl shadow-xl p-8 lg:p-10 mb-10 text-white relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800/20 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-800/20 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-2 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-blue-200 mb-8 text-sm lg:text-base">
              We're here to help with your immigration legal needs
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Email Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-blue-200 mb-2 font-medium uppercase tracking-wide">
                      Email
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <a
                        href="mailto:catalina@lefflawgroup.com"
                        className="text-lg lg:text-xl font-semibold hover:text-blue-200 transition-colors duration-200 break-all"
                      >
                        catalina@lefflawgroup.com
                      </a>
                      <button
                        onClick={() => handleCopy("catalina@lefflawgroup.com")}
                        className="text-blue-200 hover:text-white transition-colors duration-200 text-xs px-3 py-1.5 border border-blue-200 rounded-md hover:bg-blue-200/20 whitespace-nowrap"
                        aria-label="Copy email address"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-blue-200 mb-2 font-medium uppercase tracking-wide">
                      Phone
                    </p>
                    <a
                      href="tel:+13108871401"
                      className="text-lg lg:text-xl font-semibold hover:text-blue-200 transition-colors duration-200 block"
                    >
                      (310) 887-1401
                    </a>
                    <p className="text-xs text-blue-200/80 mt-1">Available during business hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-base lg:text-lg leading-relaxed text-blue-50 mb-4">
                We encourage you to visit the office that is most convenient for you and
                explore how Leff Law Group can support your legal requirements.
              </p>
              <a
                href="mailto:catalina@lefflawgroup.com"
                className="inline-flex items-center gap-2 bg-white text-blue-950 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule a Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Office Locations Section */}
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            Our Office Locations
          </h2>
          <div className="w-20 h-1 bg-blue-950 rounded-full mb-6"></div>
        </div>

        {/* Beverly Hills Office */}
        <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 lg:p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-8 bg-blue-950 rounded-full"></div>
              <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
                Beverly Hills Office
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed pl-4">
              Our Beverly Hills office is situated in one of the most prosperous and lively
              communities worldwide. In this vibrant environment, our team offers innovative
              visa legal solutions tailored to the fast-paced entertainment industry,
              mirroring the city's energy and sophistication.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="relative group rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <img
                src={beverlyHills}
                alt="Beverly Hills Office"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-end pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg mb-3 font-semibold p-2 text-center">
                  9440 S Santa Monica Blvd<br />
                  Beverly Hills, CA 90210
                </p>
                <button
                  onClick={() =>
                    handleCopy("9440 S Santa Monica Blvd, Beverly Hills, CA 90210")
                  }
                  className="bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors text-sm font-medium"
                >
                  Copy Address
                </button>
              </div>
            </div>

            <div className="h-64 rounded-lg overflow-hidden border border-gray-200 shadow-md">
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

          <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-6 border-l-4 border-blue-950 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-950/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wide">Address</p>
                  <p className="text-sm font-semibold text-gray-900 leading-snug">
                    9440 S Santa Monica Blvd<br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-950/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wide">Telephone</p>
                  <a
                    href="tel:+13108871401"
                    className="text-sm font-semibold text-gray-900 hover:text-blue-950 transition-colors block"
                  >
                    (310) 887-1401
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=9440+S+Santa+Monica+Blvd,+Beverly+Hills,+CA+90210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-950 text-white px-4 py-2.5 rounded-lg hover:bg-blue-900 transition-colors text-sm font-semibold text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* La Jolla Office */}
        <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 lg:p-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-8 bg-blue-950 rounded-full"></div>
              <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
                La Jolla Office
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed pl-4">
              Our La Jolla office, located in the center of San Diego County, is
              conveniently positioned near the San Diego/Mexico border, making it an ideal
              hub for serving cross-border businesses with Mexico. We also specialize in
              NAFTA visas and other immigration needs related to global and border business.
              This location is perfect for clients who seek the personalized attention of a
              boutique law firm while benefiting from the resources of an international
              metropolitan leader. Additionally, we are committed to combating human
              trafficking through humanitarian visas, a pressing issue at our borders. Our
              firm is equipped with a dedicated team that specializes in appellate
              litigation within the Ninth Circuit, specifically for individuals who are
              currently detained.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="relative group rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <img
                src={laJolla}
                alt="La Jolla Office"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-end pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg mb-3 font-semibold p-2 text-center">
                  888 Prospect St<br />
                  La Jolla, CA 92037
                </p>
                <button
                  onClick={() => handleCopy("888 Prospect St, La Jolla, CA 92037")}
                  className="bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors text-sm font-medium"
                >
                  Copy Address
                </button>
              </div>
            </div>

            <div className="h-64 rounded-lg overflow-hidden border border-gray-200 shadow-md">
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

          <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-6 border-l-4 border-blue-950 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-950/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wide">Address</p>
                  <p className="text-sm font-semibold text-gray-900 leading-snug">
                    888 Prospect St<br />
                    La Jolla, CA 92037
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-950/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wide">Telephone</p>
                  <a
                    href="tel:+13108871401"
                    className="text-sm font-semibold text-gray-900 hover:text-blue-950 transition-colors block"
                  >
                    (310) 887-1401
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=888+Prospect+St,+La+Jolla,+CA+92037"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-950 text-white px-4 py-2.5 rounded-lg hover:bg-blue-900 transition-colors text-sm font-semibold text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Toast Notification */}
        {toast && (
          <div className="fixed bottom-6 right-6 bg-blue-950 text-white px-6 py-3 rounded-lg shadow-2xl z-50 flex items-center gap-2 animate-[fadeIn_0.3s_ease-in-out] backdrop-blur-sm">
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="font-medium">{toast}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
