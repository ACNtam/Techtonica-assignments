import calendar from "./calendar.png";
import "./App.css";
import Header from "./components/Header";
import Users from "./components/Users";
import Events from "./components/Events";
import Footer from "./components/Footer";
//import DeleteUser from "./components/DeleteUser";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        
      </header>
      <main>
        <div className="user-and-events">


          <Users />
          <Events />

          
        </div>
        {/* <DeleteUser /> */}
        <aside className="search-toolbar">
          <div>
            <h3>Find Events</h3>
            <form id="search" action="#">
              <fieldset>
                <label htmlFor="date-search">Date</label>
                <input type="text" id="date-search" placeholder="YYYY-MM-DD" />
              </fieldset>
              <fieldset>
                <label htmlFor="category-search">Category</label>
                <input type="text" id="category-search" />
              </fieldset>
              <input type="submit" value="Search" />
            </form>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
}
export default App;

