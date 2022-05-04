import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import React from 'react';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import FormHandling from './components/FormHandling';
import LifecycleA from './components/LifecycleA';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/hookCounterFour';
import FocusInputone from './components/FocusInputone';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ComponentC from './components/Context/ComponentC';
import { UserProvider } from './components/Context/userContext';
import PostList from './components/react-http/PostList';
import PostForm from './components/react-http/PostForm';
import ComponentC1 from './components/useContext/ComponentC1';

// Step: 1 create  useContext
export const UserContext = React.createContext()

export const ChannelContext = React.createContext()

// step: 2 we need to provide this context with a value and the provider
//  must wrap the children components with the value to be available

// step: 3 Consume the context value

function App() {
    return ( < div className = "App" >
        <
        UserContext.Provider value = { 'Shubham' } >
        <
        ChannelContext.Provider value = { 'Saini' } >
        <
        ComponentC1 / >
        <
        /ChannelContext.Provider> < /
        UserContext.Provider > < /
        div >
    );
}

export default App;