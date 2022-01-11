import React from 'react';

import { Box, Text, Input } from '@chakra-ui/react';
import { RiEdit2Line } from 'react-icons/ri';
import { MdFileDownloadDone } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserValue } from '../../store/taskSlice';

interface CustomTextFieldProps {
  text: string;
  id: string;
}

export const CustomTextField: React.FC<CustomTextFieldProps> = ({ text, id }) => {
  const dispatch = useDispatch();
  const [customValue, setCustomValue] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>(text);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const changeValueFromStore = (id: string) => {
    dispatch(
      changeUserValue({
        id: id,
        textValue: value,
      }),
    );
    setCustomValue((p) => !p);
  };

  return (
    <>
      <Box>
        {!customValue ? (
          <Text>{text}</Text>
        ) : (
          <Input
            onChange={(e) => onChangeHandler(e)}
            defaultValue={text}
            placeholder="Enter new value"
          />
        )}

        <Box display="flex" justifyContent="flex-end">
          {customValue ? (
            <MdFileDownloadDone
              onClick={() => changeValueFromStore(id)}
              size="1.3rem"
              cursor="pointer"
            />
          ) : (
            <RiEdit2Line onClick={() => setCustomValue(true)} cursor="pointer" />
          )}
        </Box>
      </Box>
    </>
  );
};
