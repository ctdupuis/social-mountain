import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  state = {
    text: ""
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.state.text !== "") {
        this.props.searchPost(this.state.text);
      } else {
        this.props.getAllPosts();
      }
    })
  }

  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input name="text" onChange={this.onChange} placeholder="Search Your Feed" />

          <SearchIcon id="Search__icon" />
        </div>
        
      </section>
    )
  }
}