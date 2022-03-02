import React from 'react';

import './AddTaskFrom.scss';

import { Box, Input, Text, Button, Select, CloseButton } from '@chakra-ui/react';

import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/taskSlice';
import { priorityIndex } from '../../helpers/priorityIndex';

import notificationSound from '../../sounds/notification.mp3';

interface IAddTaskForm {
  onShowModalHandler: (booleanValue: boolean) => void;
  modalTitle: string;
}

export const AddTaskFrom: React.FC<IAddTaskForm> = ({
  onShowModalHandler,
  modalTitle,
}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [priority, setPriority] = React.useState<string>('');

  const playNotification = new Audio(notificationSound);

  const onChangeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const onChangeDescriptionHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDescription(e.target.value);
  };

  const onChangePriorityHanlder = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setPriority(e.target.value);
  };

  const onAddTaskHandler = () => {
    if (title !== '' && title.trim()) {
      dispatch(
        addTodo({
          text: title,
          priority: priority,
          description: description || '',
          priorityIndex: priorityIndex(priority) || 1,
        }),
      );
      playNotification.play();
      onShowModalHandler(false);
    }
    setTitle('');
  };

  const OnKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (e): void => {
    if (e.key === 'Enter') {
      onAddTaskHandler();
    }
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
          <Text>{modalTitle}</Text>
          <Box onClick={() => onShowModalHandler(false)}>
            <CloseButton />
          </Box>
        </Box>
        <Box marginTop="10px" marginBottom="10px">
          <Input
            onKeyDown={OnKeyDownHandler}
            focusBorderColor="brand.500"
            placeholder="Title"
            value={title}
            onChange={onChangeTitleHandler}
            marginBottom="10px"
          />
          <Input
            onKeyDown={OnKeyDownHandler}
            focusBorderColor="brand.500"
            placeholder="Description"
            value={description}
            onChange={onChangeDescriptionHandler}
          />
        </Box>
        <Box marginBottom="20px">
          <Text>Selected priority for your task</Text>
          <Select
            isDisabled={title ? false : true}
            onChange={onChangePriorityHanlder}
            focusBorderColor="brand.500"
            size="sm">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Select>
        </Box>

        <Box>
          <Button
            disabled={title ? false : true}
            bg="green.500"
            color="white"
            _hover={{ backgroundColor: 'green.600' }}
            onClick={onAddTaskHandler}>
            Add Task
          </Button>
        </Box>
      </Box>
    </>
  );
};
