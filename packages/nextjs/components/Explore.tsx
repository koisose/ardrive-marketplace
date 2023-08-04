import React from "react";

export const Explore = () => {
  return (
    <div className="flex-grow  w-full px-8 py-12">
      <h1 className="text-center mb-8">
        <span className="block text-4xl font-bold">Explore Public Ardrive</span>
      </h1>
      <div className="flex justify-center items-center gap-12 sm:flex-row">
        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <p>First pick your ardrive public drive</p>
        </div>

        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <p>Pick UDL license you like</p>
        </div>

        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <p>Wait, for somebody to make an offer so that they can see your public ardrive</p>
        </div>
      </div>
    </div>
  );
};
