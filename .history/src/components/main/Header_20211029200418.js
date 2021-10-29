import React, { Component } from 'react';
import {
          Wrapper, InputSearch, ButtonGoto, DropBox, Blank,
} from './headerStyle';
import Dialog from './Dialog';
import './Header.css'

class Header extends Component {
          constructor(props) {
                    super(props);
                    this.state = {
                              isOpen: false,
                    }
          }
          onCreateQuiz = () => {
                    this.setState({
                              isOpen: true
                    })
          }
          render() {
                    return (
                              <Wrapper >
                                        <InputSearch
                                                  value={this.props.keyWord}
                                                  type="text"
                                                  onChange={(event) => this.props.searchOnChange(event)}
                                        />
                                        <Blank />
                                        <button type="button" className="btn btn-info ml-5">Tìm kiếm</button>

                                        <button className="btn btn-primary ml-20" onClick={this.onCreateQuiz} >Tạo</button>


                                        <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>


                                              
                                              <div action="" method="POST" role="form">
                                                        <legend>Form title</legend>
                                              
                                                        <div class="form-group">
                                                                  <label for="">label</label>
                                                                  <input type="text" class="form-control" id="" placeholder="Input field">
                                                        </div>
                                              
                                                        
                                              
                                                        <button type="submit" class="btn btn-primary">Submit</button>
                                              </div>
                                              

                                        </Dialog>
                              </Wrapper>
                    )
          }
}

export default Header;
