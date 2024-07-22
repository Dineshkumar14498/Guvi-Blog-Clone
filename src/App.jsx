import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Blogs";
import All from "./Components/All";
import Fullstack from "./Components/FullStack"
import Datascience from "./Components/Datascience";
import Career from "./Components/Career";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Blogdetails from "./Components/Blogdetails";
import Cyber from "./Components/Cyber"


function App() {
    const blogs = [
        {
            id: 1,
            title: "Best Full-Stack Development Project Ideas in 2024",
            tag: "Full Stack",
            imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
            author: "Isha Sharma",
            date: "03 jul, 2024",
            time: 3,
            siteURL: "https://www.guvi.in/blog/full-stack-development-project-ideas/",
            content:
                "When you give your resume to any potential recruiter, the first thing that they check apart from your education is the number of projects that you have done during your career. The aim of the project is not just to showcase your understanding of the subject but rather to showcase your interest in that subject that extends beyond academics Building a project is very important for individuals to gain practical knowledge of concepts. Since full-stack development is the most demanding job in the IT industry, hence, it’s very important for you to build some creative and amazing projects. The demand for full-stack developers is rising and will continue to rise in the coming years.",
        },
        {
            id: 2,
            title: "How Long Would It Take to Be a Full Stack Developer?",
            tag: "Full Stack",
            imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg",
            author: "Isha Sharma",
            date: "Mar 26, 2024",
            time: 5,
            siteURL:
                "https://www.guvi.in/blog/how-long-would-it-take-to-be-a-full-stack-developer/",
            content: `Have you ever wondered how much time it would take to become a skilled Full Stack Developer, capable of creating awesome websites and web applications? Whether you’re already familiar with coding or just starting, you might be curious about the learning process and how long it’ll take to reach your goals.

`,
        },

        {
            id: 3,
            title: "6 Essential Prerequisites For Learning ReactJS",
            tag: "Full Stack",
            imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/07/24746653_7002417-1-1536x1024.jpg",
            author: "Ram Kumar",
            date: "Mar 25, 2024",
            time: 5,
            siteURL:
                "https://www.guvi.in/blog/prerequisites-for-reactjs/",
            content: `If you did, learning ReactJS is the best decision! Making beautiful, sensitive, and quick web applications requires a lot of effort. ReactJS has a lot to offer in UI development.
Now, the very first thought that might as well come to your mind is- What are the prerequisites for ReactJS? Well, ReactJS is a very powerful front-end framework based on JavaScript. And, it’s a wonderful creation by Facebook Inc. that solves many issues related to the front-end.`,
        },

        {
            id: 4,
            title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
            tag: "Data Science",
            imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
            author: "Isha sharma",
            date: "14 jun, 2024",
            time: 7,
            siteURL:
                "https://www.guvi.in/blog/top-non-coding-jobs-in-data-science/",
            content: `Are you someone who’s not interested in coding, but wants to get placed in tech through data science, and earn a handsome salary? Worry Not! Tech companies have various opportunities open for you even if you’ve no experience in coding. Data science has evolved to become one of the most sought-after fields in the tech industry.`,
        },
        {
            id: 5,
            title:"12 Real-World Data Science Examples: Power Of Data Science? ",
            tag: "Data Science",
            imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-1536x1024.jpg",
            author: "Lukesh S",
            date: "03 jul, 2024",
            time: 6,
            siteURL: "https://www.guvi.in/blog/real-world-data-science-examples/",
            content: `Have you ever wondered how some of the world’s most successful companies seem to know exactly what you need, even before you do? Or how your favorite streaming service recommends the perfect movie or how companies accurately predict customer behavior to offer personalized experiences? These all are Data Science examples and the answers to these lies in this article

`,
        },

        {
            id: 6,
            title:"Top Product-Based Companies for Data Science Freshers ",
            tag: "Data Science",
            imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
            author: "Lukesh S",
            date: "03 jul, 2024",
            time: 6,
            siteURL: "https://www.guvi.in/blog/product-based-companies-for-data-science-freshers/",
            content: `In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing the power of data to gain valuable insights and make informed decisions.
As a data science fresher, it’s essential to find the right company that aligns with your interests and offers the right growth opportunities.
In this article, we will explore the top product-based companies for data science freshers, along with the factors to consider when choosing the right employer.`,
        },


        {
            id: 7,
            title: "Non-Coding Jobs in Cybersecurity",
            tag: "Cyber",
            imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
            author: "Jaishree Tomar",
            date: "03 jul, 2023",   
            time: 3,
            siteURL: "https://www.guvi.in/blog/top-non-coding-jobs-in-cybersecurity/",
            content:
                `In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills are a prerequisite for success.

While it is true that certain cybersecurity roles require extensive coding knowledge, there are plenty of non-coding jobs within the industry that play a crucial role in protecting organizations from cyber threats.`,
        },

        {
            id: 8,
            title: "What Is Hacking? Types of Hacking & More",
            tag: "Cyber Security",
            imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
            author: "Meghana",
            date: "16 Apr, 2024",
            time: 5,
            siteURL:
                "https://www.guvi.in/blog/what-is-hacking/",
            content:
                `Have you ever wondered what hacking is all about? It’s a big deal in today’s tech-heavy world, and it can be both fascinating and scary. In this blog, we’re going to explore hacking in simple terms so that you can understand it better. We’ll look at the different kinds of hacking that exist. 

 `,
        },

        {
            id: 9,
            title: "How Is Cyber Security Important To Our Lives?",
            tag: "Cyber Security",
            imageURL: "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
            author: "Tushar Vinocha",
            date: "16 Apr, 2024",
            time: 5,
            siteURL:
                "https://www.guvi.in/blog/why-should-you-learn-cyber-security/",
            content:
                `Cybersecurity is an exact solution that is sought either by a billionaire with a massive business or an innovator with a small start-up or even an individual who risks personal data online. Let’s see more. `,
        },

        {
            id: 10,
            title: "9 Most Creative Data Engineering Project Ideas To Kickstart Your Career",
            tag: "Career",
            imageURL: "https://www.guvi.in/blog/wp-content/uploads/2024/03/9-Creative-Data-Engineering-Project-Ideas-To-Kickstart-Your-Career.webp",
            author: "Lukesh S",
            date: "08 Sep, 2023",
            time: 4,
            siteURL:
                "https://www.guvi.in/blog/most-creative-data-engineering-project-ideas/",
            content:
                `There’s no easier way to learn a subject than learning it through practical projects. Data engineering is one such subject that you can learn quickly and enjoyably through projects.
If you don’t know what type of projects to take up on. Worry not, we got you covered as we compiled a list of data engineering project ideas and we categorized them as beginner, intermediate, and advanced levels so that you can easily get started.`,
        },
   
   
        {
            id: 11,
            title: "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
            tag: "Career",
            imageURL: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn.webp",
            author: "Saakshi Priyadarshini",
            date: "27 May, 2024",
            time: 7,
            siteURL:
                "https://www.guvi.in/blog/top-technologies-to-learn-now/",
            content:
                `If your New Year resolution consists of building a successful tech career in 2024, then you need a few more weapons in your arsenal to achieve your goal. The tech industry is rapidly evolving and as a representative of the techie world, we can feel how daunting it must feel to keep up!`,
        },

        {
            id: 12,
            title: "8 Mistakes To Avoid When You Begin a Data Science Career",
            tag: "Career",
            imageURL: "https://www.guvi.in/blog/wp-content/uploads/2023/05/Beginner-mistakes-in-data-science-career.webp",
            author: "Srinithi Sankar",
            date: "27 May, 2024",
            time: 7,
            siteURL:
                "https://www.guvi.in/blog/mistakes-to-avoid-in-a-data-science-career/",
            content:
                `With leading modern-day companies relying on Data Science professionals to make more informed decisions and bring in better solutions, the field of data science is constantly evolving. We agree that the demand for data scientists is steadily increasing. On the other hand, data science is hands down one of the competitive fields where you need to be a skillful professional with appropriate expertise to sustain your stand in the field.`,
        },
    ];

    const router = createBrowserRouter([
        {
            element: <Navbar />,
            children: [
                { path: "/", element: <Home blogs={blogs} /> },
                {
                    path: "blogs",
                    element: <Blogs blogs={blogs} />,
                    children: [
                        {
                            path: "all",
                            element: <All blogs={blogs} />,
                        },
                        {
                            path: "fullstack",
                            element: <Fullstack blogs={blogs} />,
                        },
                        {
                            path: "datascience",
                            element: <Datascience blogs={blogs} />,
                        },
                        {
                            path: "Cybersecurity",
                            element: <Cyber blogs={blogs} />,
                        },
                        {
                            path: "Career",
                            element: <Career blogs={blogs} />,
                        },
                        {
                            path: ":blogId",
                            element: <Blogdetails blogs={blogs} />,
                        },
                    ],
                },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
