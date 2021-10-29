import React, { Component } from 'react';
import styled from 'styled-components';
import MainContent from '../../components/main/MainContent';
import LeftMenu from '../../components/main/LeftMenu';
import { GetListTaskRequest } from '../../services/taskApiClient'
import axios from 'axios';
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
                    }
          }
          componentWillMount() {

                    var datas = axios.get('task').then(function (res) {
                              console.log(res);
                    }).catch

                    // console.log(datas)
                    // if (this.props.itemEditing && this.props.itemEditing.id !== null) {
                    //           this.setState({
                    //                     datas: {datas}
                    //           });
                    // } else {
                    //           this.onClear();
                    // }
          }
          searchOnChange(event) {
                    console.log('nhan duoc: ', event.target.value)
                    this.setState({ keyWord: event.target.value })
          }

          filterKeyword(data, key) {


                    var result = [];

                    // result = data;

                    for (let i = 0; i < data.length; i++) {
                              if (data[i].name.includes(key) === true) {
                                        result.push(data[i]);
                              }
                    }
                    console.log(result, "gaga");
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
