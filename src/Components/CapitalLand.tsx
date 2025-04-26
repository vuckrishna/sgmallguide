import { CapitaLandMallsList } from "./CapitalLandList";

const CapitalLand = () => {
  return (
    <>
      <div
        className="flex flex-wrap m-1 p-2 bg-blue-800 rounded-md justify-center text-md
      xl:rounded-xl xl:text-lg text-bold xl:m-2 xl:justify-start"
      >
        <h1 className="mb-4 text-white font-bold text-xl mt-4 xl:ml-8 xl:text-2xl">
          CapitaLand Shopping Malls
        </h1>
        <ul className="flex flex-wrap gap-0 justify-center mb-6 xl:mb-4 xl:gap-0 xl:ml-6 xl:justify-start">
          {CapitaLandMallsList.map(function (mall) {
            return (
              <li className="justify-items-center">
                <a href={mall.link} className="justify-center">
                {/* justify-items-center bg-gray-200 m-2 p-4 rounded-lg xxs:m-1 xxs:w-40 xxs:text-sm xs:w-44 xs:text-base xl:rounded-xl xl:p-2 xl:w-56 xl:h-30 */}
                  <div className="justify-items-center bg-gray-200 m-2 p-4 rounded-lg xxs:m-1 xxs:w-40 xxs:text-sm xs:w-44 xs:text-base xl:rounded-xl xl:text-lg font-medium xl:p-2 xl:w-56 xl:h-30">
                    <img
                      src={mall.pic}
                      alt=""
                      className="h-8 m-0 xl:h-12 xl:mt-1"
                    />
                    <p className="mt-4">{mall.name}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CapitalLand;
