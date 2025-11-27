import { Course } from "src/app/models/course.models";

export interface CourseState {
    courses: Course[]
}

export const intialCourseState: CourseState = {
    courses: [
        {
            id: 1,
            title: "Full Stack Python Developer",
            image: "https://www.webasha.com/uploads/course/images/66890a84bc92b1720257156.Full_Stack_Python_Developer.jpg",
            description: "Master Python, Django, REST APIs, and modern frontend frameworks to become a full-stack developer.",
            author: "John Doe",
            price: 199
        },
        {
            id: 2,
            title: "UI/UX Design Fundamentals",
            image: "https://www.webasha.com/uploads/course/images/66890a84bc92b1720257156.UIUX_Design_Fundamentals.jpg",
            description: "Learn the essentials of user interface and user experience design with practical projects.",
            author: "Jane Smith",
            price: 149
        },
        {
            id: 3,
            title: "React for Beginners",
            image: "https://www.webasha.com/uploads/course/images/66890a84bc92b1720257156.React_For_Beginners.jpg",
            description: "Build dynamic, component-driven web applications using React.js and modern JavaScript.",
            author: "Michael Brown",
            price: 129
        },
        {
            id: 4,
            title: "Python Programming Essentials",
            image: "https://www.webasha.com/uploads/course/images/66890a84bc92b1720257156.Python_Programming_Essentials.jpg",
            description: "A hands-on introduction to Python programming with exercises and mini projects.",
            author: "Emily Johnson",
            price: 99
        },
        {
            id: 5,
            title: "Data Science with Python",
            image: "https://www.webasha.com/uploads/course/images/66890a84bc92b1720257156.Data_Science_With_Python.jpg",
            description: "Learn data analysis, visualization, and machine learning using Python libraries.",
            author: "Chris Evans",
            price: 249
        },
        {
            id: 6,
            title: "Digital Marketing Masterclass",
            image: "https://www.webasha.com/uploads/course/images/66890a84bc92b1720257156.Digital_Marketing_Masterclass.jpg",
            description: "Master SEO, content marketing, social media strategies, and paid advertising campaigns.",
            author: "Sophia Lee",
            price: 179
        }
    ]
}
