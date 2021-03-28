import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)

        /* TODO - Create state object for storing favLinks */
        this.state = {
            favLinks: []
        }
        
    }

    // removeCharacter = index => {
    //     /*
    //         TODO - Create logic for setting the state to filter array and remove favLink at index
    //     */
        
    //     }
        
    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       //This function will update the array contained as a state with the new elements added from Forms.js as a callback function.
       let tempFavList = this.state.favLinks
       tempFavList.push(favLink)
       this.setState({favLinks: tempFavList})
        console.log(this.state.favLinks)

        

       console.log("favLink from LinkContainer.js" +this.state.favLinks)
    }

    removeLink = index => {
        
        //This function will remove an elelment from the array contained as a state by using the index from Table.js as a callback function.
        let tempFavList = this.state.favLinks
        tempFavList.splice(index,1)
        this.setState({favLinks: tempFavList})
    }

    render() {

        console.log("Rendering")
        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                <Table linkData={this.state.favLinks} removeLink={this.removeLink}/>                
                {/*TODO - Add Table Component */}
                
                <br/>

                <h3>Add New</h3>

                <Form handleSubmit={this.handleSubmit}/>

                {/*TODO - Add Form Component */}
            </div>
        );
    }
}

export default LinkContainer;