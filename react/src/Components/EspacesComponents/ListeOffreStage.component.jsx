import React, { Component } from 'react';
import OffreStageService from '../../Services/OffreStageService.js';

export default class ListeOffreStage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            OffreStage: []
        };}

      componentDidMount(){
        OffreStageService.getOffreStageService().then((response) => {
        
          this.setState({ OffreStage: response.data });
        });}
      
    
    render() {

        console.log(this.state.OffreStage)
        return (<div>
                <h2 className="text-center">OffreStage List</h2>
                <div className="row"><table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                               
                                <th> Type du Stage </th>
                                <th> Durée du Stage </th>
                                <th> Date Début du Stage </th>
                                <th> Cible des Etudiants </th>
                                <th> Competences Requises </th>
                                <th> Competences Supplementaires </th>
                                <th> Descriptif </th>
                             
                                
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.OffreStage.map((OffreStage) => (
                            <tr key= {OffreStage.OfsID}>
                            
                                <td> {OffreStage.stageType }</td>
                                <td> {OffreStage.duree }</td>
                                <td> {OffreStage.dateDebut }</td>
                                <td> {OffreStage.cibleEtudiants }</td>
                                <td> {OffreStage.competencesRequises }</td>
                                <td> {OffreStage.competencesSupplementaires }</td>
                                <td> {OffreStage.descriptifStage }</td>
                                
                            </tr>))}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    
}

