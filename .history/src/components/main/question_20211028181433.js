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
                              <div>
                             
                             <div className="checkbox">
                                       <label>
                                                 <input type="checkbox" value="">
                                                 Checkbox
                                       </label>
                             </div>
                             

                              </div>
                    )
          }



}

export default Question;
