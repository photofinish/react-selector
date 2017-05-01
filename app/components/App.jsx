import React from 'react'
import InstockProductSelector from './InstockProductSelector'
import StockShiftFromTable from './StockShiftFromTable'



export default class App extends React.Component {
  render() {
    return (
      <div>
        <StockShiftFromTable />
      </div>
    );
  }
}