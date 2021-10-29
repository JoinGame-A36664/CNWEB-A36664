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
                              url: `https://opentdb.com/api.php?amount=10&category=15&difficulty=easy`,
                              data: null
                    }).catch(err => {
                              console.log(err);
                    });

                    this.setState({
                              question: res.data.results
                    })

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

                    var questions = <div className='d-flex'>
                              {
                                        this.props.question.map((item, index) => {


                                                  return (
                                                            <input type={item.type} key={item.id}
                                                                      name={item.name}
                                                                      point={item.point}
                                                                      time={item.time}
                                                                      diff={item.diff}
                                                                      past={item.past}
                                                                      id={item.id}
                                                            />
                                                  );
                                        })
                              }
                    </div>
                  
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
                                                                    
                                                                      {questions}

                                                            </Dialog>
                                                  </Column>
                                        </div>

                              </Wrapper>
                    )
          }
}

export default TestItem;
