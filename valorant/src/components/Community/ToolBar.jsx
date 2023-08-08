import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { changeInput } from "../../store/modules/commuSlice";

const toolbarOptions = [
  ["link", "image"],
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline", "strike"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
];

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "Italic",
  "underline",
  "strike",
  "align",
  "blockquotes",
  "list",
  "bullet",
  "indent",
  "background",
  "color",
  "link",
  "image",
  "video",
  "width",
];

const modules = {
  toolbar: {
    container: toolbarOptions,
  },
};

const ToolBar = ({ content }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <ReactQuill
        value={content}
        onChange={html => dispatch(changeInput({ name: "content", value: html }))}
        modules={modules}
        formats={formats}
        style={{ height: "425px" }}
        name="content"
      />
    </div>
  );
};

export default ToolBar;
