import React, { Component } from 'react';
import {
          Wrapper, InputSearch, ButtonGoto, DropBox, Blank,
} from './headerStyle';



classname Header extends Component {
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
                                        
                                        <div classname="btn-group">
                                                  <button type="button" classname="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Action
                                                  </button>
                                                  <div classname="dropdown-menu">
                                                            <a classname="dropdown-item" href="#">Action</a>
                                                            <a classname="dropdown-item" href="#">Another action</a>
                                                            <a classname="dropdown-item" href="#">Something else here</a>
                                                            <div classname="dropdown-divider"></div>
                                                            <a classname="dropdown-item" href="#">Separated link</a>
                                                  </div>
                                        </div>
                              </Wrapper>
                    )
          }
}

export default Header;
