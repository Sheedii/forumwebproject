import React, { Component } from 'react';
import axios from 'axios';


export default class AddFeedbackExposant extends Component {
    state = {

        expfeeback: '',

    }

    constructor(props) {
        super(props);


        this.OnChangeexpfeedback = this.OnChangeexpfeedback.bind(this);

        this.OnSubmit = this.OnSubmit.bind(this);
    }



    OnChangeexpattente(e) {
        this.setState({
            expfeedback: e.target.value
        })
    }

    OnChangeexpfeedback(e) {
        this.setState({
            expfeeback: e.target.value
        })
    }



    OnSubmit(e) {
        e.preventDefault();

        const feedback = {

            expfeeback: this.state.expfeeback,

        }



        axios.post('http://localhost:8080/api/v1/entreprises', feedback)
            .then(this.props.history.push('/entreprises'));



    }

    render() {
        return (
            <div className="container">

                <form onSubmit={this.OnSubmit}>
                    <div className="form-group">
                        <label htmlFor="nomStg"> Feedback du Forum :</label>
                        <input type="text"

                            className="form-control"
                            value={this.state.expfeeback}
                            onChange={this.OnChangeexpfeedback}
                        />
                    </div>



                    <button type="submit" className="btn btn-primary"> Ajouter Feedback </button>
                </form>

            </div>
        )
    }
}