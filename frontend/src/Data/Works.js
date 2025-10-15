import Img1 from '../assets/portfolio-img2.png'
import Img2 from '../assets/portfolio-img5.png'
import Img4 from '../assets/portfolio-img4.png'
import Img0 from '../assets/proj0.png'

export const Works = [
  {
    id: 1,
    img: Img0,
    title: 'E-COMMERCE WEBSITE',
    desc: 'Fully responsive E-commerce platform with both user and admin panels.',
    points: [
      'User & Admin Authentication with JWT',
      'Product Management with Image Upload',
      'Cart & Order System with Checkout Flow',
      'Fully Responsive UI with Optimized Routing',
    ],
    tech: [
      'React.js',
      'Redux',
      'Node.js',
      'Express',
      'TailwindCSS',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Passport.js',
      'Stripe',
    ],
    git: 'https://github.com/prakashbist28/Ecommercemern',
    web: 'https://ecommercepb.vercel.app/',
  },
  {
    id: 2,
    img: Img1,
    title: 'CHATTER',
    desc: 'Chatter is a real-time messaging web application with user authentication and online status features.',
    points: [
      'Real-time Messaging using Socket.io',
      'Implemented Online/Offline User Status and unread Message Indicators',
      'Uses bcrypt for user registration and login security',
      'Fetches random user avatars using an API',
    ],
    tech: [
      'React.js',
      'Node.js',
      'Express',
      'Styled Components',
      'MongoDB',
      'Bcrypt',
      'Socket.io',
      'Context API'
    ],
    git: 'https://github.com/prakashbist28/Chatter',
    web: 'https://chatter-pb.onrender.com',
  },
  {
    id: 3,
    img: Img2,
    title: 'QUIZ CHAMP',
    desc: 'With Quiz champs create, take, and track your quiz performance instantly.',
    points: [
      'Dynamic Quiz Creation & Participation',
      'Search, Timer Logic with Score Calculation',
      'Detailed Result Analytics with Answers Review',
      'Implemented Dark/Light Modes',
    ],
    tech: [
      'React.js',
      'Node.js',
      'Express',
      'MongoDB',
      'TailwindCSS',
    ],
    git: 'https://github.com/prakashbist28/Quizchamps',
    web: 'https://quizchamps.vercel.app/',
  },
  {
    id: 4,
    img: Img4,
    title: 'PORTFOLIO',
    desc: 'Portfolio that gives complete view of my work, abilities, and contact details.',
    points: [
      'Smooth Animations & Section Transitions',
      'Scroll-based Navigation with Active State',
      'Integrated Contact Form using Web3 forms',
      'Fully Responsive Modern UI Design',
    ],
    tech: [
      'React.js',
      'Framer Motion',
      'TailwindCSS',
      'Web3 Forms',
    ],
    git: 'https://github.com/prakashbist28/Portfolio',
    web: 'https://prakashbist.onrender.com',
  },
];
