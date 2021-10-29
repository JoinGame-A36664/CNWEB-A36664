import React, { Component } from 'react';
import {
          Wrapper, Row, TitleField, StarIcon, Column,
} from './testItemStyle';
import images from '../../asset/images';

class TestItem extends Component {
          constructor(props) {
                    super(props);

                    this.state = {
                              cbTest: true
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
        }



renderStars(number) {
          const stars = [];
          for (let i = 0; i < number; i++) {
                    const icon = <StarIcon src={images.star1} />
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
                                                  {this.props.name}
                                        </Row>
                                        <Row>
                                                  <TitleField>Time:</TitleField>
                                                  {this.props.time}
                                        </Row>
                                        <Row>
                                                  <TitleField>Point:</TitleField>
                                                  {this.props.point}
                                        </Row>
                                        <Row>
                                                  <TitleField>Diff:</TitleField>
                                                  {this.renderStars(this.props.diff)}
                                        </Row>
                                        <Row>
                                                  <TitleField>Past:</TitleField>
                                                  <input type="checkbox" value={true}
                                                            name="cbTest"
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
