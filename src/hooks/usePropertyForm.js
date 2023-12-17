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
    longitude: null,
    latitude: null,
    num_rooms: '',
    num_bathrooms: '',
    num_beds: '',
    listing_title: '',
    price: '',
  });

  const handleAmenityChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      selectedAmenities: checked
        ? [...prevState.selectedAmenities, value]
        : prevState.selectedAmenities.filter((amenity) => amenity !== value),
    }));
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    // If no file is selected, reset the file input value
    if (!selectedFile) {
      event.target.value = null;
    }

    const previewSrc = selectedFile ? URL.createObjectURL(selectedFile) : null;
    setFormData((prevState) => ({
      ...prevState,
      selectedFile,
      previewSrc,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return {
    formData,
    setFormData,
    handleAmenityChange,
    handleFileChange,
    handleChange,
  };
};

export default usePropertyForm;
