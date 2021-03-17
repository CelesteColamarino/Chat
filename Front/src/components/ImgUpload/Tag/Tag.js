import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const Tag = ({ setTag, handleTag, tag }) => {
  return (
    <InputGroup className="mb-3" style={{ zIndex: "3", position: "absolute" }}>
      <FormControl
        placeholder="Choose a tag's name"
        aria-label="Choose a tag's name"
        aria-describedby="basic-addon2"
        onChange={(e) => {
          setTag(e.target.value);
        }}
        value={tag}
      />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={(e) => handleTag(e)}>
          <i className="fas fa-user-tag"></i>Tag
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default Tag;
