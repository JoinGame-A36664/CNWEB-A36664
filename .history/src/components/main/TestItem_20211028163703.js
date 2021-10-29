import React, { Component } from 'react';
import {
          Wrapper, Row, TitleField, StarIcon, Column,
} from './testItemStyle';
import images from '../../asset/images';

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
                              isOpen: false

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
                                                            <button onClick={(e) => this.setState({ isOpen: true })}>Start</button>
                                                            <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                                                                    
                                                                    <form action="" method="POST" >
                                                                              <legend>Form title</legend>
                                                                    
                                                                              <div class="form-group">
                                                                                          <div class="form-check">
                                                                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                                                                    <label class ="form-check-label" for="flexRadioDefault1">
                                                                                                    Default radio
                                                                                                    </label>
                                                                                          </div>
                                                                                          <div class="form-check">
                                                                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                                                                                    <label class ="form-check-label" for="flexRadioDefault2">
                                                                                                    Default checked radio
                                                                                                    </label>
                                                                                          </div>
                                                                              </div>
                                                                    
                                                                              
                                                                    
                                                                              <button type="submit" className="btn btn-primary">Submit</button>
                                                                    </form>
                                                                    
                                                            </Dialog>
                                                  </Column>
                                        </div>

                              </Wrapper>
                    )
          }
}

export default TestItem;
