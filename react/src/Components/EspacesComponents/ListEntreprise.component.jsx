import React, { Component } from 'react';
import EntrepriseService from '../../Services/EntrepriseService';

class ListEntreprise extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entreprise: []
        };
    }

    componentDidMount() {
        EntrepriseService.getEntreprises().then((response) => {

            this.setState({ entreprise: response.data });
        });
    }


    render() {

        console.log(this.state.entreprise)
        return (
            <div>
                <h2 className="text-center">Entreprise List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> nom de l'entreprise </th>
                                <th> Nom de Represantant </th>
                                <th> prenom de Represantant </th>
                                <th> Email </th>
                                <th> linkedIn </th>
                                <th> Adresse De l'Entreprise </th>
                                <th> Contact </th>
                                <th> Pack choisis </th>
                                <th> Type </th>
                                <th> Domaine D'activite </th>
                              

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.entreprise.map((entreprise) => (
                                <tr key={entreprise.ExpID}>
                                    <td> {entreprise.expName} </td>
                                    <td> {entreprise.name}</td>
                                    <td> {entreprise.e_lastName}</td>
                                    <td> {entreprise.expMail}</td>
                                    <td> {entreprise.expLinkedIn}</td>
                                    <td> {entreprise.expLadress}</td>
                                    <td> {entreprise.expTlf}</td>
                                    <td> {entreprise.expPack}</td>
                                    <td> {entreprise.type}</td>
                                    <td> {entreprise.domaineActivite}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default ListEntreprise;
