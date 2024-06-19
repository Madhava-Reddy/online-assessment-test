# Online Assessment Test

## Overview
This project is an Online Assessment Test application that includes two sections: Logical Reasoning and Psychometric tests. Each section has three difficulty levels: Easy, Moderate, and Hard.

## Features
* *Two Sections*: Logical Reasoning and Psychometric tests.
* *Adaptive Difficulty*: Questions' difficulty changes based on the user's performance.
* *Progress Tracking*: Displays the percentage of completed questions.

## Installation and Setup

### Prerequisites
* Node.js (v12 or higher)
* npm (v6 or higher)

### Steps

1. **Clone the repository**
   https://github.com/Madhava-Reddy/online-assessment-test.git
   cd online-assessment-test
2. **Install dependencies**
   npm install
3. **Build the project**
   npm run build
4. **Start the server**
   npm start

### Usage
Once the server is started, open your web browser and navigate to http://localhost:3333/ to access the Online Assessment Test application.

### Sections
*Logical Reasoning*
This section tests the user's ability to think logically and solve problems using given information.

*Psychometric*
This section assesses the user's psychological attributes, including personality, intelligence, and aptitude.

## Difficulty Levels
Each section has three difficulty levels:
* Easy: For beginners.
* Moderate: For users with some experience.
* Hard: For advanced users.

## Development
### Folder Structure
* src: Contains all source code files.
* assets: Contains static files like questions JSON.
* store: State management using Stencil Store.
* components: Reusable UI components.

### Key Files
* src/components/app-root/app-root.tsx: The main component of the application.
* src/store/store.ts: State management logic.

### State Management
The application uses a centralized state management approach with Stencil Store. It tracks the current section, question index, user answers, and more.

### Adaptive Difficulty
The difficulty of questions adjusts based on the user's performance:

* Starts with Easy questions.
* If the user answers 2 questions correctly in a row, the difficulty increases to Moderate.
* If the user answers 3 questions correctly in a row, the difficulty increases to Hard.
