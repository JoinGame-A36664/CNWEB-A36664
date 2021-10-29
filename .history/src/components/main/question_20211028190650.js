import React, { Component } from 'react';




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


                              <div className="d-flex">
                                        <div className="form-check">
                                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                  <label className="form-check-label" for="flexRadioDefault1">
                                                            Default radio
                                                  </label>
                                        </div>
                                        <div className="form-check">
                                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                  <label className="form-check-label" for="flexRadioDefault2">
                                                            Default checked radio
                                                  </label>
                                        </div>
                              </div>

                    )
          }



}

export default Question;
