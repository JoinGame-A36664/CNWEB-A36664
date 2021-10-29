import React, { Component } from 'react';
import styled from 'styled-components';
import MainContent from '../../components/main/MainContent';
import LeftMenu from '../../components/main/LeftMenu';
import nextId from "react-id-generator";

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
                              testData: [
                                        {
                                                  id: nextId(),
                                                  name: "Test 1",
                                                  point: 30,
                                                  time: 30,
                                                  diff: DIFFCULT.one,
                                                  past: false,
                                        },
                                        {
                                                  id: nextId(),
                                                  name: "Test 2",
                                                  point: 30,
                                                  time: 30,
                                                  diff: DIFFCULT.three,
                                                  past: false,
                                        },
                                        {
                                                  id: nextId(),
                                                  name: "Test 3",
                                                  point: 30,
                                                  time: 30,
                                                  diff: DIFFCULT.five,
                                                  past: true,
                                        },
                              ],
                    }
          }

          searchOnChange(event) {
                    console.log('nhan duoc: ', event.target.value)
                    this.setState({ keyWord: event.target.value })
          }

          filterKeyword(data, key) {


                    var result = [];

                    result = data;
                    // if (key != null) {
                    //           result = data.map((res) => {
                    //                     if (res.name.includes(key)) {
                    //                               return res;
                    //                     }
                    //           });
                    // }
                    // else {
                    //           result = data;
                    // }
                    // for (let i = 0; i < data.length; i++) {
                    //           if (data[i].name.includes(key) === true) {
                    //                     result.push(data[i]);
                    //           }
                    // }
                    console.log(result, "gaga");
                    return result;
          }
          setDataChange = (id, name, value) => {

                    //console.log(id,value,name)

                    this.setState({
                              testData: this.state.testData.map(el => (el.id === id ? { ...el, { name }: value } : el))
                    });




          }
          render() {
                    return (
                              <Wrapper>
                                        <LeftMenu />
                                        <MainContent
                                                  OnChangeData={this.setDataChange}
                                                  data={this.filterKeyword(this.state.testData, this.state.keyWord)}
                                                  keyWord={this.state.keyWord}
                                                  searchOnChange={(e) => this.searchOnChange(e)}
                                        />
                              </Wrapper>
                    )
          }
}

export default Main;
