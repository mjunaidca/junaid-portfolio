import { Twitter, GitHub, FaceBook, LinkedIn } from "@/assets/icons/socialmedia"

export const HeroData = [
    {
        call: `HELLO  THERE 👋, I'M`,
        head: 'Junaid',
        details: 'Engineering your business stories and ideas creatively.'
    },
    {
        call: '↓',
        head: '<coder>',
        details: 'I am a creative Full stack developer who writes clean and efficient code'
    }
]

export const AboutMe = [
    {
        focusText: 'I am a Creative Developer who Engineer ideas and businesses Stories based in Lahore.',
        details: 'Since October 2022 I am learning development with Sir Zia and PIAIC. When I am not doing development you will find me in AI space experimenting with different AI models or crafting business stories.'
    },
    {
        focusText: 'Random Facts',
        details: 'In 2021 I worked with Infento (Netherlands) to manage their influencer marketing campaign. While studying charted accountancy I am slightly addicted to change and a content creator.'
    }
]
export const MyProjects = [
    {
        title: `TypeScript - Node.js Projects`,
        brief: `Development of 11 different typescript and NodeJS projects including:`,
        points: [`Student Management System`, `ATM & OOP Concepts`, `Calculator & To Do APP`, `Number Guessing Game`, `Currency Converter`, `Word Counter & Quiz`],
    },
    {
        title: `Panavere DAO Site & Styling NextJS Projects`,
        brief: `Developed PanaverseDAO website design in Figma, & created frontend in:`,
        points: [`Chakra UI + NextJS 13`, `Tailwind CSS + NextJS 13`],
        remark: 'Created NextJS 13 styling projects using Chakra UI and Tailwind CSS.'
    },
    {
        title: `AI Image Generator`,
        brief: `Development of an AI Image Generator Runtime App with:`,
        points: [`NextJS 13 framwork`, `Tailwind CSS`, `Headless UI`, `Open AI API`],
        remark: 'Developed together with Muhammad Ahmad'
    }
]

export const MyAcheivments = [
    {
        title: `COURSERA`,
        brief: `I had the pleasure to finish a few Google certifications on Coursera to enhance my knowledge and Skillset.`,
        points: [`Introduction to Git and GitHub`, `Foundations of Project Management`, `Project Initiation: Starting a Successful Project`, `Foundations of User Experience (UX) Design`],
    },
    {
        title: `PIAIC QUARTER 1`,
        brief: `I started my development career with PIAIC in October 2022. Since then I have learned:`,
        points: [`HTML, CSS, Git & Github`, `Web 3.0 & Metaverse Theory`, 'Typescript Fundamentals', 'Object-Oriented TypeScript Programming', `Next.js 13 Web Dev`, `Chakra UI & Tailwind CSS`],
    },
    {
        title: `DATACAMP`,
        brief: `During Quarter 1 break assignments with DataCamp I have completed the certification`,
        points: [`Introduction to Git`],
    }
]

export const ContactME = {
    name: `Muhammad Junaid Shaukat`,
    email: `mr.junaidshaukat@gmail.com`,
    number: `+92 320 9400 351`,
    socialMedia: [
        {
            label: `twitter`,
            Icon: `${Twitter}`,
            link: `https://twitter.com/Muhamma76571391`
        },
        {
            label: `github`,
            Icon: `${GitHub}`,
            link: `https://github.com/mjunaidca`
        },
        {
            label: `facebook`,
            Icon: `${FaceBook}`,
            link: `https://www.facebook.com/mjunaid.ca/`
        },
        {
            label: `linkedin`,
            Icon: `${LinkedIn}`,
            link: `https://www.linkedin.com/in/mrjunaid-ca1/`
        }
    ],
    Quotes: [`It's about bringing the ideas to life`, `Every businesses and idea have a great story to share`, `An efficient developer can engineer those stories creatively`]

}