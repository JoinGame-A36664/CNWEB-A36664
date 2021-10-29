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
                              offset: 0,
                              pageSize: 7,
                              currentPage: 0,
                              totalCount: 0,
                              point: 0,
                              complete: 0,
                              notComplete:0
                    }
                    this.onChangePage = this.onChangePage.bind(this);
          }

          componentDidMount() {

                    this.receivedData();
          }

          receivedData() {
                    apiCaller('task', 'GET', null).then(res => {
                              const data = res.data;
                              var a = linq.from(res.data).count(x->x.)
                       

                              const slice = data.slice(this.state.offset, this.state.offset + this.state.pageSize);
                              console.log(slice, "con cac1");
                              this.setState({
                                        testData: slice,
                                        totalCount: res.data.length,
                              })
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

                    //console.log(id,value,name)

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
                                        <LeftMenu />

                                        <div className="d-flex  justify-content-between  flex-column" >
                                                
                                                            <MainContent
                                                                      OnChangeData={this.setDataChange}
                                                                      data={this.filterKeyword(this.state.testData, this.state.keyWord)}
                                                                      keyWord={this.state.keyWord}
                                                                      searchOnChange={(e) => this.searchOnChange(e)}
                                                            />
                                            

                                                  <div className="h-50 d-flex justify-content-center ">
                                                            <Pagination itemClass="page-item" linkClass="page-link"
                                                                      activePage={this.state.pageSize}
                                                                      itemsCountPerPage={10}
                                                                      totalItemsCount={this.state.totalCount}
                                                                      pageRangeDisplayed={this.state.pageSize}
                                                                      onChange={this.onChangePage.bind(this)}
                                                            />
                                                </div>
                                                         
                                                
                                        </div>



                              </div>


                    )
          }
}

export default Main;
