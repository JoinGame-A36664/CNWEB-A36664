import React, { Component } from 'react';
import {
          Wrapper, InputSearch, ButtonGoto, DropBox, Blank,
} from './headerStyle';
import Dialog  from './Dialog';


class Header extends Component {
          constructor(props) {
                    super(props);
                    this.state={
                              isOpen: false,
                   }
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
                                        <button className="btn btn-primary " onClick={this.LoadQuiz} >Start</button>
                                   
                                   
                                        <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>

                                              


                                        </Dialog>
                              </Wrapper>
                    )
          }
}

export default Header;
