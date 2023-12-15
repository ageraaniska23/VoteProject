import React from 'react';

const Admin = () => {
  return (
    <div className="bg-blue-950 h-screen">
      <div className="grid grid-rows-3 grid-flow-col gap-4 mt-14">
        <div className="row-span-3 ...">
          01
        </div>
        <div className="col-span-2 ...">02</div>
        <div className="row-span-2 col-span-2 ...">03</div>
      </div>
    </div>
  );  
};

export default Admin;