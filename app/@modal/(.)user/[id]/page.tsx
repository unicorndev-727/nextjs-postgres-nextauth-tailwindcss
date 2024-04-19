import { sql } from '@vercel/postgres';
import type { User } from '../../../page';
import UsersTable from '../../../table';


export default async function User({ params }: { params: { id: string } }) {
    const result = await sql`
    SELECT id, name, username, email 
    FROM users 
    WHERE id LIKE ${params.id};
  `;
    const users = result.rows as User[];

    return <div className="modal">
        <UsersTable users={users} />
    </div>
}