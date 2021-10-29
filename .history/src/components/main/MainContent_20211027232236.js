import React, { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {
          Wrapper, Blank, WrapperTests,
} from './mainContentStyle';
import Header from './Header';
import TestItem from './TestItem';
import ReactPaginate from 'react-paginate';
import DataTable from 'react-data-components'

function Items({ currentItems }) {
          return (
                    <>
                              {currentItems &&
                                        currentItems.map((item) => (
                                                  <TestItem key={item.id} onReceiveData={this.OnChangeData}
                                                            name={item.name}
                                                            point={item.point}
                                                            time={item.time}
                                                            diff={item.diff}
                                                            past={item.past}
                                                            id={item.id}
                                                  />
                                        ))}
                    </>
          );
}

class MainContent extends Component {
          constructor(props) {
                    super(props);
                    this.state = {
                    }
                    console.log("data =", this.props.data)
          }

          OnChangeData = (id, name, value) => {
                    this.props.OnChangeData(id, name, value)
          }

          renderTests() {
                    const items = [];
                    for (let i = 0; i < this.props.data.length; i++) {
                              const item = (
                                        <TestItem key={item.id} onReceiveData={this.OnChangeData}
                                                  name={item.name}
                                                  point={item.point}
                                                  time={item.time}
                                                  diff={item.diff}
                                                  past={item.past}
                                                  id={item.id}
                                        />
                              )
                              items.push(item);
                    }
                    return (
                              <WrapperTests>
                                        {items}
                              </WrapperTests>
                    )
          }
     
          render() {
                 
                    return (
                              <Wrapper >
                                        <Header
                                                  keyWord={this.props.keyWord}
                                                  searchOnChange={this.props.searchOnChange}
                                        />
                                        {
                                                  this.renderTests()
                                        }

                                        <DataTable
                                                  keys="name"
                                                  columns={columns}
                                                  initialData={this.state.}
                                                  initialPageLength={5}
                                                  initialSortBy={{ prop: 'city', order: 'descending' }}
                                        />

                                        <Pagination
                                                  count={10}
                                                  variant="outlined"
                                                  shape="rounded"
                                                  style={{
                                                            marginBottom: '1em',
                                                  }}
                                        />
                              </Wrapper>
                    )
          }
}

export default MainContent;
