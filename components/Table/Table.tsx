import React from "react";
import "./style.scss";
export interface TableProps {
  data: any;
  backgroundColor?: string;
  fontColor?: string;
  width?: number | string;
}

const Table: React.FC<TableProps> = ({
  data,
  backgroundColor = "white",
  fontColor = "black",
  width = "100%",
}) => {
  return (
    <table
      style={{
        backgroundColor,
        color: fontColor,
        width,
        border: "1px solid black",
        borderRadius: "6px",
      }}
    >
      <thead
        style={{
          backgroundColor: "#26282B",
          color: "white",
        }}
      >
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th
              style={{
                padding: "10px",
              }}
              key={key}
            >
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row: any, index: number) => (
          <tr key={index}>
            {Object.values(row).map((cell: any, index: number) => (
              <td
                style={{
                  textAlign: "center",
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
                key={`${row}-${index}`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
