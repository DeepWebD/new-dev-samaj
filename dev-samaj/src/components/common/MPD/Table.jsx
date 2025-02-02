import React from "react";

const tableProps = {
  column: [
    { name: "Name", width: "30%" },
    { name: "Age", width: "20%" },
    { name: "City", width: "50%" },
  ],
  row: [
    { row1: "John Doe", row2: "28", row3: "New York" },
    { row1: "Jane Smith", row2: "34", row3: "Los Angeles" },
    { row1: "Sam Green", row2: "22", row3: "Chicago" },
  ],
};

const Table = () => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
      <table className="w-full table-fixed">
        {/* Table Header */}
        <thead>
          <tr className="bg-sky-100">
            {tableProps?.column.map((col, index) => (
              <th
                key={index}
                className="w-3/4 py-4 px-6 text-left text-secondary font-bold uppercase "
                style={{ width: col.width }}
              >
                {col.name}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-white">
          {tableProps?.row.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {tableProps?.column.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="py-4 px-6 border-b border-gray-200"
                >
                  {rowData[`row${colIndex + 1}`]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
