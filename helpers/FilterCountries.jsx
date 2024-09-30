export const FilterCountries = (
    countries,
    searchTerm,
    selectedRegion,
    selectedSubRegion,
    selectedPopulationRange
) => {
    let filteredCountries = countries?.filter((country) => {
        const matchesSearch = country.translations.por.common
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesRegion = selectedRegion
            ? country.region === selectedRegion
            : true;

        const matchesSubRegion = selectedSubRegion
            ? country.subregion === selectedSubRegion
            : true;

        const matchesPopulation = filterByPopulation(country.population, selectedPopulationRange);

        return matchesSearch && matchesRegion && matchesSubRegion && matchesPopulation;
     
    });

    return filteredCountries;
};

const filterByPopulation = (population, selectedPopulationRange) => {
    if (selectedPopulationRange === '<1M') {
        return population < 1000000;
    } else if (selectedPopulationRange === '1M-10M') {
        return population >= 1000000 && population < 10000000;
    } else if (selectedPopulationRange === '10M-100M') {
        return population >= 10000000 && population < 100000000;
    } else if (selectedPopulationRange === '>100M') {
        return population >= 100000000;
    }
    return true; 
};
