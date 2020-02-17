(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[31],{1259:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),a=t(478),s=t(479),l=t(34),r=t(1260),c=t.n(r),u=t(1261),d=t.n(u),m=Object(l.b)(c.a,d.a),h=[{name:"1-base",title:Object(l.b)("基本用法 \n 最基本的组件用法。 \n Modal 会在 document.body 中创建一个新的层显示弹出内容。 \n 关闭 modal 时没有对组件进行销毁, 只是隐藏, 组件的状态会被保留。 如果不需要保留组件之前的状态, 可以通过改变 modal 的 key 去实现。","Base \n The basic usage for component."),component:t(1262).default,rawText:t(1263)},{name:"2-special",title:Object(l.b)("类型 \n Modal 内置了 4 个类型的样式：info（纯信息展示，不带有状态）、Success、Warn 和 Error，为了方便调用，设计为静态函数。","Type \n Modal has 4 built in style."),component:t(1264).default,rawText:t(1265)},{name:"3-confirm",title:Object(l.b)("确认框 \n 调用 confirm 函数可以快捷的显示确认框，便于用户操作；同时可以通过 text 配置 Modal 按钮文案，onOk 与 onClose 配置 Modal 确认和取消事件回调（当事件返回 Promise 时会等待 Promise resolve 后关闭 Modal）","Confirm \n The confirmation modal dialog."),component:t(1266).default,rawText:t(1267)},{name:"3-focus",title:Object(l.b)("默认聚焦按钮 \n 设置 autoFocusButton 可以在打开的时候默认聚焦到某个按钮, 再点击回车可以触发改按钮的点击事件, 方便用户进行键盘操作. 该属性仅在 Modal的 methods 中生效.","Default focus button \n Setting autoFocusButton can focus on a button by default when you open it, and then press Enter to trigger the click event of the button, which is convenient for the user to perform keyboard operation. This property only takes effect in Modal methods"),component:t(1268).default,rawText:t(1269)},{name:"3-gcontainer",title:Object(l.b)("指定目标 \n 使用 container 来指定 Modal 渲染的目标节点","Target \n set container to render target node"),component:t(1270).default,rawText:t(1271)},{name:"4-form",title:Object(l.b)("表单 \n Modal 支持 Form 表单，并且支持 Form 的所有特性，表单提交可以使用 Modal.Submit 来代替 Button[type=submit]","Form \n The internal form of Modal can use Modal.Submit to trigger submit."),component:t(1272).default,rawText:t(1273)},{name:"5-multistage",title:Object(l.b)("多层 Modal \n 支持多层叠加 Modal","Multistage \n Multi-layer Modal"),component:t(1274).default,rawText:t(1275)},{name:"6-close",title:Object(l.b)("点击空白关闭 \n 默认点击对话框外部空白页面会关闭对话框。 \n 设置 maskCloseAble 属性为 false，禁用点击空白关闭，同时右上角的关闭图标也会隐藏。 \n 设置 maskCloseAble 属性为 null，禁用点击空白关闭，右上角的关闭图标会保留。","Close \n By default, clicking on the blank page outside the Modal box will closes the Modal box. \n Set maskCloseAble to false to disable the function that click mask to close and the close icon in the upper right corner will be hidden at the same time. \n Set maskCloseAbel to null to disable the function that click mask to close and the close icon in the upper right corner will be preserved."),component:t(1276).default,rawText:t(1277)},{name:"7-position",title:Object(l.b)("位置（抽屉） \n 通过 position 可设置 Modal 弹出的位置，这时 Modal 就如 Drawer 一样。现支持 top、right、bottom 和 left 四个位置配置。","Position \n Set position property to specify the pop-up position."),component:t(1278).default,rawText:t(1279)}];n.default=Object(a.a)(function(e){return i.a.createElement(s.b,Object.assign({},e,{codes:void 0,source:m,examples:h}))})},1260:function(e,n){e.exports="# Modal *对话框*\n在不跳转页面的前提下，可以使用 Modal 展示次要内容或者操作。\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 | 可用版本 |\n| --- | --- | --- | --- | --- |\n| className | string | 无 | 扩展className | |\n| bodyStyle | object | - | 扩展 modal body 的样式 | |\n| footer | ReactElement \\| Array \\| null | 无 | 底部内容 | |\n| maskCloseAble | bool | true | 点击遮罩层是否关闭对话框 | |\n| maskOpacity | number | 0.25 | 遮罩层透明度 | |\n| padding | number\\|string | 16 | 内容内边距 | |\n| position | string | 无 | 弹出位置，可选值为 \\['top', 'right', 'bottom', 'left'] | |\n| style | object | 无 | 最外层扩展样式 | |\n| title | string \\| ReactElement | 无 | 弹出层的标题 | |\n| usePortal | bool | true | 为 true 时，使用 ReactDOM.createPortal 创建弹出层，为 false 时，使用 ReactDOM.render | |\n| visible | bool | false | 是否显示 | |\n| width | number \\| string | 500 | 对话框宽度 | |\n| zIndex | number | 1050 | 对话框 z-index 值，注意：如 Modal 嵌套 Select 组件，并且 Select 组件含有 absolute 字段，需要修改 Select 的 z-index的值 | |\n| rootClassName | string | - | modal 的根元素类名, 为遮罩层的父元素 | 1.4.2 |\n| container | () => HTMLElement \\| HTMLElement | document.body | 渲染的目标节点 | |\n\n### Methods\n\nModal 提供了一组方法供全局调用，这些方法生成的元素，会在关闭后销毁。该组方法应仅供展示所用, 如果需要数据交互, 请使用 Modal\n\nModal.info(options) // 提示信息\n\nModal.success(options) // 成功提示框\n\nModal.error(options) // 错误提示框\n\nModal.confirm(options) // 确认提示框\n\nModal.show(options) // 默认弹窗 没有图标\n\n#### Options参数\n\n** *options 支持 Modal除了 usePortal 和 destory 的其他任何属性, 此外还有如下的额外属性**\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| content | string \\| ReactElement | 无 | 提示内容主体 |\n| title | string | 无 | 标题 |\n| onCancel | function | 无 | 点击取消按钮时触发事件，仅在 confirm 方法中有效 |\n| onClose | function | 无 | 关闭Modal时触发 |\n| onOk | function | 无 | 点击确定按钮时触发事件，返回 Promise 时，会在 Promise resolve 后关闭Modal |\n| text | object | { ok: 'Ok', cancel: 'Cancel' } | 按钮文字 |\n| autoFocusButton | string | 无 | 默认聚焦的按钮, 可选值 \\['ok', 'cancel'] |\n"},1261:function(e,n){e.exports="# Modal\nYou can use Modal to display secondary content or actions without jumping to the page.\n\n<example />\n\n## API\n\n| Property | Type | Default | Description | version | \n| --- | --- | --- | --- | --- | \n| className | string | - | Extend className | |\n| bodyStyle | object | - | Extend modal body style | |\n| footer | ReactElement \\| null | - | The content at the bottom | |\n| maskCloseAble | bool | true | Whether to close the mask when the mask is clicked | |\n| maskOpacity | number | 0.25 | The opacity of the mask | |\n| padding | number\\|string | 16 | Padding style of the content | |\n| position | string | - | Pop-up position, one of \\['top', 'right', 'bottom', 'left'] | |\n| title | string \\| ReactElement | - | the title of the pop-up layer | |\n| usePortal | bool | true | When the usePortal is true, use ReactDOM.createPortal to create the pop-up layer, otherwise use ReactDOM.render. | |\n| visible | bool | false |  | |\n| width | number \\| string | 500 | the width of the Modal | |\n| zIndex | number | 1050 | Modal z-index | |\n| rootClassName | string | - | the root element of modal, the mask parent element | 1.4.2 |\n| container | () => HTMLElement \\| HTMLElement | document.body | target element | |\n\n### Methods\n\nModal provides several static methods for globally calling. The elements generated by these methods are destroyed when it is closed. This set of methods should be used only for presentations. If you need data interaction, use Modal.\n\nModal.info(options)\n\nModal.success(options)\n\nModal.error(options)\n\nModal.confirm(options)\n\nModal.show(options)\n\n#### Options Parameter\n\n** *options support Modal in addition to any other properties of usePortal and destory, there are additional properties as follows **\n\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| content | string \\| ReactElement | - | Content body |\n| title | string | - | title |\n| onCancel | function | - | The event is triggered when the cancel button is clicked. |\n| onClose | function | none | The event is triggered when the modal is closed. |\n| onOk | function | none | The event is triggered when the ok button is clicked. |\n| text | object | { ok: 'Ok', cancel: 'Cancel' } | The text of button |\n| autoFocusButton | string | - | auto focus button, one of \\['ok', 'cancel'] |\n"},1262:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return h});var o=t(4),i=t(5),a=t(6),s=t(3),l=t(7),r=t(1),c=t(0),u=t.n(c),d=t(44),m=t(476),h=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(a.a)(this,Object(s.a)(t).call(this,e))).handleOk=function(){n.setState({visible:!1,content:n.state.content+=1}),console.log("clicked ok!")},n.handleCancel=function(){n.setState({visible:!1,content:n.state.content+=1}),console.log("clicked cancel")},n.state={visible:!1,content:1},n.show=n.show.bind(Object(r.a)(Object(r.a)(n))),n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"show",value:function(){this.setState({visible:!0})}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(d.a,{onClick:this.show},"click me"),u.a.createElement(m.a,{visible:this.state.visible,width:500,title:"Modal Title",onClose:this.handleCancel,footer:[u.a.createElement(d.a,{key:"cancel",onClick:this.handleCancel},"Cancel"),u.a.createElement(d.a,{key:"ok",type:"primary",onClick:this.handleOk},"Ok")]},"you are visited ".concat(this.state.content)))}}]),t}(u.a.Component)},1263:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- 最基本的组件用法。\n *    -- Modal 会在 document.body 中创建一个新的层显示弹出内容。\n *    -- 关闭 modal 时没有对组件进行销毁, 只是隐藏, 组件的状态会被保留。 如果不需要保留组件之前的状态, 可以通过改变 modal 的 key 去实现。\n * en - Base\n *    -- The basic usage for component.\n */\nimport React from 'react'\nimport { Modal, Button } from 'shineout'\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      visible: false,\n      content: 1,\n    }\n    this.show = this.show.bind(this)\n  }\n\n  show() {\n    this.setState({\n      visible: true,\n    })\n  }\n\n  handleOk = () => {\n    this.setState({\n      visible: false,\n      content: (this.state.content += 1),\n    })\n    console.log('clicked ok!')\n  }\n\n  handleCancel = () => {\n    this.setState({\n      visible: false,\n      content: (this.state.content += 1),\n    })\n    console.log('clicked cancel')\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.show}>click me</Button>\n        <Modal\n          visible={this.state.visible}\n          width={500}\n          title=\"Modal Title\"\n          onClose={this.handleCancel}\n          footer={[\n            <Button key=\"cancel\" onClick={this.handleCancel}>\n              Cancel\n            </Button>,\n            <Button key=\"ok\" type=\"primary\" onClick={this.handleOk}>\n              Ok\n            </Button>,\n          ]}\n        >\n          {`you are visited ${this.state.content}`}\n        </Modal>\n      </div>\n    )\n  }\n}\n"},1264:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),a=t(476),s=t(44);n.default=function(){return i.a.createElement("div",null,i.a.createElement(s.a,{onClick:function(){a.a.info({title:"This is a info message",content:"this is  some information that user must know"})}},"info"),i.a.createElement(s.a,{onClick:function(){a.a.success({title:"This is a success message",content:"this is some information that user successful operation"})}},"success"),i.a.createElement(s.a,{onClick:function(){a.a.warn({title:"This is a warning message",content:"this is  some information that user must know"})}},"warning"),i.a.createElement(s.a,{onClick:function(){a.a.error({title:"This is a error message",content:"this is some information that user attended"})}},"error"),i.a.createElement(s.a,{onClick:function(){a.a.show({title:"This is a message",content:"this is show information"})}},"show"))}},1265:function(e,n){e.exports="/**\n * cn - 类型\n *    -- Modal 内置了 4 个类型的样式：info（纯信息展示，不带有状态）、Success、Warn 和 Error，为了方便调用，设计为静态函数。\n * en - Type\n *    -- Modal has 4 built in style.\n */\nimport React from 'react'\nimport { Modal, Button } from 'shineout'\n\nexport default function() {\n  function info() {\n    Modal.info({\n      title: 'This is a info message',\n      content: 'this is  some information that user must know',\n    })\n  }\n\n  function success() {\n    Modal.success({\n      title: 'This is a success message',\n      content: 'this is some information that user successful operation',\n    })\n  }\n\n  function warning() {\n    Modal.warn({\n      title: 'This is a warning message',\n      content: 'this is  some information that user must know',\n    })\n  }\n\n  function error() {\n    Modal.error({\n      title: 'This is a error message',\n      content: 'this is some information that user attended',\n    })\n  }\n\n  function show() {\n    Modal.show({\n      title: 'This is a message',\n      content: 'this is show information',\n    })\n  }\n\n  return (\n    <div>\n      <Button onClick={info}>info</Button>\n      <Button onClick={success}>success</Button>\n      <Button onClick={warning}>warning</Button>\n      <Button onClick={error}>error</Button>\n      <Button onClick={show}>show</Button>\n    </div>\n  )\n}\n"},1266:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return m});var s=t(4),o=t(5),l=t(6),r=t(3),i=t(7),a=t(0),c=t.n(a),u=t(476),d=t(44),m=function(e){function a(){var e,n;Object(s.a)(this,a);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(r.a)(a)).call.apply(e,[this].concat(o)))).confirm=function(){u.a.confirm({title:"This is a confirm message",content:"this is some information that user confirm",onOk:function(){return new Promise(function(e){console.log("yes i know"),setTimeout(function(){return e(!0)},2e3)})},text:{ok:"Yes",cancel:"No"}})},n}return Object(i.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d.a,{onClick:this.confirm},"confirm"))}}]),a}(a.Component)},1267:function(e,n){e.exports="/**\n * cn - 确认框\n *    -- 调用 confirm 函数可以快捷的显示确认框，便于用户操作；同时可以通过 text 配置 Modal 按钮文案，onOk 与 onClose 配置 Modal 确认和取消事件回调（当事件返回 Promise 时会等待 Promise resolve 后关闭 Modal）\n * en - Confirm\n *    -- The confirmation modal dialog.\n */\nimport React, { Component } from 'react'\nimport { Modal, Button } from 'shineout'\n\nexport default class extends Component {\n  confirm = () => {\n    Modal.confirm({\n      title: 'This is a confirm message',\n      content: 'this is some information that user confirm',\n      onOk: () =>\n        new Promise(resolve => {\n          console.log('yes i know')\n          setTimeout(() => resolve(true), 2000)\n        }),\n      text: { ok: 'Yes', cancel: 'No' },\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.confirm}>confirm</Button>\n      </div>\n    )\n  }\n}\n"},1268:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return h});var s=t(4),o=t(5),l=t(6),r=t(3),i=t(7),a=t(0),c=t.n(a),u=t(476),d=t(503),m=t(44),h=function(e){function a(){var e,n;Object(s.a)(this,a);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(r.a)(a)).call.apply(e,[this].concat(o)))).confirm=function(e){u.a.confirm({title:"This is a confirm message",content:"the ".concat(e," button will be focus"),text:{ok:"ok",cancel:"cancel"},onOk:function(){d.a.info("you chose the ok")},onCancel:function(){d.a.info("you chose the cancel")},autoFocusButton:e})},n}return Object(i.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(m.a,{onClick:this.confirm.bind(this,"cancel")},"cancel"),c.a.createElement(m.a,{onClick:this.confirm.bind(this,"ok")},"ok"))}}]),a}(a.Component)},1269:function(e,n){e.exports="/**\n * cn - 默认聚焦按钮\n *    -- 设置 autoFocusButton 可以在打开的时候默认聚焦到某个按钮, 再点击回车可以触发改按钮的点击事件, 方便用户进行键盘操作. 该属性仅在 Modal的 methods 中生效.\n * en - Default focus button\n *    -- Setting autoFocusButton can focus on a button by default when you open it, and then press Enter to trigger the click event of the button, which is convenient for the user to perform keyboard operation. This property only takes effect in Modal methods\n */\nimport React, { Component } from 'react'\nimport { Modal, Button, Message } from 'shineout'\n\nexport default class extends Component {\n  confirm = type => {\n    Modal.confirm({\n      title: 'This is a confirm message',\n      content: `the ${type} button will be focus`,\n      text: {\n        ok: 'ok',\n        cancel: 'cancel',\n      },\n      onOk: () => {\n        Message.info('you chose the ok')\n      },\n      onCancel: () => {\n        Message.info('you chose the cancel')\n      },\n      autoFocusButton: type,\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.confirm.bind(this, 'cancel')}>cancel</Button>\n        <Button onClick={this.confirm.bind(this, 'ok')}>ok</Button>\n      </div>\n    )\n  }\n}\n"},1270:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return h});var o=t(4),i=t(5),a=t(6),s=t(3),l=t(7),r=t(1),c=t(0),u=t.n(c),d=t(44),m=t(476),h=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(a.a)(this,Object(s.a)(t).call(this,e))).bindElement=function(e){n.wrapper=e},n.handleDismiss=function(){n.setState({visible:!1})},n.state={visible:!1},n.show=n.show.bind(Object(r.a)(Object(r.a)(n))),n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"show",value:function(){this.setState({visible:!0})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{ref:this.bindElement},u.a.createElement(d.a,{onClick:this.show},"click me"),u.a.createElement(m.a,{container:function(){return e.wrapper},visible:this.state.visible,width:500,title:"Modal Title",onClose:this.handleDismiss,footer:[u.a.createElement(d.a,{key:"cancel",onClick:this.handleDismiss},"Cancel"),u.a.createElement(d.a,{key:"ok",type:"primary",onClick:this.handleDismiss},"Ok")]},"Modal mount after Button"))}}]),t}(u.a.Component)},1271:function(e,n){e.exports='/**\n * cn - 指定目标\n *    -- 使用 container 来指定 Modal 渲染的目标节点\n * en - Target\n *    -- set container to render target node\n */\nimport React from \'react\'\nimport { Modal, Button } from \'shineout\'\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      visible: false,\n    }\n    this.show = this.show.bind(this)\n  }\n\n  show() {\n    this.setState({\n      visible: true,\n    })\n  }\n\n  bindElement = ref => {\n    this.wrapper = ref\n  }\n\n  handleDismiss = () => {\n    this.setState({\n      visible: false,\n    })\n  }\n\n  render() {\n    return (\n      <div ref={this.bindElement}>\n        <Button onClick={this.show}>click me</Button>\n        <Modal\n          container={() => this.wrapper}\n          visible={this.state.visible}\n          width={500}\n          title="Modal Title"\n          onClose={this.handleDismiss}\n          footer={[\n            <Button key="cancel" onClick={this.handleDismiss}>\n              Cancel\n            </Button>,\n            <Button key="ok" type="primary" onClick={this.handleDismiss}>\n              Ok\n            </Button>,\n          ]}\n        >\n          Modal mount after Button\n        </Modal>\n      </div>\n    )\n  }\n}\n'},1272:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return k});var o=t(4),i=t(5),a=t(6),s=t(3),l=t(7),r=t(1),c=t(0),u=t.n(c),d=t(503),m=t(44),h=t(476),f=t(475),b=t(472),p={email:[{required:!0,message:"Please enter your email."},{type:"email",message:"Please enter a valid email."}],password:[{required:!0,message:"Please enter password."},{min:7,message:"Password must be at least {min} characters."},{regExp:/[a-z]+/i,message:"Password at least has one letter."},function(e,n,t){/\d+/.test(e)?t(!0):t(new Error("Password at least has one numeral."))}]},k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(a.a)(this,Object(s.a)(t).call(this,e))).handleSubmit=function(e){n.setState({visible:!1}),d.a.success(JSON.stringify(e))},n.handleClose=function(){n.setState({visible:!1})},n.state={visible:!1},n.show=n.show.bind(Object(r.a)(Object(r.a)(n))),n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"show",value:function(){this.setState({visible:!0})}},{key:"renderFooter",value:function(){return u.a.createElement("div",null,u.a.createElement(m.a,{onClick:this.handleClose},"Cancel"),u.a.createElement(h.a.Submit,null,"Submit"))}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(m.a,{onClick:this.show},"Modal Form"),u.a.createElement(h.a,{visible:this.state.visible,width:456,title:"Form",onClose:this.handleClose,footer:this.renderFooter()},u.a.createElement(f.a,{labelWidth:100,rules:p,labelAlign:"right",style:{maxWidth:400},onSubmit:this.handleSubmit},u.a.createElement(f.a.Item,{required:!0,label:"Email"},u.a.createElement(b.a,{name:"email"})),u.a.createElement(f.a.Item,{required:!0,label:"Password"},u.a.createElement(b.a,{name:"password",type:"password"})))))}}]),t}(u.a.Component)},1273:function(e,n){e.exports="/**\n * cn - 表单\n *    -- Modal 支持 Form 表单，并且支持 Form 的所有特性，表单提交可以使用 Modal.Submit 来代替 Button[type=submit]\n * en - Form\n *    --The internal form of Modal can use Modal.Submit to trigger submit.\n */\nimport React from 'react'\nimport { Modal, Button, Form, Input, Message } from 'shineout'\n\nconst rules = {\n  email: [\n    { required: true, message: 'Please enter your email.' },\n    { type: 'email', message: 'Please enter a valid email.' },\n  ],\n  password: [\n    { required: true, message: 'Please enter password.' },\n    { min: 7, message: 'Password must be at least {min} characters.' },\n    { regExp: /[a-z]+/i, message: 'Password at least has one letter.' },\n    (value, formdata, callback) => {\n      if (/\\d+/.test(value)) callback(true)\n      else callback(new Error('Password at least has one numeral.'))\n    },\n  ],\n}\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      visible: false,\n    }\n    this.show = this.show.bind(this)\n  }\n\n  show() {\n    this.setState({\n      visible: true,\n    })\n  }\n\n  handleSubmit = data => {\n    this.setState({\n      visible: false,\n    })\n    Message.success(JSON.stringify(data))\n  }\n\n  handleClose = () => {\n    this.setState({\n      visible: false,\n    })\n  }\n\n  renderFooter() {\n    return (\n      <div>\n        <Button onClick={this.handleClose}>Cancel</Button>\n        <Modal.Submit>Submit</Modal.Submit>\n      </div>\n    )\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.show}>Modal Form</Button>\n        <Modal\n          visible={this.state.visible}\n          width={456}\n          title=\"Form\"\n          onClose={this.handleClose}\n          footer={this.renderFooter()}\n        >\n          <Form\n            labelWidth={100}\n            rules={rules}\n            labelAlign=\"right\"\n            style={{ maxWidth: 400 }}\n            onSubmit={this.handleSubmit}\n          >\n            <Form.Item required label=\"Email\">\n              <Input name=\"email\" />\n            </Form.Item>\n\n            <Form.Item required label=\"Password\">\n              <Input name=\"password\" type=\"password\" />\n            </Form.Item>\n          </Form>\n        </Modal>\n      </div>\n    )\n  }\n}\n"},1274:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return p});var o=t(4),i=t(5),a=t(6),s=t(3),l=t(7),r=t(1),c=t(0),u=t.n(c),d=t(44),m=t(476),h=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:65555,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:2;"string"==typeof e&&(e=parseInt(e,10)),"string"==typeof n&&(n=parseInt(n,10));var o=Math.random()*(e-n)+n;return parseFloat(o.toFixed(t),0)},f=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=e-t;return("number"!=typeof n||Number.isNaN(n))&&console.error(new Error("end can not computed with start")),Array.from({length:e-t},function(e,n){return n+t})},b=f(11,0).map(function(){return[h(600,450),h(450,320)]}),p=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(a.a)(this,Object(s.a)(t).call(this,e))).state={current:0},n.show=n.show.bind(Object(r.a)(Object(r.a)(n))),n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"show",value:function(e){this.setState({current:e})}},{key:"render",value:function(){var n=this;return u.a.createElement("div",null,u.a.createElement(d.a,{onClick:this.show.bind(this,1)},"click me"),f(11,1).map(function(e){return u.a.createElement(m.a,{key:e,visible:n.state.current>=e,width:b[e][0],height:b[e][1],title:"Modal Title ".concat(e),onClose:n.show.bind(n,e-1),footer:u.a.createElement(d.a,{onClick:n.show.bind(n,e-1)},"Close")},"Level ".concat(e),".",u.a.createElement("br",null),e<10&&u.a.createElement(c.Fragment,null,u.a.createElement("a",{onClick:n.show.bind(n,e+1)},"Next level"),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("a",{onClick:n.show.bind(n,0)},"Close all")))}))}}]),t}(u.a.Component)},1275:function(e,n){e.exports="/**\n * cn - 多层 Modal\n *    -- 支持多层叠加 Modal\n * en - Multistage\n *    -- Multi-layer Modal\n */\nimport React, { Fragment } from 'react'\nimport { Modal, Button } from 'shineout'\n\nconst pickNumber = (max = 65555, min = 0, fixed = 2) => {\n  if (typeof max === 'string') max = parseInt(max, 10)\n  if (typeof min === 'string') min = parseInt(min, 10)\n\n  const num = Math.random() * (max - min) + min\n  return parseFloat(num.toFixed(fixed), 0)\n}\n\nconst range = (end, start = 0) => {\n  const delta = end - start\n  if (typeof delta !== 'number' || Number.isNaN(delta)) {\n    console.error(new Error('end can not computed with start'))\n  }\n  return Array.from({ length: end - start }, (v, k) => k + start)\n}\n\nconst size = range(11, 0).map(() => [pickNumber(600, 450), pickNumber(450, 320)])\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      current: 0,\n    }\n    this.show = this.show.bind(this)\n  }\n\n  show(current) {\n    this.setState({ current })\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.show.bind(this, 1)}>click me</Button>\n\n        {range(11, 1).map(i => (\n          <Modal\n            key={i}\n            visible={this.state.current >= i}\n            width={size[i][0]}\n            height={size[i][1]}\n            title={`Modal Title ${i}`}\n            onClose={this.show.bind(this, i - 1)}\n            footer={<Button onClick={this.show.bind(this, i - 1)}>Close</Button>}\n          >\n            {`Level ${i}`}\n            .\n            <br />\n            {i < 10 && (\n              <Fragment>\n                <a onClick={this.show.bind(this, i + 1)}>Next level</a>\n                <br />\n                <br />\n                <a onClick={this.show.bind(this, 0)}>Close all</a>\n              </Fragment>\n            )}\n          </Modal>\n        ))}\n      </div>\n    )\n  }\n}\n"},1276:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return h});var o=t(4),i=t(5),a=t(6),s=t(3),l=t(7),r=t(1),c=t(0),u=t.n(c),d=t(44),m=t(476),h=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(a.a)(this,Object(s.a)(t).call(this,e))).handleOk=function(){n.setState({visible:!1}),console.log("you are click ok!")},n.handleCancel=function(){n.setState({visible:!1})},n.state={visible:!1},n.show=n.show.bind(Object(r.a)(Object(r.a)(n))),n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"show",value:function(){this.setState({visible:!0})}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(d.a,{onClick:this.show},"Click me"),u.a.createElement(m.a,{visible:this.state.visible,maskCloseAble:!0,width:500,height:300,title:"Modal Title",onClose:this.handleCancel,footer:[u.a.createElement(d.a,{key:"cancel",onClick:this.handleCancel},"Cancel"),u.a.createElement(d.a,{key:"ok",type:"primary",onClick:this.handleOk},"Ok")]},"The prop maskCloseAble is false.",u.a.createElement("br",null),"You must click the button to close the Modal."))}}]),t}(u.a.Component)},1277:function(e,n){e.exports='/**\n * cn - 点击空白关闭\n *    -- 默认点击对话框外部空白页面会关闭对话框。\n *    -- 设置 maskCloseAble 属性为 false，禁用点击空白关闭，同时右上角的关闭图标也会隐藏。\n *    -- 设置 maskCloseAble 属性为 null，禁用点击空白关闭，右上角的关闭图标会保留。\n * en - Close\n *    -- By default, clicking on the blank page outside the Modal box will closes the Modal box.\n *    -- Set maskCloseAble to false to disable the function that click mask to close and the close icon in the upper right corner will be hidden at the same time.\n *    -- Set maskCloseAbel to null to disable the function that click mask to close and the close icon in the upper right corner will be preserved.\n */\nimport React from \'react\'\nimport { Modal, Button } from \'shineout\'\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      visible: false,\n    }\n    this.show = this.show.bind(this)\n  }\n\n  show() {\n    this.setState({\n      visible: true,\n    })\n  }\n\n  handleOk = () => {\n    this.setState({\n      visible: false,\n    })\n    console.log(\'you are click ok!\')\n  }\n\n  handleCancel = () => {\n    this.setState({\n      visible: false,\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.show}>Click me</Button>\n        <Modal\n          visible={this.state.visible}\n          maskCloseAble\n          width={500}\n          height={300}\n          title="Modal Title"\n          onClose={this.handleCancel}\n          footer={[\n            <Button key="cancel" onClick={this.handleCancel}>\n              Cancel\n            </Button>,\n            <Button key="ok" type="primary" onClick={this.handleOk}>\n              Ok\n            </Button>,\n          ]}\n        >\n          The prop maskCloseAble is false.\n          <br />\n          You must click the button to close the Modal.\n        </Modal>\n      </div>\n    )\n  }\n}\n'},1278:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return b});var o=t(4),i=t(5),a=t(6),s=t(3),l=t(7),r=t(0),c=t.n(r),u=t(44),d=t(476),m=t(538),h=t(475),f=t(472),b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(a.a)(this,Object(s.a)(t).call(this,e))).handleClose=function(){n.setState({visible:!1})},n.toggle=function(e){n.setState({visible:e})},n.state={visible:!1,position:"right"},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"renderFooter",value:function(){return c.a.createElement("div",null,c.a.createElement(u.a,{onClick:this.toggle.bind(this,!1)},"Cancel"),c.a.createElement(d.a.Submit,null,"Submit"))}},{key:"render",value:function(){var n=this,e=this.state.position;return c.a.createElement("div",null,c.a.createElement(m.a,{data:["top","right","bottom","left"],value:e,style:{width:100,marginRight:12},keygen:!0,onChange:function(e){return n.setState({position:e})}}),c.a.createElement(u.a,{onClick:this.toggle.bind(this,!0)},"click me"),c.a.createElement(d.a,{visible:this.state.visible,title:"Form",key:e,position:e,onClose:this.toggle.bind(this,!1),footer:this.renderFooter()},c.a.createElement(h.a,{labelWidth:100,labelAlign:"right",style:{width:500},onSubmit:this.toggle.bind(this,!1)},c.a.createElement(h.a.Item,{required:!0,label:"Email"},c.a.createElement(f.a,{name:"email"})),c.a.createElement(h.a.Item,{required:!0,label:"Password"},c.a.createElement(f.a,{name:"password",type:"password"})))))}}]),t}(r.Component)},1279:function(e,n){e.exports="/**\n * cn - 位置（抽屉）\n *    -- 通过 position 可设置 Modal 弹出的位置，这时 Modal 就如 Drawer 一样。现支持 top、right、bottom 和 left 四个位置配置。\n * en - Position\n *    -- Set position property to specify the pop-up position.\n */\nimport React, { Component } from 'react'\nimport { Modal, Button, Form, Input, Select } from 'shineout'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      visible: false,\n      position: 'right',\n    }\n  }\n\n  handleClose = () => {\n    this.setState({\n      visible: false,\n    })\n  }\n\n  toggle = visible => {\n    this.setState({ visible })\n  }\n\n  renderFooter() {\n    return (\n      <div>\n        <Button onClick={this.toggle.bind(this, false)}>Cancel</Button>\n        <Modal.Submit>Submit</Modal.Submit>\n      </div>\n    )\n  }\n\n  render() {\n    const { position } = this.state\n    return (\n      <div>\n        <Select\n          data={['top', 'right', 'bottom', 'left']}\n          value={position}\n          style={{ width: 100, marginRight: 12 }}\n          keygen\n          onChange={p => this.setState({ position: p })}\n        />\n        <Button onClick={this.toggle.bind(this, true)}>click me</Button>\n        <Modal\n          visible={this.state.visible}\n          title=\"Form\"\n          key={position}\n          position={position}\n          onClose={this.toggle.bind(this, false)}\n          footer={this.renderFooter()}\n        >\n          <Form labelWidth={100} labelAlign=\"right\" style={{ width: 500 }} onSubmit={this.toggle.bind(this, false)}>\n            <Form.Item required label=\"Email\">\n              <Input name=\"email\" />\n            </Form.Item>\n\n            <Form.Item required label=\"Password\">\n              <Input name=\"password\" type=\"password\" />\n            </Form.Item>\n          </Form>\n        </Modal>\n      </div>\n    )\n  }\n}\n"},503:function(e,n,t){"use strict";var o=t(0),c=t.n(o),i=t(37),a=t.n(i),u=t(2),s=t(4),l=t(5),r=t(6),d=t(3),m=t(7),h=t(42),f=t(20),b=t(138),p=t(30),k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={messages:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"addMessage",value:function(n){var e=this,t=Object(p.b)();this.setState(Object(h.a)(function(e){e.messages.push(Object.assign({id:t},n))})),0<n.duration&&setTimeout(function(){e.setState(Object(h.a)(function(e){e.messages.forEach(function(e){e.id===t&&(e.dismiss=!0)})}))},1e3*n.duration)}},{key:"removeMessage",value:function(n){var t,e=this.state.messages.filter(function(e){return e.id!==n||(e.onClose&&(t=e.onClose),!1)});0===e.length?this.props.onDestory():this.setState({messages:e}),t&&t()}},{key:"closeEvent",value:function(e,n){if(0===n)return this.removeMessage.bind(this,e)}},{key:"render",value:function(){var r=this;return[this.state.messages.map(function(e){var n=e.id,t=e.type,o=e.content,i=e.dismiss,a=e.title,s=e.top,l=e.className;return c.a.createElement("div",{key:n,className:"".concat(Object(u.s)("item")," ").concat(l)},c.a.createElement(b.a,{className:Object(u.s)("msg"),dismiss:i,onClose:r.removeMessage.bind(r,n),icon:!0,iconSize:a?20:14,style:{top:s},type:t},a&&c.a.createElement("h3",null,a),o))})]}}]),t}(f.b);k.displayName="ShineoutMessage";var g=k,v={},w={};function y(e){v[e]&&(a.a.unmountComponentAtNode(v[e]),document.body.removeChild(v[e]),delete v[e]),w[e]&&delete w[e]}function C(i){return new Promise(function(n){var e,t,o=w[i];o?n(o):a.a.render(c.a.createElement(g,{ref:function(e){w[i]=e,n(e)},onDestory:y.bind(null,i)}),(e=i,(t=document.createElement("div")).className=Object(u.s)("_",e),document.body.appendChild(t),v[e]=t))})}var M=function(d){return function(n){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:3,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},o=e.onClose,i=e.position,a=void 0===i?"top":i,s=e.title,l=e.className,r=void 0===l?"":l,c=e.top,u=void 0===c?"auto":c;C(a).then(function(e){e.addMessage({content:n,duration:t,type:d,onClose:o,title:s,className:r,top:u})})}};n.a={show:M("default"),success:M("success"),info:M("info"),warn:M("warning"),warning:M("warning"),danger:M("danger"),error:M("danger"),close:function(e){e?y(e):["top","middle","top-left","top-right","bottom-left","bottom-right"].forEach(function(e){y(e)})}}}}]);