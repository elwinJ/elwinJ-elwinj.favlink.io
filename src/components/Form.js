import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
        this.state = {
            name : '',
            URL : '' 
        }
        

    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
        this.setState({name: document.getElementById('urlName').value});
        this.setState({URL: document.getElementById('url').value});
    }

    onFormSubmit = event => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        //TODO - Logic for calling props to handle submission and setting state changes
        let tempName = document.getElementById('urlName').value
        let tempURL = document.getElementById('url').value

        if (tempName !== "" && tempURL !== ""){ //This if statements prevents users from adding a blank name or URL into the state in Forms.js and the state of LinkContainer.js.
            this.props.handleSubmit(this.state)
            document.getElementById('urlName').value = ""
            document.getElementById('url').value = ""
            this.setState({name: "", URL: ""})
        }
    }


    render() {
        
        return(
            
            <form> 
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                Name: <input type='text' id='urlName' onChange={this.handleChange} required></input>
                URL: <input type='text' id='url' onChange={this.handleChange} required></input>
                <button onClick={this.onFormSubmit}>Submit</button>
            </form>
        )
        
    
    }
}

export default Form;
