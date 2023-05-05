import React from "react";

const TaskTitle = ({ taskNumber, taskName = "" }) => {
  return (
    <div>
      <hr />
      <h2 className="title-text">
        Task {taskNumber} {taskName}
      </h2>
      <hr />
    </div>
  );
};

export default TaskTitle;
