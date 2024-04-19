import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';
import Link from 'next/link';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function UsersTable({ users, hasLink = false }: { users: User[], hasLink?: boolean }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Username</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{hasLink ? <Link key={user.id + 'name'} href={`/user/${user.id}`}>{user.name}</Link> : <>{user.name}</>}</TableCell>
            <TableCell>
              <Text>{hasLink ? <Link key={user.id + 'username'} href={`/user/${user.id}`}>{user.username}</Link> : <>{user.username}</>}</Text>
            </TableCell>
            <TableCell>
              <Text>{hasLink ? <Link key={user.id + 'email'} href={`/user/${user.id}`}>{user.email}</Link> : <>{user.email}</>}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
