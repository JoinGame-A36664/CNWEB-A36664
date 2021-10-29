import React, { Component } from 'react';
import './Question.css';


 cla Question extends Component {
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


                              <div cla="container mt-5">
                                        <div cla="d-flex justify-content-center row">
                                                  <div cla="col-md-10 col-lg-10">
                                                            <div cla="border">
                                                                      <div cla="question bg-white p-3 border-bottom">
                                                                                <div cla="d-flex flex-row justify-content-between align-items-center mcq">
                                                                                          <h4>MCQ Quiz</h4><span>(5 of 20)</span>
                                                                                </div>
                                                                      </div>
                                                                      <div cla="question bg-white p-3 border-bottom">
                                                                                <div cla="d-flex flex-row align-items-center question-title">
                                                                                          <h3 cla="text-danger">Q.</h3>
                                                                                          <h5 cla="mt-1 ml-2">Which of the following country has largest population?</h5>
                                                                                </div>
                                                                                <div cla="ans ml-2">
                                                                                          <label cla="radio"> <input type="radio" name="brazil" value="brazil"/> <span>Brazil</span>
                                                                                          </label>
                                                                                </div>
                                                                                <div cla="ans ml-2">
                                                                                          <label cla="radio"> <input type="radio" name="Germany" value="Germany"/> <span>Germany</span>
                                                                                          </label>
                                                                                </div>
                                                                                <div cla="ans ml-2">
                                                                                          <label cla="radio"> <input type="radio" name="Indonesia" value="Indonesia"/> <span>Indonesia</span>
                                                                                          </label>
                                                                                </div>
                                                                                <div cla="ans ml-2">
                                                                                          <label cla="radio"> <input type="radio" name="Russia" value="Russia"/> <span>Russia</span>
                                                                                          </label>
                                                                                </div>
                                                                      </div>
                                                                      <div cla="d-flex flex-row justify-content-between align-items-center p-3 bg-white"><button cla="btn btn-primary d-flex align-items-center btn-danger" type="button"><i cla="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous</button><button cla="btn btn-primary border-success align-items-center btn-success" type="button">Next<i cla="fa fa-angle-right ml-2"></i></button></div>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>

                    )
          }



}

export default Question;
