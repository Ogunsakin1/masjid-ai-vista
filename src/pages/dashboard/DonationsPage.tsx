import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const donations = [
    { id: 1, name: 'John Doe', amount: 100, date: '2024-07-20' },
    { id: 2, name: 'Jane Smith', amount: 50, date: '2024-07-19' },
    { id: 3, name: 'Anonymous', amount: 200, date: '2024-07-18' },
    { id: 4, name: 'Fatima Al-Fihri', amount: 500, date: '2024-07-17' },
];

const DonationsPage = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Donations</h1>
                <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" /> Export CSV
                </Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {donations.map((donation) => (
                        <TableRow key={donation.id}>
                            <TableCell>{donation.name}</TableCell>
                            <TableCell>${donation.amount}</TableCell>
                            <TableCell>{donation.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default DonationsPage;
