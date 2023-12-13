import "./App.css";
import Counter from "./Counter/Counter";
import "./Counter/counter.css";
import "./Counter/contactcard.css";
import ContactList from "./Counter/ContactList";
function App() {
  return (
    <div className="App">
      <Counter />
      <hr></hr>
      <ContactList />
    </div>
  );
}

export default App;
