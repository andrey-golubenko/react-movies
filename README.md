# 🎬 React Movies - Movie Search Application

<div align="center">
  <img src="https://img.shields.io/badge/React-17.0.2-blue?logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-4.4.2-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Redux-4.1.1-purple?logo=redux" alt="Redux">
</div>

## 🌍 Demo

Experience the live demo of React Movies:
- **Live Demo**: [react-movies](https://andrey-golubenko.github.io/react-movies)

## 📌 Core Features

- **Movie Search Platform**
  - Search movies by title
  - Filter by type (movies/series/all)
  - Pagination support
- **Responsive Design**
  - Materialize CSS integration
  - Mobile-friendly interface
- **Detailed Movie Information**
  - View comprehensive movie details
  - Lazy image loading with placeholders
  - Back navigation support

## 🛠️ Technology Stack

- **[React](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Redux](https://redux.js.org/)** - State management
  - Redux Thunk for async actions
  - Redux DevTools integration
- **[React Router](https://reactrouter.com/)** - Navigation
- **[Materialize CSS](https://materializecss.com/)** - Styling framework

## 🔧 API Integration

- **[OMDB API](https://www.omdbapi.com/)** - Movie database
  - Search functionality
  - Detailed movie information

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-movies.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## 📂 Project Structure

```plaintext
react-movies/
├── src/
│   ├── components/        # React components
│   │   ├── Alert/         # Alert notifications
│   │   ├── LoadableImage/ # Lazy loading images
│   │   ├── MovieItem/     # Individual movie card
│   │   ├── MovieList/     # List of movies
│   │   ├── Pagination/    # Page navigation
│   │   ├── Preloader/     # Loading states
│   │   ├── RadioBtnList/  # Filter options
│   │   └── Search/        # Search functionality
│   ├── layout/            # Layout components
│   │   ├── Header/        # Application header
│   │   └── Footer/        # Application footer
│   ├── pages/             # Route pages
│   │   ├── Home/         # Main search page
│   │   ├── SingleMovie/  # Movie details
│   │   └── NotFound/     # 404 page
│   ├── store/            # Redux store setup
│   │   ├── reducers/     # State reducers
│   │   ├── actions/      # Action creators
│   │   └── types/        # Action types
│   └── interfaces/       # TypeScript interfaces
```

## 🔨 Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App
- `npm run deploy` - Deploy to GitHub Pages

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
