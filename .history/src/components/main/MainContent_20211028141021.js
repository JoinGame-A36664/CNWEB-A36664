import React, { Component } from 'react';
import Header from './Header';
import TestItem from './TestItem';


class MainContent extends Component {
          constructor(props) {
                    super(props);
                    this.state = {
                              data: []
                    }
                    console.log("data =", this.props.data)
                    this.onChangePage = this.onChangePage.bind(this);


          }

          OnChangeData = (id, name, value) => {
                    this.props.OnChangeData(id, name, value)
          }
          onChangePage(pageOfItems) {
                    // update state with new page of items
                    this.setState({ data: pageOfItems });
          }
          componentWillUnmount() {
                    this.setState({
                              data: this.props.data
                    })
          }

          render() {

                    var elements = <div className='d-flex'>
                              {
                                        this.props.data.map((item, index) => {


                                                  return (
                                                            <TestItem key={item.id} onReceiveData={this.OnChangeData}
                                                                      name={item.name}
                                                                      point={item.point}
                                                                      time={item.time}
                                                                      diff={item.diff}
                                                                      past={item.past}
                                                                      id={item.id}
                                                            />
                                                  );
                                        })
                              }
                    </div>
                    return (
                              
                              <div class="row">
                                       
                                        {elements}
                              </div>
                              
                       
                    )
          }
}

export default MainContent;