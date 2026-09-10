
import b2 from "../assets/images/b2.jpg";

function About() {
  const handleVehiclesClick = () => {
    document.getElementById("vehicle-list")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="about"
      className="relative min-h-[850px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${b2})` }}
    >
      {/* Dark Background Overlay */}
      <div className="absolute inset-0 bg-blue-950/80"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        
        {/* Section Heading */}
        <div className="text-center text-white max-w-4xl mx-auto mb-16">
          <p className="text-blue-200 font-semibold uppercase tracking-[0.25em] text-sm mb-4">
            About EasyDrive
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Your Journey Starts With Us
          </h2>

          <div className="w-24 h-1 bg-white mx-auto mb-7 rounded-full"></div>

          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            At EasyDrive Car Rental, we believe that getting behind the wheel
            should be simple, comfortable, and stress-free. We provide
            dependable vehicles and convenient rental solutions designed to
            make every journey easier.
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          
          {/* About Text */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-5">
              Who We Are
            </h3>

            <p className="text-blue-100 leading-relaxed mb-5">
              EasyDrive Car Rental is a customer-focused vehicle rental
              company dedicated to providing reliable and affordable
              transportation solutions. Whether you are travelling for
              business, enjoying a family holiday, attending an event, or
              simply need a vehicle for your everyday activities, we are here
              to help.
            </p>

            <p className="text-blue-100 leading-relaxed mb-5">
              Our vehicle collection is carefully selected to provide options
              for different lifestyles and budgets. From practical compact
              cars to comfortable family vehicles and premium options, our
              goal is to help you find a vehicle that suits your journey.
            </p>

            <p className="text-blue-100 leading-relaxed">
              We combine straightforward booking, transparent pricing, and
              friendly customer service to create a rental experience that
              puts our customers first.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-blue-950 text-white flex items-center justify-center text-2xl">
                  🎯
                </div>

                <h3 className="text-2xl font-bold text-blue-950">
                  Our Mission
                </h3>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Our mission is to make vehicle rental accessible, convenient,
                and dependable by providing quality vehicles, competitive
                rates, flexible rental options, and excellent customer
                service.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-blue-950 text-white flex items-center justify-center text-2xl">
                  👁
                </div>

                <h3 className="text-2xl font-bold text-blue-950">
                  Our Vision
                </h3>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Our vision is to become a trusted car rental partner in South
                Africa, recognised for convenience, reliability, customer
                satisfaction, and a seamless digital booking experience.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center text-white mb-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-3">
            Why Choose EasyDrive?
          </h3>

          <p className="text-blue-200">
            Everything we do is focused on making your rental experience
            easier and more enjoyable.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 text-center text-white hover:bg-white/20 transition duration-300">
            <div className="text-4xl mb-4">🚗</div>

            <h4 className="text-xl font-bold mb-3">
              Quality Vehicles
            </h4>

            <p className="text-blue-100 text-sm leading-relaxed">
              Choose from a selection of comfortable and reliable vehicles
              suitable for different journeys.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 text-center text-white hover:bg-white/20 transition duration-300">
            <div className="text-4xl mb-4">💰</div>

            <h4 className="text-xl font-bold mb-3">
              Transparent Pricing
            </h4>

            <p className="text-blue-100 text-sm leading-relaxed">
              Know what you are paying for with clear daily rental rates and
              straightforward booking.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 text-center text-white hover:bg-white/20 transition duration-300">
            <div className="text-4xl mb-4">⚡</div>

            <h4 className="text-xl font-bold mb-3">
              Easy Booking
            </h4>

            <p className="text-blue-100 text-sm leading-relaxed">
              Our simple online booking experience helps you find and reserve
              your vehicle with ease.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 text-center text-white hover:bg-white/20 transition duration-300">
            <div className="text-4xl mb-4">🤝</div>

            <h4 className="text-xl font-bold mb-3">
              Customer First
            </h4>

            <p className="text-blue-100 text-sm leading-relaxed">
              We are committed to providing friendly service and helping you
              have a smooth rental experience.
            </p>
          </div>
        </div>

    
      </div>
    </section>
  );
}

export default About;
