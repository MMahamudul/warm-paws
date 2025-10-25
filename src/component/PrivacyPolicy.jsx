import React from "react";
import MyContainer from "../component/MyContainer";
import { useNavigate } from 'react-router';

const PrivacyPolicy = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-white text-blue-900 min-h-screen py-12">
      <MyContainer>
        <div className="max-w-3xl mx-auto p-6 bg-[#e6f3f8] shadow-md rounded-lg border border-blue-100">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Privacy Policy
          </h1>

          <p className="text-sm text-gray-700 text-center mb-10">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-6 text-blue-950 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-lg font-semibold mb-2">1. Introduction</h2>
              <p>
                At <span className="font-semibold">WarmPaws</span>, your privacy is our top priority. 
                This policy outlines how we collect, use, and protect your personal information when you use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">2. Information We Collect</h2>
              <p>
                We may collect information such as your name, email address, and profile details when you register or interact with our services. 
                This information helps us personalize your experience and improve our offerings.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>To provide and maintain our services</li>
                <li>To improve website functionality and user experience</li>
                <li>To communicate with you regarding updates or support</li>
                <li>To ensure the safety and security of our users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">4. Data Security</h2>
              <p>
                We use secure systems and practices to protect your personal data. 
                However, please note that no online method of transmission is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">5. Cookies</h2>
              <p>
                Our website may use cookies to enhance your browsing experience. 
                You can choose to disable cookies in your browser settings if you prefer.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:  
                <span className="block font-medium mt-1">support@warmpaws.com</span>
              </p>

              <button
          onClick={() => navigate(-1)}
          className="btn bg-blue-900 text-white rounded-sm py-2 px-6 my-3 text-sm hover:bg-blue-800 transition"
        >
          Return
        </button>
            </section>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-blue-800">
              © {new Date().getFullYear()} WarmPaws. All Rights Reserved.
            </p>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default PrivacyPolicy;
