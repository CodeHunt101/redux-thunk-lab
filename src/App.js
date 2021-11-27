import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCats } from './actions/catActions';
import CatList from './CatList'

class App extends Component {   
  componentDidMount() {
    // console.log(this.props)
    this.props.fetchCats()
  }


  render() {
    // console.log(this.props.catPics)
    return (
      <div>
        <h1>CatBook</h1>
        {this.props.loading && <h1>LOADING CATS...</h1>}
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

const mapStateToProps = ({cats, loading}) => (
  {
    catPics: cats,
    loading
  }
)

const mapDispatchToProps = (dispatch) => (
  {fetchCats: ()=>dispatch(fetchCats())}
)

export default connect(mapStateToProps, mapDispatchToProps)(App);

