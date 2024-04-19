import { sql } from '@vercel/postgres';
import type { User } from '../../../page';
import UsersTable from '../../../table';
import { Modal } from './modal';


export default async function User({ params }: { params: { id: string } }) {
    const result = await sql`
    SELECT id, name, username, email 
    FROM users 
    WHERE id = ${params.id};
  `;
    const users = result.rows as User[];

    return <Modal>
        <UsersTable users={users} />
    </Modal>
}