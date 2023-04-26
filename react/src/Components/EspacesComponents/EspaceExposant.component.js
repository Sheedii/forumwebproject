import React, { Component } from 'react'
import ListeOffreStage from './ListeOffreStage.component';
import ListEntreprise from './ListEntreprise.component.jsx';

export default class EspaceExposant extends Component { 
   constructor(props) {
    super(props);
   }
       render() {
           return(
               <div>
                    <h1>Bonjour dans votre Espace Exposant </h1>
           
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a href="/ListEtudiant" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Consulter la liste des Etudiants </a>
                    <br></br>
                    <br></br>
                    <a href="/ListeOffreStage" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Consulter la liste des Offres de Stage </a>
                    <br></br>
                    <br></br>
                    <a href="/AddOffreStage" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Ajouter un offre de Stage </a>
                    <br></br>
                    <br></br>
                    <a href="/AddAttenteExposant" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"> Attentes Forum </a>
                    <br></br>
                    <br></br>
                    <a href="/AddFeedbackExposant" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"> feedback Forum </a>
                    <br></br>
                    <br></br>
               </div>
               )
              
            }
    
    }