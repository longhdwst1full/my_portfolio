import axios from "axios";
import React, {  useState } from "react";

const Upload = () => {
  const [fileList, setFileList] = useState(null);

  const handleSubmit = (e) => {
    // e.preventDefault();

    if (!fileList) {
      return;
    }
 
    const PRESET_NAME = "my_portfolio";
    const Folder_NAME = "my-portfolio";
    const CLOUNDNAME = "dy1jlseae";
    const urls = [];
    const api = `https://api.cloudinary.com/v1_1/${CLOUNDNAME}/image/upload`;

    const formData = new FormData();
    formData.append("upload_preset", PRESET_NAME);

    formData.append("folder", Folder_NAME);

    files.forEach((file, i) => {
      formData.append("file", file);
    });
    axios
      .post(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => console.log(response));
  };
  // formData.append("file", file);

  const handleFileChange = (e) => {
    console.log(e.target.files);

    setFileList(e.target.files);
  };
  const files = fileList ? [...fileList] : [];
  return (
    <div>
     
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Upload file
        </label>
        <input
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          type="file"
          multiple
          // name="file_upload"
        />

        <button onClick={handleSubmit}>Thêm</button>
      
    </div>
  );
};

export default Upload;
