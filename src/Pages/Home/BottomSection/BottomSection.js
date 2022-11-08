import React from 'react';

const BottomSection = () => {
    return (
        <div className="hero mt-20 h-60 min-w-screen" style={{ backgroundImage: `url("https://www.hsbnoticias.com/wp-content/uploads/2022/07/fotos.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-semibold text-white">Follow Us On Instragram</h1>
                    <p className="mb-5 text-orange-600 text-3xl">@ONESTUDIO.ID</p>
                    <div className="flex flex-row">
                        <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                        <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3bg-violet-400  bg-orange-500 text-gray-900">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomSection;