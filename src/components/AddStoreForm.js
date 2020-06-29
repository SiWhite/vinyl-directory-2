import React from "react";

class AddStoreForm extends React.Component {
  nameRef = React.createRef();
  address1Ref = React.createRef();
  address2Ref = React.createRef();
  address3Ref = React.createRef();
  latRef = React.createRef();
  lngRef = React.createRef();
  phoneRef = React.createRef();
  urlRef = React.createRef();
  imageRef = React.createRef();

  createStore = (e) => {
    e.preventDefault();
    const store = {
      name: this.nameRef.current.value,
      address1: this.address1Ref.current.value,
      address2: this.address2Ref.current.value,
      address3: this.address3Ref.current.value,
      lat: parseFloat(this.latRef.current.value),
      lng: parseFloat(this.lngRef.current.value),
      phone: this.phoneRef.current.value,
      urlRef: this.urlRef.current.value,
      image: this.imageRef.current.value,
    };
    this.props.addStore(store);
    e.currentTarget.reset();
  };
  render() {
    return (
      <form className="store-edit" onSubmit={this.createStore}>
        <input type="text" ref={this.nameRef} name="name" placeholder="name" />
        <input
          type="text"
          ref={this.address1Ref}
          name="address1"
          placeholder="Address line 1"
        />
        <input
          type="text"
          ref={this.address2Ref}
          name="address2"
          placeholder="Address line 2"
        />
        <input
          type="text"
          ref={this.address3Ref}
          name="address3"
          placeholder="Address line 3"
        />
        <input
          type="text"
          ref={this.latRef}
          name="lat"
          placeholder="latitude"
        />
        <input
          type="text"
          ref={this.lngRef}
          name="lng"
          placeholder="longtitude"
        />
        <input
          type="text"
          ref={this.phoneRef}
          name="phone"
          placeholder="phone"
        />
        <input type="text" ref={this.urlRef} name="url" placeholder="url" />
        <input
          type="text"
          ref={this.imageRef}
          name="image"
          placeholder="image url"
        />
        <button type="submit">Add Store</button>
      </form>
    );
  }
}

export default AddStoreForm;
