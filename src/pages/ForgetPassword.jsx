import React, { useRef, useState, useEffect } from 'react';
import MyContainer from '../component/MyContainer';
import { useLocation, useNavigate } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
  const { passwordReset } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // Pre-fill email if passed via state
  useEffect(() => {
    if (location.state?.email) {
      emailRef.current.value = location.state.email;
    }
  }, [location.state]);

  const handlePasswordReset = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setLoading(true);
    passwordReset(email)
      .then(() => {
        toast.success(
          'A password reset link has been sent to your email address'
        );
        // Redirect to login after success
        navigate('/auth/signin');
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <MyContainer>
      <div className="min-h-screen flex items-center justify-center bg-white p-6">
        <div className="bg-[#e6f3f8] shadow-xl rounded-lg p-8 w-full max-w-md text-center border border-blue-100">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Reset Your Password
          </h2>
          <form onSubmit={handlePasswordReset} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm text-blue-900 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                ref={emailRef}
                placeholder="Enter your email"
                className="w-full border border-blue-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-blue-900 text-white rounded-full px-6 py-2 text-sm hover:bg-blue-800 transition duration-300"
            >
              {loading ? 'Sending...' : 'Reset Password'}
            </button>
          </form>
        </div>
      </div>
    </MyContainer>
  );
};

export default ForgotPassword;
