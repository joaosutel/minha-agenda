import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import errors from "../../data/pageErrors";

const Errors = ({ errorCode }) => {
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [svg, setSvg] = useState("");

  useEffect(() => {
    const errorData = errors[errorCode];

    setCode(errorData.code);
    setDescription(errorData.description);
    setMessage(errorData.message);
    setSvg(errorData.svg);
  }, [errorCode]);

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">
          {code}
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">
          {description}
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">
          {message}
        </p>
      </div>
      <div className="w-1/2 lg:h-full flex lg:items-end justify-center p-4">
        <ReactSVG
          src={svg}
          wrapper="div"
          beforeInjection={(svg) => {
            svg.setAttribute("style", "width: 30em");
          }}
        />
      </div>
    </div>
  );
};

export default Errors;
