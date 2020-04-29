import React, { useState } from "react";

const List = () => {
  const [show, setShow] = useState(false);
  const [list, setList] = useState(["a", "b", "b"]);
  const onClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <button onClick={onClick} className="btn btn-datk">
        Show / Hide list
        {show ? list : "None"}
      </button>
    </div>
  );
};

export default List;
