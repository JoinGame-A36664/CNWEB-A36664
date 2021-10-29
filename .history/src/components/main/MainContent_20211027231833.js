import React, { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {
          Wrapper, Blank, WrapperTests,
} from './mainContentStyle';
import Header from './Header';
import TestItem from './TestItem';
import ReactPaginate from 'react-paginate';


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
                    const [currentItems, setCurrentItems] = useState(null);
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
