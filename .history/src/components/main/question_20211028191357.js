import React, { Component } from 'react';
import './Question.css';


 Question extends Component {
          constructor(props) {
                    super(props);

                    this.state = {

                              name: '',
                              point: 1.0,
                              time: 1,
                              diff: null,
                              past: true,
                              isOpen: false,
                              question: null

                    }

          }

          render() {
                    return (


                              <div="container mt-5">
                                        <div="d-flex justify-content-center row">
                                                  <div="col-md-10 col-lg-10">
                                                            <div="border">
                                                                      <div="question bg-white p-3 border-bottom">
                                                                                <div="d-flex flex-row justify-content-between align-items-center mcq">
                                                                                          <h4>MCQ Quiz</h4><span>(5 of 20)</span>
                                                                                </div>
                                                                      </div>
                                                                      <div="question bg-white p-3 border-bottom">
                                                                                <div="d-flex flex-row align-items-center question-title">
                                                                                          <h3="text-danger">Q.</h3>
                                                                                          <h5="mt-1 ml-2">Which of the following country has largest population?</h5>
                                                                                </div>
                                                                                <div="ans ml-2">
                                                                                          <label="radio"> <input type="radio" name="brazil" value="brazil"/> <span>Brazil</span>
                                                                                          </label>
                                                                                </div>
                                                                                <div="ans ml-2">
                                                                                          <label="radio"> <input type="radio" name="Germany" value="Germany"/> <span>Germany</span>
                                                                                          </label>
                                                                                </div>
                                                                                <div="ans ml-2">
                                                                                          <label="radio"> <input type="radio" name="Indonesia" value="Indonesia"/> <span>Indonesia</span>
                                                                                          </label>
                                                                                </div>
                                                                                <div="ans ml-2">
                                                                                          <label="radio"> <input type="radio" name="Russia" value="Russia"/> <span>Russia</span>
                                                                                          </label>
                                                                                </div>
                                                                      </div>
                                                                      <div="d-flex flex-row justify-content-between align-items-center p-3 bg-white"><button="btn btn-primary d-flex align-items-center btn-danger" type="button"><i="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous</button><button="btn btn-primary border-success align-items-center btn-success" type="button">Next<i="fa fa-angle-right ml-2"></i></button></div>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>

                    )
          }



}

export default Question;
