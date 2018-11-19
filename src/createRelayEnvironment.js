import { RelayNetworkLayer, urlMiddleware } from 'react-relay-network-modern';
import { Environment, RecordSource, Store } from 'relay-runtime';
import setSubscription from './setSubscription';

export default function createRelayEnvironment(relaySsr, url) {
  const subscription = { subscribeFn: setSubscription }; // optional advanced options
  return new Environment({
    network: new RelayNetworkLayer(
      [relaySsr.getMiddleware(), urlMiddleware({ url })],
      subscription,
    ),
    store: new Store(new RecordSource()),
  });
}
