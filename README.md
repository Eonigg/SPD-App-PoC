# Sustainable Product Design

## Overview
The Sustainable Product Design application is a React-based web application designed to facilitate local authentication and provide a user-friendly interface for managing sustainable product designs. The application features a login form, a navigation bar with profile and configuration options, and a main window for various functionalities.

## Project Structure
```
sustainable-product-design
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Auth
│   │   │   ├── LoginForm.tsx
│   │   │   └── index.tsx
│   │   ├── Navbar
│   │   │   ├── ProfileOptions.tsx
│   │   │   ├── ConfigOptions.tsx
│   │   │   └── index.tsx
│   │   └── MainWindow
│   │       └── index.tsx
│   ├── pages
│   │   └── HomePage.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── styles
│       ├── App.css
│       └── index.css
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd sustainable-product-design
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

### Building for Production
To create a production build, run:
```
npm run build
```
This will generate a `build` directory with optimized files for deployment.

## Features
- Local authentication with email and password.
- User-friendly navigation bar with profile and configuration options.
- Main window for application functionalities.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.