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
            imageURL: "data:image/jpeg;base64,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",
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
            imageURL: "data:image/jpeg;base64,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",
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
            imageURL: "data:image/png;base64,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",
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
