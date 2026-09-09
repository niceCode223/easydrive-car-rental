function SummaryItem({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
        {label}
      </p>

      <p className="text-sm font-semibold text-slate-900 mt-1 break-words">
        {value || "Not provided"}
      </p>
    </div>
  );
}

function SuccessModal({ booking, onClose }) {
  const { vehicle, customer, reference } = booking;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4">

      <div className="bg-white w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl shadow-2xl">

        {/* Success Header */}
        <div className="bg-blue-950 text-white p-7 text-center">

          <div className="mx-auto w-16 h-16 bg-white text-green-600 rounded-full flex items-center justify-center text-3xl font-bold">
            ✓
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-4">
            Booking Submitted Successfully!
          </h2>

          <p className="text-blue-100 mt-2">
            Your booking request has been received.
          </p>

          <div className="mt-5 inline-block bg-white/10 rounded-lg px-5 py-3">
            <p className="text-xs text-blue-200">
              Booking Reference
            </p>

            <p className="text-xl font-bold tracking-wider">
              {reference}
            </p>
          </div>

        </div>

        {/* Content */}
        <div className="p-6 md:p-8">

          {/* Booking Status */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-7">

            <div>
              <p className="text-sm font-semibold text-green-800">
                Booking Status
              </p>

              <p className="text-sm text-green-700 mt-1">
                Your booking is pending confirmation.
              </p>
            </div>

            <span className="inline-flex w-fit px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              Pending Confirmation
            </span>

          </div>

          {/* Vehicle */}
          <div className="mb-8">

            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Vehicle Details
            </h3>

            <div className="bg-white-50 rounded-xl p-5 border-2 border-blue-950 shadow-lg">

              <div className="flex flex-col md:flex-row gap-5">

                <img
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                   className="w-full max-w-[300px] h-[150px] object-contain"
                />

                <div className="flex-1">

                  <p className="text-sm text-blue-900 font-semibold">
                    Selected Vehicle
                  </p>

                  <h4 className="text-2xl font-bold text-slate-900 mt-1">
                    {vehicle.brand} {vehicle.model}
                  </h4>

                  <p className="text-slate-600 mt-2">
                    Daily Rate:{" "}
                    <span className="font-bold text-slate-900">
                      R{vehicle.pricePerDay}
                    </span>
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">

                    {vehicle.year && (
                      <SummaryItem
                        label="Year"
                        value={vehicle.year}
                      />
                    )}

                    {vehicle.transmission && (
                      <SummaryItem
                        label="Transmission"
                        value={vehicle.transmission}
                      />
                    )}

                    {vehicle.seats && (
                      <SummaryItem
                        label="Seats"
                        value={vehicle.seats}
                      />
                    )}

                    {vehicle.fuelType && (
                      <SummaryItem
                        label="Fuel"
                        value={vehicle.fuelType}
                      />
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Customer Details */}
          <div className="mb-8">

            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Customer Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 bg-slate-50 rounded-xl p-5">

              <SummaryItem
                label="First Name"
                value={customer.firstName}
              />

              <SummaryItem
                label="Last Name"
                value={customer.lastName}
              />

              <SummaryItem
                label="Email"
                value={customer.email}
              />

              <SummaryItem
                label="Phone"
                value={customer.phone}
              />

              <SummaryItem
                label="ID / Passport"
                value={customer.idNumber}
              />

            </div>

          </div>

          {/* Pick-up & Return */}
          <div className="mb-8">

            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Rental Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Pick-up */}
              <div className="border border-slate-200 rounded-xl p-5">

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-10 h-10 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center">
                    📍
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Pick-up
                    </h4>

                    <p className="text-xs text-slate-500">
                      Vehicle collection
                    </p>
                  </div>

                </div>

                <div className="space-y-4">

                  <SummaryItem
                    label="Location"
                    value={customer.pickupLocation}
                  />

                  <SummaryItem
                    label="Date"
                    value={customer.pickupDate}
                  />

                  <SummaryItem
                    label="Time"
                    value={customer.pickupTime}
                  />

                </div>

              </div>

              {/* Return */}
              <div className="border border-slate-200 rounded-xl p-5">

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-10 h-10 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center">
                    🏁
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Return
                    </h4>

                    <p className="text-xs text-slate-500">
                      Vehicle return
                    </p>
                  </div>

                </div>

                <div className="space-y-4">

                  <SummaryItem
                    label="Date"
                    value={customer.returnDate}
                  />

                  <SummaryItem
                    label="Time"
                    value={customer.returnTime}
                  />

                </div>

              </div>

            </div>

          </div>

          {/* Additional Notes */}
          {customer.additionalNotes && (
            <div className="mb-8">

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Additional Notes
              </h3>

              <div className="bg-slate-50 rounded-xl p-5 text-sm text-slate-700">
                {customer.additionalNotes}
              </div>

            </div>
          )}

          {/* Confirmation Message */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">

            <h3 className="font-bold text-blue-950">
              What happens next?
            </h3>

            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Our team will review your booking request and
              contact you using the details provided to confirm
              availability and the next steps.
            </p>

          </div>

          {/* Done Button */}
          <div className="flex justify-end mt-7">

            <button
              type="button"
              onClick={onClose}
              className="bg-blue-950 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
            >
              Done
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default SuccessModal;