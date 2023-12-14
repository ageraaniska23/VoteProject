import React from 'react';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
                <h1 className="text-3xl"> Buat Akun!</h1>
                <p className="text-gray-300 mt-3">Masukkan Data diri</p>
            </div>
            <form>
                <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Ussername"
                name="username"
                />
                <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Password"
                name="password"
                />
                <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="email"
                />
                <div className="flex justify-between">
                <input
                    className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    value="Daftar"
                />
                </div>
            </form>
            <p className="text-gray-300 mt-4 text-center">
                Sudah Punya akun? 
                <a href="/login" className="hover:underline hover:text-cyan-600 transition-all">
                    <span className="relative inline-block hover:underline">
                    Masuk
                    </span>
                </a>
            </p>

            </div>
        </div>
    </div>
  );
};

export default SignUp;
