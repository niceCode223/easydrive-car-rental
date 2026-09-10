import { useState } from "react";
import SuccessModal from "./SuccessModal";

function BookingModal({ vehicle, onClose }) {

const vehicleImages = import.meta.glob(
  "../assets/vehicles/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  }
);

const getVehicleImage = (imageName) => {
  return vehicleImages[`../assets/vehicles/${imageName}`];
};
  const [showSuccess, setShowSuccess] = useState(false);
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    idNumber: "",
    pickupLocation: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    additionalNotes: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "idNumber",
      "pickupLocation",
      "pickupDate",
      "pickupTime",
      "returnDate",
      "returnTime",
    ];

    const missingField = requiredFields.some(
      (field) => !formData[field]
    );

    if (missingField) {
      setError("Please complete all required fields.");
      return;
    }

    if (!formData.agreeTerms) {
      setError(
        "Please agree to the terms and conditions."
      );
      return;
    }

    if (formData.returnDate < formData.pickupDate) {
      setError(
        "Return date cannot be before pick-up date."
      );
      return;
    }

    if (
      formData.pickupDate === formData.returnDate &&
      formData.returnTime <= formData.pickupTime
    ) {
      setError(
        "Return time must be later than pick-up time."
      );
      return;
    }

    const bookingReference =
      "ED-" + Date.now().toString().slice(-8);

    const bookingData = {
      reference: bookingReference,
      vehicle: vehicle,
      customer: formData,
    };

    setBooking(bookingData);
    setShowSuccess(true);
  };

  return (
    <>
      {/* Booking Form Modal */}
      {!showSuccess && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          onClick={onClose}
        >
          <div
            className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Header */}
            <div className="sticky top-0 z-10 bg-blue-950 text-white border-b border-slate-200 px-6 py-5 flex items-center justify-between">

              <div>
                <h2 className="text-2xl font-bold text-white-900">
                  Complete Your Booking
                </h2>

                <p className="text-sm text-white-500 mt-1">
                  {vehicle.brand} {vehicle.model}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="text-slate-500 hover:text-slate-900 text-2xl"
              >
                ✕
              </button>

            </div>

            <form
              onSubmit={handleSubmit}
              className="p-6"
            >

              {/* Selected Vehicle */}
              <div className="bg-white rounded-xl p-5 mb-7 border-2 border-blue-950 shadow-xl">

                <div className="flex flex-col sm:flex-row gap-5">

                 <img
  src={getVehicleImage(vehicle.image)}
  alt={`${vehicle.brand} ${vehicle.model}`}
  className="w-full max-w-[300px] h-[150px] object-contain"
/>

                  <div>
                    <p className="text-sm text-blue-900 font-semibold">
                      Selected Vehicle
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-1">
                      {vehicle.brand} {vehicle.model}
                    </h3>

                    <p className="text-slate-600 mt-2">
                      R{vehicle.pricePerDay} per day
                    </p>
                  </div>

                </div>

              </div>

              {/* Customer Details */}
              <div className="mb-7">

                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Customer Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name *
                    </label>

                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter first name"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name *
                    </label>

                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter last name"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      ID / Passport Number *
                    </label>

                    <input
                      type="text"
                      name="idNumber"
                      value={formData.idNumber}
                      onChange={handleChange}
                      placeholder="Enter ID or passport number"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3"
                    />
                  </div>

                </div>

              </div>

              {/* Booking Details */}
              <div className="mb-7">

                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Booking Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Pick-up Location *
                    </label>

                    <input
                      type="text"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      placeholder="Enter pick-up location"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Pick-up Date *
                    </label>

                    <input
                      type="date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleChange}
                      className="w-full border border-slate-300 rounded-lg px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Pick-up Time *
                    </label>

                    <input
                      type="time"
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleChange}
                      className="w-full border border-slate-300 rounded-lg px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Return Date *
                    </label>

                    <input
                      type="date"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleChange}
                      className="w-full border border-slate-300 rounded-lg px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Return Time *
                    </label>

                    <input
                      type="time"
                      name="returnTime"
                      value={formData.returnTime}
                      onChange={handleChange}
                      className="w-full border border-slate-300 rounded-lg px-4 py-3"
                    />
                  </div>

                </div>

              </div>

              {/* Additional Notes */}
              <div className="mb-7">

                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Additional Notes
                </label>

                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Any additional information..."
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 resize-none"
                />

              </div>

              {/* Terms */}
              <div className="mb-5">

                <label className="flex items-start gap-3">

                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5"
                  />

                  <span className="text-sm text-slate-600">
                    I agree to the booking terms and conditions *
                  </span>

                </label>

              </div>

              {/* Error */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-5">
                  {error}
                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-end gap-3">

                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-7 py-3 rounded-lg bg-blue-950 text-white font-semibold hover:bg-blue-900"
                >
                  Confirm Booking
                </button>

              </div>

            </form>

          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && booking && (
        <SuccessModal
          booking={booking}
          onClose={onClose}
        />
      )}
    </>
  );
}

export default BookingModal;