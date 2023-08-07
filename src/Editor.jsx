import PropTypes from "prop-types";

import "./Editor.css";

const Editor = ({ markdown, handleChange }) => {
  return (
    <div id="editor-container">
      <h3>
        <i className="fa-regular fa-pen-to-square"></i>
        EDITOR
      </h3>
      <textarea
        name="editor"
        id="editor"
        value={markdown}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Editor;
