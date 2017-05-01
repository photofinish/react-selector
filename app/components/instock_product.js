import Store from 'json-api-store'

const adapter = new Store.AjaxAdapter({ base: "http://192.168.2.211:3000/api/v1" });
const store = new Store(adapter);

const attributes = [
    'count', 'packing_no', 'remark',
    'sys_no', 'sku_id', 'color', 'size', 'location',
    'product_no', 'name', 'description', 'spec', 'packing_unit',
    'packing_no', 'level', 'base_unit', 'business_unit', 'product_status'
]
let defineAttrs = {}

for (var attr of attributes) {
    defineAttrs[attr] = Store.attr()
}

store.define([ "instock_products", "instock_product" ], defineAttrs);

export default store;
