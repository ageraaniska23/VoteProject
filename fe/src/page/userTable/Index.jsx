import React from "react";

const Index = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-10 py-16 mx-auto relative z-0 text-white shadow-lg bg-transparent">
      <div className="w-full prose text-center max-w-max  mt-0  border border-gray-300 rounded-md">
        <div className="overflow-x-auto sm:overflow-x-hidden">
          <table className="table-auto">
            <thead className="text-black bg-cyan-300">
              <tr className="text-center">
                <th className="px-4 py-2 border border-gray-300">No.</th>
                <th className="px-4 py-2 border border-gray-300">Name</th>
                <th className="px-4 py-2 border border-gray-300">Username</th>
                <th className="px-4 py-2 border border-gray-300">Email</th>
                <th className="px-4 py-2 border border-gray-300">Identity Card</th>
                <th className="px-4 py-2 border border-gray-300">Wallet Adress</th>
                <th className="px-4 py-2 border border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="px-4 py-2 border border-gray-300">1</td>
                <td className="px-4 py-2 border border-gray-300">Ageradasdsa</td>
                <td className="px-4 py-2 border border-gray-300">bang Jali</td>
                <td className="px-4 py-2 border border-gray-300">dasdasdasdada@gmail.com</td>
                <td className="px-4 py-2 border border-gray-300">090313213a12312312312</td>
                <td className="px-4 py-2 border border-gray-300">0x9FE7F62949D50879BB2e8192fc09BFDeF801141f</td>
                <td className="px-4 py-2 border border-gray-300">Ya</td>
              </tr>
              <tr className="text-center">
                <td className="px-4 py-2 border border-gray-300">2</td>
                <td className="px-4 py-2 border border-gray-300">Ageradasdsa</td>
                <td className="px-4 py-2 border border-gray-300">bang Jali</td>
                <td className="px-4 py-2 border border-gray-300">dasdasdasdada@gmail.com</td>
                <td className="px-4 py-2 border border-gray-300">090313213a12312312312</td>
                <td className="px-4 py-2 border border-gray-300">0x9FE7F62949D50879BB2e8192fc09BFDeF801141f</td>
                <td className="px-4 py-2 border border-gray-300">Ya</td>
              </tr>
              <tr className="text-center">
                <td className="px-4 py-2 border border-gray-300">3</td>
                <td className="px-4 py-2 border border-gray-300">Ageradasdsa</td>
                <td className="px-4 py-2 border border-gray-300">bang Jali</td>
                <td className="px-4 py-2 border border-gray-300">dasdasdasdada@gmail.com</td>
                <td className="px-4 py-2 border border-gray-300">090313213a12312312312</td>
                <td className="px-4 py-2 border border-gray-300">0x9FE7F62949D50879BB2e8192fc09BFDeF801141f</td>
                <td className="px-4 py-2 border border-gray-300">Ya</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
