import React from 'react';
import './TodoList.scss';

import { Box, Checkbox, Text, Badge } from '@chakra-ui/react';

import { isComplete, isRemoveTask } from '../../store/taskSlice';
import { useDispatch } from 'react-redux';

import { DefaultScreen } from '../DefaultScreen/DefaultScreen';
import { TodoItem } from '../TodoItem/TodoItem';
import { EditTask } from '../EditTask/EditTask';

import { Table, Thead, Tr, Th, Tbody, Tfoot, Td } from '@chakra-ui/react';

interface TodoListProps {
  task: {
    id: string;
    text: string;
    complete: boolean;
    priority: string;
  }[];
  value?: string;
}

interface IEditTask {
  id: string | null;
  textValue: string | null;
  priority: string | null;
}

export const TodoList: React.FC<TodoListProps> = ({ task }) => {
  const dispatch = useDispatch();

  const [editTask, setEditTask] = React.useState<IEditTask>({
    id: null,
    textValue: null,
    priority: null,
  });

  const [showModal, setShowModal] = React.useState<boolean>(false);

  const onCompleteTaks = (id: string) => {
    dispatch(isComplete(id));
  };

  const removeTask = (id: string | null) => {
    dispatch(isRemoveTask(id));
  };

  const onEditTask = (id: string | null, textValue: string, priority: string) => {
    setEditTask({
      id,
      textValue,
      priority,
    });
    setShowModal(true);
  };

  if (task.length === 0) {
    return <DefaultScreen />;
  }

  return (
    <>
      <Box bg="white" borderRadius="xl" boxShadow="base">
        <Table size="md" rounded="md" variant="simple">
          <Thead>
            <Tr>
              <Th borderLeft="0.5px solid #E2E8F0">Task name</Th>
              <Th width="300px" borderLeft="0.5px solid #E2E8F0">
                Priority
              </Th>
              <Th width="300px" borderLeft="0.5px solid #E2E8F0">
                Status
              </Th>
            </Tr>
          </Thead>
          {task.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCompleteTaks={(id) => onCompleteTaks(id)}
              onEditTask={(id, textValue, priority) =>
                onEditTask(id, textValue, priority)
              }
            />
          ))}
        </Table>
      </Box>
      <Box>
        {showModal && (
          <EditTask
            editTask={editTask}
            setShowModal={setShowModal}
            removeTask={(id) => removeTask(id)}
          />
        )}
      </Box>
    </>
  );
};
