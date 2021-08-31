import React from "react";
import Badge from "react-bootstrap/Badge";

const Qualitie = (qualities) => {
  const usersQualities = Object.keys(qualities).map((q,index) => {
    console.log("qualities[q]", qualities[q]); //key={qualities[q]._id}
    return (
      <Badge
        key={index}
        bg={qualities[q].color}
        className="rounded-pill"
        color="blue"
        style={{marginLeft: "5px"}}
      >
        {qualities[q].name}
      </Badge>
    ); //pill pill className="rounded-circle"
  });
  console.log("usersQualities", usersQualities);
  return usersQualities;
};

export default Qualitie;
