# EtiqaUserUI

This is a technical assignment for Etiqa. It's a frontend SPA that serves the API at https://github.com/jongthechemist/etiqa-user-api.

---

## Setup

Follow these steps to run the application on your local machine:

Pull the repository

`git pull https://github.com/jongthechemist/etiqa-user-ui.git`

Install dependencies

`yarn`

Update the REACT_APP_API_URL in the `.env` file based on where the API you want the UI to serve (localhost or live app).

Run the dev server

`yarn start`

Open http://localhost:3000 to view it in the browser.

---

## Details

### UI Library: React

It is bootstrapped with `create-react-app`. The application is made up of entirely functional components.

### Folder structure
```
|-- components: contains all the reusable stateless components
|-- helpers: utility functions and hooks for the application
|-- redux: contains the redux slice definitions for application state
|-- router: base setup for application routes with react-router
|-- services: API calls with axios
|-- views: contains main view components that serves as route components
```

### State Machine

The application uses Redux (`redux` + `react-redux`) to manage the application states.

The state configuration files can be found in `.redux.js` files within the `redux` folder.

To reduce complexity of Redux implementation, it uses `@reduxjs/toolkit` to create state slices (bundles of reducer and action).

A special Redux store `thunk` helps to keep track of asynchronous actions (like network call). It introduces `createAsyncStore` function that wraps around `createAsyncThunk` from `@reduxjs/toolkit`.

### Hooks

Hooks are used to enhance the functional components. There are 5 custom hooks created:

1. `useDispatchAction` returns a function that dispatch the action argument to the Redux store.

```js
// With useDispatch
const dispatch = useDispatch()
dispatch(myActionCreator(arg0, arg1))

// With useDispatchAction
const dispatchMyAction = useDispatchAction(myActionCreator)
dispatchMyAction(arg0, arg1)
```

2. `useStatePath` return a state from Redux store based on the path given with dot notation. It safely returns undefined or a default value if the path doesn't exist.

```js
// With useSelector
const value = useSelector((state) => state.mySlice.myValue)

// With useStatePath
const value = useStatePath('mySlice.myValue')
```

3. `useAccent` return the accent color. This value is provided by the `ThemeContext.js`

```js
//With useContext
const { accent } = useContext(ThemeContext)

//With useAccent
const accent = useAccent()
```

4. `useToggle` return a boolean state and a callback to toggle the value between true/false

```js
//With useState
const [state, setState] = useState(false)
setState(currentState => !currentState)

//With useToggle
const [state, toggle] = useToggle()
toggle()
```

5. `useThunkStatus` return the async action status (`pending`, `fulfilled` or `rejected`) and a callback function to clear the status in the thunk redux store. It is useful to show loading state and clearing the status once the component is unmounted.

```js
//With useThunkStatus
const [status, clearStatus] = useThunkStatus(myAction)
const successfulThunk = status === 'fulfilled
useEffect(() => {
  if(successfulThunk) clearStatus()
}, [successfulThunk])

```

### Styling
It uses SCSS as preprocessor. However, the main bulk of the styling is done with Atomic CSS approach using Bootstrap 4 utility classes.
Reusable components uses `styled-components` for a more fine-tuned styles. It generate unique classnames for the components.


### Unit test
Some test files are provided as examples of unit test. Run `yarn test` to start unit testing.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
