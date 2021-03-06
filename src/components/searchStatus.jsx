import React from "react";
import Badge from "react-bootstrap/Badge";
import PropTypes from "prop-types"; //ES6

const renderPhrase = (number) => {
  return number > 0
    ? number === 2 || number === 3 || number === 4
      ? `${number} человекa тусанет стобой сегодня`
      : `${number} человек тусанет стобой сегодня`
    : "никого нет";
};

const SearchStatus = ({length}) => {
  return (
    <div>
      <h2>
        <Badge bg={length > 0 ? "primary" : "danger"}>
          {renderPhrase(length)}
        </Badge>
      </h2>
    </div>
  );
};
SearchStatus.propTypes = {length: PropTypes.number.isRequired}
export default SearchStatus;
