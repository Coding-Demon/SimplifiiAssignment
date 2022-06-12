import React from 'react';
import './App.css';
import ReactPaginate from 'react-paginate';
import PostForm from './PostForm';
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null
    }
  }
  componentDidMount() {
    fetch('https://mockrestapi.herokuapp.com/api/employee?pageNo=1&limit=5').then((resp) => {
      resp.json().then((result) => {
        this.setState({ users: result.data });
      });
    });

  }
  
  render() {
  const postDelete = (id, e) => {
      e.preventDefault();
      Axios.delete(`https://mockrestapi.herokuapp.com/api/employee/${id}`)
        .then(res => console.log('Deleted..', res)).catch(err => console.log(err))
    }
    return (
      <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Country</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {  
            this.state.users ?
              this.state.users.map((item, i) =>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  <td>{item.country}</td>
                  <td>{item.age}</td>
                  <th><button onClick={(e) => postDelete(item._id, e)}>Delete</button></th>
                </tr>
              )
              :
              null
            }

          </tbody>
        </table>

        {<ReactPaginate
          previousLabel={'Prev'}
          nextLabel={'Next'}
          breakLabel={"..."}
          pageCount={5}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          //onPageChange={handlePageClick}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        />}
        <PostForm />
      </div>
    );
  }

}
export default App;
