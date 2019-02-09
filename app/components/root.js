import React from 'react'
import Candy from './candy'
import SingleCandy from './SingleCandy'
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';

const Root = () => {
  return (
    <HashRouter>
      <div>
        <nav>
          <NavLink to="/">Goodie Bag</NavLink>
          <NavLink to="./candies">Candies</NavLink>
        </nav>
          <Switch>
            <Route exact path="/">
            <main>
              <h1>Welcome to the Goodie Bag!</h1>
              <NavLink to="./candies">
                <img src="/candy.jpg"></img>
              </NavLink>
            </main>
            </Route>
            <Route path="/candies/:id" component={SingleCandy} />
            <Route path="/candies" component={Candy} />Candies
          </Switch>
        
      </div>
    </HashRouter>
  )
}

export default Root