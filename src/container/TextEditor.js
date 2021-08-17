// import React from "react";

// const SubnavTwo = () => {
//   return <div>Subnav 2</div>;
// };

// export default SubnavTwo;

import React, { useState } from "react";
import { Button, notification, Card } from "antd";
import ReactQuill from "react-quill";

const TextEditor = () => {
  const [value, setValue] = useState("test");

  const handleChange = (value) => {
    setValue(value);
  };

  const prompt = () => {
    notification.open({
      message: "We got value:",
      description: <span dangerouslySetInnerHTML={{ __html: value }} />,
    });
  };

  return (
    <Card title="Rich text editor">
      <ReactQuill value={value} onChange={handleChange} />
      <Button style={{ marginTop: 16 }} onClick={prompt}>
        Prompt
      </Button>
    </Card>
  );
};

export default TextEditor;
