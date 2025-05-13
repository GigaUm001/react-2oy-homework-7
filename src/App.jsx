import React, { useEffect, useState } from 'react';

const App = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    setUser(data.results[0]);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) return <div className="text-white text-center mt-10">Loading...</div>;

  return (
    <div className="bg-blue-600 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center w-[400px]">
        <h1 className="text-2xl font-semibold mb-4">Random User Generator</h1>
        <div className="flex justify-center mb-4">
          <img
            src={user.picture.large}
            alt={user.name.first}
            className="rounded-full border-4 border-blue-500 w-24 h-24"
          />
        </div>
        <h2 className="font-bold text-lg">{`${user.name.first} ${user.name.last}`}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="mt-1">{`${user.location.city}, ${user.location.country}`}</p>
        <button
          onClick={fetchUser}
          className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Next User
        </button>
      </div>
    </div>
  );
};

export default App;
