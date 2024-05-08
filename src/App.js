import "./App.css";
import GitHubUserSearch from "./components/github-user/GitHubUserSearch";
import MovieDatabase from "./components/movie-database/MovieDatabase";
import QuoteGenerator from "./components/quote-generator.js/QuoteGenerator";
import RecipeFinder from "./components/recipe/RecipeFinder";
import TodoList from "./components/todo-list/TodoList";
import WeatherApp from "./components/weather/WeatherApp";

function App() {
  return (
    <div className="App">
      <TodoList />
      <WeatherApp />
      <RecipeFinder />
      <GitHubUserSearch />
      <MovieDatabase />
      <QuoteGenerator />
    </div>
  );
}

export default App;
