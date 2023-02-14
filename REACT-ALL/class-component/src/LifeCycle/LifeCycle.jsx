import React, { Component } from 'react';
import ComponentDidMountEg from './mounting/ComponentDidMountEg';
import ComponentWillMount from './mounting/ComponentWillMount';
import GetDerivedStateFromPropsEgm from './mounting/GetDerivedStateFromPropsEgm';
import ComponentWillUnmountEg from './unmounting/ComponentWillUnmountEg';
import ComponentDidUpdateEg from './updating/ComponentDidUpdateEg';
import GetDerivedStateFromPropsEgu from './updating/GetDerivedStateFromPropsEgu';
import ShouldComponentUpdateEg from './updating/ShouldComponentUpdateEg';

//Every React Component has a lifecycle of its own.
//lifecycle of a component can be defined as the series of methods that are invoked in different stages of the component’s existence.
//A React Component can go through four stages.

//1. Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
//2. Mounting: This is the stage of rendering the JSX returned by the render method itself. 
//3. Updating: This is the stage when the state of a component is updated and the application is repainted.
//4. Unmounting: This is the final step of the component lifecycle where the component is removed from the page.

export default class LifeCycle extends Component {

    // constructor(props){
    //     super(props);
    // }

  render() {
    return (
      <>
        {/* <ComponentDidMountEg/> */}
        {/* <ComponentWillMount/> */}
        {/* <GetDerivedStateFromPropsEgm favfruit='apple'/> */}

        {/* <ComponentDidUpdateEg/> */}
        {/* <ShouldComponentUpdateEg/> */}
        {/* <GetDerivedStateFromPropsEgu/> */}

        <ComponentWillUnmountEg/>
      </>
    )
  }
}
