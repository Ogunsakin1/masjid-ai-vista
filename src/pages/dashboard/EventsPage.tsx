import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const events = [
    { id: 1, title: 'Community Iftar', date: '2025-03-25', location: 'Main Hall' },
    { id: 2, title: 'Eid Festival', date: '2025-04-10', location: 'Community Grounds' },
    { id: 3, title: 'Weekly Halaqa', date: 'Every Friday', location: 'Prayer Hall' },
];

const EventsPage = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Events</h1>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" /> Create Event
                </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                    <Card key={event.id}>
                        <CardHeader>
                            <CardTitle>{event.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Date: {event.date}</p>
                            <p>Location: {event.location}</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" size="sm">View Details</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default EventsPage;
