export const refineData = (data) => {
  const refindedData = data[0];
  return {
    name: refindedData.name, 
    altSpellings: refindedData.altSpellings,
    continents: refindedData.continents,
    subRegion: refindedData.subregion,
    capital: refindedData.capital,
    independent: refindedData.independent,
    unMember: refindedData.unMember,
    landlocked: refindedData.landlocked,
    languages: refindedData.languages,
    population: refindedData.population,
    currencies: refindedData.currencies,
    coatOfArms: refindedData.coatOfArms,
    flags: refindedData.flags,
    car: refindedData.car,
    fifa: refindedData.fifa,
    startOfWeek: refindedData.startOfWeek,
    tld: refindedData.tld,
  }
}