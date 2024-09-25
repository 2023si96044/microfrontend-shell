import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

const FSADApp = React.lazy(() => import('fsad/FSADApp'));
const DevOpsApp = React.lazy(() => import('devops/DevOpsApp'));

function App() {
  return (
    <div>
      <h1>Micro Frontend Shell</h1>
      <Suspense fallback={<div>Loading FSAD...</div>}>
        <FSADApp />
      </Suspense>
      <Suspense fallback={<div>Loading DevOps...</div>}>
        <DevOpsApp />
      </Suspense>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Rendering into the root element
);

export default App;
