import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, DollarSign, Calendar, BookOpen } from 'lucide-react';

const stats = [
    { title: 'Total Members', value: '1,250', icon: Users },
    { title: 'Total Donations', value: '$50,234', icon: DollarSign },
    { title: 'Upcoming Events', value: '5', icon: Calendar },
    { title: 'Active Courses', value: '12', icon: BookOpen },
];

const DashboardPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;
