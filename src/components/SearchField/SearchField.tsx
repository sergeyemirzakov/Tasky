import React from 'react';

import { InputGroup, InputLeftElement, Input, Box } from '@chakra-ui/react';

import { BiSearch } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { filterTodo } from '../../store/taskSlice';

export const SearchField: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>('');

  const dispatch = useDispatch();

  const onSearchValueChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.toLowerCase());
    dispatch(filterTodo(e.target.value.toLowerCase()));
  };

  return (
    <Box width="60%">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<BiSearch size="1.2rem" color="#2262EA" />}
        />
        <Input
          value={searchValue}
          onChange={onSearchValueChangeHanlder}
          width="100%"
          borderColor="gray.300"
          backgroundColor="white"
          type="text"
          focusBorderColor="#2262EA"
          placeholder="Search..."
        />
      </InputGroup>
    </Box>
  );
};
