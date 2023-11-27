// usePropertyForm.js
import { useState } from 'react';

const usePropertyForm = () => {
  const [formData, setFormData] = useState({
    selectedFile: null,
    previewSrc: null,
    selectedAmenities: [],
    address: '',
    type: '',
    address_2: '',
    city: '',
    description: '',
    longitude: '',
    latitude: '',
    num_rooms: '',
    num_bathrooms: '',
    num_beds: '',
  });

  const handleAmenityChange = (event) => {
    const { value, checked } = event.target;
    setFormData(prevState => ({
      ...prevState,
      selectedAmenities: checked
        ? [...prevState.selectedAmenities, value]
        : prevState.selectedAmenities.filter(amenity => amenity !== value),
    }));
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      selectedFile,
      previewSrc: URL.createObjectURL(selectedFile),
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return {
    formData,
    handleAmenityChange,
    handleFileChange,
    handleChange,
  };
};

export default usePropertyForm;
