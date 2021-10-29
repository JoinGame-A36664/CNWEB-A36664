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

          static getDerivedStateFromProps(props, state) {
                    const data = props.data;
                    const slice = data.slice(state.offset, state.offset + state.pageSize);
                    return {
                              data: slice,
                              offset: 0,
                              pageSize: 5,
                              currentPage: 0,
                              totalCount: data.length
                    }

          }
          componentDidMount() {
                    this.receivedData();
          }

          receivedData() {
                    const data = this.props.data;
                    const slice = data.slice(this.state.offset, this.state.offset + this.state.pageSize);
                    
                    this.setState({
                              data: slice,
                              totalCount: this.props.data.length
                    })
          }

          onChangePage(pageNumber) {

                    const offset = pageNumber * this.state.pageSize;
                    this.setState({
                              currentPage: pageNumber,
                              offset: offset
                    }, () => {
                              this.receivedData()
                    });
          }
          render() {
                    console.log(this.state.data, 'con cac 2')



                    return (
                              <Wrapper >
                                        <Header
                                                  keyWord={this.props.keyWord}
                                        // searchOnChange={this.props.searchOnChange}
                                        />
                                        {

                                                  <div className='d-flex'>
                                                            {
                                                                      this.state.data.map((item, index) => {

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
                                        }

                                        <Pagination
                                                  activePage={this.state.pageSize}
                                                  itemsCountPerPage={10}
                                                  totalItemsCount={this.state.totalCount}
                                                  pageRangeDisplayed={this.state.pageSize}
                                                  onChange={this.onChangePage.bind(this)}
                                        />
                              </Wrapper>
                    )
          }
}

export default MainContent;
