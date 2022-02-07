/**
 * Methods for fetching information about countries
 */

/**
 * Method to find top three most populated cities of an inputted country
 * Needs to "convert" country name into a country code in the api first to find correct names and cities
 *
 * @param countryInput The country the user has inputted
 * @returns List of top three populated cities of the inputted country
 */
export const fetchThreeMostPopulatedCities = async (countryInput: string) => {
  return await fetchCountryCode(countryInput).then(
    async (response) => {
      return fetchThreeCities(response);
    },
    (error) => {
      return console.error(error);
    }
  );
};

/**
 *
 * @param countryInput The country name the user inputted
 * @returns The corresponding country code
 */
const fetchCountryCode = async (countryInput: string) => {
  const endpoint: string =
    process.env.API_PATH +
    "featureClass=A&featureCode=PCLI&maxRows=1&name=" +
    countryInput;

  return fetch(endpoint).then((response) =>
    response.json().then(
      (result) => {
        if (result.totalResultsCount <= 0) {
          return "The country you have searched for does not exist";
        }

        return result.geonames[0].countryCode;
      },
      (error) => {
        return console.error(error);
      }
    )
  );
};

/**
 *
 * @param countryCode Code of country inputted
 * @returns List of the three cities
 */
const fetchThreeCities = async (countryCode: string) => {
  const endpoint: string =
    process.env.API_PATH +
    "featureCode=PPLA&featureCode=PPLS&featureCode=PPLC&maxRows=3&orderby=population&country=" +
    countryCode;

  return fetch(endpoint).then((response) =>
    response.json().then(
      (result) => {
        if (result.geonames.length <= 0) {
          return "The country you have searched for does not exist";
        }

        let cities: string[] = [];
        for (let i: number = 0; i < result.geonames.length; i++) {
          cities.push(result.geonames[i].name);
        }
        return cities;
      },
      (error) => {
        return console.error(error);
      }
    )
  );
};
