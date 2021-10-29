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
                                        
                                        <div className="dropdown-menu">
                                                  <a className="dropdown-item" href="#">Action</a>
                                                  <a className="dropdown-item" href="#">Another action</a>
                                                  <a className="dropdown-item" href="#">Something else here</a>
                                                  <div className="dropdown-divider"></div>
                                                  <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                              </Wrapper>
                    )
          }
}

export default Header;
