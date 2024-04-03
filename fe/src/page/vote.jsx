/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import VisiModal from "./Modals/VisiModal";
import Modal from "./Modals/VoteModal";
import Naruto from "../assets/image/Vote/naruto.jpg";
import { readContract } from "@wagmi/core";
import abi from "../assets/Abi/KuVt.json";

const Vote = () => {
  const [dataPaslons, setDataPaslons] = useState([]);
  const [visiModalOpen, setVisiModalOpen] = useState(false);
  const [voteModalOpen, setVoteModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await readContract({
          functionName: "getPaslon",
          address: "0xaEA318FE514338f309559796bB44eF70A14C6eeD",
          abi: abi,
        });

        // Update visi dan misi pada setiap kandidat dengan data dari kontrak
        // eslint-disable-next-line no-unused-vars
        const updatedCandidateData = result.map((paslon, index) => ({
          id: `modal_${paslon.noUrut.toString()}`,
          name: `${paslon.ketua} & ${paslon.wakil}`,
          visiMisi: {
            visi: paslon.visi,
            misi: paslon.misi,
          },
        }));

        setDataPaslons(updatedCandidateData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const openVisiModal = (candidate) => {
    setSelectedCandidate(candidate);
    setVisiModalOpen(true);
    setVoteModalOpen(false); // Tutup VoteModal jika terbuka
  };

  const openVoteModal = (candidate) => {
    setSelectedCandidate(candidate);
    setVoteModalOpen(true);
    setVisiModalOpen(false); // Tutup VisiModal jika terbuka
  };

  const closeModal = () => {
    setSelectedCandidate(null);
    setVoteModalOpen(false);
  };

  return (
    <div className="m relative min-h-screen bg-gray-700 flex flex-col justify-center items-center">
      <h2 className="text-gray-50 font-bold text-4xl mb-12 justify-center text-center mt-24">
        PEMILIHAN TIM TERBAIK
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {dataPaslons.map((candidate) => (
          <Card
            key={candidate.id}
            id={candidate.id}
            name={candidate.name}
            visi={candidate.visiMisi.visi}
            misi={candidate.visiMisi.misi}
            openVisiModal={() => openVisiModal(candidate)} // Perbaiki fungsi
            openVoteModal={() => openVoteModal(candidate)} // Perbaiki fungsi
          />
        ))}
      </div>
      {selectedCandidate && (
        <VisiModal
          id={selectedCandidate.id}
          title={`Visi & Misi - ${selectedCandidate.name}`}
          content1={selectedCandidate.visiMisi.visi}
          content2={selectedCandidate.visiMisi.misi}
          isOpen={visiModalOpen} // Menghapus negasi di sini
          onClose={closeModal}
        />
      )}

      {voteModalOpen && (
        <Modal
          isOpen={voteModalOpen}
          onClose={closeModal}
          modalTitle={`Vote - ${selectedCandidate.name}`}
        />
      )}
    </div>
  );
};

const Card = ({ id, name, openVisiModal, openVoteModal }) => (
  <div className="card w-full md:w-80 lg:w-96 bg-base-100 shadow-xl">
    <figure>
      <img src={Naruto} alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-gray-50 font-bold text-5xl justify-center">
        {id.replace("modal_", "")}
      </h2>
      <p className="text-gray-50 text-center mt-4">{name}</p>
      <div className="card-actions justify-end mt-8">
        <button
          className="btn btn-accent hover:text-gray-50 rounded-full"
          onClick={openVisiModal} // Perbaiki fungsi
        >
          Visi & Misi
        </button>
        <button
          className="btn bg-red-600 hover:bg-orange-500 text-gray-950 rounded-full hover:text-gray-50"
          onClick={openVoteModal} // Perbaiki fungsi
        >
          Vote
        </button>
      </div>
    </div>
  </div>
);

export default Vote;
