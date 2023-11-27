import React, { useRef } from 'react';

const UploadTest = () => {
  const fileInput = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('images', fileInput.current.files[0]);
  
    try {
      const response = await axios.post('http://localhost:8080/api/property/testupload', formData);

      if (response.ok) {
        console.log('File uploaded successfully');
      }
      
    } catch (error) {
      console.log('File upload failed');
      console.error(error);
    }
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <label>Upload File</label>
      <input type="file" name="images" ref={fileInput} />

      <button>Submit</button>
    </form>
  );
};

export default UploadTest;