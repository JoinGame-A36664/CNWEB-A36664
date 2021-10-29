import React, { Component } from 'react';
import './Question.css';


class Question extends Component {
          constructor(props) {
                    super(props);

                    this.state = {
                              correct: false,
                              incorrect: false

                    }

          }
       
     
          onHandleChange = (event) => {
                    var target = event.target;
                    if (target.value === this.props.data.correct_answer) {
                              this.props.answers(true);
                              this.setState({
                                        correct: true,
                                        incorrect:false
                              })
                    } else {
                              this.props.answers(false)
                              this.setState({
                                        correct: false,
                                        incorrect:true
                              })
                    }
               
          }
          render() {
                    let cor = <input type="radio" name={this.props.id}
                              checked={this.state.correct}
                              onChange={this.onHandleChange}
                              value={this.props.data.correct_answer} />
                    let inco = <input name={this.props.id}
                              checked={this.state.incorrect}
                              onChange={this.onHandleChange}
                              type="radio" value={item} />
                    return (


                              <div className="question bg-white p-3 border-bottom">
                                        <div className="d-flex flex-row align-items-center question-title">
                                                  <h3 className="text-danger">Q. </h3>
                                                  <h5 className="mt-1 ml-2">{this.props.data.question}?</h5>
                                        </div>
                                        <div className="ans ml-2">
                                                  <label className="radio">
                                                        {cor}
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
                                                                             {inco}
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
