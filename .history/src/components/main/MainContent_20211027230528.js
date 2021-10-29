import React, { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {
          Wrapper, Blank, WrapperTests,
} from './mainContentStyle';
import Header from './Header';
import TestItem from './TestItem';
import ReactPaginate from 'react-paginate';
class MainContent extends Component {
          constructor(props) {
                    super(props);
                    this.state = {
                    }
                    console.log("data =", this.props.data)
          }

          OnChangeData = (id, name, value) => {
                    this.props.OnChangeData(id, name, value)

                    // console.log(name, value);
          }


function PaginatedItems({ itemsPerPage }) {
          // We start with an empty list of items.
          const [currentItems, setCurrentItems] = useState(null);
          const [pageCount, setPageCount] = useState(0);
          // Here we use item offsets; we could also use page offsets
          // following the API or data you're working with.
          const [itemOffset, setItemOffset] = useState(0);

          useEffect(() => {
                    // Fetch items from another resources.
                    const endOffset = itemOffset + itemsPerPage;
                    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
                    setCurrentItems(items.slice(itemOffset, endOffset));
                    setPageCount(Math.ceil(items.length / itemsPerPage));
          }, [itemOffset, itemsPerPage]);

          // Invoke when user click to request another page.
          const handlePageClick = (event) => {
                    const newOffset = (event.selected * itemsPerPage) % items.length;
                    console.log(
                              `User requested page number ${event.selected}, which is offset ${newOffset}`
                    );
                    setItemOffset(newOffset);
          };
          renderTests() {
                    const items = [];
                    for (let i = 0; i < this.props.data.length; i++) {
                              const item = (
                                        <TestItem key={this.props.data[i].id} onReceiveData={this.OnChangeData}
                                                  name={this.props.data[i].name}
                                                  point={this.props.data[i].point}
                                                  time={this.props.data[i].time}
                                                  diff={this.props.data[i].diff}
                                                  past={this.props.data[i].past}
                                                  id={this.props.data[i].id}
                                        />
                              )
                              items.push(item);
                    }
                    return (
                              <WrapperTests>
                                        {items}
                              </WrapperTests>
                    )
          }

          render() {
                    return (
                              <Wrapper >
                                        <Header
                                                  keyWord={this.props.keyWord}
                                                  searchOnChange={this.props.searchOnChange}
                                        />
                                        {
                                                  this.renderTests()
                                        }
                                        <Pagination
                                                  count={10}
                                                  variant="outlined"
                                                  shape="rounded"
                                                  style={{
                                                            marginBottom: '1em',
                                                  }}
                                        />
                              </Wrapper>
                    )
          }
}

export default MainContent;
