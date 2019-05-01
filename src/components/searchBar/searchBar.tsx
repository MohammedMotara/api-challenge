import * as React from 'react';
import { fetchBooks } from '../../reducers/bookReducer';



export interface IProps {
}
 
export interface IState {}
 

class SearchBar extends React.Component<IProps, IState> {

    public render() { 
        return ( 
            <div>
                <input type="text"  placeholder="Search..."  />
            </div>
         );
    }
}
 



export default SearchBar;