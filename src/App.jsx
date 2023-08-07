import { useState } from "react";

import Editor from "./Editor";

import "./App.css";

const defaultValue = [
  "# This is a heading",
  "",
  "## This is a sub-heading",
  "",
  "This is a [link](https://www.freecodecamp.org)",
  "",
  "This is an `<div>inline code</div>`",
  "",
  "This is a code block",
  "```",
  "const sum = (...args) => {",
  " return args.reduce(",
  "   (a, b) => a + b",
  " );",
  "};",
  "```",
  "",
  "This is a list",
  "- item 1",
  "- item 2",
  "- item 3",
  "",
  "> This is a blockquote",
  "",
  "This is an image",
  "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)",
  "",
  "This is a **bolded** text",
];

const App = () => {
  const [markdown, setMarkdown] = useState(
    defaultValue.join("\n")
  );

  const handleChange = (event) => {
    setMarkdown(() => event.target.value);
  };

  return (
    <div id="App">
      <Editor
        markdown={markdown}
        handleChange={handleChange}
      />
    </div>
  );
};

export default App;
