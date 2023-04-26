import React, { Component } from 'react' ;
import axios from 'axios';


export default class AddFeedbackstd extends Component {
    state = {
       
        stdfeeback :'',
        
}

    constructor(props) {
        super(props);

       
        this.OnChangestdfeedback = this.OnChangestdfeedback.bind(this);
        
        this.OnSubmit = this.OnSubmit.bind(this);
    }

    componentDidMount() {
    }

    OnChangestdattente(e){
        this.setState({
            stdfeedback : e.target.value
        })
    }
   
    OnChangestdfeedback(e){
        this.setState({
            stdfeeback : e.target.value
        })
    }
   
   

    OnSubmit(e) {
        e.preventDefault();

        const feedback=  {
           
            stdfeeback : this.state.stdfeeback,
        
        }
    
           

   axios.post('http://localhost:8080/entreprises',feedback)
   .then(res => console.log(res.data));

    }
    
    render() {
        return(
            <div className="container">

                <form onSubmit={this.OnSubmit}>
                <div className="form-group">
                        <label htmlFor="nomStg"> Feedback du Forum :</label>
                        <input type="text" 
                            
                            className="form-control" 
                            value={this.state.StageName} 
                            onChange={this.OnChangeStageName}
                            />
                    </div>
                    
                   
                    
                    <button type="submit" className="btn btn-primary"> Ajouter Feedback </button>
                </form>

            </div>
        )
    }
}