import React from 'react';
import InputField from '../InputField';
import {useState, useEffect} from 'react';
import _ from 'lodash';

export const SearchbyPhone = ({data}: any) => {
  const {handleSearch, searchText} = useGetPhoneFilterValues(data);

  return (
    <>
      <InputField
        placeholder="Search by phone"
        onChange={handleSearch}
        value={searchText}
      />
    </>
  );
};

export const useGetPhoneFilterValues = (data: any) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchText?.trim() === '') {
      // If the search query is empty, show all data
      setSearchResults(data);
    } else {
      // Otherwise, filter the data based on the search query (case-insensitive)
      const lowerCaseSearchText = searchText?.toLowerCase();
      const filteredResults = data?.filter((request: any) => {
        const phoneNumber = _.get(
          request,
          'user_detail.phone',
          '',
        ).toLowerCase();
        return phoneNumber?.includes(lowerCaseSearchText);
      });
      setSearchResults(filteredResults);
    }
  }, [data, searchText]);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  return {handleSearch, searchText, searchResults};
};
