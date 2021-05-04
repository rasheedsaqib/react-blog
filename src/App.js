import { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './Ui/Navbar/navbar';
import Posts from "./Posts/posts";
import FullPost from "./FullPost/fullPost";
import Footer from './Ui/Footer/footer';

function App() {
  return (
      <Fragment>
          <Navbar />

          <Route path='/' exact component={Posts} />

          <Route path='/posts/:id' exact component={FullPost} />

          <Footer />
      </Fragment>
  );
}

export default App;
