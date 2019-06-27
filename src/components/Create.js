import React from "react";

class Create extends React.Component {
    state = {
        name: '',
        price: '',
        imageUrl: '',
        description: '',
        shipping: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createItem = (event) => {
        event.preventDefault()
    }

    render() {
        const { name, price, imageUrl, description, shipping } = this.state;
        // const name = this.state.name;

        return (
            <form onSubmit={this.createItem}>
                <h1>Create New Trinket</h1>
                
                <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name" />
                <input type="number" name="price" value={price} onChange={this.handleChange} placeholder="Price" />
                <input type="text" name="imageUrl" value={imageUrl} onChange={this.handleChange} placeholder="Image URL" />
                <input type="text" name="description" value={description} onChange={this.handleChange} placeholder="Description" />
                <input type="text" name="shipping" value={shipping} onChange={this.handleChange} placeholder="Shipping" />
            </form>
        )
    }
}

export default Create;