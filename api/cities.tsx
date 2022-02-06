/**
 * Methods for fetching information about cities 
 */

/**
 * Method that find population of a inputted city
 * 
 * @param cityInput The city the user has inputted 
 * @returns A number with the population of the inputted city 
 */
export const fetchCityPopulation = async ( cityInput:string ) => {

    // Uses environment variable set in the .env file
    const endpoint:string = process.env.API_PATH + 'featureCode=PPLA&featureCode=PPLS&featureCode=PPLC&maxRows=1&name_equals=' + cityInput

    return fetch(endpoint).then(
        (response) => response.json().then(
            (result) => {
                if (result.totalResultsCount !== 1) {return "The city you have searched for does not exist"}
                
                let population = result.geonames[0].population
                return population
                
            }, (error) => { return error}        
        )
    )  
        
}

