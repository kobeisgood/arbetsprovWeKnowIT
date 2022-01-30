/**
 * API for fetching information about cities 
 */

/**
 * Method that find population of a inputted city
 * 
 * @param cityInput The city the user has inputted 
 * @returns The population of the inputted city 
 */
export const fetchCityPopulation = async ( cityInput:string ) => {

    const endpoint:string = process.env.API_PATH + 'featureCode=PPLA&featureCode=PPLS&featureCode=PPLC&maxRows=1&name_equals=' + cityInput

    try {
        const response = await fetch(endpoint)
        await response.json().then(
            (result) => {
                if (result.totalResultsCount !== 1) {return "The city you have searched for does not exist"}
                
                console.log(result.geonames[0].population)
                return result.geonames[0].population
            }
        )
        } catch (error) {
            console.error(error)
        }
}