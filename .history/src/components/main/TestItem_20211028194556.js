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
                              url: `https://opentdb.com/api.php?amount=10&category=12&difficulty=easy`,
                              data: null
                    }).catch(err => {
                              console.log(err);
                    });
                    const slice = linq.from(res.data.results).skip(this.state.pageSize * (this.state.currentPage - 1)).take(this.state.pageSize).toArray();
                    this.setState({
                              question: slice,
                              totalCount:res.data.
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

                    if (name === "forward") {

                    }

                    // if (this.state.currentPage === 1 && name === "forward") {
                    //           return;
                    // }
                    this.setState({
                              currentPage: name === "forward" ? this.state.currentPage + 1 : this.state.currentPage - 1,

                    }, () => {
                              this.LoadQuiz()
                    });
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
                                                                      <div className="container mt-5">
                                                                                <div className="d-flex justify-content-center row">
                                                                                          <div className="col-md-10 col-lg-10">
                                                                                                    <div className="border">
                                                                                                              <div className="question bg-white p-3 border-bottom">
                                                                                                                        <div className="d-flex flex-row justify-content-between align-items-center mcq">
                                                                                                                                  <h4>MCQ Quiz</h4><span>({this.state.currentPage} of {this.state.totalCount})</span>
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                              {this.state.question.map(item => (

                                                                                                                        <Question data={item}></Question>
                                                                                                              ))}

                                                                                                              {/* <Question data={this.state.question.pop()}></Question> */}


                                                                                                              <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                                                                                                                        <button className="btn btn-primary d-flex align-items-center btn-danger" type="button"
                                                                                                                                  onClick={this.onChangePage} name="backward"
                                                                                                                        >
                                                                                                                                  <i className="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous</button>
                                                                                                                        <button className="btn btn-primary border-success align-items-center btn-success"
                                                                                                                                  onClick={this.onChangePage} name="forward"
                                                                                                                                  type="button">Next<i className="fa fa-angle-right ml-2"></i></button></div>
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
