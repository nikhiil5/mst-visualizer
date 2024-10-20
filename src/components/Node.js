import React from "react";

const Node = (props) => {
  return (
    <div
      className="bg-white w-[30px] h-[30px] rounded-full flex items-center justify-center text-center z-30"
      id={props.uniq_val}
      style={{
        position: "absolute",
        top: props.ycord - 125,
        left: props.xcord - 15,
        border:
          props.selected_idx === props.idx
            ? "2px solid blue"
            : "2px solid black",
      }}
      draggable
      onDrag={props.draggingNode}
      onDragStart={props.startDraggingNode}
      onMouseEnter={props.enteringNode}
      onMouseLeave={props.leavingNode}
    >
    </div>
  );
}

export default Node;
