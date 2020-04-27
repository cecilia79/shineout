(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[27],{863:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(493),r=t(494),i=t(39),s=t(864),p=t.n(s),u=t(865),c=t.n(u),m=Object(i.b)(p.a,c.a),d=[{name:"1-base",title:Object(i.b)("基本用法 \n Input 通常需要和其他的组件配合使用，所以默认的宽度是 100%，默认 display 为 block \n 如果设置了 style.width，默认 display 为 inline-flex","Base \n Input usually needs to be used with other components, so the default width is 100% and the default display is block. \n If the style.width is set, the default display is inline-flex."),component:t(866).default,rawText:t(867)},{name:"1-clearable",title:Object(i.b)("允许删除 \n Input 允许删除","allow clear \n Input allow clear"),component:t(868).default,rawText:t(869)},{name:"2-size",title:Object(i.b)("大小 \n 提供了三种尺寸的输入框，small、default、large","Size \n There are three size of input, small, default, large."),component:t(870).default,rawText:t(871)},{name:"3-number",title:Object(i.b)("数字 \n type 为 number 时，输入时会做一次校验，禁止输入非数字类型字符，并且根据 digits 属性限制小数位数","Number \n When type is number, it is forbidden to input non-numeric characters, and the number of decimal places is limited according to the digits property"),component:t(872).default,rawText:t(873)},{name:"4-number",title:Object(i.b)(" \n Input.Number 组件，可以通过鼠标和上下键辅助输入"," \n Input.Number component can be assisted by mouse and up and down keyboard."),component:t(874).default,rawText:t(875)},{name:"5-group",title:Object(i.b)("组合 \n Icon, span, string, Button 类型可以直接放入 Input.Group 中。需要背景色可以放在 b 标签中。","Group \n The Icon, span, string and Button types can be placed directly into the Input.Group. Use b tag can change the background color."),component:t(876).default,rawText:t(877)},{name:"6-tip",title:Object(i.b)("提示文字 \n 在 input 上设置的 tip 在 focus 时弹出","Tip \n The tip set on input pops up when it is focused."),component:t(878).default,rawText:t(879)},{name:"7-validate",title:Object(i.b)("校验 \n 设置了 rules，会自动校验输入数据，设置了 popover 会在指定位置弹出 \n 如果没有设置 popover，不会弹出错误提示。 \n 有错误时，提示框不会隐藏。","Validate \n When the rules property is set, it will automatically verify the input data. When the popover property is set, it will pop up at the specified location. \n If the popover property is not set, no error message will pop up. \n If input is invalid, the message will not be hidden."),component:t(880).default,rawText:t(881)},{name:"8-disabled",title:Object(i.b)("禁用 \n 设置 disabled 属性禁用组件","Disabled \n Set the disabled property to disable the component."),component:t(882).default,rawText:t(883)},{name:"9-password",title:Object(i.b)("密码 \n Input.Password 模拟密码输入框，用来阻止 Chrome 提示记住密码。","Password \n Input.Password is a mock input of type 'password', used for disable Chrome autofill."),component:t(884).default,rawText:t(885)}];n.default=Object(l.a)(function(e){return o.a.createElement(r.b,Object.assign({},e,{codes:void 0,source:m,examples:d}))})},864:function(e,n){e.exports="# Input *输入框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | string \\| number | 无 | 默认值 |\n| delay | number | 400 | 用户输入触发 onChange 和校验间隔时间，单位 毫秒。|\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | (value: string) => void | 无 | 值改变回调函数 |\n| onEnterPress | (value: string) => void | 无| 回车键回调函数 |\n| placeholder | string | 无 | 同原生 input 标签的 placeholder |\n| popover | 'top-left' \\| 'top' \\| 'top-right' \\| 'bottom-left' \\| 'bottom' \\| 'bottom-right' | 无| 信息弹出位置 |\n| size | 'large' \\| 'default' \\| 'small' | 'default' | 尺寸 |\n| style | object | 无 | 最外层扩展样式 |\n| tip | ReactNode | 无 | 提示信息 |\n| trim | boolean | false | trim 为 true 时，失去焦点时会自动删除空白字符。 |\n| type | string | 'text' | 同原生 input 标签的 type |\n| value | string \\| number | 无 | defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖<br />在Form中，value会被表单接管，value无效 |\n| clearable | () => void \\| boolean | 可点击清空图标删除输入框内容，为函数式表示清空回调 |\n| coin | boolean | false | 以千位分隔符展示,仅当type为number时有效 |\n| info | (value: string) => string \\| number | 无 | 提示信息 |\n| popoverProps | object | 无 | 校验弹框接受的属性，具体属性参考Popover组件说明\n\n### Input.Number\n\n基本 API 和上表相同，特定的 API 如下：\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| max | number | 无 | 最大值 |\n| min | number | 无 | 最小值 |\n| step | number | 1 | 改变数字跨度，可为小数 |\n| digits | number | 无 | 数值的精度 |\n| allowNull | boolean | false | 允许空值 |\n| hideArrow | boolean | false | 是否展示增减按钮 |\n| coin | boolean | false | 以千位分隔符展示 | \n\n"},865:function(e,n){e.exports="# Input\n\n<example />\n\n## API\n\n### Input\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| defaultValue | string \\| number | - | Default value |\n| delay | number | 400 | User input triggers the onChange and to check interval, unit: ms.|\n| name | string | none | The name of Form which access data |\n| onChange | (value: string) => void | - | The callback function when the value is changing |\n| onEnterPress | (value: string) => void | - | The callback function for enter key |\n| placeholder | string | - | Same as the native input tag |\n| popover | 'top-left' \\| 'top' \\| 'top-right' \\| 'bottom-left' \\| 'bottom' \\| 'bottom-right' | none | The position where the text pop up |\n| size | 'large' \\| 'default' \\| 'small' | 'default' | size of input |\n| style | object | - | Container element style |\n| tip | ReactNode | none | Prompt information |\n| trim | boolean | false | When trim is true, blank characters are automatically deleted when lose focus。 |\n| type | string | 'text' | Same as the type of the native input tag |\n| value | string \\| number | - | The defaultValue and value can be set at the same time and defaultValue will be overridden by value<br />In the Form, the value will be taken over by the form and the value will lose efficacy. |\n| clearable | () => void \\| boolean | false | Remove content of the input when clicking the clear icon, clear event function |\n| coin | boolean | false | Show as thousands separator, valid only when type is 'number' |\n| info | (value: string) => string \\| number | - | Infomation |\n| popoverProps | object | none | Vilidate popup properties, specific properties refer to Popover component description |\n\n### Input.Number\n\nThe basic API is the same as the above table, and the specific API is as follows:\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| max | number | - | The maximum value |\n| min | number | - | The minimum value|\n| step | number | 1 | Change the digital span. It can be decimal. |\n| digits | number | - | the digits of number |\n| allowNull | boolean | false | allow value is null |\n| hideArrow | boolean | false | Whether to show increase/decrease buttons |\n| coin | boolean | false | Show as thousands separator |\n"},866:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(92);n.default=function(){return o.a.createElement(l.a,{placeholder:"input something"})}},867:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- Input 通常需要和其他的组件配合使用，所以默认的宽度是 100%，默认 display 为 block\n *    -- 如果设置了 style.width，默认 display 为 inline-flex\n * en - Base\n *    -- Input usually needs to be used with other components, so the default width is 100% and the default display is block.\n *    -- If the style.width is set, the default display is inline-flex.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input placeholder=\"input something\" />\n}\n"},868:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(92);n.default=function(){return o.a.createElement(l.a,{clearable:!0,placeholder:"input something"})}},869:function(e,n){e.exports="/**\n * cn - 允许删除\n *    -- Input 允许删除\n * en -  allow clear\n *    -- Input allow clear\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input clearable placeholder=\"input something\" />\n}\n"},870:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(92),r={width:120,marginRight:12};n.default=function(){return o.a.createElement("div",null,o.a.createElement(l.a,{size:"small",style:r,placeholder:"small size"}),o.a.createElement(l.a,{style:r,placeholder:"default size"}),o.a.createElement(l.a,{size:"large",style:r,placeholder:"large size"}))}},871:function(e,n){e.exports='/**\n * cn - 大小\n *    -- 提供了三种尺寸的输入框，small、default、large\n * en - Size\n *    -- There are three size of input, small, default, large.\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { width: 120, marginRight: 12 }\n\nexport default function() {\n  return (\n    <div>\n      <Input size="small" style={style} placeholder="small size" />\n      <Input style={style} placeholder="default size" />\n      <Input size="large" style={style} placeholder="large size" />\n    </div>\n  )\n}\n'},872:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(92),r={marginBottom:12};n.default=function(){return o.a.createElement("div",{style:{width:300}},o.a.createElement(l.a,{style:r,type:"number",placeholder:"digits undefined"}),o.a.createElement(l.a,{style:r,digits:0,type:"number",placeholder:"digits 0"}),o.a.createElement(l.a,{style:r,digits:1,type:"number",placeholder:"digits 1"}),o.a.createElement(l.a,{style:r,digits:2,type:"number",placeholder:"digits 2"}),o.a.createElement(l.a,{style:r,digits:3,type:"number",placeholder:"digits 3"}))}},873:function(e,n){e.exports='/**\n * cn - 数字\n *    -- type 为 number 时，输入时会做一次校验，禁止输入非数字类型字符，并且根据 digits 属性限制小数位数\n * en - Number\n *    -- When type is number, it is forbidden to input non-numeric characters, and the number of decimal places is limited according to the digits property\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div style={{ width: 300 }}>\n      <Input style={style} type="number" placeholder="digits undefined" />\n      <Input style={style} digits={0} type="number" placeholder="digits 0" />\n      <Input style={style} digits={1} type="number" placeholder="digits 1" />\n      <Input style={style} digits={2} type="number" placeholder="digits 2" />\n      <Input style={style} digits={3} type="number" placeholder="digits 3" />\n    </div>\n  )\n}\n'},874:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(92);n.default=function(){return o.a.createElement(l.a.Number,{width:120,min:23,max:100,digits:0})}},875:function(e,n){e.exports="/**\n * cn -\n *  . -- Input.Number 组件，可以通过鼠标和上下键辅助输入\n * en -\n *  . -- Input.Number component can be assisted by mouse and up and down keyboard.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input.Number width={120} min={23} max={100} digits={0} />\n}\n"},876:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(92),r=t(47),i=t(146),s={width:300,marginBottom:12};n.default=function(){return o.a.createElement("div",null,o.a.createElement(l.a.Group,{style:s},o.a.createElement(i.a,{name:"user"}),o.a.createElement(l.a,{placeholder:"first name"}),"-",o.a.createElement(l.a,{placeholder:"last name"})),o.a.createElement(l.a.Group,{style:s},o.a.createElement(l.a,{placeholder:"search text"}),o.a.createElement(i.a,{name:"search"})),o.a.createElement(l.a.Group,{style:s},o.a.createElement(l.a,{style:{flex:1},placeholder:"flex 1"}),o.a.createElement(l.a,{style:{flex:3},placeholder:"flex 3"})),o.a.createElement(l.a.Group,{style:s},o.a.createElement(l.a,{placeholder:"search text"}),o.a.createElement(r.a,{type:"primary"},"Search")),o.a.createElement(l.a.Group,{size:"small",style:s},o.a.createElement("b",null,o.a.createElement(i.a,{name:"envelope"})),o.a.createElement(l.a,{placeholder:"email"}),o.a.createElement("b",null,".com")))}},877:function(e,n){e.exports='/**\n * cn - 组合\n *  . -- Icon, span, string, Button 类型可以直接放入 Input.Group 中。需要背景色可以放在 b 标签中。\n * en - Group\n *  . -- The Icon, span, string and Button types can be placed directly into the Input.Group. Use b tag can change the background color.\n */\nimport React from \'react\'\nimport { Button, Input } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst style = { width: 300, marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div>\n      <Input.Group style={style}>\n        <FontAwesome name="user" />\n        <Input placeholder="first name" />\n        -\n        <Input placeholder="last name" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input placeholder="search text" />\n        <FontAwesome name="search" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input style={{ flex: 1 }} placeholder="flex 1" />\n        <Input style={{ flex: 3 }} placeholder="flex 3" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input placeholder="search text" />\n        <Button type="primary">Search</Button>\n      </Input.Group>\n\n      <Input.Group size="small" style={style}>\n        <b>\n          <FontAwesome name="envelope" />\n        </b>\n        <Input placeholder="email" />\n        <b>.com</b>\n      </Input.Group>\n    </div>\n  )\n}\n'},878:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(92),r=t(146),i={marginBottom:12};n.default=function(){return o.a.createElement("div",{style:{width:300}},o.a.createElement(l.a,{style:i,placeholder:"email",tip:"enter you email.",popover:"top-left"}),o.a.createElement(l.a.Group,{style:i,tip:"enter you email."},o.a.createElement(r.a,{name:"envelope"}),o.a.createElement(l.a,{placeholder:"email"})),o.a.createElement(l.a.Group,{style:i},o.a.createElement(r.a,{name:"envelope"}),o.a.createElement(l.a,{tip:"enter you email.",placeholder:"email"})))}},879:function(e,n){e.exports='/**\n * cn - 提示文字\n *    -- 在 input 上设置的 tip 在 focus 时弹出\n * en - Tip\n *    -- The tip set on input pops up when it is focused.\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst style = { marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div style={{ width: 300 }}>\n      <Input style={style} placeholder="email" tip="enter you email." popover="top-left" />\n\n      <Input.Group style={style} tip="enter you email.">\n        <FontAwesome name="envelope" />\n        <Input placeholder="email" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <FontAwesome name="envelope" />\n        <Input tip="enter you email." placeholder="email" />\n      </Input.Group>\n    </div>\n  )\n}\n'},880:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(260),r=t(92),i=new l.b;n.default=function(){return o.a.createElement(r.a,{placeholder:"email",rules:[i.required],tip:"Email, required",popover:"top-left",width:300})}},881:function(e,n){e.exports='/**\n * cn - 校验\n *    -- 设置了 rules，会自动校验输入数据，设置了 popover 会在指定位置弹出\n *    -- 如果没有设置 popover，不会弹出错误提示。\n *    -- 有错误时，提示框不会隐藏。\n * en - Validate\n *    -- When the rules property is set, it will automatically verify the input data. When the popover property is set, it will pop up at the specified location.\n *    -- If the popover property is not set, no error message will pop up.\n *    -- If input is invalid, the message will not be hidden.\n */\nimport React from \'react\'\nimport { Input, Rule } from \'shineout\'\n\nconst rules = new Rule()\n\nexport default function() {\n  return <Input placeholder="email" rules={[rules.required]} tip="Email, required" popover="top-left" width={300} />\n}\n'},882:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(92),r={width:300,marginBottom:12};n.default=function(){return o.a.createElement("div",null,o.a.createElement(l.a.Group,{disabled:!0,style:r},o.a.createElement(l.a,{placeholder:"first name"}),"-",o.a.createElement(l.a,{placeholder:"last name"})),o.a.createElement(l.a,{disabled:!0,style:r,placeholder:"disabled input"}))}},883:function(e,n){e.exports='/**\n * cn - 禁用\n *    -- 设置 disabled 属性禁用组件\n * en - Disabled\n *    -- Set the disabled property to disable the component.\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { width: 300, marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div>\n      <Input.Group disabled style={style}>\n        <Input placeholder="first name" />\n        -\n        <Input placeholder="last name" />\n      </Input.Group>\n\n      <Input disabled style={style} placeholder="disabled input" />\n    </div>\n  )\n}\n'},884:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(92);n.default=function(){return o.a.createElement(l.a.Password,{placeholder:"input password"})}},885:function(e,n){e.exports="/**\n * cn - 密码\n *    -- Input.Password 模拟密码输入框，用来阻止 Chrome 提示记住密码。\n * en - Password\n *    -- Input.Password is a mock input of type 'password', used for disable Chrome autofill.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input.Password placeholder=\"input password\" />\n}\n"}}]);