import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/topBar";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import Fantasy from "./data/books/fantasy.json";

function App() {
  return (
    <div className="App">
      <TopBar />
      <BookList books={Fantasy} />
      <MyFooter />
    </div>
  );
}

export default App;
