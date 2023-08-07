import PropTypes from "prop-types";
import parse from "html-react-parser";
import { marked } from "marked";

import "./Previewer.css";

const Previewer = ({ markdown }) => {
  const html = parse(marked.parse(markdown));
  return (
    <div id="previewer-container">
      <h3>
        <i className="fa-brands fa-markdown"></i>
        PREVIEW
      </h3>
      <div id="preview">{html}</div>
    </div>
  );
};

Previewer.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default Previewer;
