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

          componentDidUpdate() {
                    this.receivedData();
                    this.render();
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
                    console.log(this.props.data, 'con cac 2')

                    var data = this.state.data.length > 0 ? this.state.data : this.props.data.slice(0, 5);

                    return (
                              <Wrapper >
                                        <Header
                                                  keyWord={this.props.keyWord}
                                        // searchOnChange={this.props.searchOnChange}
                                        />
                                        {

                                                  <div className='d-flex'>
                                                            {
                                                                      data.map((item, index) => {

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
