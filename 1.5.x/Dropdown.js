(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[20],{480:function(n,e,t){"use strict";t.d(e,"a",function(){return l}),t.d(e,"b",function(){return c});var o=t(0),a=t.n(o),i=t(32),r=t.n(i)()(),l=r.Provider,c=function(t){return function(e){return a.a.createElement(r.Consumer,null,function(n){return a.a.createElement(t,Object.assign({},e,n))})}}},494:function(n,e,t){"use strict";var o=t(62),a=t(19),c=t(483),i=t(78),r=t(4),l=t(5),s=t(6),d=t(3),u=t(25),p=t(7),m=t(1),h=t(0),g=t.n(h),f=t(15),b=t.n(f),y=t(20),w=t(30),k=t(8),v=t(480),D=t(2),C=function(n){function t(n){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this,n))).handleClick=e.handleClick.bind(Object(m.a)(Object(m.a)(e))),e.handleUpdate=e.handleUpdate.bind(Object(m.a)(Object(m.a)(e))),e.handleRawChange=e.handleRawChange.bind(Object(m.a)(Object(m.a)(e))),e}return Object(p.a)(t,n),Object(l.a)(t,[{key:"componentDidMount",value:function(){Object(u.a)(Object(d.a)(t.prototype),"componentDidMount",this).call(this),this.props.datum.subscribe(k.a,this.handleUpdate)}},{key:"componentWillUnmount",value:function(){Object(u.a)(Object(d.a)(t.prototype),"componentWillUnmount",this).call(this),this.props.datum.unsubscribe(k.a,this.handleUpdate)}},{key:"getContent",value:function(n){var e=this.props.renderItem;return"string"==typeof e?n[e]:"function"==typeof e?e(n):""}},{key:"handleUpdate",value:function(){this.forceUpdate()}},{key:"handleClick",value:function(n,e,t){var o=this.props,a=o.data,i=o.datum;e?i.add(a[t]):i.remove(a[t])}},{key:"handleRawChange",value:function(n,e){var t=this.props.datum;e?t.add(n):t.remove(n)}},{key:"render",value:function(){var t=this,n=this.props,e=n.block,o=n.data,a=n.datum,i=n.keygen,r=n.children,l=b()(Object(D.h)("group",e&&"block"),this.props.className);return void 0===o?g.a.createElement("div",{className:l},g.a.createElement(v.a,{value:{onRawChange:this.handleRawChange,checked:a.check.bind(a)}},r)):g.a.createElement("div",{className:l},o.map(function(n,e){return g.a.createElement(c.a,{checked:a.check(n),disabled:a.disabled(n),key:Object(w.a)(n,i,e),htmlValue:e,index:e,onChange:t.handleClick},t.getContent(n))}),r)}}]),t}(y.b);C.defaultProps={renderItem:function(n){return n}};var j=C,E=Object(a.a)(o.a,v.b)(c.a);E.Group=Object(a.a)(o.a,i.a.hoc({bindProps:["disabled","format","prediction","separator"]}))(j),E.Checkbox=c.a,E.displayName="ShineoutCheckbox",E.Group.displayName="ShineoutCheckboxGroup";e.a=E},503:function(n,e,t){"use strict";var o=t(0),s=t.n(o),a=t(37),i=t.n(a),d=t(2),r=t(4),l=t(5),c=t(6),u=t(3),p=t(7),m=t(42),h=t(20),g=t(138),f=t(30),b=function(n){function t(n){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this,n))).state={messages:[]},e}return Object(p.a)(t,n),Object(l.a)(t,[{key:"addMessage",value:function(e){var n=this,t=Object(f.b)();this.setState(Object(m.a)(function(n){n.messages.push(Object.assign({id:t},e))})),0<e.duration&&setTimeout(function(){n.setState(Object(m.a)(function(n){n.messages.forEach(function(n){n.id===t&&(n.dismiss=!0)})}))},1e3*e.duration)}},{key:"removeMessage",value:function(e){var t,n=this.state.messages.filter(function(n){return n.id!==e||(n.onClose&&(t=n.onClose),!1)});0===n.length?this.props.onDestory():this.setState({messages:n}),t&&t()}},{key:"closeEvent",value:function(n,e){if(0===e)return this.removeMessage.bind(this,n)}},{key:"render",value:function(){var c=this;return[this.state.messages.map(function(n){var e=n.id,t=n.type,o=n.content,a=n.dismiss,i=n.title,r=n.top,l=n.className;return s.a.createElement("div",{key:e,className:"".concat(Object(d.s)("item")," ").concat(l)},s.a.createElement(g.a,{className:Object(d.s)("msg"),dismiss:a,onClose:c.removeMessage.bind(c,e),icon:!0,iconSize:i?20:14,style:{top:r},type:t},i&&s.a.createElement("h3",null,i),o))})]}}]),t}(h.b);b.displayName="ShineoutMessage";var y=b,w={},k={};function v(n){w[n]&&(i.a.unmountComponentAtNode(w[n]),document.body.removeChild(w[n]),delete w[n]),k[n]&&delete k[n]}function D(a){return new Promise(function(e){var n,t,o=k[a];o?e(o):i.a.render(s.a.createElement(y,{ref:function(n){k[a]=n,e(n)},onDestory:v.bind(null,a)}),(n=a,(t=document.createElement("div")).className=Object(d.s)("_",n),document.body.appendChild(t),w[n]=t))})}var C=function(u){return function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:3,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},o=n.onClose,a=n.position,i=void 0===a?"top":a,r=n.title,l=n.className,c=void 0===l?"":l,s=n.top,d=void 0===s?"auto":s;D(i).then(function(n){n.addMessage({content:e,duration:t,type:u,onClose:o,title:r,className:c,top:d})})}};e.a={show:C("default"),success:C("success"),info:C("info"),warn:C("warning"),warning:C("warning"),danger:C("danger"),error:C("danger"),close:function(n){n?v(n):["top","middle","top-left","top-right","bottom-left","bottom-right"].forEach(function(n){v(n)})}}},680:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(478),r=t(479),l=t(34),c=t(681),s=t.n(c),d=t(682),u=t.n(d),p=Object(l.b)(s.a,u.a),m=[{name:"1-base",title:Object(l.b)("基本用法 \n Dropdown 通过数据来渲染，支持 json 格式数据、React 组件","Base \n Dropdown is rendered through data and supports json formatted data and React components."),component:t(683).default,rawText:t(684)},{name:"2-hover",title:Object(l.b)('触发 \n Dropdown 默认通过点击触发下拉行为，设置 trigger="hover" 属性可以改为移入触发','Trigger \n By default, Dropdown toggled clicking, setting trigger="hover" can toggled by mouse move in.'),component:t(685).default,rawText:t(686)},{name:"3-position",title:Object(l.b)("弹出位置 \n 设置 position 属性可以控制下拉菜单弹出的方向和位置","Position \n Set position property can control the direction and position of the drop-down menu."),component:t(687).default,rawText:t(688)},{name:"4-items",title:Object(l.b)("多列平铺 \n 设置 columns 属性可以让选项多列平铺","Multiple columns \n Set columns property can make the option multi-column tiled."),component:t(689).default,rawText:t(690)},{name:"5-split",title:Object(l.b)("组合 \n 在 Button.Group 中组合使用，通常用于隐藏一组按钮中不太常用的选项","Group \n Dropdown can be combined with Button used in Button.Group."),component:t(691).default,rawText:t(692)},{name:"6-type",title:Object(l.b)("样式 \n 使用了和Button相同的 type 和 size 设置样式","type \n Style is set using the same type and size as Button."),component:t(693).default,rawText:t(694)},{name:"7-base",title:Object(l.b)("绝对定位 \n 如果选项弹出层的父容器被遮挡，可以设置 absolute 属性使弹出选项在单独层中渲染。","Absolute \n If the parent container of the pop-up layer is occluded, you can set the absolute property to make the pop-up options rendered in a separate layer."),component:t(695).default,rawText:t(696)}];e.default=Object(i.a)(function(n){return a.a.createElement(r.b,Object.assign({},n,{codes:void 0,source:p,examples:m}))})},681:function(n,e){n.exports="# Dropdown *下拉菜单*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| columns | number | 无 | 页面多元素展示,此属性需要依赖width属性,请合理的设置列数和宽度 |\n| data | \\[] | 必填 | 下拉数据，详见data |\n| disabled | bool | false | 禁用 |\n| onClick | func | 无 | 点击事件。参数为渲染的数据, <br /> 注: 如果数据内设置了onClick，会忽略此方法，调用data.onClick |\n| outline | boolean | false | 同 [Button](/components/Button) |\n| placeholder | string \\| ReactElement | 必填 | 按钮显示内容 |\n| renderItem | func \\| string | 'content' | 设置显示的内容,如果是字符串,则为对应的值<br />如果是函数,则返回值为显示的内容,参数为当条数据 |\n| size | string | 'default' | 同 [Button](/components/Button) |\n| trigger | string | 'click' | 触发方式，可选值为 \\['click', 'hover'] |\n| type | string | 'default' | 可选值 \\['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link'] |\n| width | number | 无 | 弹出选项层的宽度 |\n\n### data\n\ndata 选项有三种情况：\n\n- 为 ReactElement 时，直接显示此元素。\n\n- 为 object 且设置了 renderItem，显示 renderItem 返回的内容。\n\n- 为 object 且未设置 renderItem，按以下数据结构处理。\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| content | string \\| element | | 默认从content获取内容 |\n| url | string | 无 | url属性不为空时，render为一个链接 |\n| target | string | 无 | url 不为空时有效 |\n| onClick | function | 无 | 点击事件 |"},682:function(n,e){n.exports="# Dropdown\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | none | Extend className |\n| columns | number | none | Display multiple elements on the page. This property depends on the width attribute. Please set the number of columns and width appropriately. |\n| data | \\[] | required | See the detail in the data of the drop down box. |\n| disabled | bool | false | disabled |\n| onClick | func | none | The click event. The parameter is the rendered data. <br /> Note: if the onClick is set in the data, this method will be ignored and data.onclick will be called. |\n| outline | boolean | false | The same as [Button](/components/Button) |\n| placeholder | string \\| ReactElement | required | Displayed content of the button |\n| renderItem | func \\| string | 'content' | Set the displayed content. If it is a string,  the corresponding value will be displayed. <br />If it is a function, the return value will be displayed and its parameter is the current data. |\n| size | string | 'default' | The same as [Button](/components/Button) |\n| trigger | string | 'click' | Toggle mode, options: \\['click', 'hover'] |\n| type | string | 'default' | options: \\['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link'] |\n| width | number | none | The width of the pop-up option layer |\n\n### data\n\n- If data item is a ReactElement, render the item;\n- If data item is an object and renderItem is set, render the renderItem's result;\n- if data item is an object and renderItem is not set, handle the parameters as follows;\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| content | string \\| element | |  |\n| url | string | none | When the url is not empty, a url will be rendered. |\n| target | string | none | It is valid when the url is not empty. |\n| onClick | function | none | The click event |"},683:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(503),r=t(477),l=[{content:"Submenu",children:[{content:"Link to Google",target:"_blank",url:"https://google.com"},{content:"Disabled",disabled:!0}]},a.a.createElement("a",{href:"/"},"Home"),{content:"Message",onClick:function(){i.a.info("Some message.")}}];e.default=function(){return a.a.createElement(r.a,{placeholder:"Dropdown",data:l})}},684:function(n,e){n.exports="/**\n * cn - 基本用法\n *    -- Dropdown 通过数据来渲染，支持 json 格式数据、React 组件\n * en - Base\n *    -- Dropdown is rendered through data and supports json formatted data and React components.\n */\nimport React from 'react'\nimport { Dropdown, Message } from 'shineout'\n\nconst data = [\n  {\n    content: 'Submenu',\n    children: [\n      {\n        content: 'Link to Google',\n        target: '_blank',\n        url: 'https://google.com',\n      },\n      {\n        content: 'Disabled',\n        disabled: true,\n      },\n    ],\n  },\n  <a href=\"/\">Home</a>,\n  {\n    content: 'Message',\n    onClick: () => {\n      Message.info('Some message.')\n    },\n  },\n]\n\nexport default function() {\n  return <Dropdown placeholder=\"Dropdown\" data={data} />\n}\n"},685:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(477);e.default=function(){return a.a.createElement(i.a,{trigger:"hover",placeholder:"Hover",data:[{content:"First",id:"1",children:[{id:"3",content:"optic 1"}]},{content:"Second",url:"http://www.google.com",id:"2",children:[{content:"topic 2",id:4,children:[{id:"6",content:"topic 3"}]}]}]})}},686:function(n,e){n.exports="/**\n * cn - 触发\n *    -- Dropdown 默认通过点击触发下拉行为，设置 trigger=\"hover\" 属性可以改为移入触发\n * en - Trigger\n *    -- By default, Dropdown toggled clicking, setting trigger=\"hover\" can toggled by mouse move in.\n */\nimport React from 'react'\nimport { Dropdown } from 'shineout'\n\nexport default function() {\n  const menu = [\n    {\n      content: 'First',\n      id: '1',\n      children: [\n        {\n          id: '3',\n          content: 'optic 1',\n        },\n      ],\n    },\n    {\n      content: 'Second',\n      url: 'http://www.google.com',\n      id: '2',\n      children: [\n        {\n          content: 'topic 2',\n          id: 4,\n          children: [\n            {\n              id: '6',\n              content: 'topic 3',\n            },\n          ],\n        },\n      ],\n    },\n  ]\n\n  return <Dropdown trigger=\"hover\" placeholder=\"Hover\" data={menu} />\n}\n"},687:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(477),r={marginRight:12,marginBottom:12};e.default=function(){var n=[{content:"First",id:"1",children:[{content:"link1",id:"4"},{content:"link2",id:"5"}]},{content:"Second",url:"http://www.google.com",id:"2",children:[{content:"link3",id:6,onClick:function(){console.log("this is special")}},{content:"link4",id:7,children:[{id:"8",content:"link5"},{id:"9",content:"link6"}]}]}];return a.a.createElement("div",null,a.a.createElement(i.a,{placeholder:"Right Top",style:r,position:"right-top",data:n}),a.a.createElement(i.a,{placeholder:"Bottom Left",style:r,position:"bottom-left",data:n}),a.a.createElement(i.a,{placeholder:"Bottom Right",style:r,position:"bottom-right",data:n}),a.a.createElement(i.a,{placeholder:"Left Top",style:r,position:"left-top",data:n}),a.a.createElement("br",null),a.a.createElement(i.a,{placeholder:"Right Bottom",style:r,position:"right-bottom",data:n}),a.a.createElement(i.a,{placeholder:"Top Left",style:r,position:"top-left",data:n}),a.a.createElement(i.a,{placeholder:"Top Right",style:r,position:"top-right",data:n}),a.a.createElement(i.a,{placeholder:"Left Bottom",style:r,position:"left-bottom",data:n}),a.a.createElement("br",null),a.a.createElement(i.a,{placeholder:"Auto Position",style:r,position:"auto",data:n}))}},688:function(n,e){n.exports="/**\n * cn - 弹出位置\n *    -- 设置 position 属性可以控制下拉菜单弹出的方向和位置\n * en - Position\n *    -- Set position property can control the direction and position of the drop-down menu.\n */\nimport React from 'react'\nimport { Dropdown } from 'shineout'\n\nconst style = { marginRight: 12, marginBottom: 12 }\n\nexport default function() {\n  const menu = [\n    {\n      content: 'First',\n      id: '1',\n      children: [\n        {\n          content: 'link1',\n          id: '4',\n        },\n        {\n          content: 'link2',\n          id: '5',\n        },\n      ],\n    },\n    {\n      content: 'Second',\n      url: 'http://www.google.com',\n      id: '2',\n      children: [\n        {\n          content: 'link3',\n          id: 6,\n          onClick: () => {\n            console.log('this is special')\n          },\n        },\n        {\n          content: 'link4',\n          id: 7,\n          children: [\n            {\n              id: '8',\n              content: 'link5',\n            },\n            {\n              id: '9',\n              content: 'link6',\n            },\n          ],\n        },\n      ],\n    },\n  ]\n\n  return (\n    <div>\n      <Dropdown placeholder=\"Right Top\" style={style} position=\"right-top\" data={menu} />\n\n      <Dropdown placeholder=\"Bottom Left\" style={style} position=\"bottom-left\" data={menu} />\n\n      <Dropdown placeholder=\"Bottom Right\" style={style} position=\"bottom-right\" data={menu} />\n\n      <Dropdown placeholder=\"Left Top\" style={style} position=\"left-top\" data={menu} />\n\n      <br />\n\n      <Dropdown placeholder=\"Right Bottom\" style={style} position=\"right-bottom\" data={menu} />\n\n      <Dropdown placeholder=\"Top Left\" style={style} position=\"top-left\" data={menu} />\n\n      <Dropdown placeholder=\"Top Right\" style={style} position=\"top-right\" data={menu} />\n\n      <Dropdown placeholder=\"Left Bottom\" style={style} position=\"left-bottom\" data={menu} />\n\n      <br />\n      <Dropdown placeholder=\"Auto Position\" style={style} position=\"auto\" data={menu} />\n    </div>\n  )\n}\n"},689:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(477);e.default=function(){for(var n=[],e=1;e<=30;e++)n.push({id:"".concat(e),content:"item".concat(e)});return a.a.createElement(i.a,{placeholder:"Dropdown",width:500,columns:5,data:n})}},690:function(n,e){n.exports="/**\n * cn - 多列平铺\n *    -- 设置 columns 属性可以让选项多列平铺\n * en - Multiple columns\n *    -- Set columns property can make the option multi-column tiled.\n */\nimport React from 'react'\nimport { Dropdown } from 'shineout'\n\nexport default function() {\n  const menu = []\n  for (let i = 1; i <= 30; i++) {\n    menu.push({\n      id: `${i}`,\n      content: `item${i}`,\n    })\n  }\n\n  return <Dropdown placeholder=\"Dropdown\" width={500} columns={5} data={menu} />\n}\n"},691:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(44),r=t(503),l=t(477),c=[{content:"First"},{content:"Second",target:"_blank",url:"http://www.google.com"}];e.default=function(){return a.a.createElement(i.a.Group,null,a.a.createElement(i.a,{onClick:function(){return r.a.info("The left button clicked.")}},"Left"),a.a.createElement(i.a,null,"Center"),a.a.createElement(l.a,{onClick:function(n){return r.a.info("The Dropdown clicked ".concat(n.content,"."))},position:"bottom-right",data:c}))}},692:function(n,e){n.exports="/**\n * cn - 组合\n *    -- 在 Button.Group 中组合使用，通常用于隐藏一组按钮中不太常用的选项\n * en - Group\n *    -- Dropdown can be combined with Button used in Button.Group.\n */\nimport React from 'react'\nimport { Dropdown, Message, Button } from 'shineout'\n\nconst menu = [\n  {\n    content: 'First',\n  },\n  {\n    content: 'Second',\n    target: '_blank',\n    url: 'http://www.google.com',\n  },\n]\n\nexport default function() {\n  return (\n    <Button.Group>\n      <Button onClick={() => Message.info('The left button clicked.')}>Left</Button>\n      <Button>Center</Button>\n      <Dropdown\n        onClick={data => Message.info(`The Dropdown clicked ${data.content}.`)}\n        position=\"bottom-right\"\n        data={menu}\n      />\n    </Button.Group>\n  )\n}\n"},693:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return f});var o=t(47),a=t(4),i=t(5),r=t(6),l=t(3),c=t(7),s=t(0),d=t.n(s),u=t(503),p=t(538),m=t(494),h=t(477),g=[{content:"Submenu",children:[{content:"Link",target:"_blank",url:"https://google.com"},{content:"Disabled",disabled:!0}]},{content:"Message",onClick:function(){u.a.info("Some message.")}}],f=function(n){function t(n){var e;return Object(a.a)(this,t),(e=Object(r.a)(this,Object(l.a)(t).call(this,n))).state={type:"primary",size:"default",disabled:!1,outline:!1},e}return Object(c.a)(t,n),Object(i.a)(t,[{key:"changeSetting",value:function(n,e){this.setState(Object(o.a)({},n,e))}},{key:"render",value:function(){var n=this.state,e=n.type,t=n.outline,o=n.size,a=n.disabled;return d.a.createElement("div",null,d.a.createElement("div",{style:{marginBottom:20}},d.a.createElement("span",null,"type: "),d.a.createElement(p.a,{width:140,keygen:function(n){return n},data:["primary","success","warning","danger"],value:e,onChange:this.changeSetting.bind(this,"type"),style:{marginRight:20}}),d.a.createElement("span",null,"size: "),d.a.createElement(p.a,{width:100,keygen:function(n){return n},data:["small","default","large"],value:o,onChange:this.changeSetting.bind(this,"size"),style:{marginRight:20}}),d.a.createElement(m.a,{value:t,onChange:this.changeSetting.bind(this,"outline")},"outline"),d.a.createElement(m.a,{value:a,onChange:this.changeSetting.bind(this,"disabled")},"disabled")),d.a.createElement(h.a,{placeholder:"Dropdown",data:g,disabled:a,outline:t,size:o,type:e}))}}]),t}(s.Component)},694:function(n,e){n.exports="/**\n * cn - 样式\n *    -- 使用了和Button相同的 type 和 size 设置样式\n * en - type\n *    -- Style is set using the same type and size as Button.\n */\nimport React, { Component } from 'react'\nimport { Dropdown, Message, Select, Checkbox } from 'shineout'\n\nconst menu = [\n  {\n    content: 'Submenu',\n    children: [\n      {\n        content: 'Link',\n        target: '_blank',\n        url: 'https://google.com',\n      },\n      {\n        content: 'Disabled',\n        disabled: true,\n      },\n    ],\n  },\n  {\n    content: 'Message',\n    onClick: () => {\n      Message.info('Some message.')\n    },\n  },\n]\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      type: 'primary',\n      size: 'default',\n      disabled: false,\n      outline: false,\n    }\n  }\n\n  changeSetting(name, value) {\n    this.setState({ [name]: value })\n  }\n\n  render() {\n    const { type, outline, size, disabled } = this.state\n    return (\n      <div>\n        <div style={{ marginBottom: 20 }}>\n          <span>type: </span>\n          <Select\n            width={140}\n            keygen={d => d}\n            data={['primary', 'success', 'warning', 'danger']}\n            value={type}\n            onChange={this.changeSetting.bind(this, 'type')}\n            style={{ marginRight: 20 }}\n          />\n\n          <span>size: </span>\n          <Select\n            width={100}\n            keygen={d => d}\n            data={['small', 'default', 'large']}\n            value={size}\n            onChange={this.changeSetting.bind(this, 'size')}\n            style={{ marginRight: 20 }}\n          />\n\n          <Checkbox value={outline} onChange={this.changeSetting.bind(this, 'outline')}>\n            outline\n          </Checkbox>\n\n          <Checkbox value={disabled} onChange={this.changeSetting.bind(this, 'disabled')}>\n            disabled\n          </Checkbox>\n        </div>\n\n        <Dropdown placeholder=\"Dropdown\" data={menu} disabled={disabled} outline={outline} size={size} type={type} />\n      </div>\n    )\n  }\n}\n"},695:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(503),r=t(477),l=[{content:"Submenu",children:[{content:"Link to Google",target:"_blank",url:"https://google.com"},{content:"Disabled",disabled:!0}]},a.a.createElement("a",{href:"/"},"Home"),{content:"Message",onClick:function(){i.a.info("Some message.")}}];e.default=function(){return a.a.createElement("div",{style:{background:"#eee",padding:20,borderRadius:10,overflow:"hidden"}},a.a.createElement(r.a,{absolute:!0,placeholder:"Absolute",data:l}),a.a.createElement(r.a,{placeholder:"Default",data:l,style:{marginLeft:40}}))}},696:function(n,e){n.exports="/**\n * cn - 绝对定位\n *    -- 如果选项弹出层的父容器被遮挡，可以设置 absolute 属性使弹出选项在单独层中渲染。\n * en - Absolute\n *    -- If the parent container of the pop-up layer is occluded, you can set the absolute property to make the pop-up options rendered in a separate layer.\n */\nimport React from 'react'\nimport { Dropdown, Message } from 'shineout'\n\nconst data = [\n  {\n    content: 'Submenu',\n    children: [\n      {\n        content: 'Link to Google',\n        target: '_blank',\n        url: 'https://google.com',\n      },\n      {\n        content: 'Disabled',\n        disabled: true,\n      },\n    ],\n  },\n  <a href=\"/\">Home</a>,\n  {\n    content: 'Message',\n    onClick: () => {\n      Message.info('Some message.')\n    },\n  },\n]\n\nexport default function() {\n  return (\n    <div style={{ background: '#eee', padding: 20, borderRadius: 10, overflow: 'hidden' }}>\n      <Dropdown absolute placeholder=\"Absolute\" data={data} />\n      <Dropdown placeholder=\"Default\" data={data} style={{ marginLeft: 40 }} />\n    </div>\n  )\n}\n"}}]);