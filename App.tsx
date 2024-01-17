/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppNavigation} from './src/navigation/AppNavigation';
import {ApolloProvider, gql} from '@apollo/client';
import AWSAppSyncClient from 'aws-appsync';
import {AUTH_TYPE} from 'aws-appsync';

const awsconfig = {
  aws_appsync_graphqlEndpoint:
    'https://prrwjjssnvhpbcdwbcwx3nm3zm.appsync-api.ap-southeast-2.amazonaws.com/graphql',
  aws_appsync_region: 'ap-southeast-2',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-psmv7fcrw5dlpmp5orner2xf7i',
};

// Amplify.configure(awsExports);

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {type: AUTH_TYPE.API_KEY, apiKey: awsconfig.aws_appsync_apiKey},
  disableOffline: true,
  // offlineConfig: {keyPrefix: 'rjg'},
});

// client
//   .query({
//     query: gql`
//       query GetZellerCustomer($id: String) {
//         getZellerCustomer(id: 1) {
//           id
//           name
//           email
//           role
//         }
//       }
//     `,
//   })
//   .then(({data}) => {
//     console.log('====================================');
//     console.log(data);
//     console.log('====================================');
//   })
//   .catch(err => {
//     console.log('====================================');
//     console.log(err);
//     console.log('====================================');
//   });

// const link = ApolloLink.from([
//   createAuthLink({
//     url: awsExports.aws_appsync_graphqlEndpoint,
//     region: awsExports.aws_appsync_region,
//     auth: {
//       type: 'API_KEY',
//       apiKey: awsExports.aws_appsync_apiKey,
//     },
//   }),
//   createHttpLink({uri: awsExports.aws_appsync_graphqlEndpoint}),
// ]);

// const client = new ApolloClient({
//   link,
//   cache: new InMemoryCache(),
// });

function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
