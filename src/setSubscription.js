import 'isomorphic-fetch';
import io from 'socket.io-client';

const socket = io('http://ecom.enetdefender.com/');
const requests = Object.create(null);
socket.on('connect', () => {
  //  console.log('connected');
});

export default function sendSubscription(
  operation,
  variables,
  cacheConfig,
  observer,
) {
  //  console.log(observer);
  const id = 0;
  requests[id] = observer;
  //  console.log(operation);
  // console.log("getting sendSubscription", {
  //  id,
  //  query: operation.text,
  //  variables: variables,
  //  });

  socket.emit('subscribe', {
    id,
    query: operation.text,
    variables,
  });

  socket.on('subscription update', ({ id, data, errors }) => {
    //  console.log("subscription processed");
    const request = requests[id];
    if (!request) {
      return;
    }

    if (errors) {
      //  console.log('subscription error', errors);
      request.onError(errors);
    } else {
      //  console.log("subscription frowarding");
      //  console.log(data);
      request.onNext({ data });
    }
  });

  socket.on('subscription closed', id => {
    const request = requests[id];
    if (!request) {
      return;
    }
    //  console.log(`Subscription ${id} is completed`);
    request.onCompleted();
    delete requests[id];
  });

  socket.on('error', error => {
    Object.values(requests).forEach(request => {
      request.onError(error);
    });
  });

  return {
    dispose: () => {
      //  console.log(`disposing`);
      socket.emit('unsubscribe', id);
    },
  };
}

// this method should be used on the right place
/*  function disconnect() {
  socket.disconnect();
  requests.forEach(request => {
    request.onCompleted();
  });
} */
