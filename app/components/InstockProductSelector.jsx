import React from 'react'
import store from './instock_product'

export default class InstockProductSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount () {
        let self = this
        store.loadAll('instock_products').subscribe(function(products){
            self.setState({ resources: products })
        })
    }

    handleClose() {
        this.props.hiddenSelector()
    }

    handleChoose() {
        this.props.returnSelect(this.state.selected)
        this.handleClose()
    }

    handleChange(resource) {
        this.state.selected === resource ? null : this.setState({selected: resource});
    }

  render() {
      console.log('selected:', this.state.selected)
    return (
      <div>
          { this.state.resources ? 
        <div>
            <table>
                <thead>
                    <tr>
                        <th rowSpan="2">选择</th>
                        <th colSpan="4">产品</th>
                        <th rowSpan="2">区位</th>
                        <th colSpan="7">产品属性</th>
                        <th colSpan="2">基本单位</th>
                        <th colSpan="2">业务单位</th>
                        <th rowSpan="2">总平方数</th>
                        <th rowSpan="2">系统号</th>
                        <th rowSpan="2">产品状态</th>
                        <th rowSpan="2">备注</th>
                    </tr>
                    <tr>
                        <th>编号</th>
                        <th>名称</th>
                        <th>说明</th>
                        <th>系列</th>
                        <th>规格</th>
                        <th>包装单位</th>
                        <th>包装箱号</th>
                        <th>包装名称</th>
                        <th>等级</th>
                        <th>色号</th>
                        <th>尺码</th>
                        <th>单位</th>
                        <th>库存数量</th>
                        <th>单位</th>
                        <th>库存数量</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.resources.map((resource, index)=> {
                        return (
                            <tr key={index}>
                                <td><input type="radio" name="select" onClick={()=> this.handleChange(resource)} checked={this.state.selected === resource} /></td>
                                <td>{resource.product_no}</td>
                                <td>{resource.name}</td>
                                <td>{resource.description}</td>
                                <td>???</td>
                                <td>{resource.location}</td>
                                <td>{resource.spec}</td>
                                <td>{resource.packing_unit}</td>
                                <td>{resource.packing_no}</td>
                                <td>???</td>
                                <td>{resource.level}</td>
                                <td>{resource.color}</td>
                                <td>{resource.size}</td>
                                <td>{resource.base_unit}</td>
                                <td>{resource.count}</td>
                                <td>{resource.business_unit}</td>
                                <td>{resource.count / resource.packing_unit}</td>
                                <td>???</td>
                                <td>{resource.sys_no}</td>
                                <td>{resource.product_status}</td>
                                <td>{resource.remark}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button type="button" onClick={this.handleClose.bind(this)}>返回</button>
            <button type="button"onClick={this.handleChoose.bind(this)}>确定</button>
        </div>
        : <p>等待加载数据...</p>
        }
      </div>
    );
  }
}