(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[49],{1212:function(e,n,t){"use strict";t.r(n);var a=t(0),d=t.n(a),r=t(478),o=t(479),i=t(34),l=t(1213),c=t.n(l),s=t(1214),u=t.n(s),h=Object(i.b)(c.a,u.a),p=[{name:"01-base",title:Object(i.b)("基本用法 \n 基础的 Tree 用法","Base \n Basic usage of Tree"),component:t(1215).default,rawText:t(1216)},{name:"02-icon",title:Object(i.b)("图标 \n 在 renderItem 中根据状态展示不同的图标","Icons \n Display different icon in the renderItem."),component:t(1217).default,rawText:t(1218)},{name:"03-click",title:Object(i.b)("点击事件 \n 设置 onClick 属性监听节点点击","Click \n Set the onClick property to listen the node click."),component:t(1219).default,rawText:t(1220)},{name:"04-noline",title:Object(i.b)("无连接线 \n 设置 line 为 false，隐藏连接线","Line \n Set the line property to false to hid the connecting line."),component:t(1221).default,rawText:t(1222)},{name:"05-expanded",title:Object(i.b)("控制展开 \n 受控的展开（此示例数据量太大，第一次全部展开会比较慢）","Expanded \n Controlled expansion (Because the data in this example is too large, it will be slower for the first time.)"),component:t(1223).default,rawText:t(1224)},{name:"06-change",title:Object(i.b)("可选择 \n 选中值取值提供了 4 种模式 \n 0: 只返回完全选中的节点，包含父节点 \n 1: 返回全部选中的节点和半选中的父节点 \n 2: 只返回选中的子节点 \n 3: 如果父节点选中，只返回父节点","onChange \n Selected values provide 4 modes \n 0: Return only the fully selected node, including the parent node. \n 1: Return the fully selected nodes and semi-selected parent nodes. \n 2: Return only the selected child node. \n 3: Return only the parent node, if the parent node is selected."),component:t(1225).default,rawText:t(1226)},{name:"07-disabled",title:Object(i.b)("禁用 \n disabled 为函数时，根据返回结果禁用节点，同时禁用子节点 \n disabled 为 true 时，禁用全部节点","disabled \n When the disabled property is a function, disable the node and its child nodes according to the returned result. \n When the disabled property is true, disable all nodes."),component:t(1227).default,rawText:t(1228)},{name:"08-drag",title:Object(i.b)("拖动 \n 设置 onDrop 属性可以拖动节点","Drag \n Set the onDrop property to drag nodes."),component:t(1229).default,rawText:t(1230)},{name:"08-styledrag",title:Object(i.b)("设置拖动样式 \n 可以通过 dragImageSelector, dragImageStyle, dragHoverExpand定义一些拖动的设置","Set the drag style \n Some drag settings can be defined by dragImageSelector, dragImageStyle, dragHoverExpand"),component:t(1231).default,rawText:t(1232)},{name:"09-lazyload",title:Object(i.b)("动态加载 \n 数据过大，需要动态加载时，可以设置 loader 函数，当展开未定义 children（undefined）的节点时，触发此函数","Lazy load \n Set the loader function to dynamic fetch data. This function is triggered when the undefined child node is expanded."),component:t(1233).default,rawText:t(1234)},{name:"data",title:Object(i.b)("",""),component:t(1235).default,rawText:t(1236)}];n.default=Object(r.a)(function(e){return d.a.createElement(o.b,Object.assign({},e,{codes:void 0,source:h,examples:p}))})},1213:function(e,n){e.exports="# Tree *树形选择*\n\n## \n\n#### 本页面中用到的数据如下（数据量比较大，请谨慎点开）\n<example name=\"data\" />\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| onChange | function(array) | 无 | 设置 onChange 属性时，显示 选择框。参数为当前选中值，和 mode 属性相关 |\n| data | array[{children:[]}] | [] | 数据，子节点为children，如果 children 值为 null 或 长度为 0 时，视为叶子节点 |\n| defaultExpanded | array\\[key] | 无 | 默认展开的节点 key（非受控） |\n| disabled | boolean \\| function(d) | false | 显示选择框时有效，为 true 时，所有节点禁用选择，为函数时，根据函数返回结果确定是否禁用 |\n| expanded | array\\[key] | 无 | 展开的节点 key （受控） |\n| keygen | string \\| function(obj, parentKey):string | 必填 | 生成key的辅助方法<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d) => d.id |\n| line | boolean | true | 是否显示连接线 |\n| loader | function(key) | 无 | 设置loader属性后，未定义children的节点视为动态加载节点，点击展开触发 loader事件，children 为 null 或者长度为 0 视为叶子节点 |\n| mode | \\[0\\|1\\|2\\|3\\|4] | 1 | 选中值模式<br />0: 只返回完全选中的节点，包含父节点<br />1: 返回全部选中的节点和半选中的父节点<br />2: 只返回选中的子节点<br />3: 如果父节点选中，只返回父节点 |\n| onExpand | function(array) | 无 | 节点展开回调，参数为当前展开节点 key 数组 |\n| renderItem | string \\| function(d) | 必填 | 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果 |\n| defaultValue | array\\[key] | 无 | 默认选中的 key （非受控） | \n| value | array\\[key] | 无 | 选中的 key （受控） | \n| onDrop | function(data, key, targetKey, position) | 无 | 设置 onDrop 属性时，为可拖动状态<br />data: 拖动后重新排序的完整数据<br />key: 拖动的节点key<br />targetKey: 目标节点 key<br />position: 在目标节点的位置，以 0 开始 | \n| defaultExpandAll | boolean | false | 默认展开所有节点 | \n| childrenKey | string | 'children' | 指定子数据的属性名 |\n| expandIcons | \\[Element, Element\\] | 无 | 自定义展开/收起按钮 |\n| dragImageSelector | string: Selector \\| function(data) | 无 | 定义拖拽图片的选择器 |\n| dragImageStyle | object | 无 | 拖拽图片的样式 |\n| leafClass | string \\| function(data) | 无 | 叶子节点的 class, 函数的参数为该条叶子节点数据 |\n| dragHoverExpand | bool | false | 拖拽时自动展开含有子节点的节点 |\n| doubleClickExpand | bool | false | 双击是否展开节点 |\n| onClick | func | 无 | 节点点击事件 |\n| iconClass | string | 无 | 展开/收起按钮的类名 |"},1214:function(e,n){e.exports="# Tree\n\n##\n\n#### The data used on this page is as follows (the amount of data is large, please be careful)\n<example name=\"data\" />\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | - | Extend className |\n| data | array[{children:[]}] | [] | data. The child node is children. If the children value is null or its length is 0, it is render as a leaf node. |\n| defaultExpanded | array\\[key] | - | Default expanded node key. |\n| disabled | boolean \\| function(d) | false | When it is true, all nodes disable the selection; when it is a function, it determines whether it is disabled according to the return result of the function. |\n| expanded | array\\[key] | - | Expanded node key (controlled) |\n| keygen | string \\| function(obj, parentKey):string | required | Auxiliary method for generating key. <br />When it is a function, use the return value of this function. <br /> When it is a string, use the data value corresponding to this string. For example, 'id' is the same thing as (d) => d.id. |\n| line | boolean | true | Whether to display the connection line. |\n| loader | function(key) | - | If the loader attribute is a function, the node with no children is regarded as dynamically loaded node. Click expanded button to trigger the loader event. The children property is null or its length is 0 will be regarded as a leaf node. |\n| mode | \\[0\\|1\\|2\\|3\\|4] | 1 | mode <br />0: Returns only the fully selected node including the parent node. <br />1: Returns all selected nodes and semi-selected nodes. <br />2: Return only the selected child nodes. <br />3: If the parent node is full selected, only return the parent node. |\n| onChange | function(array) | - | When the onChange property is set, the selection box is displayed. The parameter is the current selected value, which is related to the mode property. |\n| onExpand | function(array) | - | The callback function for expanding the node. The parameter is the key array of the currently expanded nodes. |\n| renderItem | string \\| function(d) | required | When it is a string, return d\\[string].<br /> When it is a function, return the result of this function. |\n| defaultValue | array\\[key] | - | Default selected key (not controlled) | \n| value | array\\[key] | - | Selected key (controlled) |\n| onDrop | function(data, key, targetKey, position) | - | It is draggable when setting the onDrop property. <br />data: Full data after dragging.<br />key: the key of dragged node<br />targetKey: the key of target node<br />position: The position of the target node. start at 0. | \n| defaultExpandAll | boolean | false | default expand all nodes | \n| childrenKey | string | 'children' | the key of the children data name | \n| expandIcons | \\[Element, Element\\] | none | custom expand/collapse button |\n| dragImageSelector | string: Selector \\| function(data) | - | the selector of drag image |\n| dragImageStyle | object | - | the style of drag Image |\n| leafClass | string \\| function(data) | - | the class of lead, the params of function is data |\n| dragHoverExpand | bool | false | auto expand the node when drag over |\n| doubleClickExpand | bool | false | expand node while double click |\n| onClick | func | none | node click |\n| iconClass | string | - | expand/collapse button's class |"},1215:function(e,n,t){"use strict";t.r(n);var a=t(0),d=t.n(a),r=t(539),o=[{id:"1",text:"1",children:[{id:"1-1",text:"1-1",children:[{id:"1-1-1",text:"1-1-1"},{id:"1-1-2",text:"1-1-2"}]},{id:"1-2",text:"1-2"}]},{id:"2",text:"2",children:[{id:"2-1",text:"2-1"},{id:"2-2",text:"2-2"}]},{id:"3",text:"3",children:[{id:"3-1",text:"3-1"}]},{id:"4",text:"4",children:[{id:"4-1",text:"4-1"}]},{id:"5",text:"5",children:[{id:"5-1",text:"5-1"}]}];n.default=function(){return d.a.createElement(r.a,{data:o,keygen:"id",defaultExpanded:["2"],renderItem:function(e){return"node ".concat(e.text)}})}},1216:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- 基础的 Tree 用法\n * en - Base\n *   -- Basic usage of Tree\n */\nimport React from 'react'\nimport { Tree } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    text: '1',\n    children: [\n      {\n        id: '1-1',\n        text: '1-1',\n        children: [{ id: '1-1-1', text: '1-1-1' }, { id: '1-1-2', text: '1-1-2' }],\n      },\n      { id: '1-2', text: '1-2' },\n    ],\n  },\n  { id: '2', text: '2', children: [{ id: '2-1', text: '2-1' }, { id: '2-2', text: '2-2' }] },\n  { id: '3', text: '3', children: [{ id: '3-1', text: '3-1' }] },\n  { id: '4', text: '4', children: [{ id: '4-1', text: '4-1' }] },\n  { id: '5', text: '5', children: [{ id: '5-1', text: '5-1' }] },\n]\n\nexport default function() {\n  return <Tree data={data} keygen=\"id\" defaultExpanded={['2']} renderItem={n => `node ${n.text}`} />\n}\n"},1217:function(e,n,t){"use strict";t.r(n);var a=t(0),d=t.n(a),r=t(539),o=t(487),i=t(137);function l(e,n){var t;return t=e.children&&0!==e.children.length?n?d.a.createElement(i.a,{name:"folder-open",style:{color:"#ffd666"}}):d.a.createElement(i.a,{name:"folder",style:{color:"#ffd666"}}):d.a.createElement(i.a,{name:"file-text-o"}),d.a.createElement("span",null,t," ",e.text)}n.default=function(){return d.a.createElement(r.a,{data:o.c,keygen:"id",renderItem:l,doubleClickExpand:!0})}},1218:function(e,n){e.exports="/**\n * cn - 图标\n *    -- 在 renderItem 中根据状态展示不同的图标\n * en - Icons\n *    -- Display different icon in the renderItem.\n */\nimport React from 'react'\nimport { Tree } from 'shineout'\nimport data from 'doc/data/tree'\nimport FontAwesome from '../Icon/FontAwesome'\n\nfunction renderItem(node, isExpanded) {\n  let icon\n  if (!node.children || node.children.length === 0) {\n    icon = <FontAwesome name=\"file-text-o\" />\n  } else if (isExpanded) {\n    icon = <FontAwesome name=\"folder-open\" style={{ color: '#ffd666' }} />\n  } else {\n    icon = <FontAwesome name=\"folder\" style={{ color: '#ffd666' }} />\n  }\n\n  return (\n    <span>\n      {icon} {node.text}\n    </span>\n  )\n}\n\nexport default function() {\n  return <Tree data={data} keygen=\"id\" renderItem={renderItem} doubleClickExpand />\n}\n"},1219:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return p});var a=t(4),d=t(5),r=t(6),o=t(3),i=t(7),l=t(0),c=t.n(l),s=t(42),u=t(539),h=t(487),p=function(e){function n(e){var d;return Object(a.a)(this,n),(d=Object(r.a)(this,Object(o.a)(n).call(this,e))).handleClick=function(e,n){console.log("click",n),d.setState({active:n})},d.handleEdit=function(e){var n=e.target.value,a=d.state.active.split(",");d.setState(Object(s.a)(function(e){var t=e.data;a.forEach(function(n,e){t=t.find(function(e){return e.id===n}),e<a.length-1&&(t=t.children)}),t.text=n,e.active=void 0}))},d.handleKeyDown=function(e){13===e.keyCode&&e.target.blur()},d.keyGenerator=function(e,n){return"".concat(n,",").concat(e.id).replace(/^,/,"")},d.renderItem=function(e,n,t){return t?c.a.createElement("input",{autoFocus:!0,size:"small",onBlur:d.handleEdit,onKeyDown:d.handleKeyDown,defaultValue:e.text,type:"text"}):"node ".concat(e.text)},d.state={active:void 0,data:h.c},d.defaultExpanded=["1"],d}return Object(i.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return c.a.createElement(u.a,{active:this.state.active,data:this.state.data,keygen:this.keyGenerator,defaultExpanded:this.defaultExpanded,onClick:this.handleClick,onExpand:this.handleExpand,renderItem:this.renderItem})}}]),n}(l.Component)},1220:function(e,n){e.exports="/**\n * cn - 点击事件\n *    -- 设置 onClick 属性监听节点点击\n * en - Click\n *    -- Set the onClick property to listen the node click.\n */\nimport React, { Component } from 'react'\nimport immer from 'immer'\nimport { Tree } from 'shineout'\nimport tree from 'doc/data/tree'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { active: undefined, data: tree }\n    this.defaultExpanded = ['1']\n  }\n\n  handleClick = (node, id) => {\n    console.log('click', id)\n    this.setState({ active: id })\n  }\n\n  handleEdit = event => {\n    const newText = event.target.value\n    const path = this.state.active.split(',')\n    this.setState(\n      immer(draft => {\n        let { data } = draft\n        path.forEach((id, index) => {\n          data = data.find(d => d.id === id)\n          if (index < path.length - 1) data = data.children\n        })\n        data.text = newText\n        draft.active = undefined\n      })\n    )\n  }\n\n  handleKeyDown = event => {\n    if (event.keyCode === 13) event.target.blur()\n  }\n\n  keyGenerator = (node, parentKey) => `${parentKey},${node.id}`.replace(/^,/, '')\n\n  renderItem = (node, isExpanded, isActive) =>\n    isActive ? (\n      <input\n        // eslint-disable-next-line\n        autoFocus\n        size=\"small\"\n        onBlur={this.handleEdit}\n        onKeyDown={this.handleKeyDown}\n        defaultValue={node.text}\n        type=\"text\"\n      />\n    ) : (\n      `node ${node.text}`\n    )\n\n  render() {\n    return (\n      <Tree\n        active={this.state.active}\n        data={this.state.data}\n        keygen={this.keyGenerator}\n        defaultExpanded={this.defaultExpanded}\n        onClick={this.handleClick}\n        onExpand={this.handleExpand}\n        renderItem={this.renderItem}\n      />\n    )\n  }\n}\n"},1221:function(e,n,t){"use strict";t.r(n);var a=t(0),d=t.n(a),r=t(539),o=t(487);n.default=function(){return d.a.createElement(r.a,{data:o.c,defaultExpanded:["1","2"],line:!1,keygen:"id",renderItem:function(e){return"node ".concat(e.id)}})}},1222:function(e,n){e.exports="/**\n * cn - 无连接线\n *    -- 设置 line 为 false，隐藏连接线\n * en - Line\n *    -- Set the line property to false to hid the connecting line.\n */\nimport React from 'react'\nimport { Tree } from 'shineout'\nimport data from 'doc/data/tree'\n\nexport default function() {\n  return <Tree data={data} defaultExpanded={['1', '2']} line={false} keygen=\"id\" renderItem={n => `node ${n.id}`} />\n}\n"},1223:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return m});var a=t(26),d=t(4),r=t(5),o=t(6),i=t(3),l=t(7),c=t(1),s=t(0),u=t.n(s),h=t(44),p=t(539),f=t(487),m=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).handleExpand=function(e){n.setState({expanded:e})},n.renderItem=function(e){return"node ".concat(e.id)},n.state={expanded:["1"]},n.collapseAll=n.handleExpand.bind(Object(c.a)(Object(c.a)(n)),[]),n.expandAll=n.handleExpand.bind(Object(c.a)(Object(c.a)(n)),Object(a.a)(f.a)),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{style:{marginBottom:12}},u.a.createElement(h.a,{onClick:this.expandAll},"Expand all"),u.a.createElement(h.a,{onClick:this.collapseAll},"Collapse all")),u.a.createElement(p.a,{data:f.c,keygen:"id",line:!1,expanded:this.state.expanded,onExpand:this.handleExpand,renderItem:this.renderItem}))}}]),t}(s.Component)},1224:function(e,n){e.exports="/**\n * cn - 控制展开\n *    -- 受控的展开（此示例数据量太大，第一次全部展开会比较慢）\n * en - Expanded\n *    -- Controlled expansion (Because the data in this example is too large, it will be slower for the first time.)\n */\nimport React, { Component } from 'react'\nimport { Button, Tree } from 'shineout'\nimport data, { allIds } from 'doc/data/tree'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { expanded: ['1'] }\n\n    this.collapseAll = this.handleExpand.bind(this, [])\n    this.expandAll = this.handleExpand.bind(this, [...allIds])\n  }\n\n  handleExpand = expanded => {\n    this.setState({ expanded })\n  }\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    return (\n      <div>\n        <div style={{ marginBottom: 12 }}>\n          <Button onClick={this.expandAll}>Expand all</Button>\n          <Button onClick={this.collapseAll}>Collapse all</Button>\n        </div>\n        <Tree\n          data={data}\n          keygen=\"id\"\n          line={false}\n          expanded={this.state.expanded}\n          onExpand={this.handleExpand}\n          renderItem={this.renderItem}\n        />\n      </div>\n    )\n  }\n}\n"},1225:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return g});var d=t(4),r=t(5),o=t(6),i=t(3),l=t(7),c=t(22),a=t(0),s=t.n(a),u=t(518),h=t(539),p=t(487),f={position:"absolute",right:30,top:100,bottom:40,width:240,overflow:"auto",background:"#f2f2f2",padding:10,zIndex:100},m=[{value:0,text:"mode=0 (full)"},{value:1,text:"mode=1 (half)"},{value:2,text:"mode=2 (child only)"},{value:3,text:"mode=3 (shallow)"}];var g=function(e){function a(e){var n;Object(d.a)(this,a),(n=Object(o.a)(this,Object(i.a)(a).call(this,e))).handleChange=function(e){n.setState({value:e})},n.handleModeChange=function(e){n.setState({mode:e,value:[]})},n.renderItem=function(e){return"node ".concat(e.id)};var t=[];return function e(n,t){var a=Object(c.a)(n,1)[0];a&&(t.push(a.id),a.children&&e(a.children,t))}(p.c,t),n.state={mode:1,value:t},n}return Object(l.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.state,n=e.mode,t=e.value;return s.a.createElement("div",null,s.a.createElement(u.a.Group,{keygen:"value",value:n,format:"value",onChange:this.handleModeChange,data:m,renderItem:"text"}),s.a.createElement("br",null),s.a.createElement(h.a,{data:p.c,defaultExpanded:["0","2"],keygen:"id",mode:n,onChange:this.handleChange,renderItem:this.renderItem,value:t}),s.a.createElement("div",{style:f},"Current select value:",s.a.createElement("pre",{style:{background:"#f2f2f2"}},JSON.stringify(t,null,2))))}}]),a}(a.Component)},1226:function(e,n){e.exports="/**\n * cn - 可选择\n *    -- 选中值取值提供了 4 种模式\n *    -- 0: 只返回完全选中的节点，包含父节点\n *    -- 1: 返回全部选中的节点和半选中的父节点\n *    -- 2: 只返回选中的子节点\n *    -- 3: 如果父节点选中，只返回父节点\n * en - onChange\n *    -- Selected values provide 4 modes\n *    -- 0: Return only the fully selected node, including the parent node.\n *    -- 1: Return the fully selected nodes and semi-selected parent nodes.\n *    -- 2: Return only the selected child node.\n *    -- 3: Return only the parent node, if the parent node is selected.\n */\nimport React, { Component } from 'react'\nimport { Tree, Radio } from 'shineout'\nimport data from 'doc/data/tree'\n\nconst resultStyle = {\n  position: 'absolute',\n  right: 30,\n  top: 100,\n  bottom: 40,\n  width: 240,\n  overflow: 'auto',\n  background: '#f2f2f2',\n  padding: 10,\n  zIndex: 100,\n}\n\nconst modeList = [\n  { value: 0, text: 'mode=0 (full)' },\n  { value: 1, text: 'mode=1 (half)' },\n  { value: 2, text: 'mode=2 (child only)' },\n  { value: 3, text: 'mode=3 (shallow)' },\n]\n\nfunction getValue(list, value) {\n  const [node] = list\n  if (!node) return\n  value.push(node.id)\n  if (node.children) getValue(node.children, value)\n}\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n\n    const value = []\n    getValue(data, value)\n\n    this.state = { mode: 1, value }\n  }\n\n  handleChange = value => {\n    this.setState({ value })\n  }\n\n  handleModeChange = mode => {\n    this.setState({ mode, value: [] })\n  }\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    const { mode, value } = this.state\n\n    return (\n      <div>\n        <Radio.Group\n          keygen=\"value\"\n          value={mode}\n          format=\"value\"\n          onChange={this.handleModeChange}\n          data={modeList}\n          renderItem=\"text\"\n        />\n\n        <br />\n\n        <Tree\n          data={data}\n          defaultExpanded={['0', '2']}\n          keygen=\"id\"\n          mode={mode}\n          onChange={this.handleChange}\n          renderItem={this.renderItem}\n          value={value}\n        />\n\n        <div style={resultStyle}>\n          Current select value:\n          <pre style={{ background: '#f2f2f2' }}>{JSON.stringify(value, null, 2)}</pre>\n        </div>\n      </div>\n    )\n  }\n}\n"},1227:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return h});var o=t(4),a=t(5),i=t(6),l=t(3),d=t(7),r=t(0),c=t.n(r),s=t(539),u=t(487),h=function(e){function r(){var e,n;Object(o.a)(this,r);for(var t=arguments.length,a=new Array(t),d=0;d<t;d++)a[d]=arguments[d];return(n=Object(i.a)(this,(e=Object(l.a)(r)).call.apply(e,[this].concat(a)))).handleChange=function(e){console.log(e)},n.isDisabled=function(e){return"1-0"===e.id},n.renderItem=function(e){return"node ".concat(e.id)},n}return Object(d.a)(r,e),Object(a.a)(r,[{key:"render",value:function(){return c.a.createElement(s.a,{data:u.c,defaultExpanded:["1","2"],disabled:this.isDisabled,keygen:"id",onChange:this.handleChange,renderItem:this.renderItem})}}]),r}(r.Component)},1228:function(e,n){e.exports="/**\n * cn - 禁用\n *    -- disabled 为函数时，根据返回结果禁用节点，同时禁用子节点\n *    -- disabled 为 true 时，禁用全部节点\n * en - disabled\n *    -- When the disabled property is a function, disable the node and its child nodes according to the returned result.\n *    -- When the disabled property is true, disable all nodes.\n */\nimport React, { Component } from 'react'\nimport { Tree } from 'shineout'\nimport data from 'doc/data/tree'\n\nexport default class extends Component {\n  handleChange = value => {\n    console.log(value)\n  }\n\n  isDisabled = node => node.id === '1-0'\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    return (\n      <Tree\n        data={data}\n        defaultExpanded={['1', '2']}\n        disabled={this.isDisabled}\n        keygen=\"id\"\n        onChange={this.handleChange}\n        renderItem={this.renderItem}\n      />\n    )\n  }\n}\n"},1229:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return h});var a=t(4),d=t(5),r=t(6),o=t(3),i=t(7),l=t(0),c=t.n(l),s=t(539),u=t(487),h=function(e){function n(e){var d;return Object(a.a)(this,n),(d=Object(r.a)(this,Object(o.a)(n).call(this,e))).handleDrop=function(e,n,t,a){console.log(e,n,t,a),d.setState({data:e})},d.renderItem=function(e){return c.a.createElement("div",null,c.a.createElement("span",null,"node "),c.a.createElement("span",{id:"node-id-".concat(e.id)},e.text))},d.state={data:u.c},d.defaultExpanded=["1"],d}return Object(i.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return c.a.createElement(s.a,{data:this.state.data,keygen:"id",defaultExpanded:this.defaultExpanded,onDrop:this.handleDrop,renderItem:this.renderItem})}}]),n}(l.Component)},1230:function(e,n){e.exports="/**\n * cn - 拖动\n *    -- 设置 onDrop 属性可以拖动节点\n * en - Drag\n *    -- Set the onDrop property to drag nodes.\n */\nimport React, { Component } from 'react'\nimport { Tree } from 'shineout'\nimport tree from 'doc/data/tree'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { data: tree }\n    this.defaultExpanded = ['1']\n  }\n\n  handleDrop = (data, key, targetKey, position) => {\n    console.log(data, key, targetKey, position)\n    this.setState({ data })\n  }\n\n  renderItem = node => (\n    <div>\n      <span>node </span>\n      <span id={`node-id-${node.id}`}>{node.text}</span>\n    </div>\n  )\n\n  render() {\n    return (\n      <Tree\n        data={this.state.data}\n        keygen=\"id\"\n        defaultExpanded={this.defaultExpanded}\n        onDrop={this.handleDrop}\n        renderItem={this.renderItem}\n      />\n    )\n  }\n}\n"},1231:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return h});var a=t(4),d=t(5),r=t(6),o=t(3),i=t(7),l=t(0),c=t.n(l),s=t(539),u=t(487),h=function(e){function n(e){var d;return Object(a.a)(this,n),(d=Object(r.a)(this,Object(o.a)(n).call(this,e))).handleDrop=function(e,n,t,a){console.log(e,n,t,a),d.setState({data:e})},d.renderItem=function(e){return c.a.createElement("div",null,c.a.createElement("span",null,"node "),c.a.createElement("span",{id:"node-id-".concat(e.id)},e.text))},d.state={data:u.c},d.defaultExpanded=["1"],d}return Object(i.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return c.a.createElement(s.a,{data:this.state.data,keygen:"id",defaultExpanded:this.defaultExpanded,onDrop:this.handleDrop,dragImageSelector:function(e){return"#node-id-".concat(e.id)},dragImageStyle:{color:"red"},renderItem:this.renderItem,dragHoverExpand:!0})}}]),n}(l.Component)},1232:function(e,n){e.exports="/**\n * cn - 设置拖动样式\n *    -- 可以通过 dragImageSelector, dragImageStyle, dragHoverExpand定义一些拖动的设置\n * en - Set the drag style\n *    -- Some drag settings can be defined by dragImageSelector, dragImageStyle, dragHoverExpand\n */\nimport React, { Component } from 'react'\nimport { Tree } from 'shineout'\nimport tree from 'doc/data/tree'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { data: tree }\n    this.defaultExpanded = ['1']\n  }\n\n  handleDrop = (data, key, targetKey, position) => {\n    console.log(data, key, targetKey, position)\n    this.setState({ data })\n  }\n\n  renderItem = node => (\n    <div>\n      <span>node </span>\n      <span id={`node-id-${node.id}`}>{node.text}</span>\n    </div>\n  )\n\n  render() {\n    return (\n      <Tree\n        data={this.state.data}\n        keygen=\"id\"\n        defaultExpanded={this.defaultExpanded}\n        onDrop={this.handleDrop}\n        dragImageSelector={d => `#node-id-${d.id}`}\n        dragImageStyle={{ color: 'red' }}\n        renderItem={this.renderItem}\n        dragHoverExpand\n      />\n    )\n  }\n}\n"},1233:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var d=t(26),a=t(4),r=t(5),o=t(6),i=t(3),l=t(7),c=t(0),s=t.n(c),u=t(42),h=t(539),p=["0","1","2","3","4"].map(function(e){return{id:e}}),f=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).loader=function(e){var a=e.split(",");setTimeout(function(){n.setState(Object(u.a)(function(e){var t=e.data;a.forEach(function(n,e){t=t.find(function(e){return e.id===n}),e<a.length-1&&(t=t.children)}),t.children=Object(d.a)(Array.from({length:Math.round(4*Math.random())},function(e,n){return n}).map(function(e){return{id:"".concat(t.id,"-").concat(e)}}))}))},500)},n.keyGenerator=function(e,n){return"".concat(n,",").concat(e.id).replace(/^,/,"")},n.handleChange=function(e){return n.setState({value:e})},n.renderItem=function(e){return"node ".concat(e.id)},n.state={data:p,value:[]},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(h.a,{data:this.state.data,keygen:this.keyGenerator,loader:this.loader,renderItem:this.renderItem,onChange:this.handleChange,value:this.state.value})}}]),t}(c.Component)},1234:function(e,n){e.exports="/**\n * cn - 动态加载\n *    -- 数据过大，需要动态加载时，可以设置 loader 函数，当展开未定义 children（undefined）的节点时，触发此函数\n * en - Lazy load\n *    -- Set the loader function to dynamic fetch data. This function is triggered when the undefined child node is expanded.\n */\nimport React, { Component } from 'react'\nimport immer from 'immer'\nimport { Tree } from 'shineout'\n\nconst initData = ['0', '1', '2', '3', '4'].map(i => ({ id: i }))\nconst createRange = () => Array.from({ length: Math.round(Math.random() * 4) }, (_, i) => i)\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { data: initData, value: [] }\n  }\n\n  loader = key => {\n    const path = key.split(',')\n\n    setTimeout(() => {\n      this.setState(\n        immer(draft => {\n          let { data } = draft\n          path.forEach((pid, i) => {\n            data = data.find(d => d.id === pid)\n            if (i < path.length - 1) data = data.children\n          })\n          data.children = [...createRange().map(i => ({ id: `${data.id}-${i}` }))]\n        })\n      )\n    }, 500)\n  }\n\n  keyGenerator = (node, parentKey) => `${parentKey},${node.id}`.replace(/^,/, '')\n\n  handleChange = value => this.setState({ value })\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    return (\n      <Tree\n        data={this.state.data}\n        keygen={this.keyGenerator}\n        loader={this.loader}\n        renderItem={this.renderItem}\n        onChange={this.handleChange}\n        value={this.state.value}\n      />\n    )\n  }\n}\n"},1235:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var a=t(4),d=t(5),r=t(6),o=t(3),i=t(7),l=t(0),c=t.n(l),s=t(487),u=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).toggle=function(){n.setState({expand:!n.state.expand})},n.state={expand:!1},n}return Object(i.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.expand;return c.a.createElement("div",null,"Current node count: ",s.a.length,"."," ",c.a.createElement("a",{onClick:this.toggle},e?"Collapse":"Expand"," Code"),c.a.createElement("pre",{style:{display:e?"block":"none"}},JSON.stringify(s.c,null,2)))}}]),t}(l.Component)},1236:function(e,n){e.exports="import React, { Component } from 'react'\nimport data, { allIds } from 'doc/data/tree'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { expand: false }\n  }\n\n  toggle = () => {\n    this.setState({ expand: !this.state.expand })\n  }\n\n  render() {\n    const { expand } = this.state\n    return (\n      <div>\n        Current node count: {allIds.length}.{' '}\n        <a onClick={this.toggle}>\n          {expand ? 'Collapse' : 'Expand'} Code\n        </a>\n        <pre style={{ display: expand ? 'block' : 'none' }}>{JSON.stringify(data, null, 2)}</pre>\n      </div>\n    )\n  }\n}\n"},480:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return l});var a=t(0),d=t.n(a),r=t(32),o=t.n(r)()(),i=o.Provider,l=function(t){return function(n){return d.a.createElement(o.Consumer,null,function(e){return d.a.createElement(t,Object.assign({},n,e))})}}},486:function(e,n,t){"use strict";var a=t(484);n.a=Object(a.a)("radio")},518:function(e,n,t){"use strict";var a=t(19),d=t(62),r=t(78),s=t(480),o=t(4),i=t(5),l=t(6),c=t(3),u=t(25),h=t(7),p=t(1),f=t(0),m=t.n(f),g=t(15),x=t.n(g),b=t(20),y=t(30),v=t(8),k=t(2),E=t(486),C=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(p.a)(Object(p.a)(n))),n.handleUpdate=n.forceUpdate.bind(Object(p.a)(Object(p.a)(n))),n.handleRawChange=n.handleRawChange.bind(Object(p.a)(Object(p.a)(n))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){Object(u.a)(Object(c.a)(t.prototype),"componentDidMount",this).call(this),this.props.datum.subscribe(v.a,this.handleUpdate)}},{key:"componentWillUnmount",value:function(){Object(u.a)(Object(c.a)(t.prototype),"componentWillUnmount",this).call(this),this.props.datum.unsubscribe(v.a,this.handleUpdate)}},{key:"getContent",value:function(e){var n=this.props.renderItem;return"string"==typeof n?e[n]:"function"==typeof n?n(e):""}},{key:"handleClick",value:function(e,n,t){var a=this.props,d=a.data;a.datum.set(d[t])}},{key:"handleRawChange",value:function(e){this.props.datum.set(e)}},{key:"render",value:function(){var t=this,e=this.props,n=e.block,a=e.data,d=e.datum,r=e.keygen,o=e.children,i=e.button,l=e.size,c=x()(Object(k.h)("group",n&&"block",i&&"button","outline"===i&&"outline",i&&l),this.props.className);return void 0===a?m.a.createElement("div",{className:c},m.a.createElement(s.a,{value:{onRawChange:this.handleRawChange,checked:d.check.bind(d)}},o)):m.a.createElement("div",{className:c},a.map(function(e,n){return m.a.createElement(E.a,{checked:d.check(e),disabled:d.disabled(e),key:Object(y.a)(e,r,n),htmlValue:n,index:n,onChange:t.handleClick},t.getContent(e))}),o)}}]),t}(b.b);C.defaultProps={renderItem:function(e){return e}};var I=C,j=Object(s.b)(E.a);j.Group=Object(a.a)(d.a,r.a.hoc({limit:1,bindProps:["disabled","format","prediction"]}))(I),j.displayName="ShineoutRadio",j.Group.displayName="ShineoutRadioGroup";n.a=j}}]);