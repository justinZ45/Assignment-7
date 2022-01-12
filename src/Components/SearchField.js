import React, { Component } from "react";
import './SearchField.css';
import GifCard from "./GifCard";
import axios from "axios"

class SearchField extends Component  //constructs, initializes data
{

    
    constructor(props)
    {
        super(props);
            this.state=
            {
                field: [],
                fieldTextInput: " ",
                trend: [],
                random: []
            }
    
    }

    handleSearchChange = (event) =>   //controls change in search bar
    {
        this.setState({fieldTextInput: 
            event.target.value});
    }

    obtainData = (event) =>  //obtains desired gif content using api and url
    {

       let apiURL = `http://api.giphy.com/v1/gifs/search?q=${this.state.fieldTextInput}&api_key=7btqCnvYaOu4vKug3ipPQ4yP49KWePNq`
    
       axios.get(apiURL)    
        .then(response => {
            this.setState({field: response.data.data,
                   trend: [],
                random: []});
            console.log(response);
        })



       .catch((error) =>//occur if error is caught
        {
            this.setState({
                field: [],
                fieldText: " "

            });
         })   
    
    }


    //---------------------------------Trending Gifs---------------------------------------

    obtainTrendData = (event) => //obtains desired gif content using api and url
    {


       let apiURL = `http://api.giphy.com/v1/gifs/trending?api_key=7btqCnvYaOu4vKug3ipPQ4yP49KWePNq`
    
       axios.get(apiURL)    
        .then(response => {
            this.setState({trend: response.data.data,
                field: [],
            random: []});
            console.log(response);
        })



       .catch((error) =>//occur if error is caught
        {
            this.setState({
                trend: [],

            });
         })   
    
    }

    //---------------------------------Random Gifs---------------------------------------

    obtainRandomData = (event) =>  //obtains desired gif content using api and url
    {

       let apiURL = `http://api.giphy.com/v1/gifs/random?api_key=7btqCnvYaOu4vKug3ipPQ4yP49KWePNq`
    
       axios.get(apiURL)    
        .then(response => {
            this.setState({ random: [...this.state.random, response.data.data],
                   trend: [],
                    field: [] });
            console.log(response);
        })



       .catch((error) =>//occur if error is caught
        {
            this.setState({
                random: []
        
            });
         })   
    
    }



    componentDidMount()
    {
        this.obtainTrendData();
    }



    render()  //renders content, displays on screen; maps gifs, creates buttons, etc.
    {
        return(
            <div id = "gif-info">
                <h1 id = "gif-search-head"> Search Below for Gifs!</h1>
                <div id = "gif-search">
                <label>
                    Enter Keyword:
                </label>                      
                <input
                id = "gif-input"
                type = "text"
                onChange={this.handleSearchChange}
                />
                <button id = "gif-submit" onClick = {()=>{this.obtainData()}}> Search </button>


                <button id = "gif-submit-trending" onClick = {()=>{this.obtainTrendData()}} > Trending </button>


                <button id = "gif-submit-random" onClick = {()=>{this.obtainRandomData()}}> Random </button>

              </div>
  
                {this.state.field.map(data=>
                  {
  
                      return(
                        <div id = "gif-photos">
                        <img src = {data.images.original.url}/>
                        </div>
                      )
                  })}
      
                   {this.state.trend.map(data=>
                  {
                      return(
                        <div id = "gif-photos-trend">
                        <img src = {data.images.original.url}/>
                        </div>
                      )
                  })}

               {this.state.random.map(data=>
                  {
                      return(
                        <div id = "gif-photos-trend">
                        <img src = {data.images.original.url}/>
                        </div>
                      )
                  })}


                  
                
                 

               
                    
            
            </div>
        


        )


    
    }

}


export default SearchField