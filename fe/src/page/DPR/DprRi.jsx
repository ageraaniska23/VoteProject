import React from "react";
import Nav from "../Navigation/nav";

const DprRi = () => {
  return (
    <div className="min-h-screen bg-blue-300 flex flex-col">
      <Nav />
      <h1 className="text-white font-serif font-bold text-center text-4xl mt-3">Hasil Suara Pemilihan DPRD Daerah Kab</h1>
      <div className="flex justify-end mr-12 mt-3 items-center">
        <div className="stats bg-primary text-primary-content">
          <div className="stat">
            <div className="stat-title text-white">Jumlah Pemilih</div>
            <div className="stat-value">0000</div>
          </div>
          <div className="stat">
            <div className="stat-title text-white">sudah memilih</div>
            <div className="stat-value">0000</div>
          </div>
        </div>
      </div>

      

      <div className="flex justify-center items-center mt-24 mb-64">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
          {/* <!-- Card 1 --> */}
          <div className="card w-96 bg-white shadow-xl flex flex-col">
            <div className="card-body items-center">
              <img
                src="https://www.svgrepo.com/show/433732/ring-so.svg"
                alt="ring"
                className="w-16 h-16 mb-2"
              />
              <h2 className="card-title">Partai 1</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nama Calon</th>
                    <th className="px-4 py-2">Suara</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">nama</td>
                    <td className="border px-4 py-2">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="card w-96 bg-white shadow-xl">
            <div className="card-body items-center">
              <img
                src="https://www.svgrepo.com/show/433732/ring-so.svg"
                alt="ring"
                className="w-16 h-16 mb-2"
              />
              <h2 className="card-title">Partai 2</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nama Calon</th>
                    <th className="px-4 py-2">Suara</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">nama</td>
                    <td className="border px-4 py-2">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="card w-96 bg-white shadow-xl">
            <div className="card-body items-center">
              <img
                src="https://www.svgrepo.com/show/433732/ring-so.svg"
                alt="ring"
                className="w-16 h-16 mb-2"
              />
              <h2 className="card-title">Partai 3</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nama Calon</th>
                    <th className="px-4 py-2">Suara</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">nama</td>
                    <td className="border px-4 py-2">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="card w-96 bg-white shadow-xl">
            <div className="card-body items-center">
              <img
                src="https://www.svgrepo.com/show/433732/ring-so.svg"
                alt="ring"
                className="w-16 h-16 mb-2"
              />
              <h2 className="card-title">Partai 4</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nama Calon</th>
                    <th className="px-4 py-2">Suara</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">nama</td>
                    <td className="border px-4 py-2">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* <!-- Card 5 --> */}
          <div className="card w-96 bg-white shadow-xl">
            <div className="card-body items-center">
              <img
                src="https://www.svgrepo.com/show/433732/ring-so.svg"
                alt="ring"
                className="w-16 h-16 mb-2"
              />
              <h2 className="card-title">Partai 5</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nama Calon</th>
                    <th className="px-4 py-2">Suara</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">nama</td>
                    <td className="border px-4 py-2">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* <!-- Card 6 --> */}
          <div className="card w-96 bg-white shadow-xl">
            <div className="card-body items-center">
              <img
                src="https://www.svgrepo.com/show/433732/ring-so.svg"
                alt="ring"
                className="w-16 h-16 mb-2"
              />
              <h2 className="card-title">Partai 6</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nama Calon</th>
                    <th className="px-4 py-2">Suara</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">nama</td>
                    <td className="border px-4 py-2">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* <!-- Card 7 --> */}
          <div className="card w-96 bg-white shadow-xl">
            <div className="card-body items-center">
              <img
                src="https://www.svgrepo.com/show/433732/ring-so.svg"
                alt="ring"
                className="w-16 h-16 mb-2"
              />
              <h2 className="card-title">Partai 7</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nama Calon</th>
                    <th className="px-4 py-2">Suara</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">nama</td>
                    <td className="border px-4 py-2">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- Card 8 --> */}
          <div className="card w-96 bg-white shadow-xl">
            <div className="card-body items-center">
              <img
                src="https://www.svgrepo.com/show/433732/ring-so.svg"
                alt="ring"
                className="w-16 h-16 mb-2"
              />
              <h2 className="card-title">Partai 8</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nama Calon</th>
                    <th className="px-4 py-2">Suara</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">nama</td>
                    <td className="border px-4 py-2">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- Card 9 --> */}
          <div className="card w-96 bg-white shadow-xl">
            <div className="card-body items-center">
              <img
                src="https://www.svgrepo.com/show/433732/ring-so.svg"
                alt="ring"
                className="w-16 h-16 mb-2"
              />
              <h2 className="card-title">Partai 9</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nama Calon</th>
                    <th className="px-4 py-2">Suara</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">nama</td>
                    <td className="border px-4 py-2">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- Card 10 --> */}
          <div className="card w-96 bg-white shadow-xl">
            <div className="card-body items-center">
              <img
                src="https://www.svgrepo.com/show/433732/ring-so.svg"
                alt="ring"
                className="w-16 h-16 mb-2"
              />
              <h2 className="card-title">Partai 10</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nama Calon</th>
                    <th className="px-4 py-2">Suara</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">nama</td>
                    <td className="border px-4 py-2">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- Card 11 --> */}
          <div className="card w-96 bg-white shadow-xl">
            <div className="card-body items-center">
              <img
                src="https://www.svgrepo.com/show/433732/ring-so.svg"
                alt="ring"
                className="w-16 h-16 mb-2"
              />
              <h2 className="card-title">Partai 11</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nama Calon</th>
                    <th className="px-4 py-2">Suara</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">nama</td>
                    <td className="border px-4 py-2">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- Card 12 --> */}
          <div className="card w-96 bg-white shadow-xl">
            <div className="card-body items-center">
              <img
                src="https://www.svgrepo.com/show/433732/ring-so.svg"
                alt="ring"
                className="w-16 h-16 mb-2"
              />
              <h2 className="card-title">Partai 12</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nama Calon</th>
                    <th className="px-4 py-2">Suara</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">nama</td>
                    <td className="border px-4 py-2">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- Card 13 --> */}
          <div className="card w-96 bg-white shadow-xl">
            <div className="card-body items-center">
              <img
                src="https://www.svgrepo.com/show/433732/ring-so.svg"
                alt="ring"
                className="w-16 h-16 mb-2"
              />
              <h2 className="card-title">Partai 13</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nama Calon</th>
                    <th className="px-4 py-2">Suara</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">nama</td>
                    <td className="border px-4 py-2">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- Card 14 --> */}
          <div className="card w-96 bg-white shadow-xl">
            <div className="card-body items-center">
              <img
                src="https://www.svgrepo.com/show/433732/ring-so.svg"
                alt="ring"
                className="w-16 h-16 mb-2"
              />
              <h2 className="card-title">Partai 14</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nama Calon</th>
                    <th className="px-4 py-2">Suara</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">nama</td>
                    <td className="border px-4 py-2">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- Card 15 --> */}
          <div className="card w-96 bg-white shadow-xl">
            <div className="card-body items-center">
              <img
                src="https://www.svgrepo.com/show/433732/ring-so.svg"
                alt="ring"
                className="w-16 h-16 mb-2"
              />
              <h2 className="card-title">Partai 15</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nama Calon</th>
                    <th className="px-4 py-2">Suara</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">nama</td>
                    <td className="border px-4 py-2">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DprRi;
