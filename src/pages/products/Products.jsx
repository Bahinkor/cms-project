import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {DataGrid} from '@mui/x-data-grid';
import {DeleteOutline} from "@mui/icons-material";
import productInfo from "../../data-dir/product-info";

function UserList() {
    // State
    const [productInfos, setProductsInfos] = useState([]);

    // Hooks
    useEffect(() => {
        setTimeout(async () => {
            await setProductsInfos(productInfo);
        }, 500);
    }, []);

    // functions
    const userDelete = productID => {
        setProductsInfos(productInfos.filter(product => product.id !== productID));
    };

    // var
    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 90,
        },
        {
            field: "title",
            headerName: "Name",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="flex items-center">
                        <Link to={`/product/${params.row.id}`}>
                            <img src="images/macbook.jpg" alt="product image"
                                 className="size-8 mr-[10px] rounded-full object-cover"/>
                        </Link>
                        <Link to={`/product/${params.row.id}`}>
                            {params.row.title}
                        </Link>
                    </div>
                );
            }
        },
        {
            field: "price",
            headerName: "price",
            width: 120,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/product/${params.row.id}`}>
                            <button className="h-8 inline-flex items-center text-white bg-[#3bb077] mr-5 py-[5px] px-[10px] rounded-[10px] cursor-pointer">Edit
                            </button>
                        </Link>
                        <DeleteOutline onClick={() => userDelete(params.row.id)} className="text-red-600 cursor-pointer"/>
                    </>
                )
            }
        }
    ];


    // JSX
    return (
        <div className="flex-[4]">
            {/* Data grid -> mui */}
            <DataGrid
                rows={productInfos}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 5},
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}

export default UserList;