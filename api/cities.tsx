/**
 * API for fetching information about cities 
 */

/*
const responseJSON = await response.json()
        console.log(responseJSON)

        if (responseJSON.totalResultsCount !== 1 ) {
            return "The city you have searched for does not exist"
        } else {
            console.log(responseJSON.geonames[0].population)
            let population = responseJSON.geonames[0].population
            return population
        }

         try {
        const response = await fetch(endpoint)
        await response.json().then(
            (result) => {
                if (result.totalResultsCount !== 1) {return "The city you have searched for does not exist"}
                
                console.log(result.geonames[0].population)
                let population = result.geonames[0].population
                return population
            }
        )

*/



/**
 * Method that find population of a inputted city
 * 
 * @param cityInput The city the user has inputted 
 * @returns The population of the inputted city 
 */
export const fetchCityPopulation = async ( cityInput:string ) => {

    const endpoint:string = process.env.API_PATH + 'featureCode=PPLA&featureCode=PPLS&featureCode=PPLC&maxRows=1&name_equals=' + cityInput

    return fetch(endpoint).then(
        (response) => response.json().then(
            (result) => {
                console.log(result)
                if (result.totalResultsCount !== 1) {return "The city you have searched for does not exist"}
                
                let population = result.geonames[0].population
                return population
                
            }, (error) => { return error}        
        )
    )
        
}

