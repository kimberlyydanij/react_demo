import logo from './logo.svg';
import './App.css';
import MyJsx001 from './components/ex01_jsx/MyJsx001';
import MyJsx002 from './components/ex01_jsx/MyJsx002';
import MyJsx003 from './components/ex01_jsx/MyJsx003';
import MyJsx004 from './components/ex01_jsx/MyJsx004';
import MyJsx005 from './components/ex01_jsx/MyJsx005';

import MyBasic001 from './components/ex02_jsx/MyBasic001';
import MyBasic002 from './components/ex02_jsx/MyUseState002';
import MyUseState002 from './components/ex02_jsx/MyUseState002';
import MyUseState003 from './components/ex02_jsx/MyUseState003';
import MyUseState004 from './components/ex02_jsx/MyUseState004';

function App() {
  return (
    <div className='App'>
      {/*<MyJsx001 />*/}
      {/*<MyJsx002 />*/}
      {/*<MyJsx003 />*/}
      {/*<MyJsx004 />*/}
      {/*<MyJsx005 />*/}
      {/*<MyBasic001 />*/}
      {/*<MyUseState002 />*/}
      {/*<MyUseState003 />*/}
      {<MyUseState004 />}
    </div>
  );
}

export default App;
