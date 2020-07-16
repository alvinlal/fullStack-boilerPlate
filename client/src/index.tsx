import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import client from './client';
import { ApolloProvider } from '@apollo/client';

const Root = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
