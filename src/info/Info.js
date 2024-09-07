import self from "../img/withoutbgProfilePic copy.png"
import mock01 from "../img/mock01.png"
import mock02 from "../img/mock02.png"
import mock03 from "../img/mock03.png"
import mock04 from "../img/mock04.png"
import mock1 from "../img/mock1.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0, 152, 174)", "rgb(27, 251, 172)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

export const info = {
    firstName: "Premansh",
    lastName: "Chanderiya",
    initials: "Pc", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by Ginger Tea'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "🏫",
            text: "Computer Science Student at SRMIST"
        },
        {
            emoji: "📧",
            text: "premanshacademics@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/Premanshc",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/premansh-chanderiya-4a428522a/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/PremanshCodes",
            icon: "fa fa-twitter",
            label: 'twitter'
        },
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/premanshchanderiya/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        }
        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "I'm Premansh, a dedicated Full Stack Developer specializing in the MERN stack. With expertise in MongoDB, Express.js, React.js, and Node.js, alongside PostgreSQL, MySQL, and frameworks like Next.js and Nest.js, I'm committed to delivering top-notch web solutions. I thrive on solving complex problems with Data Structures and Algorithms, while my passion for AI and ML fuels my constant quest for learning and innovation. Let's shape the future together, one line of code at a time.",
    skills:
        {
            proficientWith: ['Javascript','C++', 'React', 'Git', 'Github', 'Bootstrap', 'HTML', 'CSS', 'NextJS', 'NodeJS'],
            exposedTo: ['Python', 'Adobe Illustrator']
        }
    ,
    hobbies: [
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Football',
            emoji: '⚽'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Video Meet App",
            live: "https://video-meet-app-client.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Premanshc/Video-Meet-App---Client", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock01
        },
        {
            title: "Keeper Notes App",
            live: "https://keeper-notes-app-sooty.vercel.app/",
            source: "https://github.com/Premanshc/Keeper-Notes-App",
            image: mock02
        },
        {
            title: "Daily Geeta",
            live: "https://daily-geeta.onrender.com/",
            source: "https://github.com/Premanshc/Daily-Geeta-Project",
            image: mock03
        },
        {
            title: "FoundLifeHacks Website",
            live: "https://foundlifehacks.vercel.app/",
            source: "https://github.com/Premanshc/FoundLifeHacks-Website",
            image: mock04
        },
        {
            title: "Portfolio Website",
            live: "https://portfolio-site-react-omega.vercel.app/",
            source: "https://github.com/Premanshc/Portfolio-site-react",
            image: mock1
        }
    ]
}