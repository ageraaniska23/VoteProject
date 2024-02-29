import React from "react";

const Index = () => {
  return (
    <div className="flex flex-col items-center px-10 py-16 mx-auto relative z-0 text-white shadow-lg bg-transparent">
      <div className="w-full prose text-center max-w-max lg:max-w-2xl mt-0">
        <table className="rounded-lg overflow-hidden table ">
        <thead className=" text-white">
            <tr className="text-center">
              <th>No.</th>
              <th>Name</th>
              <th>Username</th>
              <th>Emmail</th>
              <th>Status Pemmilih</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>1</td>
              <td>Agera</td>
              <td>bang Jali</td>
              <td>ada@gmail.com</td>
              <td>Ya</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;
