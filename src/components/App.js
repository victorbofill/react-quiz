import React, { Component } from 'react';
import Note from './Note';

export default class App extends Component {

  state = {
    notes: [
      { 
        date: new Date('2/12/2018'),
        text: 'Learn React'
      },
      { 
        date: new Date('2/27/2018'),
        text: 'Learn Redux'
      },
      { 
        date: new Date('3/23/2018'),
        text: 'Creat Cool Project'
      }
    ]
  };

  render() {

    const { notes } = this.state;
    return (
      <div>
        <h1>Quiz</h1>
        <div className="list-container">
          <Note notes={notes.date}{...notes.text}/>,
        </div>
      </div>
    );
  }
}