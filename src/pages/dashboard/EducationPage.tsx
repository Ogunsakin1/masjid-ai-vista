import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const courses = [
    { id: 1, title: 'Beginners Arabic', instructor: 'Ustadh John Doe', students: 25 },
    { id: 2, title: 'Tajweed 101', instructor: 'Ustadha Jane Smith', students: 15 },
    { id: 3, title: 'Islamic History', instructor: 'Dr. Abu Bakr', students: 30 },
];

const EducationPage = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Education</h1>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" /> Create Course
                </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                    <Card key={course.id}>
                        <CardHeader>
                            <CardTitle>{course.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Instructor: {course.instructor}</p>
                            <p>Students: {course.students}</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" size="sm">Manage Course</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default EducationPage;
