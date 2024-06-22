import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {DataGrid} from '@mui/x-data-grid';
import {DeleteOutline} from "@mui/icons-material";
import userInfo from "../../data-dir/user-info";

function UserList() {
    // State
    const [userInfos, setUserInfos] = useState([]);

    // Hooks
    useEffect(() => {
        setTimeout(async () => {
            await setUserInfos(userInfo);
        }, 500);
    }, []);

    // functions
    const userDelete = userID => {
        setUserInfos(userInfos.filter(user => user.id !== userID));
    };

    // var
    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 90,
        },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="flex items-center">
                        <Link to="/">
                            <img src="images/profile.jpg" alt="profile image"
                                 className="size-8 mr-[10px] rounded-full object-cover"/>
                        </Link>
                        <Link to="/">
                            {params.row.username}
                        </Link>
                    </div>
                );
            }
        },
        {
            field: "email",
            headerName: "Email",
            width: 200,
        },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "transaction",
            headerName: "TransAction",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/${params.row.id}`}>
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
                rows={userInfos}
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