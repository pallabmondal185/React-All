import './App.css'
import RouteAxiosProject from './component/httpAdvanceProject/layout/RouteAxiosProject';
import DeleteMethod from './component/httpMethods/DELET-method/DeleteMethod';
import GetMethodEg from './component/httpMethods/GET-Method/GetMethodEg';
import PostMethodEg from './component/httpMethods/POST-Method/PostMethodEg';
import PutMethod from './component/httpMethods/PUT-method/PutMethod';
import RouteLive from './component/CRUD-LiveApi/layout/RouteLive'
import PatchMethod from './component/httpMethods/PATCH-method/PatchMethodEg';

function App() {
  return (
    <>
      {/* <GetMethodEg /> */}
      {/* <PostMethodEg/> */}
      {/* <DeleteMethod/> */}
      <PutMethod/>
      {/* <PatchMethod/> */}

    {/* <RouteAxiosProject/> */}

    {/* <RouteLive/> */}
    
    </>

  );
}

export default App;
