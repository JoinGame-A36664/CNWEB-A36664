import React, { Component } from 'react';
import styled from 'styled-components';
import MainContent from '../../components/main/MainContent';
import LeftMenu from '../../components/main/LeftMenu';
import apiCaller from '../../utils/apiCaller'
import Pagination from "react-js-pagination";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    color: #f4f6f6;
    font-size: 23px;
    font-weight: bold;
    display: flex;
    background: gray;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const DIFFCULT = {
          one: 1,
          two: 2,
          three: 3,
          four: 4,
          five: 5,
}

class Main extends Component {
          constructor(props) {
                    super(props);
                    this.state = {
                              keyWord: '',
                              testData: [],
                              offset: 0,
                              pageSize: 5,
                              currentPage: 0,
                              totalCount: 0
                    }

          }

          componentDidMount() {
                    apiCaller('task', 'GET', null).then(res => {
                              this.setState({
                                        testData: res.data,
                                        totalCount: res.data.length,

                              })
                    })
          }





          searchOnChange(event) {

                    this.setState({ keyWord: event.target.value })
          }

          filterKeyword(data, key) {
                    var result = [];
                    for (let i = 0; i < data.length; i++) {
                              if (data[i].name.includes(key) === true) {
                                        result.push(data[i]);
                              }
                    }
                    return result;
          }
          setDataChange = (id, name, value) => {

                    this.setState({
                              testData: this.state.testData.map((data, index) => {
                                        if (data.id === id) {
                                                  data[name] = value;
                                        }
                                        return data;
                              })
                    });

          }
          render() {
                    return (
                              <div>
                                        <Wrapper>
                                                  <LeftMenu />
                                                  <MainContent
                                                            OnChangeData={this.setDataChange}
                                                            data={this.filterKeyword(this.state.testData, this.state.keyWord)}
                                                            keyWord={this.state.keyWord}
                                                            searchOnChange={(e) => this.searchOnChange(e)}
                                                  />

                                        </Wrapper>

                              </div>


                    )
          }
}

export default Main;
