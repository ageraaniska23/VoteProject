import React, { useState, useEffect } from "react";
import { readContract } from "@wagmi/core";
import abi from "../../assets/Abi/KuVt.json";

const Index = () => {
  const [dataPaslons, setDataPaslons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await readContract({
          functionName: "getPaslon",
          address: "0xaEA318FE514338f309559796bB44eF70A14C6eeD",
          abi: abi,
        });

        setDataPaslons(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  const InfoWinner = () => {
    return (
      <div className="flex flex-col items-center px-4 md:px-10 py-16 mx-auto relative z-0 text-white shadow-lg bg-transparent">
        <div className="w-full prose text-center max-w-max border border-gray-300 rounded-md">
          <div className="overflow-x-auto sm:overflow-x-hidden">
            <table className="table-auto">
              <thead className="text-black bg-cyan-300">
                <tr className="text-center">
                  <th className="px-4 py-2 border border-gray-300">No.</th>
                  <th className="px-4 py-2 border border-gray-300">Nama Calon</th>
                  <th className="px-4 py-2 border border-gray-300">Jumlah Suara</th>
                </tr>
              </thead>
              <tbody>
                {dataPaslons.map((paslon, index) => (
                  <tr key={index} className="text-center">
                    <td className="px-4 py-2 border border-gray-300">{paslon.noUrut.toString()}</td>
                    <td className="px-4 py-2 border border-gray-300">{`${paslon.ketua} & ${paslon.wakil}`}</td>
                    <td className="px-4 py-2 border border-gray-300">{paslon.voteCount.toString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return <InfoWinner />;
};

export default Index;
