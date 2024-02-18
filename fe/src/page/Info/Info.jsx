import React from 'react';

const Info = () => {
  const totalPemilih = 30000000;
  const sudahMemilih = 14000000;
  const progress = (sudahMemilih / totalPemilih) * 100;

  return (
    <div className="flex justify-start md:justify-center md:mr-12 mt-12 items-center mx-auto relative z-10 w-full ">
      <div className="stats bg-primary text-primary-content p-2 md:p-0 md:flex md:items-center text-center w-full md:w-auto">
        <div className="stat md:mr-8">
          <div className="stat-title text-white text-sm">Progres</div>
          <div className="stat-value items-center justify-center text-sm">{progress.toFixed(4)}%</div>
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
