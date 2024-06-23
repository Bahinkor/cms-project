import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Alert} from "@mui/material";
import Chart from "../../components/chart/Chart";
import productDataSale from "../../data-dir/product-data-sale";
import productData from "../../data-dir/product-data";

function Product() {
    // Params
    let params = useParams().productID;

    // State
    const [mainProduct, setMainProduct] = useState(null);

    // useEffect Hook
    useEffect(() => {

        let targetProduct = productData.find(product => product.id == params);

        if (targetProduct) {
            setMainProduct(targetProduct);
        } else {
            setMainProduct(false);
        }

    }, [params]);

    // JSX
    return (
        <div className="flex-[4] p-5">
            {/* Top section */}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Product</h1>
                <Link to="/newProduct">
                    <button
                        className="w-20 p-[5px] bg-blue-700 text-white text-lg rounded-[5px] cursor-pointer">Create
                    </button>
                </Link>
            </div>

            {
                mainProduct === null ? (
                    <Alert severity="info">Loading...</Alert>
                ) : (
                    <div className="flex">
                        {/* Product Left */}
                        <div className="flex-1">
                            {/* chart */}
                            <Chart title="Sale in month" data={productDataSale} dataKey="sales"/>
                        </div>
                        {/* Product Right */}
                        <div className="flex-1 p-5 m-5 box-shadow-feature-item">
                            {/* Product info top */}
                            <div className="flex items-center">
                                <img src="/images/macbook.jpg" alt="Laptop image"
                                     className="size-10 mr-5 rounded-full"/>
                                <span className="font-[600]">{mainProduct.name}</span>
                            </div>
                            {/* Product info bottom */}
                            <div className="mt-[10px] [&>div]:w-[200px] [&>div]:flex [&>div]:justify-between">
                                {/* Product info items */}
                                <div className="product-info-item">
                                    <div className="font-[300]">ID:</div>
                                    <div className="font-[100] text-[#555]">{mainProduct.id}</div>
                                </div>
                                <div className="product-info-item">
                                    <div className="font-[300]">Name:</div>
                                    <div className="font-[100] text-[#555]">{mainProduct.name}</div>
                                </div>
                                <div className="product-info-item">
                                    <div className="font-[300]">Sales:</div>
                                    <div className="font-[100] text-[#555]">${mainProduct.sales}</div>
                                </div>
                                <div className="product-info-item">
                                    <div className="font-[300]">Active:</div>
                                    <div className="font-[100] text-[#555]">{mainProduct.active ? "Yes" : "No"}</div>
                                </div>
                                <div className="product-info-item">
                                    <div className="font-[300]">In Stock:</div>
                                    <div className="font-[100] text-[#555]">{mainProduct.inStock ? "Yes" : "No"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default Product;