import React from "react";

import Item from './Item';
import './App.css';

class App extends React.Component {
  state = {
    items: [],
    isLoading: false,
    autoRefresh: false,
    minComm: 0
  } ;

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
      this.setState({isLoading:true});
      fetch('https://www.reddit.com/r/reactjs.json?limit=100')
          .then(res => res.json())
          .then(({data}) => {
              this.setState({items: data.children,
                  isLoading: false})
          })
  }

  handleRefresh = () => {
      if (this.state.autoRefresh) {
          this.setState({autoRefresh: false});
          clearInterval(this.autoRefreshInt);
      } else {
          this.setState({autoRefresh: true});
          this.autoRefreshInt = setInterval(this.getItems,4000);
      }
  }

  updateMinComm = (event) => {
    this.setState({
        minComm: +event.target.value
    })
  }

  render() {
    const {items, isLoading, autoRefresh, minComm} = this.state;
    const itemsSortByComm = items
        .filter(item => item.data.num_comments >= minComm)
        .sort((a,b)=>b.data.num_comments-a.data.num_comments)

    let maxItem = 0;

    if (itemsSortByComm.length !== 0) {
       maxItem = itemsSortByComm[0].data.num_comments;
    }
      return <div>
      <h1>Top commented</h1>
      <button
          type="button"
          onClick={this.handleRefresh}
          className="btnRefresh"
      > {autoRefresh ? "Stop" : "Start"} auto-refresh
      </button>
       <p>Current filter {minComm}</p>
      <input type="range"
             value={minComm}
             onChange={this.updateMinComm}
             min={0}
             max={maxItem}
             />
        {isLoading ? <p>Is loading</p>
        :
          <div className="itemList">
              {itemsSortByComm.length > 0 ?
                  itemsSortByComm.map(({data}) =>
                      <Item data={data} key={data.id}/>
                  )
                  : <p>No results found matching your criteria</p>
              }
          </div>
      }
    </div>;
  }
}


export default App;