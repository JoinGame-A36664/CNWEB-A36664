import React, { Component } from 'react';

import {
          Wrapper, Blank, WrapperTests,
} from './mainContentStyle';
import Header from './Header';
import TestItem from './TestItem';
import Pagination from "react-js-pagination";

class MainContent extends Component {
          constructor(props) {
                    super(props);
                    this.state = {
                              data: [],
                              offset: 0,
                              pageSize: 5,
                              currentPage: 0,
                              totalCount: 0
                    }
                    console.log("data =", this.props.data)

          }

          OnChangeData = (id, name, value) => {
                    this.props.OnChangeData(id, name, value)
          }

          componentWillUnmount() {
                    const data = res.data;
                    const slice = data.slice(this.state.offset, this.state.offset + this.state.pageSize);
                    this.setState({
                              data: this.props.data
                    })
          }

          render() {

                    var elements = <div className='d-flex w-75'>
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
                              <Wrapper >
                                        <Header
                                                  keyWord={this.props.keyWord}
                                        // searchOnChange={this.props.searchOnChange}
                                        />
                                        {elements}


                              </Wrapper>
                    )
          }
}

export default MainContent;
