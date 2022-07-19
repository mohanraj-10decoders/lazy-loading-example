import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Suspense, lazy } from 'react';

// import Artists from './Artists';

// class App extends React.Component {
//   render() {
//     return (
//       <div className='App'>
//         <Artists />
//       </div>
//     );
//   }
// }
const Artists = lazy(() => import('./Artists'));

const styles = {
  color: 'red',
  fontSize: '2rem',
  width: '100%',
  height: '100vh',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Suspense
          fallback={
            <div className='loader' style={styles}>
              Loading.....
            </div>
          }
        >
          <Artists />
        </Suspense>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
