import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {ContainerQuery} from 'react-container-query';
import classnames from 'classnames';
import {Layout } from 'antd';
import GlobalFooter from './components/GlobalFooter/GlobalFooter'
import {links,copyright,query} from './utils/common'


export default class MyComponent extends Component{
    render(){
        return (
            <ContainerQuery query={query}>
                {(params) => (
                    <div className={classnames(params)}>
                        <Layout> <GlobalFooter links={links} copyright={copyright} /></Layout>
                    </div>
                )}
            </ContainerQuery>
        );
    }
}

ReactDOM.render(<MyComponent/>, document.getElementById('root'));