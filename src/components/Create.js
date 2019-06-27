import React from "react";
import axios from "axios";

class Create extends React.Component {
    state = {
        name: '',
        price: '',
        imageUrl: 'https://picsum.photos/500',
        description: '',
        shipping: '',
        errorMessage: null
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createItem = (event) => {
        event.preventDefault()

        const { name, price, imageUrl, description, shipping } = this.state
        const payload = { name, price, imageUrl, description, shipping }

        axios.post("http://localhost:3333/items", payload)
            .then((response) => {
                this.props.updateItems(response.data)
                this.setState({
                    errorMessage: null
                })
                this.props.history.push("/trinkets")
            })
            .catch((err) => {
                // console.log(err)
                this.setState({
                    errorMessage: err.response.data.error
                })
            })
    }

    render() {
        const { name, price, imageUrl, description, shipping, errorMessage } = this.state;
        // const name = this.state.name;

        return (
            <form onSubmit={this.createItem}>
                <h1>Create New Trinket</h1>

                <p>{errorMessage}</p>

                <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name" />
                <input type="number" name="price" value={price} onChange={this.handleChange} placeholder="Price" />
                <input type="text" name="imageUrl" value={imageUrl} onChange={this.handleChange} placeholder="Image URL" />
                <input type="text" name="description" value={description} onChange={this.handleChange} placeholder="Description" />
                <input type="text" name="shipping" value={shipping} onChange={this.handleChange} placeholder="Shipping" />

                <button type="submit">Create</button>
            </form>
        )
    }
}

export default Create;