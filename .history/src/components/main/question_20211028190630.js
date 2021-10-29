import React, { Component } from 'react';




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


                              <div >
                                        <div ="form-check">
                                                  <input ="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                  <label ="form-check-label" for="flexRadioDefault1">
                                                            Default radio
                                                  </label>
                                        </div>
                                        <div ="form-check">
                                                  <input ="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                  <label ="form-check-label" for="flexRadioDefault2">
                                                            Default checked radio
                                                  </label>
                                        </div>
                              </div>

                    )
          }



}

export default Question;
