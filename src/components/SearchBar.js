import React from 'react';
import {Paper,TextField } from '@material-ui/core';
class SearchBar extends React.Component{
    state={
        searchTerm:''
    }
    
    inputChangeHandler=(event)=>{
        this.setState({searchTerm:event.target.value})
        
    };
    submitHandler=(event)=>{
        this.props.onFormChange(this.state.searchTerm);
        event.preventDefault();
    }

    render(){
        return(
           <Paper elevation={6} style={{ padding: "25px" }}>
               <form onSubmit={this.submitHandler}>
        <TextField   fullWidth label="Search..."  onChange={this.inputChangeHandler} />
               </form>
           </Paper>
        )
    }
}
export default SearchBar;