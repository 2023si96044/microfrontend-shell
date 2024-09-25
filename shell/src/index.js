import React from 'react';
import ReactDOM from 'react-dom';

const FSADApp = React.lazy(() => import('fsad/FSADApp'));
const DevOpsApp = React.lazy(() => import('devops/DevOpsApp'));

/*const App = () => (
  <div>
    <h1>Microfrontend Shell</h1>
    <React.Suspense fallback="Loading FSAD...">
      <FSADApp />
    </React.Suspense>
    <React.Suspense fallback="Loading DevOps...">
      <DevOpsApp />
    </React.Suspense>
  </div>
);*/

const App = () => (
  <div>
    <h1>Microfrontend Shell</h1>
    <div>
      <h2>FSAD Syllabus</h2>
      <FSADApp />
    </div>
    <div>
      <h2>DevOps Syllabus</h2>
      <DevOpsApp />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
