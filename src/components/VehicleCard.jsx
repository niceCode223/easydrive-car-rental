
import { useState } from "react";
import BookingModal from "./BookingModal";

function VehicleCard({ vehicle }) {
  const [showBooking, setShowBooking] = useState(false);

  const openBooking = () => {
    setShowBooking(true);
  };

  const closeBooking = () => {
    setShowBooking(false);
  };

  return (
    <>
      {/* Vehicle Card */}
      <div
        className="
          vehicle-card-animation
          w-full bg-white border border-gray-600 rounded-md
          overflow-hidden mb-8 shadow-sm
          hover:shadow-xl
          transition-all duration-500
        "
      >
        {/* Vehicle Header */}
        <div className="px-5 pt-5 text-left">
          <h2 className="text-xl font-bold text-[#073b73]">
            {vehicle.model}
          </h2>

          <p className="text-sm text-gray-600">
            {vehicle.brand} {vehicle.model}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-5 py-5 items-center">

          {/* Vehicle Image */}
          <div className="lg:col-span-3 flex justify-center">
            <img
              src={vehicle.image}
              alt={`${vehicle.brand} ${vehicle.model}`}
              className="
                vehicle-image-animation
                w-full max-w-[300px] h-[150px]
                object-contain
              "
            />
          </div>

          {/* Price Includes */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold text-[#073b73] mb-3">
              PRICE INCLUDES
            </h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-orange-500 font-bold text-lg">
                  ✓
                </span>
                Local Tax
              </li>

              <li className="flex items-center gap-2">
                <span className="text-orange-500 font-bold text-lg">
                  ✓
                </span>
                Vehicle Registration Fee
              </li>

              <li className="flex items-center gap-2">
                <span className="text-orange-500 font-bold text-lg">
                  ✓
                </span>
                Airport/city surcharge
              </li>

              <li className="flex items-center gap-2">
                <span className="text-orange-500 font-bold text-lg">
                  ✓
                </span>
                400 kms
              </li>
            </ul>
          </div>

          {/* Pay on Collection */}
          <div className="lg:col-span-2 border-l border-gray-200 pl-6 text-center">
            <p className="text-sm font-semibold text-gray-700 uppercase">
              Pay on Collection
            </p>

            <p className="text-2xl font-extrabold text-black mt-2">
              ZAR {vehicle.pricePerDay.toFixed(2)}
            </p>

            <button
              type="button"
              onClick={openBooking}
              className="
                mt-3
                bg-[#0755a5]
                hover:bg-[#043f7c]
                text-white
                font-semibold
                px-7 py-3
                rounded-full
                transition-all duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:shadow-lg
              "
            >
              CHOOSE
            </button>

            <p className="text-xs text-gray-700 mt-3">
              Free cancellation*
            </p>
          </div>

          {/* Pay Online */}
          <div className="lg:col-span-3 border-l border-gray-200 pl-6 text-center">
            <p className="text-sm font-semibold text-gray-700 uppercase">
              Pay Online
            </p>

            <p className="text-2xl font-extrabold text-black mt-2">
              ZAR {(vehicle.pricePerDay * 0.95).toFixed(2)}
            </p>

            <button
              type="button"
              onClick={openBooking}
              className="
                mt-3
                bg-orange-600
                hover:bg-orange-700
                text-white
                font-semibold
                px-7 py-3
                rounded-full
                transition-all duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:shadow-lg
              "
            >
              CHOOSE
            </button>

            <p className="text-xs text-gray-700 mt-3">
              SAVE ZAR {(vehicle.pricePerDay * 0.05).toFixed(2)}
            </p>
          </div>
        </div>

        {/* More Details */}
        <div className="px-5 pb-3 flex justify-end"></div>

        {/* Vehicle Specifications */}
        <div className="bg-[#eef3f7] border-t border-gray-200 px-5 py-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-700">

            <span className="font-bold text-black">
              Vehicle Group {vehicle.id}
            </span>

            <span className="flex items-center gap-2">
              <span className="text-xl">♙</span>
              {vehicle.seats} seats
            </span>

            <span className="flex items-center gap-2">
              <span className="text-xl">▣</span>
              5 doors
            </span>

            <span className="flex items-center gap-2">
              <span className="text-xl">╫</span>
              {vehicle.transmission}
            </span>

            <span className="flex items-center gap-2">
              <span className="text-xl">⛽</span>
              {vehicle.fuelType}
            </span>

            <span className="flex items-center gap-2">
              <span className="text-xl">❄</span>
              Air Con
            </span>

          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBooking && (
        <BookingModal
          vehicle={vehicle}
          price={vehicle.pricePerDay}
          onClose={closeBooking}
        />
      )}
    </>
  );
}

export default VehicleCard;

