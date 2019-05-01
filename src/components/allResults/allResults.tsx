import * as React from 'react';
import SearchBarResult from '../searchBarResult/searchBarResult';

export interface IProps {
    
}
 
export interface IState {
    
}
 
class AllResults extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return (
            <SearchBarResult />
          );
    }
}
 
export default AllResults;