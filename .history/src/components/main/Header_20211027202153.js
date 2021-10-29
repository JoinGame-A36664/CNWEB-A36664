import React, { Component } from 'react';
import {
          Wrapper, InputSearch, ButtonGoto, DropBox, Blank,
} from './headerStyle';



Name Header extends Component {
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
                                        
                                        <div Name="dropdown-menu">
                                                  <a Name="dropdown-item" href="#">Action</a>
                                                  <a Name="dropdown-item" href="#">Another action</a>
                                                  <a Name="dropdown-item" href="#">Something else here</a>
                                                  <div Name="dropdown-divider"></div>
                                                  <a Name="dropdown-item" href="#">Separated link</a>
                                        </div>
                              </Wrapper>
                    )
          }
}

export default Header;
