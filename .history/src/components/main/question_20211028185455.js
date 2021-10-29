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
                              this.props.data.map((item, index) => {
                                        return (
                                                  <div className="radio">
                                                            <label>
                                                                      <input type="radio" name="" id="input" value="" checked="checked" />
                                                                     {item.}
                                                            </label>
                                                  </div>

                                        );
                              })
                                  
                             
                    )
          }



}

export default Question;
