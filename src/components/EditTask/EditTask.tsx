import React from 'react';

import { Box, Input, Select, Button, Text, Switch, Badge } from '@chakra-ui/react';

import { onEditTask } from '../../store/taskSlice';
import { useDispatch } from 'react-redux';

import { IoMdClose } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';

import removeSound from '../../sounds/remove.mp3';

interface IEditTask {
  editTask: {
    textValue: string | null;
    priority: string | null;
    id: string | null;
  };
  setShowModal: (booleanValue: boolean) => void;
  removeTask: (id: string | null) => void;
}

export const EditTask: React.FC<IEditTask> = ({ editTask, setShowModal, removeTask }) => {
  const [value, setValue] = React.useState<string>('');
  const [check, setCheck] = React.useState<boolean>(false);
  const [priority, setPriority] = React.useState<string>('');
  const playRemove = new Audio(removeSound);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (editTask.textValue === null) return;
    setValue(editTask.textValue);
  }, [editTask.textValue]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onEditTaskClickHandler = () => {
    dispatch(
      onEditTask({
        id: editTask.id,
        text: value,
        priority: priority,
      }),
    );
    setShowModal(false);
  };

  const onRemoveTaskClickHandler = (id: string | null) => {
    removeTask(id);
    setShowModal(false);
    playRemove.play();
  };

  return (
    <>
      <Box className="modal__screen-overlay"></Box>

      <Box
        className="modal__screen"
        top="50%"
        left="50%"
        width="100%"
        maxW="500px"
        boxShadow="xl">
        <Box display="flex" alignItems="baseline" justifyContent="space-between">
          <Text>Do you want to change this task?</Text>
          <Box>
            <IoMdClose cursor="pointer" onClick={() => setShowModal(false)} />
          </Box>
        </Box>
        <Box marginTop="10px" marginBottom="10px">
          <Input
            focusBorderColor="green.500"
            value={value}
            onChange={onChangeHandler}
            type="text"
          />
        </Box>
        <Box marginBottom="20px">
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box>
              <Text>Do you want to change the priority?</Text>
              <Text color="green.500" fontSize="14px">
                Your current priority is: <Badge>{editTask.priority}</Badge>
              </Text>
            </Box>
            <Box>
              <Switch colorScheme="green" onChange={() => setCheck((prev) => !prev)} />
            </Box>
          </Box>
          {check && (
            <Select
              onChange={(e) => setPriority(e.target.value)}
              marginTop="10px"
              focusBorderColor="green.500"
              size="sm">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Select>
          )}
        </Box>

        <Box>
          <Button
            onClick={onEditTaskClickHandler}
            bg="green.500"
            color="white"
            marginRight="10px"
            _hover={{ backgroundColor: 'green.600' }}>
            Change
          </Button>
          <Button
            onClick={() => onRemoveTaskClickHandler(editTask.id)}
            bg="red.400"
            color="white"
            _hover={{ backgroundColor: 'red.300' }}>
            <span style={{ display: 'flex' }}>
              <MdDeleteOutline />
              <Text>Delete</Text>
            </span>
          </Button>
        </Box>
      </Box>
    </>
  );
};
