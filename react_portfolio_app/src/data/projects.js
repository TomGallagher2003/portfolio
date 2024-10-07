import chessStart from '../images/chessStart.png';
import chessMoves from '../images/chessMoves.png';
import chessHero from '../images/chessHero.png';
import greenThumbsHero from '../images/greenThumbsHero.png';
import pongHero from '../images/pongHero.png';
import dataHero from '../images/dataHero.png';

export const projects = {
    1: {
        title: 'Chess Engine with Integrated Board GUI',
        briefDescription: 'A Java chess engine using minimax with alpha-beta pruning and a JavaFX-based GUI.',
        description: 'I developed a chess engine in Java, utilising the minimax algorithm with alpha-beta pruning to evaluate positions recursively after each available move. The system uses bitboards for an efficient representation of the chessboard, with evaluations based on both piece value and positioning. It also includes an opening parser that processes PGN (Portable Game Notation) strings, allowing the engine to replicate grandmaster-level openings. The move engine is integrated with a JavaFX-based GUI, enabling users to play a complete game of chess against the program. This is a personal passion project.',
        link: 'https://github.com/TomGallagher2003/ChessEngine',
        images: [
            { title: 'Initial Board Setup', src: chessStart },
            { title: 'Visualisation of Legal Moves', src: chessMoves }
        ],
        heroImage: chessHero
    },
    2: {
        title: 'GreenThumbs - Spring Boot Application',
        briefDescription: 'A Spring Boot app connecting gardening workers with clients, developed for SENG302.',
        description: 'I developed GreenThumbs as part of an 8-person team for SENG302, a full-year project course. GreenThumbs is a Spring Boot application that connects casual gardening workers with individuals looking for gardening tasks. The tech stack includes Java, Spring Boot, Vanilla JavaScript, HTML with Thymeleaf, CSS, MariaDB, SQL, JUnit, Cucumber, Nginx, Microsoft Azure Content Moderation, OpenWeather API, Geoapify Location API, and Flying Saucer. The production instance is available.',
        link: 'https://csse-s302g2.canterbury.ac.nz/prod',
        images: [],
        heroImage: greenThumbsHero
    },
    3: {
        title: 'Petition Manager: RESTful API with React Frontend',
        briefDescription: 'A petition manager app with a REST API and React frontend, built for SENG365.',
        description: 'I created a petition manager web application for SENG365, a web computing architecture course. This included a RESTful API to manage database interactions and a React application for the frontend. The tech stack includes React, Node.js, TypeScript, JSX, Material UI, CSS, and MySQL Relational Database.',
        link: null,
        images: []
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
    }

};

export default projects;