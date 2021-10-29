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

                                   
                                     
                                        <div className="btn-group">
                                                  <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Action
                                                  </button>
                                                  <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="https://localhost:4200">Action</a>
                                                            <a className="dropdown-item" href="https://localhost:4200">Time</a>
                                                  </div>
                                        </div>
                              </Wrapper>
                    )
          }
}

export default Header;
