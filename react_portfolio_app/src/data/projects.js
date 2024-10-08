import chessHero from '../images/chessHero.png';
import greenThumbsHero from '../images/greenThumbsHero.png';
import pongHero from '../images/pongHero.png';
import dataHero from '../images/dataHero.png';
import reactHero from '../images/reactHero.png';
import portfolioHero from '../images/portfolioHero.png'
import GTgardenDetails from '../images/GTgardenDetails.png';
import GTserviceBasic from '../images/GTserviceBasic.png';
import GTqa from '../images/GTqa.png';
import GTapplications from '../images/GTapplications.png';
import java from '../images/java.png'
import javaFx from '../images/javafx.png'

export const projects = {
    1: {
        title: 'Chess Engine with Integrated Board GUI',
        briefDescription: 'A Java chess engine using minimax with alpha-beta pruning and a JavaFX-based GUI.',
        description: 'I developed a chess engine in Java, utilising the minimax algorithm with alpha-beta pruning to evaluate positions recursively after each available move. The system uses bitboards for an efficient representation of the chessboard, with evaluations based on both piece value and positioning. It also includes an opening parser that processes PGN (Portable Game Notation) strings, allowing the engine to replicate grandmaster-level openings. The move engine is integrated with a JavaFX-based GUI, enabling users to play a complete game of chess against the program. Below is a video of me getting cooked by the engine.',
        link: 'https://github.com/TomGallagher2003/ChessEngine',
        images: [],
        heroImage: chessHero,
        video: '/videos/chessGame.mp4',
        videoTitle: 'Chess Engine Demo',
        technologies: [
            { name: "Java", icon: java },
            { name: "JavaFx", icon: javaFx },
        ]
    },
    2: {
        title: 'GreenThumbs - Spring Boot Application',
        briefDescription: 'A Spring Boot app connecting gardening workers with clients, developed for SENG302.',
        description: 'I developed GreenThumbs as part of an 8-person team for SENG302, a full-year project course. GreenThumbs is a Spring Boot application that connects casual gardening workers with individuals looking for gardening tasks. The tech stack includes Java, Spring Boot, Vanilla JavaScript, HTML with Thymeleaf, CSS, MariaDB, SQL, JUnit, Cucumber, Nginx, Microsoft Azure Content Moderation, OpenWeather API, Geoapify Location API, and Flying Saucer. The production instance is available.',
        link: 'https://csse-s302g2.canterbury.ac.nz/prod',
        images: [{ title: 'Garden Details', src: GTgardenDetails },
            { title: 'Service Request: Contractor View', src: GTserviceBasic },
            { title: 'Questions and Answers: Owner View', src: GTqa },
            { title: 'Application: Owner View', src: GTapplications }],
        heroImage: greenThumbsHero
    },
    3: {
        title: 'Petition Manager: RESTful API with React Frontend',
        briefDescription: 'A petition manager app with a REST API and React frontend, built for SENG365.',
        description: 'I created a petition manager web application for SENG365, a web computing architecture course. This included a RESTful API to manage database interactions and a React application for the frontend. The tech stack includes React, Node.js, TypeScript, JSX, Material UI, CSS, and MySQL Relational Database.',
        link: null,
        images: [],
        heroImage: reactHero
    },
    4: {
        title: 'Pong Game - Microcontroller Project',
        briefDescription: 'A ping-pong game built for a microcontroller using C for ENCE260.',
        description: 'I developed a ping-pong game with a partner for the UC Fun Kit microcontroller, for ENCE260, an embedded systems course. This project included managing the LED display of the Fun Kit, and accepting input from the buttons and joystick. The project was implemented using C.',
        link: null,
        images: [],
        heroImage: pongHero
    },
    5: {
        title: 'Workout Recommender System: Big Data Processing',
        briefDescription: 'A system using Python and Dask to recommend workouts based on heart rate patterns of Endomondo users.',
        description: 'I used Python and Dask to create a system to generate workout activity recommendations for Endomondo users, based on the preferences of users that achieved similar heart rate patterns from their workouts. This project involved not only the creation of the recommender system, but also validation of the recommendations and analysis of the time complexity of the system.',
        link: null,
        images: [],
        heroImage: dataHero
    },
    6: {
        title: 'Personal Portfolio Website',
        briefDescription: 'A responsive portfolio website built with React and Material-UI to showcase my projects and skills.',
        description: 'This is a modern, responsive portfolio website developed using React and Material-UI. It is designed to showcase my personal projects, skills, and contact information in a clean and structured manner. The website is fully responsive and includes dynamic sections for each project with links to the corresponding repositories. The interactive contact page will include email functionality powered by an API in a future update. The site is hosted using GitHub Pages for easy access.',
        link: null,
        images: [],
        heroImage: portfolioHero
    }


};

export default projects;