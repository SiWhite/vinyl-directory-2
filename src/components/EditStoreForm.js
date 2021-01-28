import React from "react";

class EditStoreForm extends React.Component {
  handleChange = (event) => {
    const updatedStore = {
      ...this.props.store,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateStore(this.props.index, updatedStore);
  };
  render() {
    return (
      <div className="store-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.store.name}
        />
        <input
          type="text"
          name="address1"
          onChange={this.handleChange}
          value={this.props.store.address1}
        />
        <input
          type="text"
          name="address2"
          onChange={this.handleChange}
          value={this.props.store.address2}
        />
        <input
          type="text"
          name="address3"
          onChange={this.handleChange}
          value={this.props.store.address3}
        />
        <input
          type="text"
          name="region"
          onChange={this.handleChange}
          value={this.props.store.region}
        />
        <input
          type="text"
          name="lat"
          onChange={this.handleChange}
          value={this.props.store.lat}
        />
        <input
          type="text"
          name="lng"
          onChange={this.handleChange}
          value={this.props.store.lng}
        />
        <input
          type="text"
          name="phone"
          onChange={this.handleChange}
          value={this.props.store.phone}
        />
        <input
          type="text"
          name="url"
          onChange={this.handleChange}
          value={this.props.store.url}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.store.image}
        />
        <button onClick={() => this.props.deleteStore(this.props.index)}>
          Delete
        </button>
      </div>
    );
  }
}

export default EditStoreForm;
