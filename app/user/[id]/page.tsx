import { sql } from '@vercel/postgres';
import type { User } from '../../page';
import UsersTable from '../../table';
import { Card, Title } from '@tremor/react';

export default async function User({ params }: { params: { id: string } }) {
    const result = await sql`
    SELECT id, name, username, email 
    FROM users 
    WHERE id LIKE ${params.id};
  `;
    const users = result.rows as User[];

    return <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <Title>User</Title>
        <Card className="mt-6">
            <UsersTable users={users} />
        </Card>
    </main>
}