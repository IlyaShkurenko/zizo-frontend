<h1 align="center">ZIZO Frontend</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>


> React.js, Typescript, Vite

## Project description

### Overview
This project presents a full-stack solution integrating a simple React application with an AWS Lambda service function. The core functionality of this project is to analyze a given text and calculate the number of different types of words (nouns, verbs, adjectives, etc.) it contains.

### React Application
The front-end of this project is a React application, designed to offer a user-friendly interface for text analysis. Key features of the React app include:

**Input Text Field:** Allows users to input the text they want to analyze.

**Submit Button:** Users can submit their text for analysis.

**Result Display:**
A paragraph block where the analysis results are displayed, showing the count of different word types in the submitted text.

## Architecture: Feature-Sliced Design
The architecture of this project is based on the concept of Feature-Sliced Design (FSD). FSD is a methodology for structuring projects that:

**Improves Maintainability:** By organizing code according to business logic and domain specifics, it becomes easier to manage and update.

**Facilitates Scalability:** As new features or domains are added, the project can scale smoothly without significant restructuring.

**Enhances Collaboration:** Teams can work on different features or layer

## Usage

Install the dependencies:

```sh
yarn install
```

Run dev server:

```sh
yarn dev
```

You can run type-checking in watch mode in another terminal, if you may:

```sh
yarn type-check --watch
```

## Production version

To generate the production version, you can run:

```sh
yarn build
```

All files you have to deploy will be located at the `dist` directory.

### Run production version locally

To check if everything will be ok in production before the deployment, you can run this command after `yarn build`:

```sh
yarn preview
```

## Author

👤 **Illia Shkurenko**

* LinkedIn: [@ilya-shkurenko](https://www.linkedin.com/in/ilya-shkurenko-128288157/)
