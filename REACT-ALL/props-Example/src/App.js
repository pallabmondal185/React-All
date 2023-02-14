import './App.css';
import PropClass from './component/classComponent/PropClass';
import Name from './component/event/Name';
import PropsCss from './component/propsEg/PropsCss';
import PropsEg from './component/propsEg/PropsEg';
import PropsEg2 from './component/PropsEg2.jsx/PropsEg2';
import PropsEg3 from './component/PropsEg2.jsx/PropsEg3';


function App() {
  return (
   <>
    {/* <Name /> */}

     {/* To send props into a component, use the same syntax as HTML attributes: */}

    {/* <PropEg name='pallab' roll={1+3} />  */}
    {/* <PropsEg2 book='histry' */ }
    {/* <PropClass name='pallab'/> */}
    {/* <PropsEg2 /> */}
    {/* <PropsEg3 name={'pallab'} roll={45}/> */}
    <PropsCss back='gray' text='white'/> 
   </>
  );
}

export default App;
