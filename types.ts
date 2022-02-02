/*
Custom types used in the project 
Needed for TypeScript
*/

// Navigation parameters (different screens for the app)
export type NavigatorParamsList = {
    Home: undefined,
    CitySearch: undefined,
    CountrySearch: undefined,
    Result: {input:string, result:any}
}