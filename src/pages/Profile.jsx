import React, { useState } from 'react';
import { useSpring, animated} from '@react-spring/web';
import { AuthContext } from './../provider/AuthProvider';
import { use } from 'react';
import toast from 'react-hot-toast';



const Profile = () => {
    const {user, updateUser, setUser,} = use(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  

  const handleProfileUpdate = (e) =>{
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name= form.name.value;
    updateUser({displayName:name, photoURL: photo})
        .then(()=>{
        setUser({...user, displayName:name, photoURL: photo });
        toast.success("Profile updated successfully!");
        form.reset();
        setIsEditing(false);
        
        
        })
        .catch((error)=>{
          const errorMessage = error.message;
          const errorCode = error.code;
        toast.error(errorCode, errorMessage);
        setUser(user);
        })
  }

  
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 150, friction: 20 },
  });

  
  const formAnimation = useSpring({
    opacity: isEditing ? 1 : 0,
    height: isEditing ? 'auto' : 0,
    transform: isEditing ? 'translateY(0)' : 'translateY(-10px)',
    overflow: 'hidden',
    config: { tension: 170, friction: 20 },
  });

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <animated.div
        style={fadeIn}
        className="bg-[#e6f3f8] shadow-xl rounded-lg p-8 w-full max-w-md text-center border border-blue-100"
      >
        
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-blue-200 flex items-center justify-center text-blue-900 text-sm  shadow-md">
           
            <img className="w-28 h-28 rounded-full " src={user && user.photoURL} alt="" />
          </div>
        </div>

        
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">{user && user.displayName}</h2>
        <p className="text-gray-700 mb-6">{user && user.email}</p>

       
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-blue-900 text-white rounded-full px-6 py-2 text-sm hover:bg-blue-800 transition duration-300"
        >
          {isEditing ? 'Cancel' : 'Update Profile'}
        </button>

        
        <animated.div style={formAnimation}>
          {isEditing && (
            <form onSubmit= {handleProfileUpdate} className="mt-6 flex flex-col gap-4 text-left">
              <div>
                <label className="block text-sm text-blue-900 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full border border-blue-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-blue-900 font-medium mb-1">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo URL"
                  className="w-full border border-blue-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                 className="mt-4 bg-blue-900 text-white rounded-full px-6 py-2 text-sm hover:bg-blue-800 transition duration-300 w-full"
              >
                Save Changes
              </button>
            </form>
          )}
        </animated.div>
      </animated.div>
    </div>
  );
};

export default Profile;
