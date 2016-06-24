import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'

import { store } from './redux/store';
import { Home } from './components/home';
import { HomeCreate } from './components/home-create';
import { HomeJoin } from './components/home-join';
import { GlobalSetter } from './components/global-setter';
import { Main } from './components/main';
import { Settings } from './components/settings';

class App extends React.Component<{}, {}>{
    render() {
        return <div>
            {this.props.children}
        </div>;
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App>
            <GlobalSetter/>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRedirect to="/home" />
                    <Route path="home" component={Home}/>
                    <Route path="create" component={HomeCreate}/>
                    <Route path="join" component={HomeJoin}/>
                    <Route path="main" component={Main}/>
                    <Route path="settings" component={Settings}/>
                </Route>
            </Router>
        </App>
    </Provider>,
    document.getElementById("content")
);
