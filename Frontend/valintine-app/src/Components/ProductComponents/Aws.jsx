import React, { useState } from 'react';
// import './App.css';

function Aws() {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('http://localhost:8080/aws/convert', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setFileUrl(data.url);
  };

  return (
    <div className="App">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {fileUrl && (
        <p>
          File URL: <a href={fileUrl} target="_blank" rel="noopener noreferrer">{fileUrl}</a>
        </p>
      )}
    </div>
  );
}

export default Aws;
