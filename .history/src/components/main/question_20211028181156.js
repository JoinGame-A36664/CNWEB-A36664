import React, { Component } from 'react';
import {
          Wrapper, Row, TitleField, StarIcon, Column,
} from './testItemStyle';
import images from '../../asset/images';
import axios from 'axios';
import Dialog from './Dialog'



class TestItem extends Component {
          constructor(props) {
                    super(props);

                    this.state = {

                              name: '',
                              point: 1.0,
                              time: 1,
                              diff: null,
                              past: true,
                              isOpen: false,
                              question: null

                    }

                    this.OnHandleChange = this.OnHandleChange.bind(this)
          }

    

       
          LoadTemplateQuestion = () => {
                    var questions = <div className='d-flex'>
                              {


                                        this.props.question.map((item, index) => {


                                                  return (

                                                            <div>

                                                                      <span className="label">{item.question}</span>

                                                            </div>


                                                  );
                                        })
                              }
                    </div>

                    return questions;
          }
          render() {



                    return (
                              <Wrapper  >
                                        <div className="d-flex justify-content-between">
                                                  <Column width="70%">
                                                            <Row>
                                                                      <TitleField>Name:</TitleField>
                                                                      <span name="name"
                                                                                onChange={this.OnHandleChange}
                                                                      >   {this.props.name}</span>
                                                            </Row>
                                                            <Row>
                                                                      <TitleField>Time:</TitleField>
                                                                      <span name="time">  {this.props.time}</span>
                                                            </Row>
                                                            <Row>
                                                                      <TitleField>Point:</TitleField>
                                                                      <span name="point">  {this.props.point}</span>
                                                            </Row>
                                                            <Row>
                                                                      <TitleField>Diff:</TitleField>
                                                                      <span name="diff">
                                                                                {this.renderStars(this.props.diff)}
                                                                      </span>

                                                            </Row>
                                                            <Row>
                                                                      <TitleField>Past:</TitleField>
                                                                      <input type="checkbox" value={true}
                                                                                name="past"
                                                                                onChange={this.OnHandleChange}
                                                                                checked={this.props.past}></input>
                                                            </Row>
                                                  </Column>
                                                  <Column >
                                                            <button onClick={this.LoadQuiz} >Start</button>
                                                            <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>

                                                                      {this.LoadTemplateQuestion}

                                                            </Dialog>
                                                  </Column>
                                        </div>

                              </Wrapper>
                    )
          }
}

export default TestItem;
