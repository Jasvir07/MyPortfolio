import img1 from "/Images/HPbg.jpg";

const Landing = () => {
  return (
    <div
      className="w-full bg-cover bg-center text-center py-40 sm:py-56 md:py-72"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <h1 className="text-white text-3xl sm:text-4xl  font-bold mb-2">
        I am Jasvir Singh.
      </h1>
      <h2 className="text-white text-xl sm:text-2xl  mb-6">
        Frontend Developer
      </h2>
      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 sm:px-6 rounded-md text-sm sm:text-lg">
        KNOW ME BETTER
      </button>
    </div>
  );
};

export default Landing;
