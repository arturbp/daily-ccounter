import { DeleteForever } from '@mui/icons-material';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

import { ItemList } from './App.types';

type Props = {
  onDeleteClick: (index: number) => void;
  list: ItemList[];
}

export default function List({ list, onDeleteClick }: Props) {
  return (
    <TableContainer sx={{ width: '400px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell>
                <IconButton onClick={() => onDeleteClick(index)}>
                  <DeleteForever color='error' />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}