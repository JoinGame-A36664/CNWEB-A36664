import React, { Component } from 'react';
import {
          Wrapper, Row, TitleField, StarIcon, Column,
} from './testItemStyle';
import images from '../../asset/images';
import axios from 'axios';
import Dialog from './Dialog'
import Question from './Question';
import linq from "linq";


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
                              question: []

                    }

                    this.OnHandleChange = this.OnHandleChange.bind(this)
          }

          OnHandleChange(event) {
                    var target = event.target;
                    var name = target.name;
                    var value = target.type === "checkbox" ? target.checked : target.value;
                    this.setState({
                              [name]: value
                    });

                    this.props.onReceiveData(this.props.id, name, value);

                    this.LoadQuiz = this.LoadQuiz.bind(this);
          }

          LoadQuiz = async () => {
                    await this.setState({ isOpen: true });

                    var res = await axios({
                              method: 'GET',
                              url: `https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean`,
                              data: null
                    }).catch(err => {
                              console.log(err);
                    });

                    this.setState({
                              question: res.data.results
                    })
                    console.log(this.state.question);

          }

          renderStars(number) {
                    const stars = [];
                    for (let i = 0; i < number; i++) {
                              const icon = <StarIcon src={images.star1} key={i} />
                              stars.push(icon);
                    }
                    return (
                              <div>
                                        {stars}
                              </div>
                    )
          }
          handleClick() {

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

                                                                      {this.state.question.map(item => (
                                                                                <div class="container mt-5">
                                                                                          <div class="d-flex justify-content-center row">
                                                                                                    <div class="col-md-10 col-lg-10">
                                                                                                              <div class="border">
                                                                                                                        <div class="question bg-white p-3 border-bottom">
                                                                                                                                  <div class="d-flex flex-row justify-content-between align-items-center mcq">
                                                                                                                                            <h4>MCQ Quiz</h4><span>(5 of 20)</span>
                                                                                                                                  </div>
                                                                                                                        </div>
                                                                                                                        <Question data={item}></Question>
                                                                                                                        <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white"><button class="btn btn-primary d-flex align-items-center btn-danger" type="button"><i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous</button><button class="btn btn-primary border-success align-items-center btn-success" type="button">Next<i class="fa fa-angle-right ml-2"></i></button></div>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>
                                                                                </div>

                                                                      ))}



                                                            </Dialog>
                                                  </Column>
                                        </div>

                              </Wrapper>
                    )
          }
}

export default TestItem;
