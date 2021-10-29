import React, { Component } from 'react';
import {
          Wrapper, Row, TitleField, StarIcon, Column,
} from './testItemStyle';
import images from '../../asset/images';

class TestItem extends Component {
          constructor(props) {
                    super(props);

                    this.state = {
                              name: ''
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

                    console.log(event.target);
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

          render() {
                    return (
                              <Wrapper >
                                        <Column width="70%">
                                                  <Row>
                                                            <TitleField>Name:</TitleField>
                                                            <span name="name">   {this.props.name}</span>
                                                  </Row>
                                                  <Row>
                                                            <TitleField>Time:</TitleField>
                                                            <span name="point">  {this.props.time}</span>
                                                  </Row>
                                                  <Row>
                                                            <TitleField>Point:</TitleField>
                                                            <span name="time">  {this.props.point}</span>
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
                                        <Column>
                                                  Start
                                        </Column>
                              </Wrapper>
                    )
          }
}

export default TestItem;
