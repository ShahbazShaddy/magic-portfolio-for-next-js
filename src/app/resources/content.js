import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Dilawar',
    lastName:  'Ali',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Physicist',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Karachi',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Urdu']  // optional: Leave the array empty if you don't want to display languages
}

// const newsletter = {
//     display: true,
//     title: <>Subscribe to {person.firstName}'s Newsletter</>,
//     description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
// }

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'Google Scholar',
        icon: 'googleScholar', // Use the Google Scholar icon
        link: 'https://scholar.google.com/citations?user=dummy',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/dilawar-ali-02a2382a5/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:dilawar.zayer@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Physicist | Researcher | Computing Enthusiast</>,
    subline: <>I'm Dilawar, a physicist with a background in material physics research and hands-on experience in<InlineCode>3D Printing</InlineCode>.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true // Change this to true to show subItems
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Dilawar Ali is a physicist and researcher specializing in material physics and advanced manufacturing, with a strong focus on leveraging 3D printing and computational techniques to address complex challenges. He explores the intersection of science and technology, constantly pushing the boundaries of innovation. With a strong foundation in problem-solving, he addresses complex real-world challenges and applies his creative expertise to develop transformative projects that turn visionary ideas into practical impactful solutions.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Department of Physics, University of the Punjab',
                timeframe: '2023 - Present',
                role: 'Research Assistant',
                achievements: [
                    <>Conducted research on material physics and advanced manufacturing techniques.</>,
                    <>Published research papers in peer-reviewed journals.</>,
                    <>Collaborated with a team of researchers to develop innovative solutions.</>
                ],
                images: []
            },
            {
                company: 'Ibex Lahore, Pakistan',
                timeframe: '2022',
                role: 'Customer Support Executive (CSE)',
                achievements: [
                    <>Provided exceptional customer support and resolved technical issues.</>,
                    <>Maintained a high customer satisfaction rating.</>,
                    <>Trained new employees on customer support best practices.</>
                ],
                images: [ ]
            },
            {
                company: 'Allied School, Lahore, Pakistan',
                timeframe: '2020',
                role: 'Physics Lecturer',
                achievements: [
                    <>Developed and delivered engaging physics lectures to high school students.</>,
                    <>Created and graded exams and assignments.</>,
                    <>Mentored students and provided academic support.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'University of the Punjab, Lahore, Pakistan',
                description: <>Completed a Master's degree in Physics with a focus on material physics and advanced manufacturing techniques. Engaged in various research projects and published papers in peer-reviewed journals.</>,
            },
            {
                name: 'University of Education, Lahore, Pakistan',
                description: <>Completed a Bachelor’s degree in Physics, gaining a strong foundation in theoretical and experimental physics. Participated in academic seminars and workshops to enhance knowledge and skills.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: '• Software Origin',
                description: <>Proficient in using Origin for data analysis and graphing.</>,
                images: [{
                    src: '/images/projects/project-01/skill_origin.jpg',
                    alt: 'Project image',
                    width: 16,
                    height: 9
                }]
            },
            {
                title: '• Software Mathematica',
                description: <>Experienced in using Mathematica for symbolic computations and visualizations.</>,
                images: [{
                    src: '/images/projects/project-01/skill_mathematica.png',
                    alt: 'Project image',
                    width: 16,
                    height: 9
                }]
            },
            {
                title: '• Advance user of DLP Printer',
                description: <>Skilled in operating and troubleshooting DLP 3D printers.</>,
                images: [{
                    src: '/images/projects/project-01/skill_DLP.png',
                    alt: 'Project image',
                    width: 16,
                    height: 9
                }]
            },
            {
                title: '• Chitubox',
                description: <>Expert in using Chitubox for slicing 3D models for printing.</>,
                images: [{
                    src: '/images/projects/project-01/skill_chitubox.jpg',
                    alt: 'Project image',
                    width: 16,
                    height: 9
                }]
            },
            {
                title: '• Microsoft Office tools (Word, PowerPoint, Excel)',
                description: <>Advanced proficiency in Microsoft Office tools for documentation, presentations, and data analysis.</>,
                images: [{
                    src: '/images/projects/project-01/skill_microsoft.jpg',
                    alt: 'Project image',
                    width: 16,
                    height: 9
                }]
            },
            {
                title: '• Python',
                description: <>Proficient in basic Python programming for problem solving.</>,
                images: [{
                    src: '/images/projects/project-01/skill_python.jpg',
                    alt: 'Project image',
                    width: 16,
                    height: 9
                }]
            }
        ]
    }
}

const blog = {
    label: 'Awards & Conferences',
    title: 'Awards & Conferences',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Research & Publication',
    title: 'My Research',
    description: `Researched by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}


// const gallery = {
//     label: 'Gallery',
//     title: 'My photo gallery',
//     description: `A photo collection by ${person.name}`,
//     // Images from https://pexels.com
//     images: [
//         { 
//             src: '/images/gallery/img-01.jpg', 
//             alt: 'image',
//             orientation: 'vertical'
//         },
//         { 
//             src: '/images/gallery/img-02.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-03.jpg', 
//             alt: 'image',
//             orientation: 'vertical'
//         },
//         { 
//             src: '/images/gallery/img-04.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-05.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-06.jpg', 
//             alt: 'image',
//             orientation: 'vertical'
//         },
//         { 
//             src: '/images/gallery/img-07.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-08.jpg', 
//             alt: 'image',
//             orientation: 'vertical'
//         },
//         { 
//             src: '/images/gallery/img-09.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-10.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-11.jpg', 
//             alt: 'image',
//             orientation: 'vertical'
//         },
//         { 
//             src: '/images/gallery/img-12.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-13.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-14.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//     ]
// }

export { person, social, home, about, blog, work };