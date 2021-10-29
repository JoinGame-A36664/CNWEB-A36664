import React, { Component } from 'react';
import './Question.css';


class Question extends Component {
          constructor(props) {
                    super(props);

                    this.state = {
                              correct: true,
                              incorrect:false

                    }

          }
          onHandleChange=(event) =>{
                    var target = event.target;
                    var name = target.name;

                    this.setState({
                              [name]: !this.state[name]
                    });

                    console.log(this.state[name] ,name);
          }
          render() {
                    return (


                              <div className="question bg-white p-3 border-bottom">
                                        <div className="d-flex flex-row align-items-center question-title">
                                                  <h3 className="text-danger">Q. </h3>
                                                  <h5 className="mt-1 ml-2">{this.props.data.question}?</h5>
                                        </div>
                                        <div className="ans ml-2">
                                                  <label className="radio">
                                                            <input type="checkbox" name="correct"
                                                                      onChange={this.onHandleChange}
                                                                    value={this.props.id + this.props.data.correct_answer} />
                                                            <span>
                                                                      {
                                                                                this.props.data.correct_answer
                                                                      }
                                                            </span>
                                                  </label>
                                                  
                                        </div>
                                        {
                                                  this.props.data.incorrect_answers.map((item, index) => (
                                                            <div className="ans ml-2" key={index}>
                                                                      <label className="radio">
                                                                                <input name="correct"
                                                                                          onChange={this.onHandleChange}
                                                                                          type="checkbox" value={this.props.id + this.props.data.correct_answer} />
                                                                                <span>{item}</span>
                                                                      </label>
                                                            </div>

                                                  ))
                                        }

                              </div>

                    )
          }



}

export default Question;
