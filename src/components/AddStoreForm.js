import React, { useState, useRef } from "react";
import firebase from "firebase";

const AddStoreForm = ({ addStore }) => {
  const [fields, setFields] = useState({
    name: '',
    address1: '',
    address2: '',
    address3: '',
    lat: '',
    lng: '',
    phone: '',
    url: '',
    image: '',
    region: ''
  });
  const [errors, setErrors] = useState({});

  const nameRef = useRef();
  const address1Ref = useRef();
  const address2Ref = useRef();
  const address3Ref = useRef();
  const latRef = useRef();
  const lngRef = useRef();
  const phoneRef = useRef();
  const urlRef = useRef();
  const imageRef = useRef();
  const regionRef = useRef();

  const handleChange = (field, e) => {
    const value = e?.target?.value || '';
    setFields(prevFields => ({
      ...prevFields,
      [field]: value
    }));
  };

  const handleValidation = () => {
    const newErrors = {};
    let formIsValid = true;

    // Name - required
    if (!fields.name || fields.name.trim() === '') {
      formIsValid = false;
      newErrors.name = "Cannot be empty";
    }

    // Region - required
    if (!fields.region || fields.region.trim() === '') {
      formIsValid = false;
      newErrors.region = "Cannot be empty";
    }

    // Check if any address field is completed
    const hasAddressInfo = fields.address1 || fields.address2 || fields.address3;

    // Lat & Lng - required if any address field is completed
    if (hasAddressInfo) {
      if (!fields.lat || fields.lat.trim() === '') {
        formIsValid = false;
        newErrors.lat = "Required when address is provided";
      } else if (!fields.lat.match(/^-?\d*\.?\d*$/)) {
        formIsValid = false;
        newErrors.lat = "Only numbers";
      }

      if (!fields.lng || fields.lng.trim() === '') {
        formIsValid = false;
        newErrors.lng = "Required when address is provided";
      } else if (!fields.lng.match(/^-?\d*\.?\d*$/)) {
        formIsValid = false;
        newErrors.lng = "Only numbers";
      }
    } else {
      // Validate format if lat/lng are provided but not required
      if (fields.lat && !fields.lat.match(/^-?\d*\.?\d*$/)) {
        formIsValid = false;
        newErrors.lat = "Only numbers";
      }
      if (fields.lng && !fields.lng.match(/^-?\d*\.?\d*$/)) {
        formIsValid = false;
        newErrors.lng = "Only numbers";
      }
    }

    // Phone - optional, but validate format if provided
    if (fields.phone && !fields.phone.match(/^(?=.*[0-9])[- +()0-9]+$/)) {
      formIsValid = false;
      newErrors.phone = "Invalid phone number";
    }

    // URL - required if Region === 'Online only', otherwise optional
    if (fields.region === "Online only") {
      if (!fields.url || fields.url.trim() === '') {
        formIsValid = false;
        newErrors.url = "Required for online only stores";
      } else if (
        !fields.url.match(
          /[(http(s)?):/(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
        )
      ) {
        formIsValid = false;
        newErrors.url = "Invalid URL";
      }
    } else if (fields.url) {
      // Validate format if URL is provided but not required
      if (
        !fields.url.match(
          /[(http(s)?):/(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
        )
      ) {
        formIsValid = false;
        newErrors.url = "Invalid URL";
      }
    }

    // Image - optional, but validate format if provided
    if (fields.image) {
      if (
        !fields.image.match(
          /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
        )
      ) {
        formIsValid = false;
        newErrors.image = "Invalid image URL";
      }
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const createStore = async () => {
    const store = {
      name: fields.name,
      address1: fields.address1,
      address2: fields.address2,
      address3: fields.address3,
      lat: fields.lat ? parseFloat(fields.lat) : null,
      lng: fields.lng ? parseFloat(fields.lng) : null,
      phone: fields.phone,
      url: fields.url,
      image: fields.image,
      region: fields.region,
      createdAt: Date.now()
    };

    try {
      // Save to Firebase Realtime Database using Firebase v8 syntax
      await firebase.database().ref('stores').push(store);
      
      // Also call the parent component's addStore function if provided
      if (addStore) {
        addStore(store);
      }
      
      console.log('Store added successfully to Firebase');
    } catch (error) {
      console.error('Error adding store to Firebase:', error);
      // You might want to show an error message to the user here
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      await createStore();
      // Reset form
      setFields({
        name: '',
        address1: '',
        address2: '',
        address3: '',
        lat: '',
        lng: '',
        phone: '',
        url: '',
        image: '',
        region: ''
      });
      setErrors({});
    }
  };

  return (
    <form className="store-edit" onSubmit={submitForm}>
      <input
        type="text"
        ref={nameRef}
        name="name"
        placeholder="Name *"
        value={fields.name}
        onChange={(e) => handleChange("name", e)}
      />
      <span className="error">{errors.name}</span>

      <input
        type="text"
        ref={address1Ref}
        name="address1"
        placeholder="Address line 1"
        value={fields.address1}
        onChange={(e) => handleChange("address1", e)}
      />
      <span className="error">{errors.address1}</span>

      <input
        type="text"
        ref={address2Ref}
        name="address2"
        placeholder="Address line 2"
        value={fields.address2}
        onChange={(e) => handleChange("address2", e)}
      />
      <span className="error">{errors.address2}</span>

      <input
        type="text"
        ref={address3Ref}
        name="address3"
        placeholder="Address line 3"
        value={fields.address3}
        onChange={(e) => handleChange("address3", e)}
      />
      <span className="error">{errors.address3}</span>

      <input
        type="text"
        ref={regionRef}
        name="region"
        placeholder="Region *"
        value={fields.region}
        onChange={(e) => handleChange("region", e)}
      />
      <span className="error">{errors.region}</span>

      <input
        type="text"
        ref={latRef}
        name="lat"
        placeholder="Latitude"
        value={fields.lat}
        onChange={(e) => handleChange("lat", e)}
      />
      <span className="error">{errors.lat}</span>

      <input
        type="text"
        ref={lngRef}
        name="lng"
        placeholder="Longitude"
        value={fields.lng}
        onChange={(e) => handleChange("lng", e)}
      />
      <span className="error">{errors.lng}</span>

      <input
        type="text"
        ref={phoneRef}
        name="phone"
        placeholder="Phone"
        value={fields.phone}
        onChange={(e) => handleChange("phone", e)}
      />
      <span className="error">{errors.phone}</span>

      <input
        type="text"
        ref={urlRef}
        name="url"
        placeholder="URL"
        value={fields.url}
        onChange={(e) => handleChange("url", e)}
      />
      <span className="error">{errors.url}</span>

      <input
        type="text"
        ref={imageRef}
        name="image"
        placeholder="Image URL"
        value={fields.image}
        onChange={(e) => handleChange("image", e)}
      />
      <span className="error">{errors.image}</span>

      <button type="submit">Add</button>
    </form>
  );
};

export default AddStoreForm;