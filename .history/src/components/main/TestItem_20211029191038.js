import React, { Component } from 'react';
import {
          Wrapper, Row, TitleField, StarIcon, Column,
} from './testItemStyle';
import images from '../../asset/images';
import axios from 'axios';
import Dialog from './Dialog'
import Question from './Question';
import linq from "linq";
import apiCaller from '../../utils/apiCaller'
import Countdown from 'react-countdown';
class TestItem extends Component {
          constructor(props) {
                    super(props);

                    this.state = {

                              name: '',
                              point: 1.0,
                              time: 0,
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
                    var time = new Date();

                    await this.setState(
                              {
                                        isOpen: true,
                                        time: time.getMinutes()
                              });
                    console.log(this.state.time);
                    var res = await axios({
                              method: 'GET',
                              url: `https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean`,
                              data: null
                    }).catch(err => {
                              console.log(err);
                    });
                    const slice = linq.from(res.data.results).skip(this.state.pageSize * (this.state.currentPage - 1)).take(this.state.pageSize).toArray();
                    this.setState({
                              question: slice,
                              totalCount: res.data.results.length
                    })
                    // console.log(this.state.question);

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
                    // console.log(this.state.currentPage);
                    if (name === "finish") {

                    } else {
                              this.setState({
                                        currentPage: this.state.currentPage + 1,

                              }, () => {
                                        this.LoadQuiz()
                              });
                    }



          }
          onAnswers = async (value) => {
                    console.log((value));

                    let answers = value === true ? this.state.answers + 1 : this.state.answers 
                    await this.setState({
                              answers: answers
                    })
                    console.log(this.state.answers);

          }
StartOFAnswers()
          onFinish = async () => {


                    var date = new Date();
                    let minute = date.getMinutes();
                    let time = this.state.time === minute ? date.getSeconds() : Math.abs(minute - this.state.time) * 60
                 
                
                    var data = {
                              name: this.state.question[0].category,
                              point: this.state.answers,
                              time: time,
                              diff: 3,
                              past: this.state.answers > 0 ? true : false,
                              isFinish: true

                    }
                    this.setState({ isOpen: false, time: 0 })
                    let url = 'task/' + this.props.id;
                    apiCaller(url, 'PUT', data).then(res => {

                              window.location.reload();
                    })
          }
          // onComplete = async (time) => {
          //           this.onFinish();
          // }

          render() {
                    let button;
                    if (this.state.currentPage === this.state.totalCount) {
                              button = <button className="btn btn-primary d-flex align-items-center btn-danger" type="button"
                                        onClick={this.onFinish} name="finish" >
                                        <i className="fa fa-angle-left mt-1 mr-1"></i>&nbsp;Finish
                              </button>
                    } else {

                              button = <button className="btn btn-primary border-success align-items-center btn-success"
                                        onClick={this.onChangePage} name="forward"
                                        type="button">Next<i className="fa fa-angle-right ml-2"></i></button>
                    }
                    let buttonStart;
                    console.log(this.props.isFinish, 'haha');
                    if (this.props.isFinish === false) {
                              buttonStart = <button onClick={this.LoadQuiz} >Start</button>
                    } else {
                              buttonStart = <button disabled={true}>Finish</button>
                    }
                    const Completionist = () => <span className='text-danger'>Hết giờ!</span>;
                    const renderer = ({ hours, minutes, seconds, completed }) => {
                              if (completed) {
                                        // Render a completed state
                                        return <Completionist />;
                              } else {
                                        // Render a countdown
                                        return <span>{hours}:{minutes}:{seconds}</span>;
                              }
                    };

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

                                                            <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>

                                                                      <div className="container mt-5 ">
                                                                                <div className="d-flex justify-content-center row">
                                                                                          <div className="col-md-10 col-lg-10">
                                                                                                    <div className="border">
                                                                                                              <div className="question bg-white p-3 border-bottom">
                                                                                                                        <div className="d-flex flex-row justify-content-between align-items-center mcq ">
                                                                                                                                  <h4 className="position-relative"  >MCQ Quiz   {

                                                                                                                                            <Countdown className="position-absolute" key="count"

                                                                                                                                                      onComplete={this.onFinish}
                                                                                                                                                      renderer={renderer} date={Date.now() + 6000} />


                                                                                                                                  }
                                                                                                                                  </h4>
                                                                                                                                  <span>
                                                                                                                                            ({this.state.currentPage} of {this.state.totalCount})
                                                                                                                                  </span>
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                              {this.state.question.map((item, index) => (
                                                                                                                        <Question key={item.question + '_' + index}
                                                                                                                                  answers={this.onAnswers}
                                                                                                                                  data={item} id={this.state.currentPage}></Question>

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
                                                  {buttonStart}
                                        </div>

                              </Wrapper>
                    )
          }
}

export default TestItem;
