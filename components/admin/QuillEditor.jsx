"use client";

import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useEffect, useRef } from "react";

const QuillEditor = ({ onContentChange }) => {
  const quillRef = useRef(null);
  const quillInstanceRef = useRef(null);

  useEffect(() => {
    if (!quillInstanceRef.current) {
      const quillInstance = new Quill(quillRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ script: "sub" }, { script: "super" }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["clean"],
          ],
        },
      });

      quillInstanceRef.current = quillInstance;

      quillInstance.on("text-change", () => {
        const htmlContent = quillInstance.root.innerHTML;
        onContentChange(htmlContent); // Send the raw HTML content to the parent
      });
    }
  }, [onContentChange]);

  return <div ref={quillRef} className="h-[100px]" />;
};

export default QuillEditor;
