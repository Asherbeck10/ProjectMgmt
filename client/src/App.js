import Header from './components/Header';
import Clients from './components/Clients';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:8000/graphql/',
    cashe: new InMemoryCache(),
  }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
