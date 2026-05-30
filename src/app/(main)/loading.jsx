import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[80vh] gap-5">
      <span className="loading loading-ring loading-xl text-[#24B1B1]"></span>
      <p className="text-lg font-medium bg-linear-to-r from-[#24B1B1] to-[#007979] bg-clip-text text-transparent">
        Loading SportNest...
      </p>
    </div>
    );
};

export default Loading;