import { useState, useMemo } from "react";
import { useTable } from "react-table";

function LocationList() {
  const [onOff, setOnOff] = useState(false);
  const handleOn = () => setOnOff(true);
  const hadleOff = () => setOnOff(false);
  return (
    <div>
      <button onClick={handleOn}></button>
      {onOff === true ? <LocationTable></LocationTable> : <div></div>}
    </div>
  );
}

function LocationTable() {
  // 보내는 데이터에 추가적인 내용 있으면 추가하기
  const columnData = [
    {
      Header: "시간",
      accessor: "",
    },
    {
      Header: "장소",
      accessor: "",
    },
  ];

  const columns = useMemo(() => columnData, []);
  // 여기 들어가는 데이터는 실제 데이터를 의미함.
  // query를 통해서 받거나 해야 됨
  const data = useMemo(() => console.log(1));

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroups) => (
          <tr {...headerGroups.getHeaderGroupProps()}>
            {headerGroups.headers.map((columns) => (
              <th {...columns.getHeaderProps()}>{columns.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default LocationList;
