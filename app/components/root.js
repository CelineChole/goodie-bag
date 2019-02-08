import React from 'react'
import Candy from './candy'
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
            <Route exact path="/" />
            <Route path="/candies" component={Candy} />Candies
          </Switch>
        <main>
          {/* <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
          <p>YO YO YO</p> */}
        </main>
      </div>
    </HashRouter>
  )
}

export default Root