import React from 'react'
import { Switch, Route } from 'react-router'

import { RouterProvider } from './router/_index'
import { ReduxProvider } from './redux/_index'
import { setBaseURL } from './services/_index'

import { env } from './helpers/env'

import { UserListView } from './views/UserListView'
import { NewUserView } from './views/NewUserView'
import { EditUserView } from './views/EditUserView'

import { ThemeProvider } from './styles/ThemeContext'

setBaseURL(env.REACT_APP_API_URL)

function App() {
  return (
    <div className={'App'}>
      <ThemeProvider>
        <ReduxProvider>
          <RouterProvider>
            <Switch>
              <Route exact path={'/'} component={UserListView} />
              <Route exact path={'/new'} component={NewUserView} />
              <Route exact path={'/edit/:id'} component={EditUserView} />
            </Switch>
          </RouterProvider>
        </ReduxProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
