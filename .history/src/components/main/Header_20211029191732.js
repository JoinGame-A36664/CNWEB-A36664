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
                                     
                                        {/* <DropBox name="filter" id="filter">
                                                  <option value="volvo">All</option>
                                                  <option value="saab">Time</option>
                                                  <option value="mercedes">Point</option>
                                        </DropBox> */}
                              </Wrapper>
                    )
          }
}

export default Header;
