import React from 'react'
import InstockProductSelector from './InstockProductSelector'

export default class StockShiftFromTable extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			resources: [],
			selector: {
				returnSelect: null, 
				visible: false
			}
		}
	}

	addRow() {
		let resources = this.state.resources
		resources.push({})
		this.setState({ resources })
	}

	deleteRow(index) {
		let resources = this.state.resources
		resources.splice(index, 1);
		this.setState({ resources })
	}

	openSelector(index) {
		let returnSelect = (resource)=> {
			let resources = this.state.resources
			resources[index] = resource 
			this.setState({resources})
		}
		this.setState({selector:{ returnSelect: returnSelect, visible: true}})
	}

	closeSelector() {
		this.setState({selector:{ returnSelect: null, visible: false}})
	}

	render() {
		console.log('stock:', this.state)
		return (
			<div>
				{ this.state.selector.visible ? <InstockProductSelector hiddenSelector={this.closeSelector.bind(this)} returnSelect={this.state.selector.returnSelect} /> : null }
				<table>
					<thead>
						<tr>
							<th rowSpan="2">序号</th>
							<th rowSpan="2">产品编号</th>
							<th rowSpan="2">产品名称</th>
							<th rowSpan="2">规格</th>
							<th rowSpan="2">产品状态</th>
							<th rowSpan="2">等级</th>
							<th rowSpan="2">色号</th>
							<th rowSpan="2">尺码</th>
							<th rowSpan="2">移出区位</th>
							<th rowSpan="2">移入区位</th>
							<th rowSpan="2">系统号</th>
							<th rowSpan="2">包装箱号</th>
							<th rowSpan="2">包装单位</th>
							<th colSpan="4">基本单位</th>
							<th colSpan="2">业务单位</th>
							<th rowSpan="2">行备注</th>
							<th rowSpan="2">操作</th>
						</tr>
						<tr>
							<th>单位</th>
							<th>数量</th>
							<th>片/面积</th>
							<th>总面积</th>
							<th>单位</th>
							<th>数量</th>
						</tr>
					</thead>
					<tbody>

						{this.state.resources.map((resource, index) => {
							return (
								<tr key={index}>
									<td>{1 + index}</td>
									<td>{resource.product_no}</td>
									<td>{resource.name}</td>
									<td>{resource.spec}</td>
									<td>{resource.product_status}</td>
									<td>{resource.level}</td>
									<td>{resource.color}</td>
									<td>{resource.size}</td>
									<td>{resource.location}</td>
									<td><input /></td>
									<td>{resource.sys_no}</td>
									<td>{resource.packing_no}</td>
									<td>{resource.packing_unit}</td>
									<td>{resource.base_unit}</td>
									<td><input /></td>
									<td>{resource.base_unit}</td>
									<td>{resource.base_unit}</td>
									<td>{resource.business_unit}</td>
									<td>{resource.count / resource.packing_unit}</td>
									<td>
										<button type="button" onClick={() => { this.openSelector(index) }}>选择</button>
										<button type="button" onClick={() => { this.deleteRow(index) }}>删除</button>
									</td>
								</tr>
							)
						})}

						<tr>
							<td>
								<button type="button" onClick={this.addRow.bind(this)}>增加</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}