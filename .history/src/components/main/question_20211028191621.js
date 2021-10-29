import React, { Component } from 'react';
import './Question.css';


class Question extends Component {
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


                              <div className="container mt-5">
                                        <div className="d-flex justify-content-center row">
                                                  <div className="col-md-10 col-lg-10">
                                                            <div className="border">
                                                                      <div className="question bg-white p-3 border-bottom">
                                                                                <div className="d-flex flex-row justify-content-between align-items-center mcq">
                                                                                          <h4>MCQ Quiz</h4><span>(5 of 20)</span>
                                                                                </div>
                                                                      </div>
                                                               
                                                                      <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white"><button className="btn btn-primary d-flex align-items-center btn-danger" type="button"><i className="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous</button><button className="btn btn-primary border-success align-items-center btn-success" type="button">Next<i className="fa fa-angle-right ml-2"></i></button></div>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>

                    )
          }



}

export default Question;
