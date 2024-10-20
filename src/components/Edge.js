import React, { useState, useEffect } from "react";
import "./Edge.css";

let angle = 0;
let length = 0;
let xcord = 0;
let ycord = 0;

const edgeStyles = {
  edge: {
    width: 10,
    backgroundColor: "#A9A9A9",
    position: "absolute",
    zIndex: 1,
    display: "inlineFlex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 8,
  },
  preview: {
    backgroundColor: "#EEEEEE",
  },
  se: {
    backgroundColor: "#47D147",
  },
  pe: {
    backgroundColor: "#FFA64D",
  },
  ue: {
    backgroundColor: "#CFCFCF",
  },
};

const Edge = ({
  node1_cords,
  node2_cords,
  algo_type,
  preview,
  animations,
  idx,
  on_click,
  onValueChange,
  value,
  selected_edge_idx,
}) => {
  const [animationEdge, setAnimationEdge] = useState("");

  const translateAnimation = (instructions) => {
    instructions.forEach((instruction, i) => {
      if (instruction[0] === "PE") {
        setTimeout(() => {
          setAnimationEdge("PE");
        }, instruction[3] * 1000);

        if (algo_type !== "Prim's") {
          setTimeout(() => {
            setAnimationEdge((prev) => (prev === "PE" ? "UE" : prev));
          }, (instruction[3] + 1) * 1010);
        }
      } else if (instruction[0] === "SE") {
        setTimeout(() => {
          setAnimationEdge("SE");
        }, instruction[3] * 1000);
      }
    });
  };

  useEffect(() => {
    if (animations && animations.length > 0) {
      translateAnimation(animations);
    } else {
      setAnimationEdge("");
    }
  }, [animations]);

  length = Math.sqrt(
    Math.pow(node1_cords[0] - node2_cords[0], 2) +
      Math.pow(node1_cords[1] - node2_cords[1], 2)
  );

  xcord =
    Math.min(node1_cords[0], node2_cords[0]) +
    Math.abs((node1_cords[0] - node2_cords[0]) / 2);

  ycord =
    Math.min(node1_cords[1], node2_cords[1]) -
    length / 2 +
    Math.abs((node1_cords[1] - node2_cords[1]) / 2) +
    160;

  angle =
    (Math.atan(
      (node1_cords[1] - node2_cords[1]) / (node1_cords[0] - node2_cords[0])
    ) *
      180) /
      Math.PI +
    90;

  let renderedStyle = preview
    ? { ...edgeStyles.edge, ...edgeStyles.preview }
    : edgeStyles.edge;

  if (animationEdge === "PE") renderedStyle = { ...edgeStyles.edge, ...edgeStyles.pe };
  else if (animationEdge === "SE") renderedStyle = { ...edgeStyles.edge, ...edgeStyles.se };
  else if (animationEdge === "UE") renderedStyle = { ...edgeStyles.edge, ...edgeStyles.ue };

  return (
    <div
      id={idx}
      className="edge_container"
      style={{
        left: xcord,
        top: ycord - 270,
        transform: `rotate(${angle}deg)`,
        height: length,
        ...renderedStyle,
        zIndex: preview ? 1 : 2,
        border: selected_edge_idx === idx && !preview ? "2px solid blue" : "",
      }}
      onClick={on_click}
    >
      <input
        className={`relative border border-black bg-white p-1 rounded select-none ${preview ? 'invisible' : 'visible'}`}
        type="text"
        id={idx}
        placeholder={value}
        onChange={onValueChange}
        style={{
          transform: `rotate(${-1 * angle}deg)`,
          top: length / 2,
          padding: 3,
          borderRadius: 3,
          width: 15,
          userSelect: "none",
        }}
      />
    </div>
  );
};

export default Edge;
