
const Navigation = () => {
  return (
    <div className="flex bg-black text-white font-bold text-lg p-4 justify-center 
    md:text-lg xl:text-xl xl:justify-start">
      <ul className="flex gap-10 xl:ml-4">
        <li>SG Mall Guide</li>
        <li>About</li>
        <li>Contact</li>
        {/* <li>Search <span className='bg-gray-400 px-24 m-6 rounded'></span></li> */}
      </ul>
    </div>
  );
};

export default Navigation;
