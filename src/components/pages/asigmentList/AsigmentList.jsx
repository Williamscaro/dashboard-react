import "./asigmentList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { asigmentRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AsigmentList() {
  const [data, setData] = useState(asigmentRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "asigment",
      headerName: "User Asigments ",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="asigmentListItem">
            <img className="asigmentListImg" src={params.row.img} alt="image" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "resources", headerName: "Resources ", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "asigmentAcomplishment",
      headerName: "Acoplish Asigmensnts",
      description: "This column has a value of each asigment in porcent.",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      description: "You can Edit or Delete a User.",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/asigment/" + params.row.id}>
              <button className="asigmentListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="asigmentListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="asigmentList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
