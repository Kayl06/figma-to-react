import { Fragment } from "react";

function Table({ data, config }) {
  // Dynamic Table
  const renderedRows = data.map((rowData, index) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="py-[20px]" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={index}>
        {renderedCells}
      </tr>
    );
  });

  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return <th key={column.label} align="start" className="text-[#A0AEC0] text-[12px] font-bold uppercase pb-[12px]">{column.label}</th>;
  });

  return (
    <table className="w-full border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
