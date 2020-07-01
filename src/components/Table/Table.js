import React, { useState } from "react";

import TableHead from "../TableHead/TableHead";
import TableBody from "../TableBody/TableBody";

function Table(props) {
  const data = props.students;
  const [dataBody] = useState(data);

  let tBody = dataBody.map((a) => (
    <TableBody name={a.name} age={a.age} sex={a.sex} address={a.address} />
  ));
  return (
    <div>
      <table>
        <TableHead />
        {tBody}
        {/* <TableBody /> */}
      </table>
    </div>
  );
}

export default Table;
