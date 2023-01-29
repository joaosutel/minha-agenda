import React from "react";

export default function Modal({ element }) {
  // const makeModalContent = useCallback(
  //   (item, type) => {
  //     let modalContent;
  //     let modalIcon;
  //     let modalIconColor;
  //     let modalTitle;
  //     let modalTitleColor;

  //     if (type === "delete") {
  //       modalContent = (
  //         <Delete modalType={type} data={data} actions={actions} />
  //       );
  //       modalIcon = (
  //         <MdDeleteForever className="text-6xl font-bold dark:text-red-600 text-red-500" />
  //       );
  //       modalIconColor = "border-red-500 dark:border-red-600";
  //       modalTitle = "Are you sure?";
  //       modalTitleColor = "text-red-500 dark:text-red-600";
  //     } else if (item === "product") {
  //       modalContent = (
  //         <Product modalType={type} data={data} actions={actions} />
  //       );
  //       modalIcon = (
  //         <MdCreate className="text-6xl font-bold dark:text-gray-300 text-slate-500" />
  //       );
  //       modalIconColor = "border-slate-500 dark:border-gray-300";
  //       modalTitle = capitalize(type);
  //       modalTitleColor = "text-slate-500 dark:text-gray-300";
  //     }

  //     setIcon(modalIcon);
  //     setIconColor(modalIconColor);
  //     setTitle(modalTitle);
  //     setContent(modalContent);
  //     setColorTitle(modalTitleColor);
  //   },
  //   [data, actions]
  // );

  // useEffect(() => {
  //   makeModalContent(item, modalType);
  // }, [item, modalType, makeModalContent]);

  return (
    <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="w-full max-w-3xl h-4xl px-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
        {/* <div className="flex flex-col items-center text-center px-10 pt-10 pb-7 flex-auto justify-center">
          <div className={`border border-4 rounded-full p-4 ${iconColor}`}>
            {icon}
          </div>
          <h2 className={`text-2xl font-bold pt-4 ${titleColor}`}>{title}</h2>
        </div> */}
        {element}
      </div>
    </div>
  );
}
