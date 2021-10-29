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
                              question: [],
                              pageSize: 1,
                              currentPage: 0,
                              totalCount: 0,
                              answers: 0

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
                              url: `https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple`,
                              data: null
                    }).catch(err => {
                              console.log(err);
                    });
                    const slice = linq.from(res.data.results).skip(this.state.pageSize * (this.state.currentPage - 1)).take(this.state.pageSize).toArray();
                    this.setState({
                              question: slice,
                              totalCount: res.data.results.length
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
          onChangePage = (event) => {

                    var target = event.target;
                    var name = target.name;
                    console.log(this.state.currentPage);
                    if (name === "finish") {

                    } else {
                              this.setState({
                                        currentPage: this.state.currentPage + 1,

                              }, () => {
                                        this.LoadQuiz()
                              });
                    }



          }
          onAnswers = (value) => {
                    this.setState({
                              answers: value === true ? this.state.answers + 1 : this.state.answers - 1
                    })
                    console.log(this.state.answers);
          }
          render() {
                    let button;
                    if (this.state.currentPage === this.state.totalCount) {
                              button = <button className="btn btn-primary d-flex align-items-center btn-danger" type="button"
                                        onClick={(e) => this.setState({ isOpen: false })} name="finish" >
                                        <i className="fa fa-angle-left mt-1 mr-1"></i>&nbsp;Finish
                              </button>
                    } else {

                              button = <button className="btn btn-primary border-success align-items-center btn-success"
                                        onClick={this.onChangePage} name="forward"
                                        type="button">Next<i className="fa fa-angle-right ml-2"></i></button>
                    }


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
                                                                      <div className="container mt-5">
                                                                                <div className="d-flex justify-content-center row">
                                                                                          <div className="col-md-10 col-lg-10">
                                                                                                    <div className="border">
                                                                                                              <div className="question bg-white p-3 border-bottom">
                                                                                                                        <div className="d-flex flex-row justify-content-between align-items-center mcq">
                                                                                                                                  <h4>MCQ Quiz</h4><span>({this.state.currentPage} of {this.state.totalCount})</span>
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                              {this.state.question.map((item, index) => (

                                                                                                                        // <Question
                                                                                                                        //           answers={this.onAnswers}
                                                                                                                        //           key={index} data={item} id={this.state.currentPage}></Question>
                                                                                                                        <div className="question bg-white p-3 border-bottom">
                                                                                                                                  <div className="d-flex flex-row align-items-center question-title">
                                                                                                                                            <h3 className="text-danger">Q. </h3>
                                                                                                                                            <h5 className="mt-1 ml-2">{item.question}?</h5>
                                                                                                                                  </div>
                                                                                                                                  <div className="ans ml-2">
                                                                                                                                            <label className="radio">
                                                                                                                                                      <input type="check" name={this.props.id}
                                                                                                                                                                checked={this.state.correct}
                                                                                                                                                                onChange={this.onHandleChange}
                                                                                                                                                                value={item.correct_answer} />
                                                                                                                                                      <span>
                                                                                                                                                                {
                                                                                                                                                                          item.correct_answer
                                                                                                                                                                }
                                                                                                                                                      </span>
                                                                                                                                            </label>

                                                                                                                                  </div>
                                                                                                                                  {
                                                                                                                                            item.incorrect_answers.map((value, index) => (
                                                                                                                                                      <div className="ans ml-2" key={index}>
                                                                                                                                                                <label className="radio">
                                                                                                                                                                          <input name={this.props.id}
                                                                                                                                                                                    checked={this.state.incorrect}
                                                                                                                                                                                    onChange={this.onHandleChange}
                                                                                                                                                                                    type="radio" value={value} />
                                                                                                                                                                          <span>{value}</span>
                                                                                                                                                                </label>
                                                                                                                                                      </div>

                                                                                                                                            ))
                                                                                                                                  }

                                                                                                                        </div>
                                                                                                              ))}

                                                                                                              <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                                                                                                                        {button}
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>
                                                                                </div>
                                                                      </div>



                                                            </Dialog>
                                                  </Column>
                                        </div>

                              </Wrapper>
                    )
          }
}

export default TestItem;
