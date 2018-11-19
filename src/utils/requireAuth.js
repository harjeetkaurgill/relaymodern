/*eslint-disable */
import React from 'react';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        // this.props.addFlashMessage({
        //   type: 'error',
        //   text: 'You need to login to access this page'
        // });
        // this.context.router.history.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        //  this.context.router.history.push('/');
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
}
