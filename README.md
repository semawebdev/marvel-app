# Marvel App

The Marvel App is a web application that allows users to explore information about Marvel comics, characters, and movies. It is built using React and fetches data from the Marvel API.

## Getting Started

### Prerequisites 

- Git
- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
```console
$ git clone https://github.com/semawebdev/marvel-app
```
2. Install dependencies:
```console
$ cd marvel-app
$ npm install
```

3. Obtain Marvel API Keys:

- Go to the [Marvel Developer Portal](https://developer.marvel.com/).
- Sign up for an account or log in.
- Navigate to "My Developer Account" and obtain your API keys.
- Under the section where you get your API keys, find the "Authorized Referrers" section. Type localhost as the second refferer, after developer.marvel.com.

4. Hash your private API Key as required by Marvel API:
- Go to the [Online Hash Generator](https://md5.cz/).
- Hash your private API key, and save it to use in the following step.  

4. Configure API Keys:

- Change the name of the file `.env.example` to `.env` in the project's root directory.
- In this `.env` file add your `<REACT_APP_MARVEL_API_KEY>` and `<REACT_APP_HASH>` with your Marvel API keys:

  ```
  $ REACT_APP_MARVEL_PUBLIC_KEY=<YOUR_PUBLIC_KEY>
  $ REACT_APP_HASH=<YOUR_HASHED_PRIVATE_KEY>
  ```

5. Start the development server:
```console
$ npm start
````

6. Open your web browser and visit `http://localhost:3000` to access the Marvel App.

## Usage

- Upon opening the app, you can explore various sections like name, comics, characters, and movies.
- Use the dropdown to select the feature that you want to discover. 

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary modifications.
4. Commit and push your changes to your fork.
5. Submit a pull request to the main repository.
