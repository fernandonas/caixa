import React from 'react';
import * as Router from 'react-router-dom';
import PageCfg from './pageCfg';

const Routes: React.FC = () => {
    return (
        <Router.BrowserRouter>
            <Router.Switch>
                {PageCfg.map((page, index) => (
                    <Router.Route key={index} path={page.path} exact component={page.component} />
                ))}
                <Router.Redirect from="*" to="/notfound" />
            </Router.Switch>
        </Router.BrowserRouter>
    );
};

export default Routes;