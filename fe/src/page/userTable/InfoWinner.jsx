
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
              <tr className="text-center">
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300"></td>
                
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default InfoWinner