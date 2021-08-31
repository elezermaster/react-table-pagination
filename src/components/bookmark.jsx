import React from "react";
import {FaBookmark, FaRegBookmark} from "react-icons/fa";
import PropTypes from "prop-types"; //ES6

const Bookmark = ({status/*, ...rest*/}) => {
  return status ? <FaBookmark /> : <FaRegBookmark />;
};
Bookmark.propTypes = {
  status: PropTypes.bool,//allow undefined
}
export default Bookmark;
