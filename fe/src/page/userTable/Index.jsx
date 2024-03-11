import React, { useState, useEffect } from "react";
import { readContract } from "@wagmi/core";
import abi from "../../assets/Abi/KuVt.json";

const Index = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await readContract({
          functionName: "getAllUser",
          address: "0xaEA318FE514338f309559796bB44eF70A14C6eeD",
          abi: abi,
        });

        setUsers(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  });

  return (
    <div className="flex flex-col items-center px-4 md:px-10 py-16 mx-auto relative z-0 text-white shadow-lg bg-transparent">
      <div className="w-full prose text-center max-w-max  mt-0  border border-gray-300 rounded-md">
        <div className="overflow-x-auto sm:overflow-x-hidden">
          <table className="table-auto">
            <thead className="text-black bg-cyan-300">
              <tr className="text-center">
                <th className="px-4 py-2 border border-gray-300">No.</th>
                <th className="px-4 py-2 border border-gray-300">Nama</th>
                <th className="px-4 py-2 border border-gray-300">Username</th>
                <th className="px-4 py-2 border border-gray-300">Email</th>
                {/* <th className="px-4 py-2 border border-gray-300">Nik</th> */}
                <th className="px-4 py-2 border border-gray-300">
                  Wallet Address
                </th>
                {/* <th className="px-4 py-2 border border-gray-300">isVerified</th> */}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="text-center">
                  <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.name}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.username}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {user.email}
                  </td>
                  {/* <td className="px-4 py-2 border border-gray-300">
                    {user.nik}
                  </td> */}
                  <td className="px-4 py-2 border border-gray-300">
                    {user.walletAddress}
                  </td>
                  {/* <td className="px-4 py-2 border border-gray-300">
                    {user.isVerified ? "Ya" : "Tidak"}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
