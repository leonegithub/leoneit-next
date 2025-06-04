import React, { useEffect, useState } from "react";

interface SelectPaesiProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  defaultValue?: string;
}

export default function SelectPaesi({ defaultValue = "", ...props }: SelectPaesiProps) {
  const [paesi, setPaesi] = useState<{ ID: string; Nome: string }[]>([]);

  useEffect(() => {
    fetch("https://php.leone.it/api/ws_leone/GetPaesi.php?IN_GRUPPO=1", {
      headers: {
        Authorization: "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPaesi(data.ReturnedObject || []);
      });
  }, []);

  return (
    <select
      name="paese"
      required
      id="paese"
      defaultValue={defaultValue}
      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      {...props}
    >
      {paesi.map((p) => (
        <option key={p.ID} value={p.ID}>
          {p.Nome}
        </option>
      ))}
    </select>
  );
}