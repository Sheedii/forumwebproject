import React, { Component } from 'react' ;
import axios from 'axios';


export default class AddAttenteStd extends Component {
    state = {
        stdattente : '',
        
        
}

    constructor(props) {
        super(props);

        this.OnChangestdattente = this.OnChangestdattente.bind(this);
        
        
        this.OnSubmit = this.OnSubmit.bind(this);
    }

    componentDidMount() {
    }

    OnChangestdattente(e){
        this.setState({
            stdattente : e.target.value
        })
    }
   
   
   
   

    OnSubmit(e) {
        e.preventDefault();

        const feedback=  {
            stdattente : this.state.stdattente,
            
        
        }
    
           

   axios.post('http://localhost:8080/entreprises',feedback)
   .then(res => console.log(res.data));

    }
    
    render() {
        return(
            <div className="container">

                <form onSubmit={this.OnSubmit}>
                <div className="form-group">
                        <label htmlFor="nomStg"> Attentes du Forum :</label>
                        <input type="text" 
                            
                            className="form-control" 
                            value={this.state.StageName} 
                            onChange={this.OnChangeStageName}
                            />
                    </div>
                   
                    
                    <button type="submit" className="btn btn-primary"> Ajouter Attentes </button>
                </form>

            </div>
        )
    }
}