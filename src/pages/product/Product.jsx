import React from 'react';
import {Link} from 'react-router-dom';

function Product() {
    // JSX
    return (
        <div className="flex-[4] p-5">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Product</h1>
                <Link to="/newProduct">
                    <button
                        className="w-20 p-[5px] bg-blue-700 text-white text-lg rounded-[5px] cursor-pointer">Create
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Product;