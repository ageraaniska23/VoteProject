import React from 'react';

const Info = () => {
  const totalPemilih = 823236;
  const sudahMemilih = 641844;
  const progress = (sudahMemilih / totalPemilih) * 100;

  return (
    <div className="flex justify-center mt-12 mx-auto relative z-10">
      <div className="stats bg-cyan-400 text-primary-content p-1 md:p-1 md:flex md:items-center text-center rounded-3xl">
        <div className="stat md:mr-8">
          <div className="stat-title text-white text-sm">Progres</div>
          <div className="stat-value text-sm">{progress.toFixed(2)}%</div>
        </div>
        <div className="stat md:mr-8">
          <div className="stat-title text-white text-sm">Jumlah Pemilih</div>
          <div className="stat-value text-sm">{totalPemilih}</div>
        </div>
        <div className="stat">
          <div className="stat-title text-white text-sm">Sudah Memilih</div>
          <div className="stat-value text-sm">{sudahMemilih}</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
