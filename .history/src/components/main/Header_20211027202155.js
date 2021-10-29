import React, { Component } from 'react';
import {
          Wrapper, InputSearch, ButtonGoto, DropBox, Blank,
} from './headerStyle';



 Header extends Component {
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
                                        
                                        <div ="dropdown-menu">
                                                  <a ="dropdown-item" href="#">Action</a>
                                                  <a ="dropdown-item" href="#">Another action</a>
                                                  <a ="dropdown-item" href="#">Something else here</a>
                                                  <div ="dropdown-divider"></div>
                                                  <a ="dropdown-item" href="#">Separated link</a>
                                        </div>
                              </Wrapper>
                    )
          }
}

export default Header;
