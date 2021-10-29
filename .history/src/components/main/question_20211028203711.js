import React, { Component } from 'react';
import './Question.css';


class Question extends Component {
          constructor(props) {
                    super(props);

                    this.state = {
                              correct: false,
                              inco

                    }

          }
          onHandleChange(event) {
                    var target = event.target;
                    var name = target.name;

                    this.setState({
                              [name]: value
                    });

                    console.log(event.target);
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
                                                            <input type="checkbox"
                                                                      onChange={this.onHandleChange}
                                                                      name="correct" value={this.props.id + this.props.data.correct_answer} />
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
                                                                                <input name="incorrect"
                                                                                          onChange={this.onHandleChange}
                                                                                          type="checkbox" name={this.props.id} value={this.props.id + this.props.data.correct_answer} />
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
