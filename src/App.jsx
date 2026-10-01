import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  useEffect(function () {
    const GetData = async () => {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=16`
      );

      setUserData(response.data);

    };

    GetData();
  }, [index]);

  return (
    <div className="bg-black min-h-screen p-4 text-white">

      {userData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

          {userData.map(function (user) {
            return (
              <div
                key={user.id}
                className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-green-500 transition duration-300 hover:-translate-y-2"
              >

                <a
                  href={user.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <img
                    src={user.download_url}
                    alt={user.author}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-4">

                    <h2 className="text-xl font-semibold mb-2">
                      {user.author}
                    </h2>

                    <p className="text-zinc-400 text-sm mb-4">
                      Image ID: {user.id}
                    </p>

                  </div>

                </a>

              </div>
            );
          })}

        </div>
      ) : (
        <h1 className="text-center mt-10 text-2xl">
          User Not Available
        </h1>
      )}

      <div className="w-full flex gap-6 justify-center items-center m-4">
        <button
          onClick={() => { setIndex(index > 0 ? index - 1 : 0) }}
          className="px-4 py-2 rounded bg-amber-300 text-black active:scale-95"
        >
          Prev
        </button>
        <button
          onClick={() => { setIndex(index + 1) }}
          className="px-4 py-2 rounded bg-amber-300 text-black active:scale-95"
        >
          Next
        </button>
      </div>

    </div>
  );
}

export default App;