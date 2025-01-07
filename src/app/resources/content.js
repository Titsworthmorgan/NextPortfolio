import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Morgan',
    lastName: 'Titsworth',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Frontend Team Lead',
    avatar: '/images/avatar.jpg',
    location: 'America/Los_Angeles',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/morgan-titsworth/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:titsworthmorgan@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Developer, Mentor, Veteran</>,
    subline: <>I'm Morgan, a <InlineCode>Frontend Team Lead</InlineCode> <br />
        based in Eugene, Oregon.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Full Stack Developer and Military Veteran with Secret Security Clearance, specializing in a wide range of web technologies, including HTML, CSS, JavaScript, React, SQL, and NoSQL. Brings 4 years of experience leading technical teams and managing software implementation, along with a strong foundation in competency-based learning to guide junior developers in practical project execution. Proven ability to streamline workflows and optimize development processes, crafting web and mobile applications for diverse clients. Passionate about embracing new technologies and maintaining industry-relevant educational content. Recognized for leadership, technical proficiency, and commitment to delivering high-quality software solutions.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'ERA Solutions LLC',
                timeframe: '2023 - Present',
                role: 'Frontend Team Lead',
                achievements: [
                    <>Plan and oversee the execution of development projects, guiding staff and apprentices through the end-to-end lifecycle of building and delivering scalable web and mobile applications.</>,
                    <>Mentors within a competency-based learning program that integrates apprentices’ development in webtechnologies with hands-on full-stack development projects, enhancing the application of theoreticalknowledge through practical experience.</>,
                    <>Cultivates an integrated learning atmosphere that combines education with practical application, preparingstaff and apprentices for real-world tech challenges in continued professional development.</>,
                    <>Applies expertise in full-stack development to contribute actively to project lifecycles, utilizing advancedcoding practices and architectural knowledge.</>,
                    <>Ensures educational materials and development practices remain at the forefront of industry standards,achieving a balance between teaching responsibilities and technical project engagement.</>,
                    <>Oversee code reviews, debugging, and performance optimization, improving application load times and userinteractions.</>,
                    <>Collaborate cross-functionality with back-end teams, product managers, and UI/UX designers to ensureseamless integration of features and high-quality user experiences.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-04/image.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-05/image.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'ToBeDetermined Inc.',
                timeframe: '2021 - Present',
                role: 'Co-Founder & Lead Developer',
                achievements: [
                    <>Developed an lead the implementation of training models used to teach individuals upd to date web development standards and practices</>,
                    <>Collaborated in creation of AI driven automation solution for blue collar businesses. Reducing netoperational costs by at least $20,000 per year and increasing profit margins by 20%.</>,
                    <>Streamlined market report data flow for corporations with a sales volume over $800 Million.</>,
                    <>Created an individualized approach to several startup businesses, coaching shareholders on businessoperations as well as staffing development of minimum viable products to provide within pitch decks.</>,
                    <>Created competitive analysis reports in a variety of verticals for multiple startups.</>,
                ],
                images: [
                    {
                        src: '/images/projects/project-01/image.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-02/image.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-03/image.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'United States Army',
                timeframe: '2021 - 2023',
                role: 'Computer/Detection Systems Repairer',
                achievements: [
                    <>Maintained and repaired electronic equipment, including computers, cryptographic equipment, and radar systems.</>,
                    <>Conducted system tests to identify and resolve technical issues, ensuring optimal performance of equipment.</>,
                    <>Developed and implemented preventive maintenance programs to minimize equipment downtime and reduce repair costs.</>,
                    <>Performed equipment installations and upgrades, ensuring compliance with technical specifications and safety standards.</>,
                    <>Provided technical support to end users, troubleshooting hardware and software issues to ensure operational efficiency.</>,
                    <>Maintained accurate records of equipment maintenance and repair activities, ensuring compliance with regulatory requirements.</>,
                ],
                images: []
            },
            {
                company: 'United States Army',
                timeframe: '2018 - 2021',
                role: 'Combat Engineer',
                achievements: [
                    <>Planned and executed combat engineering missions, including route clearance, obstacle emplacement, and demolition operations.</>,
                    <>Conducted field reconnaissance to assess terrain and identify potential obstacles, hazards, and enemy positions.</>,
                    <>Operated heavy equipment, including bulldozers, excavators, and mine-clearing vehicles, to support engineering operations.</>,
                    <>Constructed and repaired defensive positions, fortifications, and obstacles to protect friendly forces and impede enemy movement.</>,
                    <>Provided technical expertise and support to infantry units, assisting with breaching obstacles and clearing minefields.</>,
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Lane Community College',
                description: <>Currently enrolled for computer science</>,
            },
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js</>,
                images: [
                    {
                        src: '/images/projects/project-01/image.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-02/image.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-03/image.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'React',
                description: <>Building web apps with React</>,
                images: [
                    {
                        src: '/images/projects/project-04/image.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-05/image.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'SQL',
                description: <>Managing databases with SQL</>,
                images: []
            },
            {
                title: 'NoSQL',
                description: <>Handling non-relational databases with NoSQL</>,
                images: []
            },
            {
                title: 'TypeScript',
                description: <>Developing scalable applications with TypeScript</>,
                images: []
            },
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Development projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'vertoical'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-15.jpg',
            alt: 'image',
            orientation: 'horizontal'
        }
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };