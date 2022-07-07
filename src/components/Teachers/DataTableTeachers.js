import React from "react";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { columns, paginationComponentOptions } from "./TableStruct";

const DataTableTeachers = (props) => {
  const [teachers, setTeachers] = useState([]);
  const getDataTableTeachers = async () => {
    await fetch("https://aeris.azurewebsites.net/api/User/get-users")
      .then((res) => res.json())
      .then((data) => {
        const teachersCopy = data.filter(
          (teacher) => teacher.rol === "Docente"
        );
        setTeachers(teachersCopy);
        props.teachersData(teachersCopy);
      });
  };
  useEffect(() => {
    getDataTableTeachers();
  }, []);

  return (
    <>
      <DataTable
        columns={columns}
        data={teachers}
        pagination
        paginationComponentOptions={paginationComponentOptions}
      />
    </>
  );
};

export default DataTableTeachers;
