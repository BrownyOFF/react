import React from "react";

import TaskTitle from "./TaskTitle";

const task2Data = [
  { firstName: "John", lastName: "Silver", occupation: "Pirate Captain" },
];

const TableTask2 = () => {
  return (
    <div>
      <TaskTitle taskNumber="2" taskName="Table" />
      <div className="task-content">
        {task2Data.map((item) => (
          <table key={Math.floor(Math.random() * 100)}>
            <tbody>
              <tr>
                <th>First Name</th>
                <td>{item.firstName}</td>
              </tr>
              <tr>
                <th>Last Name</th>
                <td>{item.lastName}</td>
              </tr>
              <tr>
                <th>Occupation</th>
                <td>{item.occupation}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

export default TableTask2;
