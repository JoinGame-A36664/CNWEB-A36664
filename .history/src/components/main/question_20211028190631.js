import React, { Component } from 'react';




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


                              <div >
                                        <div cla="form-check">
                                                  <input cla="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                  <label cla="form-check-label" for="flexRadioDefault1">
                                                            Default radio
                                                  </label>
                                        </div>
                                        <div cla="form-check">
                                                  <input cla="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                  <label cla="form-check-label" for="flexRadioDefault2">
                                                            Default checked radio
                                                  </label>
                                        </div>
                              </div>

                    )
          }



}

export default Question;
