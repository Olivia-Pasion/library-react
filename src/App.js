import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Router>
        <Switch>
          <Route exact path="/books">
            <BookList />
          </Route>
          <Route exact path="/books/:id">
            <BookDetail />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
