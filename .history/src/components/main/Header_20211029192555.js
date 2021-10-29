import React, { Component } from 'react';
import {
          Wrapper, InputSearch, ButtonGoto, DropBox, Blank,
} from './headerStyle';



class Header extends Component {
          constructor(props) {
                    super(props);
          }

          render() {
                    return (
                              <Wrapper >
                                        <InputSearch
                                                  value={this.props.keyWord}
                                                  type="text"
                                                  onChange={(event) => this.props.searchOnChange(event)}
                                        />
                                     
                                        <button type="button" className="btn btn-info ml-5">Tìm kiếm</button>

                                        <Blank />
                                     
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
                              </Wrapper>
                    )
          }
}

export default Header;
