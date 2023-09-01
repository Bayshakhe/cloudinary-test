import React, { useState } from "react";

const Test = () => {
  const [files, setFiles] = useState([]);
  const [fileUrlList, setFileUrlList] = useState([]);

  const uploadImage = async () => {
    const uploaders = Array.from(files).map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "shunnoSupport");
      formData.append("cloud_name", "dtcoomque");
      formData.append("timestamp", Math.floor(Date.now() / 1000));

      return fetch("https://api.cloudinary.com/v1_1/dtcoomque/raw/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          const fileURL = data.secure_url;
          return fileURL;
        });
    });

    try {
      const urls = await Promise.all(uploaders);
      setFileUrlList(urls); // Update the state with the array of URLs
      console.log(urls); // This will show the correct URLs
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };
  console.log(fileUrlList);

  return (
    <div>
      <div>
        <input
          name="fileslist"
          multiple
          directory=""
          webkitdirectory=""
          // mozdirectory=""
          className="mt-2 mb-4 p-4 w-1/2 bg-violet-50 rounded focus:outline-none"
          type="file"
          id="uploadCode"
          onChange={(e) => setFiles(e.target.files)}
        ></input>
        <button onClick={uploadImage}>Upload</button>
      </div>
      <div>
        <h1>Uploaded images:</h1>
        {/* {fileUrlList.map((url, index) => (
          <img width="50%" key={index} src={url} alt={`Uploaded ${index}`} />
        ))} */}
      </div>
    </div>
  );
};

export default Test;
