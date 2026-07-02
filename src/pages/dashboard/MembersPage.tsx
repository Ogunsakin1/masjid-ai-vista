import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const members = [
    { id: 1, name: 'John Doe', email: 'john@example.com', joinDate: '2023-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', joinDate: '2023-02-20' },
    { id: 3, name: 'Abu Bakr', email: 'abu.bakr@example.com', joinDate: '2022-11-10' },
    { id: 4, name: 'Fatima Al-Fihri', email: 'fatima@example.com', joinDate: '2021-09-01' },
];

const MembersPage = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Members</h1>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Member
                </Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Join Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {members.map((member) => (
                        <TableRow key={member.id}>
                            <TableCell>{member.name}</TableCell>
                            <TableCell>{member.email}</TableCell>
                            <TableCell>{member.joinDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default MembersPage;
