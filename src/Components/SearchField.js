import React, { Component } from "react";

class SearchField extends Component
{


    constructor()
    {
        super();
            this.state=
            {
                display: false,
                field: [],
                fieldText: " "
            }
    
    }

    handleSearchChange = event =>
    {
        this.setState({fieldText: event.target.value});
    }

    obtainData = async () =>
    {

        try{


        const fieldText = this.state.fieldText;
        const keyApi = "7btqCnvYaOu4vKug3ipPQ4yP49KWePNq";
        let apiResponse = await fetch("http://api.giphy.com/v1/gifs/search?q=" + fieldText + "&keyApi")

        let apiData = await apiResponse.json();

        this.setState({
            display:true,
            field: apiData,
        });
    }

        catch(error) //occur if error is caught
        {
            this.setState({
                field: [],
                fieldText: "No Gifs Found"

            });
        }
    }

    render()
    {



    
    }

}