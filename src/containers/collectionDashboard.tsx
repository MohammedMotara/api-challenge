import * as React from 'react';
import styles from './CollectionDashbaord.module.scss';
import SearchBar from '../components/searchBar/searchBar';
import { fetchBooks, getBooks } from '../reducers/bookReducer';
import AllResults from '../components/allResults/allResults';

export interface IProps {
    // fetchBooks: () => void
}
 
export interface IStateProps {
}

 
class CollectionDashbaord extends React.Component<IProps, IStateProps> {

    public render() { 
        return ( 
            <div>
                <h1>Author Search</h1>
                <SearchBar />
                {/* <button onClick={this.fetchBooks('Jane Austen')}/> */}
                <AllResults />

            </div>
         );
    }

    // private fetchBooks = (authorName: string) => (dispatch: any) => {
    //     dispatch(getBooks());
    //     fetch(
    //       "https://www.googleapis.com/books/v1/volumes?q=inauthor:" +
    //         authorName +
    //         "&maxResults=20&key:AIzaSyDhHe5MvQYsUZscr1CGaVqSP_vX9oMmOCE"
    //     )
    //       .then(res => res.json())
    //       .then(data => dispatch(getBooksSuccess(data.items)))
    //       .catch(error => dispatch(getBooksFailure(error)));
    //   };
      
}
 
export default CollectionDashbaord;