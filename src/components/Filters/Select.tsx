import React, { useState } from 'react';

const Select = ({ page, setPage }) => {
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedSubRegion, setSelectedSubRegion] = useState('');
    const filterText = '';
    const defaultValue = 'Todas as regiões';
    const options: any[] = [];

    const handleRegionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedRegion(event.target.value); // Atualiza a seleção da região
        setSelectedSubRegion(''); // Reseta o filtro de sub-região quando a região muda
        setPage(1); // Reseta para página 1 quando região muda
    };
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 flex-col gap-2 items-center'>
            <div className='flex flex-row w-[70%] justify-evenly'>
                <label htmlFor='region-select'>Região:</label>
                <select
                    className='select select-bordered select-sm w-full max-w-xs'
                    id='region-select'
                    value={selectedRegion}
                    onChange={handleRegionChange}
                >
                    <option value=''>{defaultValue}</option>
                    {options.map((region, index) => (
                        <option key={index} value={region}>
                            {region}
                        </option>
                    ))}
                </select>
            </div>
            {/* Filtro por sub-região */}
            <div>
                <div className='flex flex-row w-[70%] justify-evenly'>
                    <label htmlFor='subregion-select'>
                        Sub-região:{' '}
                    </label>
                    <select
                        className='select select-bordered select-sm w-full max-w-xs'
                        id='subregion-select'
                        // // //   value={selectedSubRegion}
                        // //   onChange={handleSubRegionChange}
                        //   disabled={!selectedRegion}
                    >
                        <option value=''>Todas as sub-regiões</option>
                        {/* {subRegions
                  .filter((subregion) => {
                      const belongsToSelectedRegion = countries.some(
                          (country) =>
                              country.subregion === subregion &&
                              country.region === selectedRegion
                      );
                      return belongsToSelectedRegion;
                  })
                  .map((subregion, index) => (
                      <option key={index} value={subregion}>
                          {subregion}
                      </option>
                  ))} */}
                    </select>
                </div>
            </div>
            {/* Filtro de população */}
            <div>
                <div className='flex flex-row  w-[70%] justify-evenly'>
                    <label htmlFor='population-select'>População: </label>
                    <select
                        className='select select-bordered select-sm w-full max-w-xs'
                        id='population-select'
                        //   value={selectedPopulationRange}
                        //   onChange={handlePopulationChange}
                    >
                        <option value=''>Todas as populações</option>
                        <option value='<1M'>Menos de 1M</option>
                        <option value='1M-10M'>1M - 10M</option>
                        <option value='10M-100M'>10M - 100M</option>
                        <option value='>100M'>Mais de 100M</option>
                    </select>
                </div>
            </div>
            {/* Filtro de busca */}

            <div>
                <div className='flex flex-row  w-[70%] justify-evenly'>
                    <label htmlFor='sort-by-select'>Ordenar por: </label>
                    <select
                        className='select select-bordered select-sm w-full max-w-xs'
                        id='sort-by-select'
                        //   value={sortBy}
                        //   onChange={handleSortByChange}
                    >
                        <option value='name'>Nome</option>
                        <option value='population'>População</option>
                        <option value='area'>Área</option>
                    </select>
                </div>
            </div>
            {/* Filtro de ordenação (A-Z ou Z-A para nome, crescente/decrescente para população) */}
            <div>
                <div className='flex flex-row  w-[70%] justify-evenly'>
                    <label htmlFor='sort-order-select'>Ordem: </label>
                    <select
                        className='select select-bordered select-sm w-full max-w-xs'
                        id='sort-order-select'
                        //   value={sortOrder}
                        //   onChange={handleSortOrderChange}
                    >
                        <option value='asc'>Crescente</option>
                        <option value='desc'>Decrescente</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Select;
