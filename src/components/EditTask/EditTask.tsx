import React from 'react';

import { Box, Input, Select } from '@chakra-ui/react';

interface IEditTask {
  editTask: {
    textValue: string | null;
    priority: string | null;
  };
}

export const EditTask: React.FC<IEditTask> = ({ editTask }) => {
  const [value, setValue] = React.useState<string>('');

  React.useEffect(() => {
    if (editTask.textValue === null) return;
    setValue(editTask.textValue);
  }, [editTask.textValue]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  console.log(value);

  return (
    <>
      <div>
        <Input value={value} onChange={onChangeHandler} type="text" />
      </div>
    </>
  );
};
