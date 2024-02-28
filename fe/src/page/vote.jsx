import React from "react";
import VisiModal from "./Modals/VisiModal"; 
// import VoteModal from './Modals/VoteModal'
import Naruto from '../assets/image/Vote/naruto.jpg';

const Vote = () => {
  const openModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="min-h-screen bg-gray-700 flex justify-center items-center">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Card 1 */}
        <div className="card w-full md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={Naruto}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-50 font-bold text-5xl justify-center">01</h2>
            <p className="text-gray-50 text-center mt-4">
              PASLON 01
            </p>
            <div className="card-actions justify-end mt-8">
              <button className="btn btn-accent hover:text-gray-50" onClick={() => openModal('modal_1')}>Visi & Misi</button>
              <button className="btn bg-red-600 hover:bg-orange-500 text-gray-950 hover:text-gray-50">Vote</button>
            </div>
          </div>
        </div>
        {/* Modal 1 */}
        <VisiModal
          id="modal_1"
          title="Visi & Misi - PASLON 01"
          content1="Visi : Membangun isekai"
          content2=" Misi : Membangun sekolah khusus koding bagi balita"
          onClose={() => document.getElementById('modal_1').close()}
        />

        {/* Card 2 */}
        <div className="card w-full md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={Naruto}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-50 font-bold text-5xl justify-center">02</h2>
            <p className="text-gray-50 text-center mt-4">
              PASLON 02
            </p>
            <div className="card-actions justify-end mt-8">
              <button className="btn btn-accent hover:text-gray-50" onClick={() => openModal('modal_2')}>Visi & Misi</button>
              <button className="btn bg-red-600 hover:bg-orange-500 text-gray-950 hover:text-gray-50">Vote</button>
            </div>
          </div>
        </div>
        {/* Modal 2 */}
        <VisiModal
          id="modal_2"
          title="Visi & Misi - PASLON 02"
          content1="Visi : Membangun isekai"
          content2=" Misi : Membangun sekolah khusus koding bagi balita"
          onClose={() => document.getElementById('modal_2').close()}
        />

        {/* Card 3 */}
        <div className="card w-full md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={Naruto}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-50 font-bold text-5xl justify-center">03</h2>
            <p className="text-gray-50 text-center mt-4">
              PASLON 03
            </p>
            <div className="card-actions justify-end mt-8">
              <button className="btn btn-accent hover:text-gray-50" onClick={() => openModal('modal_3')}>Visi & Misi</button>
              <button className="btn bg-red-600 hover:bg-orange-500 text-gray-950 hover:text-gray-50">Vote</button>
            </div>
          </div>
        </div>
        {/* Modal 3 */}
        <VisiModal
          id="modal_3"
          title="Visi & Misi - PASLON 03"
          content1="Visi : Membangun isekai"
          content2=" Misi : Membangun sekolah khusus koding bagi balita"
          onClose={() => document.getElementById('modal_3').close()}
        />

        {/* Repeat the above structure for other cards and modals */}
        
      </div>
    </div>
  );
};

export default Vote;
