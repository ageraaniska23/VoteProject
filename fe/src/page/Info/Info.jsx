import React from 'react'

const Info = () => {
    const totalPemilih = 30000000;
  const sudahMemilih = 14000000;
  const progress = (sudahMemilih / totalPemilih) * 100;

  return (
    
      <div className="flex justify-end mr-12 mt-6 items-center mx-auto relative z-10">
        <div className="stats bg-primary text-primary-content">
          <div className="stat">
            <div className="stat-title text-white">Progres</div>
            <div className="stat-value items-center justify-center">{progress.toFixed(4)}%</div>
          </div>
          <div className="stat">
            <div className="stat-title text-white">Jumlah Pemilih</div>
            <div className="stat-value">{totalPemilih}</div>
          </div>
          <div className="stat">
            <div className="stat-title text-white">Sudah Memilih</div>
            <div className="stat-value">{sudahMemilih}</div>
          </div>
        </div>
      </div>
     
  )
}

export default Info