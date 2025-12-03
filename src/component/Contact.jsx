const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-blue-200 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions or need help? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">support@warmpaws.com</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">
              123 Pet Street, New York, USA
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form (Static) */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            Send Us a Message
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                className="w-full border px-4 py-3 rounded-md"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                className="w-full border px-4 py-3 rounded-md"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows="5"
                className="w-full border px-4 py-3 rounded-md"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="button"
              className="bg-blue-900 text-white px-8 py-3 rounded-md hover:rounded-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
