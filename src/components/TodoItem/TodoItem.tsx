import React from 'react';

import { Box, Text, Checkbox, Badge } from '@chakra-ui/react';
import { Tbody, Tr, Td } from '@chakra-ui/react';
import { RiEdit2Line } from 'react-icons/ri';

interface TodoItem {
  todo: {
    id: string;
    priority: string;
    complete: boolean;
    text: string;
  };
  onCompleteTaks: (id: string) => void;
  onEditTask: (id: string, textValue: string, priority: string) => void;
}

export const TodoItem: React.FC<TodoItem> = ({ todo, onCompleteTaks, onEditTask }) => {
  const [checked, setChecked] = React.useState<boolean>(false);
  const [showEdit, setShowEdit] = React.useState<boolean>(false);

  const onChangeHandler = (id: string) => {
    onCompleteTaks(id);
    setChecked((prev) => !prev);
  };

  return (
    <>
      <Tbody>
        <Tr>
          <Td
            onMouseLeave={() => setShowEdit(false)}
            onMouseOver={() => setShowEdit(true)}
            borderLeft="0.5px solid #E2E8F0"
            cursor="pointer"
            transition="all .3s"
            _hover={{ padding: '25px 24px', backgroundColor: 'orange.50' }}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex">
                <Checkbox
                  checked={checked}
                  onChange={(e) => {
                    e.stopPropagation();
                    onChangeHandler(todo.id);
                  }}
                  colorScheme="green"
                  marginRight={3}
                />
                <Text>{todo.text}</Text>
              </Box>
              {showEdit && (
                <Box
                  border="1px"
                  borderColor="orange.300"
                  borderRadius="md"
                  transition="all .3s"
                  padding="2px 10px"
                  _hover={{
                    backgroundColor: 'orange.300',
                    color: 'white',
                    padding: '5px 30px',
                  }}
                  onClick={(e) => {
                    onEditTask(todo.id, todo.text, todo.priority);
                  }}
                  display="flex"
                  alignItems="center"
                  cursor="pointer">
                  <Box>
                    <RiEdit2Line />
                  </Box>
                  <Text fontSize="xs">Edit</Text>
                </Box>
              )}
            </Box>
          </Td>
          <Td borderLeft="0.5px solid #E2E8F0">
            <Badge variant="outline">{todo.priority}</Badge>
          </Td>
          <Td borderLeft="0.5px solid #E2E8F0">
            <Badge colorScheme={!todo.complete ? 'blue' : 'green'} variant="outline">
              {!todo.complete ? 'In progress' : 'Done'}
            </Badge>
          </Td>
        </Tr>
      </Tbody>
    </>
  );
};
