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


                              <div className="question bg-white p-3 border-bottom">
                                        <div className="d-flex flex-row align-items-center question-title">
                                                  <h3 className="text-danger">Q.</h3>
                                                  <h5 className="mt-1 ml-2">{</h5>
                                        </div>
                                        <div className="ans ml-2">
                                                  <label className="radio"> <input type="radio" name="brazil" value="brazil" /> <span>Brazil</span>
                                                  </label>
                                        </div>
                                        <div className="ans ml-2">
                                                  <label className="radio"> <input type="radio" name="Germany" value="Germany" /> <span>Germany</span>
                                                  </label>
                                        </div>
                                        <div className="ans ml-2">
                                                  <label className="radio"> <input type="radio" name="Indonesia" value="Indonesia" /> <span>Indonesia</span>
                                                  </label>
                                        </div>
                                        <div className="ans ml-2">
                                                  <label className="radio"> <input type="radio" name="Russia" value="Russia" /> <span>Russia</span>
                                                  </label>
                                        </div>
                              </div>

                    )
          }



}

export default Question;
