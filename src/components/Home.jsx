import { useState } from "react";

import b1 from "../assets/images/b1.jpg";
import VehicleCard from "../components/VehicleCard";
import vehicles from "../assets/data/vehicles.json";
import locations from "../assets/data/location.json";

function Home({ showVehicles, setShowVehicles }) {
  // ================= LOCATION =================
  const [locationSearch, setLocationSearch] = useState("");
  const [showLocations, setShowLocations] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // ================= BOOKING FORM =================
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");

  const [differentReturnLocation, setDifferentReturnLocation] =
    useState(false);

  const [driverOver25, setDriverOver25] = useState(true);

  // ================= SEARCH STATE =================
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  // ================= LOCATION SEARCH =================
const filteredLocations =
  locationSearch.length >= 3
    ? locations
        .filter((location) => {
          const searchTerm = locationSearch.toLowerCase().trim();

          return (
            location.city?.toLowerCase().includes(searchTerm) ||
            location.province?.toLowerCase().includes(searchTerm)
          );
        })
        .slice(0, 10)
    : [];

const handleLocationSelect = (location) => {
  setLocationSearch(`${location.city}, ${location.province}`);
  setSelectedLocation(location);
  setShowLocations(false);
  setFormError("");
};

  // ================= SHOW VEHICLES =================
  const showVehicleList = () => {
    setShowVehicles(true);

    setTimeout(() => {
      document
        .getElementById("vehicle-list")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 150);
  };

  // ================= FIND CARS =================
  const handleFindCars = (e) => {
    e.preventDefault();

    setFormError("");

    // Validate location
    if (!selectedLocation) {
      setFormError("Please select a pick-up location.");
      return;
    }

    // Validate dates
    if (!dateFrom || !dateTo) {
      setFormError("Please select both dates.");
      return;
    }

    // Validate times
    if (!timeFrom || !timeTo) {
      setFormError(
        "Please select both pick-up and return times."
      );
      return;
    }

    // Validate date order
    if (dateTo < dateFrom) {
      setFormError(
        "Return date cannot be before pick-up date."
      );
      return;
    }

    // Validate same-day times
    if (dateFrom === dateTo && timeTo <= timeFrom) {
      setFormError(
        "Return time must be later than pick-up time."
      );
      return;
    }

    // Everything is valid
    setSearchSubmitted(true);

    // Show vehicle list
    showVehicleList();
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <main id="home"
        className="min-h-[calc(100vh-80px)] w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${b1})` }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Main Content */}
        <div
          className="relative z-10 min-h-[calc(100vh-80px)]
                     max-w-7xl mx-auto px-6 py-12
                     flex items-center"
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10
                       w-full items-center"
          >
            {/* ================= LEFT SIDE ================= */}
            <div className="!text-white">
          <h1 className=" hero-title-animation text-7xl md:text-8xl lg:text-9xl font-bold mb-2 -mt-12 md:-mt-16 !text-white leading-none">
  Easy Drive
</h1>

<h1 className="hero-title-animation text-7xl md:text-8xl lg:text-9xl font-bold mb-6 !text-white leading-none">
  Car Rental
</h1>

              <p className="hero-description-animation text-xl md:text-2xl max-w-lg font-bold mb-6">
                Find the perfect car for your journey.
                Easy booking, great prices and reliable vehicles.
              </p>

              {/* EXPLORE OUR CARS */}
              <button
                type="button"
                onClick={showVehicleList}
                className="hero-button-animation bg-sky-100 hover:bg-blue-900
                           text-blue-900 px-8 py-3 rounded-lg hover:text-white
                           font-semibold transition mt-6"
              >
                Explore Our Cars
              </button>
            </div>

            {/* ================= RIGHT BOOKING BOX ================= */}
            <div
              className="booking-box-animation bg-sky-200 rounded-2xl shadow-2xl
                         p-6 md:p-8 max-w-xl w-full lg:ml-auto"
            >
              <h2 className="text-2xl font-bold text-blue-950 mb-6">
                Find Your Perfect Car
              </h2>

              <form onSubmit={handleFindCars}>

                {/* ================= PICK-UP LOCATION ================= */}
                <div className="mb-5">
                  <label
                    className="block text-sm font-semibold
                               text-blue-950 mb-2"
                  >
                    PICK-UP LOCATION
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      value={locationSearch}
                      onChange={(e) => {
                        setLocationSearch(e.target.value);
                        setSelectedLocation(null);
                        setShowLocations(true);
                        setSearchSubmitted(false);
                        setFormError("");
                      }}
                      onFocus={() => {
                        if (locationSearch.length >= 3) {
                          setShowLocations(true);
                        }
                      }}
                      placeholder="city, province..."
                      className="w-full bg-white border border-slate-300
                                 rounded-lg px-4 py-3
                                 text-slate-800 outline-none
                                 focus:ring-2 focus:ring-blue-800"
                    />

                    {/* LOCATION RESULTS */}
                    {showLocations &&
                      locationSearch.length >= 3 && (
                        <div
                          className="absolute z-50 left-0 right-0 mt-2
                                     bg-white border border-slate-200
                                     rounded-lg shadow-xl
                                     max-h-64 overflow-y-auto"
                        >
                          {filteredLocations.length > 0 ? (
                            filteredLocations.map((location) => (
                              <button
                                key={location.id}
                                type="button"
                                onClick={() =>
                                  handleLocationSelect(location)
                                }
                                className="w-full text-left px-4 py-3
                                           hover:bg-slate-100
                                           border-b border-slate-100
                                           transition"
                              >
                                <p className="font-semibold text-blue-950">
                                  {location.city}
                                </p>

                                <p className="text-sm text-slate-500">
                                  {location.province}, South Africa
                                </p>
                              </button>
                            ))
                          ) : (
                            <div className="px-4 py-4 text-sm text-slate-500">
                              No locations found
                            </div>
                          )}
                        </div>
                      )}
                  </div>

                  {/* Selected Location */}
                  {selectedLocation && (
                    <p className="text-xs text-green-700 mt-2">
                      Selected: {selectedLocation.city},{" "}
                      {selectedLocation.province}
                    </p>
                  )}
                </div>

                {/* ================= RETURN LOCATION ================= */}
                <div className="flex items-center gap-3 mb-6">
                  <input
                    type="checkbox"
                    checked={differentReturnLocation}
                    onChange={(e) =>
                      setDifferentReturnLocation(
                        e.target.checked
                      )
                    }
                    className="w-5 h-5 accent-blue-950"
                  />

                  <span className="text-sm font-medium text-slate-700">
                    Choose a different return location
                  </span>
                </div>

                {/* ================= DATES ================= */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {/* Date From */}
                  <div>
                    <label
                      className="block text-sm font-semibold
                                 text-blue-950 mb-2"
                    >
                      DATE FROM
                    </label>

                    <input
                      type="date"
                      value={dateFrom}
                      onChange={(e) => {
                        setDateFrom(e.target.value);
                        setSearchSubmitted(false);
                        setFormError("");
                      }}
                      className="w-full bg-white border border-slate-300
                                 rounded-lg px-4 py-3
                                 text-slate-800 outline-none
                                 focus:ring-2 focus:ring-blue-800"
                    />
                  </div>

                  {/* Date To */}
                  <div>
                    <label
                      className="block text-sm font-semibold
                                 text-blue-950 mb-2"
                    >
                      DATE TO
                    </label>

                    <input
                      type="date"
                      value={dateTo}
                      min={dateFrom}
                      onChange={(e) => {
                        setDateTo(e.target.value);
                        setSearchSubmitted(false);
                        setFormError("");
                      }}
                      className="w-full bg-white border border-slate-300
                                 rounded-lg px-4 py-3
                                 text-slate-800 outline-none
                                 focus:ring-2 focus:ring-blue-800"
                    />
                  </div>
                </div>

                {/* ================= TIMES ================= */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

                  {/* Time From */}
                  <div>
                    <label
                      className="block text-sm font-semibold
                                 text-blue-950 mb-2"
                    >
                      TIME FROM
                    </label>

                    <input
                      type="time"
                      value={timeFrom}
                      onChange={(e) => {
                        setTimeFrom(e.target.value);
                        setSearchSubmitted(false);
                        setFormError("");
                      }}
                      className="w-full bg-white border border-slate-300
                                 rounded-lg px-4 py-3
                                 text-slate-800 outline-none
                                 focus:ring-2 focus:ring-blue-800"
                    />
                  </div>

                  {/* Time To */}
                  <div>
                    <label
                      className="block text-sm font-semibold
                                 text-blue-950 mb-2"
                    >
                      TIME TO
                    </label>

                    <input
                      type="time"
                      value={timeTo}
                      onChange={(e) => {
                        setTimeTo(e.target.value);
                        setSearchSubmitted(false);
                        setFormError("");
                      }}
                      className="w-full bg-white border border-slate-300
                                 rounded-lg px-4 py-3
                                 text-slate-800 outline-none
                                 focus:ring-2 focus:ring-blue-800"
                    />
                  </div>
                </div>

                {/* ================= DRIVER AGE ================= */}
                <div className="mt-6">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={driverOver25}
                      onChange={(e) =>
                        setDriverOver25(e.target.checked)
                      }
                      className="w-5 h-5 accent-blue-950"
                    />

                    <span className="text-slate-700 font-medium">
                      Driver aged over 25
                    </span>
                  </label>
                </div>

                {/* ================= ERROR MESSAGE ================= */}
                {formError && (
                  <div
                    className="mt-5 bg-red-100 border border-red-300
                               text-red-700 px-4 py-3 rounded-lg text-sm"
                  >
                    {formError}
                  </div>
                )}

                {/* ================= FIND CARS ================= */}
                <button
                  type="submit"
                  className="w-full md:w-64 mx-auto block mt-8
                             bg-blue-950 hover:bg-blue-900
                             text-white py-3 rounded-full
                             font-bold transition shadow-lg"
                >
                  FIND CARS
                </button>

              </form>
            </div>
          </div>
        </div>
      </main>

      {/* ================= VEHICLES ================= */}
      {showVehicles && (
        <section
          id="vehicle-list"
          className="w-full bg-slate-50 py-16"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

            {/* Search Summary */}
            {searchSubmitted && selectedLocation && (
              <div className="bg-white rounded-xl shadow-sm
                              border border-slate-200
                              p-5 mb-10"
              >
                <h3 className="text-lg font-bold text-blue-950 mb-4">
                  Your Search
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2
                                lg:grid-cols-5 gap-4 text-sm">

                  <div>
                    <p className="text-slate-500">
                      Pick-up
                    </p>
                    <p className="font-semibold text-slate-800">
                      {selectedLocation.city}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">
                      Date From
                    </p>
                    <p className="font-semibold text-slate-800">
                      {dateFrom}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">
                      Time From
                    </p>
                    <p className="font-semibold text-slate-800">
                      {timeFrom}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">
                      Date To
                    </p>
                    <p className="font-semibold text-slate-800">
                      {dateTo}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">
                      Time To
                    </p>
                    <p className="font-semibold text-slate-800">
                      {timeTo}
                    </p>
                  </div>

                </div>
              </div>
            )}

            {/* Section Heading */}
            <div className="text-center mb-10">
              <h1 className="text-blue-800 font-semibold uppercase tracking-wider mb-4">
                Our Fleet
              </h1>

              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-4">
                Featured Vehicles
              </h2>

             
            </div>
 <p className="text-center text-slate-600 mb-8">
                Choose from our selection of reliable, comfortable
                and affordable vehicles for your next journey.
              </p>
            {/* Vehicle Cards */}
            <div className="flex flex-col gap-6 mt-4">
              {vehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  vehicle={vehicle}
                />
              ))}
            </div>

          </div>
        </section>
      )}
    </>
  );
}

export default Home;