import React from "react";

export const Explore = () => {
  return (
    <div className="flex-grow  w-full px-8 py-12">
      <h1 className="text-center mb-8">
        <span className="block text-4xl font-bold">Explore Public Ardrive</span>
      </h1>
      <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-4 justify-items-center 2xl:max-2xl:w-4/6 xl:w-full md:w-full mx-auto">
        {[1, 2, 3, 4, 5, 6].map(a => (
          <div className="card bg-primary 2xl:w-96 xl:w-96 w-full text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Card {a}</h2>
              <p>Content for card {a}</p>
              <div className="card-actions justify-end">
                <button className="btn">Button</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
