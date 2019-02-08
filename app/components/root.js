import React from 'react'
import candy from './candy'
import { HashRouter, Switch, Route } from 'react-router-dom';

const Root = () => {
  return (
    <HashRouter>
      <div>
        <nav>
          <Switch>
            <Route exact path='/' />
            <Route exact path='/candies' component={candy} />
          </Switch>

          Goodie Bag
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
          <p>YO YO YO</p>
        </main>
      </div>
    </HashRouter>
  )
}

export default Root