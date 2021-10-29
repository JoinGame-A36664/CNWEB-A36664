import React, { Component } from 'react';
import styled from 'styled-components';
import MainContent from '../../components/main/MainContent';
import LeftMenu from '../../components/main/LeftMenu';
import apiCaller from '../../utils/apiCaller'
import Pagination from "react-js-pagination";
import linq from "linq";
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
                              pageSize: 7,
                              currentPage: 0,
                              totalCount: 0,
                              point: 0,
                              complete: 0,
                              notComplete: 0
                    }
                    this.onChangePage = this.onChangePage.bind(this);
          }

          componentDidMount() {

                    this.receivedData();
          }

          receivedData() {
                    apiCaller('task', 'GET', null).then(res => {
                              const data = res.data;
                              //  const slice = data.slice(this.state.offset, this.state.offset + this.state.pageSize);
                              const slice = linq.from(data).skip(this.state.pageSize * (this.state.currentPage - 1)).take(this.state.pageSize).toArray();
                              this.setState({
                                        testData: slice,
                                        totalCount: res.data.length,
                                        point: linq.from(res.data).sum(x => x.point),
                                        complete: linq.from(res.data).count(x => x.past === true),
                                        notComplete: linq.from(res.data).count(x => x.past === false)
                              })

                    })
          }

          onChangePage(pageNumber) {
                    this.setState({
                              currentPage: pageNumber,

                    }, () => {
                              this.receivedData()
                    });
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
                              <div className="d-flex ">
                                        <LeftMenu point={this.state.point} complete={this.state.complete}
                                                  notComplete={this.state.notComplete} />
                                        <div>

                                        </div>
                                    


                              </div>


                    )
          }
}

export default Main;
