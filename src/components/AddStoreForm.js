import React from "react";

class AddStoreForm extends React.Component {
  state = {
    fields: {},
    errors: {},
  };

  nameRef = React.createRef();
  address1Ref = React.createRef();
  address2Ref = React.createRef();
  address3Ref = React.createRef();
  latRef = React.createRef();
  lngRef = React.createRef();
  phoneRef = React.createRef();
  urlRef = React.createRef();
  imageRef = React.createRef();

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (!fields["address1"]) {
      formIsValid = false;
      errors["address1"] = "Cannot be empty";
    }

    if (!fields["address2"]) {
      formIsValid = false;
      errors["address2"] = "Cannot be empty";
    }

    if (!fields["address3"]) {
      formIsValid = false;
      errors["address3"] = "Cannot be empty";
    }

    if (!fields["lat"]) {
      formIsValid = false;
      errors["lat"] = "Cannot be empty";
    }

    if (typeof fields["lat"] !== "undefined") {
      if (!fields["lat"].match(/^\d*\.?\d*$/)) {
        formIsValid = false;
        errors["lat"] = "Only numbers";
      }
    }

    if (!fields["lng"]) {
      formIsValid = false;
      errors["lng"] = "Cannot be empty";
    }

    if (typeof fields["lng"] !== "undefined") {
      if (!fields["lng"].match(/^\d*\.?\d*$/)) {
        formIsValid = false;
        errors["lng"] = "Only numbers";
      }
    }

    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Cannot be empty";
    }

    if (typeof fields["phone"] !== "undefined") {
      if (!fields["phone"].match(/^(?=.*[0-9])[- +()0-9]+$/)) {
        formIsValid = false;
        errors["phone"] = "Invalid phone number";
      }
    }

    if (!fields["url"]) {
      formIsValid = false;
      errors["url"] = "Cannot be empty";
    }

    if (typeof fields["url"] !== "undefined") {
      if (
        !fields["url"].match(
          /[(http(s)?):/(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
        )
      ) {
        formIsValid = false;
        errors["url"] = "Invalid URL";
      }
    }

    if (!fields["image"]) {
      formIsValid = false;
      errors["image"] = "Cannot be empty";
    }

    if (typeof fields["image"] !== "undefined") {
      if (
        !fields["image"].match(
          /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
        )
      ) {
        formIsValid = false;
        errors["image"] = "Invalid image URL";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  submitForm(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      this.createStore();
      e.currentTarget.reset();
    } else {
      return;
    }
  }

  createStore = () => {
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
  };

  render() {
    return (
      <form className="store-edit" onSubmit={this.submitForm.bind(this)}>
        <input
          type="text"
          ref={this.nameRef}
          name="name"
          placeholder="name"
          onChange={this.handleChange.bind(this, "name")}
        />
        <span className="error">{this.state.errors["name"]}</span>
        <input
          type="text"
          ref={this.address1Ref}
          name="address1"
          placeholder="Address line 1"
          onChange={this.handleChange.bind(this, "address1")}
        />
        <span className="error">{this.state.errors["address1"]}</span>
        <input
          type="text"
          ref={this.address2Ref}
          name="address2"
          placeholder="Address line 2"
          onChange={this.handleChange.bind(this, "address2")}
        />
        <span className="error">{this.state.errors["address2"]}</span>
        <input
          type="text"
          ref={this.address3Ref}
          name="address3"
          placeholder="Address line 3"
          onChange={this.handleChange.bind(this, "address3")}
        />
        <span className="error">{this.state.errors["address3"]}</span>
        <input
          type="text"
          ref={this.latRef}
          name="lat"
          placeholder="latitude"
          onChange={this.handleChange.bind(this, "lat")}
        />
        <span className="error">{this.state.errors["lat"]}</span>
        <input
          type="text"
          ref={this.lngRef}
          name="lng"
          placeholder="longtitude"
          onChange={this.handleChange.bind(this, "lng")}
        />
        <span className="error">{this.state.errors["lng"]}</span>
        <input
          type="text"
          ref={this.phoneRef}
          name="phone"
          placeholder="phone"
          onChange={this.handleChange.bind(this, "phone")}
        />
        <span className="error">{this.state.errors["phone"]}</span>
        <input
          type="text"
          ref={this.urlRef}
          name="url"
          placeholder="url"
          onChange={this.handleChange.bind(this, "url")}
        />
        <span className="error">{this.state.errors["url"]}</span>
        <input
          type="text"
          ref={this.imageRef}
          name="image"
          placeholder="image url"
          onChange={this.handleChange.bind(this, "image")}
        />
        <span className="error">{this.state.errors["image"]}</span>
        <button type="submit">Add Store</button>
      </form>
    );
  }
}

export default AddStoreForm;
