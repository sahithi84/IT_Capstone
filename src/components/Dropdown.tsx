/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {themes} from '../theme';
import {Text} from 'react-native';

export function Dropdown({
  value = null,
  onSelect = () => {},
  data = [],
  open = false,
  setOpen = () => {},
  onChange = () => {},
  onSearch = () => {},
  placeholder = '',
  loading = false,
  listMessageTextStyle = {},
  dropdownStyle = {},
  placeholderStyle = {color: 'grey'},
  noResultsText = '',
  searchable = false,
}) {
  const [items, setItems] = useState(data || []);

  useEffect(() => {
    if (data && data.length > 0) {
      setItems(data);
    }
  }, [data]);

  return (
    <DropDownPicker
      style={{
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9',
        height: 35,
        borderRadius: 0,
        ...dropdownStyle,
      }}
      placeholder={placeholder}
      placeholderStyle={{...themes.fontSizes.small, ...placeholderStyle}}
      open={open}
      value={value}
      loading={loading}
      listMessageTextStyle={{
        ...themes.fontSizes.small,
        color: 'black',
        ...listMessageTextStyle,
      }}
      listItemLabelStyle={{
        color: 'black',
        ...themes.fontSizes.small,
      }}
      itemSeparator={true}
      itemSeparatorStyle={{
        backgroundColor: '#D9D9D9',
        marginHorizontal: 7,
      }}
      labelStyle={{...themes.fontSizes.small}}
      searchTextInputStyle={{
        ...themes.fontSizes.small,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        backgroundColor: 'white',
        borderBottomColor: '#D9D9D9',
      }}
      searchContainerStyle={{
        borderBottomWidth: 0,
        padding: 7,
      }}
      dropDownContainerStyle={{
        backgroundColor: '#efefef',
        borderRadius: 0,
        borderWidth: 0,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
      }}
      items={items}
      setOpen={setOpen}
      setValue={onChange}
      onSelectItem={onSelect}
      searchable={searchable}
      showTickIcon={true}
      onChangeSearchText={onSearch}
      dropDownDirection="BOTTOM"
      // @ts-ignore
      ListEmptyComponent={() => (
        <NoResultsComponent noResultsText={noResultsText} />
      )}
    />
  );
}

const NoResultsComponent = ({noResultsText = ''}) => {
  return (
    <Text
      style={{
        color: 'tomato',
        textAlign: 'center',
        fontSize: 12,
        paddingBottom: 12,
        paddingHorizontal: 12,
      }}>
      {noResultsText ? noResultsText : 'No Results Found'}
    </Text>
  );
};
