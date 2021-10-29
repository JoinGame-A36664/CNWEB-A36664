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
                              data: []
                    }
                    console.log("data =", this.props.data)
                    this.onChangePage = this.onChangePage.bind(this);
          }
          componentDidMount() {

                    this.setState({
                              data: this.props.data
                    })
          }
          OnChangeData = (id, name, value) => {
                    this.props.OnChangeData(id, name, value)
          }
          onChangePage(pageOfItems) {
                    // update state with new page of items
                    this.setState({ data: pageOfItems });
          }

          renderTests() {
                    const items = [];
                    for (let i = 0; i < this.state.data.length; i++) {
                              const item = (
                                        <TestItem
                                                  name={this.props.data[i].name}
                                                  point={this.props.data[i].point}
                                                  time={this.props.data[i].time}
                                                  diff={this.props.data[i].diff}
                                                  past={this.props.data[i].past}
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
                    var elements = users.map((user, index) => {
                              return (
                                        <div key={user.id}>
                                                  <h3>{user.name}</h3>
                                        </div>
                              );
                    });
                    return (
                              <Wrapper >
                                        <Header
                                                  keyWord={this.props.keyWord}
                                        // searchOnChange={this.props.searchOnChange}
                                        />

                                        <div>
                                                  {
                                                            this.state.data.map(item =>
                                                                      <TestItem key={item.id} onReceiveData={this.OnChangeData}
                                                                                name={item.name}
                                                                                point={item.point}
                                                                                time={item.time}
                                                                                diff={item.diff}
                                                                                past={item.past}
                                                                                id={item.id}
                                                                      />
                                                            )

                                                  }
                                              
                                        </div>
                                        <Pagination items={this.state.data} onChangePage={this.onChangePage} />

                              </Wrapper>
                    )
          }
}

export default MainContent;
