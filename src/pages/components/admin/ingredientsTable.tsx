import React, { useState } from "react";

type Props = {
  id: string;
  size: string;
  base: string;
  fruits: string;
  dry: string;
  extra: string;
  calories: string;
  protein: string;
  status: string;
  sortBy: string;
};

const TableRow: React.FC<Props> = ({
  id,
  size,
  base,
  fruits,
  dry,
  extra,
  calories,
  protein,
  status,
  sortBy,
}) => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const handleClick = () => {
    if (sortBy === sortOrder) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortOrder("asc");
    }
  };

  const sortedValues = [id, size, base, fruits, dry, extra, calories, protein, status].sort((a, b) => {
    if (a < b) return sortOrder === "asc" ? -1 : 1;
    if (a > b) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100" onClick={handleClick}>
      {sortedValues.map((value, index) => (
        <td key={index} className="py-3 px-6 text-left">
          {value}
          {sortBy === String(index) && sortOrder && (
            <span className="ml-2">{sortOrder === "asc" ? "↑" : "↓"}</span>
          )}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
