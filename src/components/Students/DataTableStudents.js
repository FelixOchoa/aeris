import React from "react";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { columns, paginationComponentOptions } from "./TableStruct";

const DataTableStudents = (props) => {
  const [students, setStudents] = useState([]);
  const getDataTableStudents = async () => {
    await fetch("https://aeris.azurewebsites.net/api/User/get-users")
      .then((res) => res.json())
      .then((data) => {
        const studentsCopy = data.filter(
          (student) => student.rol === "Estudiante"
        );
        setStudents(studentsCopy);
        props.studentsData(studentsCopy);
      });
  };
  useEffect(() => {
    getDataTableStudents();
  }, []);

  return (
    <>
      <DataTable
        columns={columns}
        data={students}
        noDataComponent={<p>No hay información para mostrar.</p>}
        pagination
        paginationComponentOptions={paginationComponentOptions}
      />
    </>
  );
};

export default DataTableStudents;
