import React, { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {
          Wrapper, Blank, WrapperTests,
} from './mainContentStyle';
import Header from './Header';
import TestItem from './TestItem';


class MainContent extends Component {
          constructor(props) {
                    super(props);
                    this.state = {
                    }
                    console.log("data =", this.props.data)
                    this.onChangePage = this.onChangePage.bind(this);
          }

          OnChangeData = (id, name, value) => {
                    this.props.OnChangeData(id, name, value)
          }
          onChangePage(pageOfItems) {
                    // update state with new page of items
                    this.setState({ pageOfItems: pageOfItems });
          }
          renderTests() {
                    
                
                                        <TestItem key={item.id} onReceiveData={this.OnChangeData}
                                                  name={item.name}
                                                  point={item.point}
                                                  time={item.time}
                                                  diff={item.diff}
                                                  past={item.past}
                                                  id={item.id}
                                        />
                              
                
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
