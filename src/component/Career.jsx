const Careers = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-200 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Help us build the future of pet care services. We’re always looking
            for passionate and talented people.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Work With Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Friendly Environment</h3>
            <p className="text-gray-600">
              Work with a supportive and passionate team that truly loves pets.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
            <p className="text-gray-600">
              Learn, grow, and advance your career with continuous
              opportunities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Meaningful Impact</h3>
            <p className="text-gray-600">
              Make a real difference in the lives of pets and their owners.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Open Positions
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Pet Groomer</h3>
              <p className="text-gray-600 mt-2">
                Responsible for grooming and caring for pets with love and
                professional skill.
              </p>
              <button className="mt-4 bg-blue-900 text-white px-5 py-2 rounded hover:rounded-full">
                Apply Now
              </button>
            </div>

            <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Veterinary Assistant</h3>
              <p className="text-gray-600 mt-2">
                Support veterinarians in daily checkups, treatments, and pet
                care.
              </p>
              <button className="mt-4 bg-blue-900 text-white px-5 py-2 rounded hover:rounded-full">
                Apply Now
              </button>
            </div>

            <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Customer Support Executive</h3>
              <p className="text-gray-600 mt-2">
                Assist customers with bookings, inquiries, and service support.
              </p>
              <button className="mt-4 bg-blue-900 text-white px-5 py-2 rounded hover:rounded-full">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
