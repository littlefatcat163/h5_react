import React from "react";
import APIComponent from "./APIComponent";

export default class Format extends APIComponent {

  renderLeftDOM() {
    return (
      <div className='xo-api-left-list'>
        <ul>
          <h3>React组件规范</h3>
          <li data-target="reactComponentFormat">组件规范</li>
          <li data-target="reactComponentCycle">生命周期</li>
          <li data-target="reactComponentDemo">实例</li>
          <li data-target="reactComponentRef">ref</li>
          <li data-target="reactComponentAPI">api</li>
          <li data-target="reactComponentEvent">事件</li>
          <li data-target="reactComponentHelp">附属文档</li>
        </ul>
        <ul>
          <h3>Sass规范</h3>
          <li data-target="sassFormat">编写规范</li>
          <li data-target="sassNote">注释</li>
          <li data-target="sassDataType">数据类型</li>
          <li data-target="sassNumOper">数字运算</li>
          <li data-target="sassColorOper">颜色运算</li>
          <li data-target="sassInterpolation">Interpolation</li>
          <li data-target="sassDefault">变量默认值</li>
          <li data-target="sassImport">@import</li>
          <li data-target="sassMedia">@media</li>
          <li data-target="sassExtend">@extend</li>
          <li data-target="sassIf">@if</li>
          <li data-target="sassFor">@for</li>
          <li data-target="sassEach">@each</li>
          <li data-target="sassWhile">@while</li>
          <li data-target="sassMixin">@mixin</li>
          <li data-target="sassHelp">附属文档</li>
        </ul>
        <ul>
          <h3>ES6规范</h3>
          <li data-target="es6Scope">块级作用域</li>
          <li data-target="es6Str">字符串</li>
          <li data-target="es6Agm">解构赋值</li>
          <li data-target="es6Obj">对象</li>
          <li data-target="es6Array">数组</li>
          <li data-target="es6Func">函数</li>
          <li data-target="es6Map">Map</li>
          <li data-target="es6Class">Class</li>
          <li data-target="es6Module">模块</li>
          <li data-target="es6Help">附属文档</li>
        </ul>
      </div>
    )
  }

  renderRightDOM() {
    return (
      <div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="reactComponentFormat">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>React组件规范</h1>
            <div className="xo-padding-xs">
              <div className="xo-margin-bottom-sm">(1). <b>必须</b>使用PascalCase作为文件名</div>
              <div className="xo-margin-bottom-sm">(2). <b>必须</b>使用jsx作为文件后缀名  <i className="xo-margin-left-xs">如 -> Component.jsx</i></div>
              <div className="xo-margin-bottom-sm">(3). <b>必须</b>令文件名与所包含的export default class React Component名字相同</div>
              <div className="xo-margin-bottom-sm">(4). <b>必须</b>令class为className <i className="xo-margin-left-xs">如 -> {"<Component className='xo-span-box' />"}</i></div>
              <div className="xo-margin-bottom-sm">(5). <b>必须</b>令自定属性以data-作为前缀 <i className="xo-margin-left-xs">如 -> {"<Component data-toggle='toggle' />"}</i></div>
              <div className="xo-margin-bottom-sm">(6). <b>必须</b>使用如下图所示DOM片段对齐</div>
              <div className="xo-margin-bottom-sm xo-border-light-gray xo-padding-md">
                {"<Component"}
                <br/>
                <span className="xo-margin-left-lm">mProp1="mProp1"</span>
                <br/>
                {"/>"}
                <br/>
                <br/>
                {"<Component"}
                <br/>
                <span className="xo-margin-left-lm">mProp1="mProp1"</span>
                <br/>
                {">"}
                <br/>
                <span className="xo-margin-left-lm">{"<ChildComponent />"}</span>
                <br/>
                {"</Component>"}
                <br/>
                <br/>
                <i>属性类型如果是普通的字符串可以直接使用字符串,但是有运算符或者是对象,数字等其它类型则需要用{"{}"}包括</i>
                <br/>
                {"<Component"}
                <br/>
                <span className="xo-margin-left-lm">mProp1="mProp1"</span>
                <br/>
                <span className="xo-margin-left-lm">mProp2={"{123}"}</span>
                <br/>
                <span className="xo-margin-left-lm">mProp3={"{{att1 : 1, att2 : 2}}"}</span>
                <br/>
                {"/>"}
              </div>
            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="reactComponentCycle">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>React组件生命周期</h1>
            <div className="xo-padding-xs">
              <div>当创建组件的实例并将其插入DOM中的时候,将调用一下方法</div>
              <ul className="xo-font-lm">
                <b><i>Mounting</i></b>
                <li className="xo-margin-bottom-md"> constructor() <span className="xo-font-gray xo-font-xs">//构造函数,当实现React.Component子类的构造函数时,需要该函数中执行任何语句之前调用 super(props); 初始化的时候执行,只会执行一次</span></li>
                <li className="xo-margin-bottom-md"> componentWillMount() <span className="xo-font-gray xo-font-xs">//在render()之前被调用, 初始化的时候执行,只会执行一次,state的更新不会触发重新呈现</span></li>
                <li className="xo-margin-bottom-md"> render() <span className="xo-font-gray xo-font-xs">//浏览器即将要渲染的DOM,受props与state影响,当不需要渲染时,返回null或false, <b>(shouldComponentUpdate() 返回false, render()将不会被调用)</b></span></li>
                <li> componentDidMount() <span className="xo-font-gray xo-font-xs">//在render()之后被调用, 初始化的时候执行,只会执行一次,state的更新不会触发重新呈现</span></li>
              </ul>
              <ul className="xo-font-lm">
                <b><i>Updating</i></b>
                <li className="xo-margin-bottom-md"> componentWillReceiveProps(nextProps) <span className="xo-font-gray xo-font-xs">//在装入的组件接收新props之前被调用,初始化不会执行,可以在此方法中比较this.props和nextProps并使用this.setState()执行状态转换,this.setState()不会触发componentWillReceiveProps</span></li>
                <li className="xo-margin-bottom-md"> shouldComponentUpdate(nextProps, nextState)
                  <span className="xo-font-gray xo-font-xs">
                  //接收到新的props与state,在render()之前调用,初始化与使用forceUpdate()不执行,默认为true,返回false不会阻止子组件在状态更改时render(),
                  <br/>
                  如果shouldComponentUpdate() 返回false, 那么不会调用componentWillUpdate(), render(), componentDidUpdate(),
                  <i>注意，在将来React可以将shouldComponentUpdate() 作为提示而不是strict指令,返回false仍然可能导致组件的重新渲染</i>
                  <br/>
                  如果确定一个特定的组件在分析后缓慢,可以改变它继承自React.PureComponent,它实现了具有浅道具和状态比较的shouldComponentUpdate(), 如果你确信你想手工编写它,你可以比较this.props与nextProps和this.state与nextState和返回false告诉React可以跳过更新
                  </span>
                </li>
                <li className="xo-margin-bottom-md"> componentWillUpdate(nextProps, nextState)
                  <span className="xo-font-gray xo-font-xs">
                    //在接受到新的props与state,并且在render() 之前调用, 初始化与shouldComponentUpdate()返回false不会调用componentWillUpdate()
                  </span>
                </li>
                <li className="xo-margin-bottom-md"> render() <span className="xo-font-gray xo-font-xs">渲染组件</span></li>
                <li className="xo-margin-bottom-md"> componentDidUpdate(prevProps, prevState)
                  <span className="xo-font-gray xo-font-xs">
                  //在render() 之后调用, 初始化与shouldComponentUpdate()返回false不会调用componentDidUpdate()
                  </span>
                </li>
              </ul>
              <ul className="xo-font-lm">
                <b><i>Unmounting</i></b>
                <li className="xo-margin-bottom-md">componentWillUnmount()
                  <span className="xo-font-gray xo-font-xs">
                    //在组件被销毁之前调用,在此方法中执行任何必要的清理,如计时器无效,取消网络请求或清理元素等
                  </span>
                </li>
              </ul>
              <ul className="xo-font-lm">
                <b><i>Other APIs </i></b>
                <li className="xo-margin-bottom-md">setState(nextState, callback)
                  <span className="xo-font-gray xo-font-xs">
                    //设置新的状态,this.setState({"{name:123}"});
                    setState() 总是会导致重新渲染, 除非在 shouldComponentUpdate()返回false
                  </span>
                </li>
                <li className="xo-margin-bottom-md">forceUpdate(callback)
                  <span className="xo-font-gray xo-font-xs">
                    //主动触发render(),跳过shouldComponentUpdate(),但是将触发子组件的正常生命周期方法,包括每个子组件的shouldComponentUpdate()
                  </span>
                </li>
              </ul>
              <ul className="xo-font-lm">
                <b><i>Class Properties</i></b>
                <li className="xo-margin-bottom-md">defaultProps
                  <span className="xo-font-gray xo-font-xs">
                    //定义组件本身的属性
                  </span>
                  <div className="xo-padding-xs xo-border-light-gray">
                    {"class MyComponent extends React.Component {"}
                    <br/>
                    <span className="xo-margin-left-xs">//...</span>
                    <br/>
                    {"}"}
                    <br/>
                    <br/>
                    {"MyComponent.defaultProps = {"}
                    <br/>
                    <span className="xo-margin-left-xs">prop1: "prop1"</span>
                    <br/>
                    {"}"}
                  </div>
                </li>
                <li className="xo-margin-bottom-md">displayName
                  <span className="xo-font-gray xo-font-xs">
                    //字符串用于调试消息,JSX自动设置此值
                  </span>
                  <div className="xo-padding-xs xo-border-light-gray">
                    {"class MyComponent extends React.Component {"}
                    <br/>
                    <span className="xo-margin-left-xs">displayName = "MyComponent";</span>
                    <br/>
                    <span className="xo-margin-left-xs">//...</span>
                    <br/>
                    {"}"}
                  </div>
                </li>
                <li className="xo-margin-bottom-md">propTypes
                  <span className="xo-font-gray xo-font-xs">
                    //属性类型
                  </span>
                  <div className="xo-padding-xs xo-border-light-gray">
                    {"class MyComponent extends React.Component {"}
                    <br/>
                    <span className="xo-margin-left-xs">//...</span>
                    <br/>
                    {"}"}
                    <br/>
                    <br/>
                    {"MyComponent.defaultProps = {"}
                    <br/>
                    <span className="xo-margin-left-xs">prop1: React.PropTypes.string</span>
                    <div className="xo-margin-left-xs xo-font-gray">//React.PropTypes.array</div>
                    <div className="xo-margin-left-xs xo-font-gray">//React.PropTypes.bool</div>
                    <div className="xo-margin-left-xs xo-font-gray">//React.PropTypes.func</div>
                    <div className="xo-margin-left-xs xo-font-gray">//React.PropTypes.number</div>
                    <div className="xo-margin-left-xs xo-font-gray">//React.PropTypes.object</div>
                    <div className="xo-margin-left-xs xo-font-gray">//React.PropTypes.string</div>
                    <div className="xo-margin-left-xs xo-font-gray">//React.PropTypes.symbol</div>
                    <div className="xo-margin-left-xs xo-font-gray">
                      <i>
                        //以上为基本类型, 详细使用可以参考
                        <a className="xo-margin-left-xs xo-font-primary" target="_blank" href="https://facebook.github.io/react/docs/typechecking-with-proptypes.html">Typechecking With PropTypes</a>
                        <a className="xo-margin-left-xs xo-font-primary" target="_blank" href="http://blog.csdn.net/u013224660/article/details/51163067">Props 验证</a>
                      </i>
                    </div>
                    <div className="xo-margin-left-xs xo-font-gray">
                      <b><i>//必须声明props类型</i></b>
                    </div>
                    {"}"}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="reactComponentDemo">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>实例</h1>
            <div className="xo-padding-xs">
              <h3>Component.jsx</h3>
              <div className="xo-padding-xs xo-border-light-gray">
                <div>import React from "react";</div>
                <br/>
                <div>{"export default class Component extends React.Component {"}</div>
                <br/>
                <div className="xo-margin-left-md">{"displayName = 'Component';"}</div>
                <br/>
                <div className="xo-margin-left-md">
                  {"constructor() {"}
                  <div className="xo-margin-left-md">{"super(props);"}</div>
                  {"}"}
                </div>
                <br/>
                <div className="xo-margin-left-md">
                  {"componentWillMount() {"}
                  <div className="xo-margin-left-md">//...</div>
                  {"}"}
                </div>
                <br/>
                <div className="xo-margin-left-md">
                  {"render() {"}
                  <div className="xo-margin-left-md">
                  {"return ("}
                  <div className="xo-margin-left-md">
                    {"<div>this.props.prop1</div>"}
                  </div>
                  {")"}
                  </div>
                  {"}"}
                </div>
                <br/>
                <div className="xo-margin-left-md">
                  {"componentDidMount() {"}
                  <div className="xo-margin-left-md">//...</div>
                  {"}"}
                </div>
                <br/>
                <div>{"}"}</div>
                <br/>
                <div>{"Component.defaultProps = {"}</div>
                <div className="xo-margin-left-md">{"prop1: 'prop1'"}</div>
                <div>{"};"}</div>
                <br/>
                <div>{"Component.propTypes = {"}</div>
                <div className="xo-margin-left-md">{"prop1: React.PropTypes.string"}</div>
                <div>{"};"}</div>
              </div>
              <h3>TestComponent.jsx</h3>
              <div className="xo-padding-xs xo-border-light-gray">
                <div>import React from "react";</div>
                <div>import Component from "./Component";</div>
                <br/>
                <div>{"export default class TestComponent extends React.Component {"}</div>
                <br/>
                <div className="xo-margin-left-md">{"displayName = 'TestComponent';"}</div>
                <br/>
                <div className="xo-margin-left-md">
                  {"render() {"}
                  <div className="xo-margin-left-md">
                    {"return ("}
                    <div className="xo-margin-left-md">
                      {"<div>TestComponent"}
                      <div className="xo-margin-left-md">{"<Component prop1='prop1' />"}</div>
                      {"</div>"}
                    </div>
                    {")"}
                  </div>
                  {"}"}
                </div>
                <br/>
                {"}"}
              </div>
            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="reactComponentRef">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>Ref</h1>
            ref属性接受一个回调,回调将在组件被挂载和卸载后立即执行, 当DOM元素使用ref属性, ref接受DOM,并且可以对其进行操作, 也可以用于组件之间的协调
            <a className="xo-margin-left-md xo-font-primary" target="_blank" href="https://facebook.github.io/react/docs/refs-and-the-dom.html">官方文档</a>
            <div className="xo-padding-xs">
              <div>{"class TestRef extends React.Component {"}</div>
              <br/>
              <div className="xo-margin-left-md">
                {"render() {"}
                <div className="xo-margin-left-md">
                  {"return ("}
                  <div className="xo-margin-left-md">{"<div> Test Ref </div>"}</div>
                  {")"}
                </div>
                {"}"}
              </div>
              <br/>
              <div className="xo-margin-left-md">
                {"test() {"}
                <div className="xo-margin-left-md">
                  {"console.log('This is the TestRef Component function!');"}
                </div>
                {"}"}
              </div>
              <br/>
              <div>{"}"}</div>
            </div>
            <hr/>
            <div className="xo-padding-xs">
              <div>{"class MyComponent extends React.Component {"}</div>
              <br/>
              <div className="xo-margin-left-md">{"testRef = null;"}</div>
              <br/>
              <div className="xo-margin-left-md">
                {"render() {"}
                <div className="xo-margin-left-md">
                  {"return ("}
                  <div className="xo-margin-left-md">
                    {"<div>"}
                    <div className="xo-margin-left-md">{"<TestRef ref={(_testRef) => { this.testRef = _testRef; }} />"}</div>
                    <div className="xo-margin-left-md">{"<button onClick={(e) => this.testClick(e)}>test</button>"}</div>
                    {"</div>"}
                  </div>
                  {")"}
                </div>
                {"}"}
              </div>
              <br/>
              <div className="xo-margin-left-md">
                {"testClick(e) {"}
                <div className="xo-margin-left-md">
                  {"this.testRef.test();"}
                  <i className="xo-margin-left-md xo-font-gray">//This is the TestRef Component function!</i>
                </div>
                {"}"}
              </div>
              <br/>
              <div>{"}"}</div>
            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="reactComponentAPI">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>常用API</h1>
            <a className="xo-margin-left-md xo-font-primary" target="_blank" href="https://facebook.github.io/react/docs/react-api.html">官方API</a>
            <div className="xo-padding-xs">
              <ul>
                <li className="xo-margin-bottom-md">实现 React.Component 或者 React.PureComponent</li>
                <li className="xo-margin-bottom-md">
                  React.cloneElement()
                  <span className="xo-margin-left-md">使用元素作为起点,克隆并返回一个新的React元素, key与ref从原始开始保留</span>
                  <div className="xo-padding-xs xo-border-light-gray">
                    React.cloneElement(
                    <div className="xo-margin-left-md">element,</div>
                    <div className="xo-margin-left-md">[props],</div>
                    <div className="xo-margin-left-md">[...children]</div>
                    )
                  </div>
                </li>
                <li className="xo-margin-bottom-md">
                  React.isValidElement()
                  <span className="xo-margin-left-md">验证对象是否为React元素, 返回 true / false </span>
                  <div className="xo-padding-xs xo-border-light-gray">
                    React.isValidElement(object)
                  </div>
                </li>
                <li className="xo-margin-bottom-md">
                  React.Children
                  <span className="xo-margin-left-md">提供了处理this.props.children不透明数据的实用函数</span>
                  <div className="xo-padding-xs xo-border-light-gray xo-margin-bottom-md">
                    <b>
                      React.Children.map(children, function[(thisArg)])
                      <i className="xo-font-gray xo-margin-left-md">//遍历每一个子元素, 如果children为空则不执行,返回数组,如果children为空则返回null或undefined</i>
                    </b>
                  </div>
                  <div className="xo-padding-xs xo-border-light-gray xo-margin-bottom-md">
                    <b>
                      React.Children.forEach(children, function[(thisArg)])
                      <i className="xo-font-gray xo-margin-left-md">//遍历每一个子元素, 但是不返回数组</i>
                    </b>
                  </div>
                  <div className="xo-padding-xs xo-border-light-gray xo-margin-bottom-md">
                    <b>
                      Children.count(children)
                      <i className="xo-font-gray xo-margin-left-md">//返回子元素中的组件总数，等于传递给map或forEach的回调的次数将被调用</i>
                    </b>
                  </div>
                  <div className="xo-padding-xs xo-border-light-gray xo-margin-bottom-md">
                    <b>
                      React.Children.only(children)
                      <i className="xo-font-gray xo-margin-left-md">//返回子元素中的唯一子元素,否则抛出异常</i>
                    </b>
                  </div>
                  <div className="xo-padding-xs xo-border-light-gray xo-margin-bottom-md">
                    <b>
                      React.Children.toArray(children)
                      <i className="xo-font-gray xo-margin-left-md">
                      //更改键以在展平子级列表时保留嵌套数组的语义,也就是说,toArray为返回的数组中的每个键赋予前缀,以使每个元素的键的范围限定为包含它的输入数组
                      </i>
                    </b>
                  </div>
                </li>
                <li className="xo-margin-bottom-md">
                  React.PropTypes
                  <span className="xo-margin-left-md">组件属性传递验证器</span>
                  <div className="xo-padding-xs xo-margin-bottom-md xo-border-light-gray">
                    <b>
                      React.PropTypes.array
                      <i className="xo-margin-left-md xo-font-gray">//数组</i>
                    </b>
                  </div>
                  <div className="xo-padding-xs xo-margin-bottom-md xo-border-light-gray">
                    <b>
                      React.PropTypes.bool
                      <i className="xo-margin-left-md xo-font-gray">//布尔</i>
                    </b>
                  </div>
                  <div className="xo-padding-xs xo-margin-bottom-md xo-border-light-gray">
                    <b>
                      React.PropTypes.func
                      <i className="xo-margin-left-md xo-font-gray">//function</i>
                    </b>
                  </div>
                  <div className="xo-padding-xs xo-margin-bottom-md xo-border-light-gray">
                    <b>
                      React.PropTypes.number
                      <i className="xo-margin-left-md xo-font-gray">//数字</i>
                    </b>
                  </div>
                  <div className="xo-padding-xs xo-margin-bottom-md xo-border-light-gray">
                    <b>
                      React.PropTypes.object
                      <i className="xo-margin-left-md xo-font-gray">//对象</i>
                    </b>
                  </div>
                  <div className="xo-padding-xs xo-margin-bottom-md xo-border-light-gray">
                    <b>
                      React.PropTypes.string
                      <i className="xo-margin-left-md xo-font-gray">//字符串</i>
                    </b>
                  </div>
                  <div className="xo-padding-xs xo-margin-bottom-md xo-border-light-gray">
                    <b>
                      React.PropTypes.symbol
                      <i className="xo-margin-left-md xo-font-gray">//symbol</i>
                    </b>
                  </div>
                  <div className="xo-padding-xs xo-margin-bottom-md xo-border-light-gray">
                    <b>
                      React.PropTypes.node
                      <i className="xo-margin-left-md xo-font-gray">//node</i>
                    </b>
                  </div>
                  <div className="xo-padding-xs xo-margin-bottom-md xo-border-light-gray">
                    <b>
                      React.PropTypes.element
                      <i className="xo-margin-left-md xo-font-gray">//react element</i>
                    </b>
                  </div>
                  <div className="xo-padding-xs xo-margin-bottom-md xo-border-light-gray">
                    <b>
                      React.PropTypes.instanceOf(class)
                      <i className="xo-margin-left-md xo-font-gray">//与js中的instanceOf相似, 如 instanceOf(Array)</i>
                    </b>
                  </div>
                  <div className="xo-padding-xs xo-margin-bottom-md xo-border-light-gray">
                    <b>
                      React.PropTypes.oneOf(arrayOfValues)
                      <i className="xo-margin-left-md xo-font-gray">//数组中的某个值,类似enum</i>
                    </b>
                    <br/>
                    <div>{"MyComponent.propsTypes = {"}</div>
                    <div className="xo-margin-left-md">
                      {"optionalEnum: React.PropTypes.oneOf(['one', 'two']),"}
                    </div>
                    <div>{"}"}</div>
                  </div>
                  <div className="xo-padding-xs xo-margin-bottom-md xo-border-light-gray">
                    <b>
                      React.PropTypes.oneOfType(arrayOfPropTypes)
                      <i className="xo-margin-left-md xo-font-gray">//react propsTypes中的一个</i>
                    </b>
                    <br/>
                    <div>{"MyComponent.PropTypes = {"}</div>
                    <div className="xo-margin-left-md">
                      <div>{"optionalUnion: React.propsTypes.oneOfType(["}</div>
                      <div className="xo-margin-left-md">{"React.PropTypes.string,"}</div>
                      <div className="xo-margin-left-md">{"React.PropTypes.number,"}</div>
                      <div className="xo-margin-left-md">{"React.PropTypes.instanceOf(Message),"}</div>
                      <div>{"])"}</div>
                    </div>
                    <div>{"}"}</div>
                  </div>
                  <div className="xo-padding-xs xo-margin-bottom-md xo-border-light-gray">
                    <b>
                      React.PropTypes.arrayOf(propType)
                      <i className="xo-margin-left-md xo-font-gray">//数组类型</i>
                    </b>
                    <br/>
                    <div>{"MyComponent.propType = {"}</div>
                    <div className="xo-margin-left-md">{"optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),"}</div>
                    <div>{"}"}</div>
                  </div>
                  <div className="xo-padding-xs xo-margin-bottom-md xo-border-light-gray">
                    <b>
                      React.PropTypes.objectOf(propType)
                      <i className="xo-margin-left-md xo-font-gray">//对象类型</i>
                    </b>
                    <br/>
                    <div>{"MyComponent.propType = {"}</div>
                    <div className="xo-margin-left-md">{"optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),"}</div>
                  </div>
                  <div className="xo-padding-xs xo-margin-bottom-md xo-border-light-gray">
                    <b>
                      React.PropTypes.shape(object)
                      <i className="xo-margin-left-md xo-font-gray">//具体对象</i>
                    </b>
                    <br/>
                    <div>{"MyComponent.propType = {"}</div>
                    <div className="xo-margin-left-md">
                      <div>{"optionalWithShape: React.PropTypes.shape({"}</div>
                      <div className="xo-margin-left-md">{"color: React.PropTypes.string,"}</div>
                      <div className="xo-margin-left-md">{"fontSize: React.PropTypes.number"}</div>
                      <div>{"}),"}</div>
                    </div>
                    <div>{"}"}</div>
                  </div>
                  <div className="xo-padding-xs xo-margin-bottom-md xo-border-light-gray">
                    <b>
                      React.PropTypes.any
                      <i className="xo-margin-left-md xo-font-gray">//任何数据类型值,通常为isRequired</i>
                    </b>
                    <br/>
                    <div>{"MyComponent.propType = {"}</div>
                    <div className="xo-margin-left-md">{"optionalAny: React.PropTypes.any.isRequired,"}</div>
                  </div>
                  <div className="xo-padding-xs xo-margin-bottom-md xo-border-light-gray">
                    <b>
                      propType.isRequired
                      <i className="xo-margin-left-md xo-font-gray">//使用组件必须提供对应的prop,否则显示警告</i>
                    </b>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="reactComponentEvent">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>事件</h1>
            <a className="xo-margin-left-md xo-font-primary" target="_blank" href="http://reactjs.cn/react/docs/events.html">Event System</a>

            <div className="xo-padding-xs xo-margin-bottom-md">
              事件处理程序将传递SyntheticEvent实例,这是一个跨浏览器本机事件的包装器,它具有与浏览器本机事件相同的接口,包括stopPropagation()
              和preventDefault(),如果需要底层浏览器事件,只需要使用nativeEvent属性来获取它,每个SyntheticEvent都有以下属性:
              <div className="xo-border-light-gray xo-padding-xs">
                <div className="xo-margin-left-md xo-margin-bottom-sm">boolean bubbles</div>
                <div className="xo-margin-left-md xo-margin-bottom-sm">boolean cancelable</div>
                <div className="xo-margin-left-md xo-margin-bottom-sm">DOMEventTarget currentTarget</div>
                <div className="xo-margin-left-md xo-margin-bottom-sm">boolean defaultPrevented</div>
                <div className="xo-margin-left-md xo-margin-bottom-sm">number eventPhase</div>
                <div className="xo-margin-left-md xo-margin-bottom-sm">boolean isTrusted</div>
                <div className="xo-margin-left-md xo-margin-bottom-sm">DOMEvent nativeEvent</div>
                <div className="xo-margin-left-md xo-margin-bottom-sm">void preventDefault()</div>
                <div className="xo-margin-left-md xo-margin-bottom-sm">boolean isDefaultPrevented()</div>
                <div className="xo-margin-left-md xo-margin-bottom-sm">void stopPropagation()</div>
                <div className="xo-margin-left-md xo-margin-bottom-sm">boolean isPropagationStopped()</div>
                <div className="xo-margin-left-md xo-margin-bottom-sm">DOMEventTarget target</div>
                <div className="xo-margin-left-md xo-margin-bottom-sm">number timeStamp</div>
                <div className="xo-margin-left-md">string type</div>
              </div>
            </div>

            <div className="xo-padding-xs xo-margin-bottom-md">
              <h2>Clipboard Events</h2>
              <div className="xo-margin-bottom-sm">Event names:</div>
              <div className="xo-padding-xs xo-border-light-gray xo-margin-bottom-md">
                <span className="xo-margin-right-md">onCopy</span>
                <span className="xo-margin-right-md">onCut</span>
                <span className="xo-margin-right-md">onPaste</span>
              </div>
              <div className="xo-margin-bottom-sm">Properties:</div>
              <div className="xo-padding-xs xo-border-light-gray">
                <span className="xo-margin-right-md">DOMDataTransfer</span>
                <span className="xo-margin-right-md">clipboardData</span>
              </div>
            </div>

            <div className="xo-padding-xs xo-margin-bottom-md">
              <h2>Composition Events</h2>
              <div className="xo-margin-bottom-sm">Event names:</div>
              <div className="xo-padding-xs xo-border-light-gray xo-margin-bottom-md">
                <span className="xo-margin-right-md">onCompositionEnd</span>
                <span className="xo-margin-right-md">onCompositionStart</span>
                <span className="xo-margin-right-md">onCompositionUpdate</span>
              </div>
              <div className="xo-margin-bottom-sm">Properties:</div>
              <div className="xo-padding-xs xo-border-light-gray">
                <span className="xo-margin-right-md">string</span>
                <span className="xo-margin-right-md">data</span>
              </div>
            </div>

            <div className="xo-padding-xs xo-margin-bottom-md">
              <h2>Keyboard Events</h2>
              <div className="xo-margin-bottom-sm">Event names:</div>
              <div className="xo-padding-xs xo-border-light-gray xo-margin-bottom-md">
                <span className="xo-margin-right-md">onKeyDown</span>
                <span className="xo-margin-right-md">onKeyPress</span>
                <span className="xo-margin-right-md">onKeyUp</span>
              </div>
              <div className="xo-margin-bottom-sm">Properties:</div>
              <div className="xo-padding-xs xo-border-light-gray">
                <div className="xo-margin-right-md">boolean altKey</div>
                <div className="xo-margin-right-md">number charCode</div>
                <div className="xo-margin-right-md">boolean ctrlKey</div>
                <div className="xo-margin-right-md">boolean getModifierState(key)</div>
                <div className="xo-margin-right-md">string key</div>
                <div className="xo-margin-right-md">number keyCode</div>
                <div className="xo-margin-right-md">string locale</div>
                <div className="xo-margin-right-md">number location</div>
                <div className="xo-margin-right-md">boolean metaKey</div>
                <div className="xo-margin-right-md">boolean repeat</div>
                <div className="xo-margin-right-md">boolean shiftKey</div>
                <div className="xo-margin-right-md">number which</div>
              </div>
            </div>

            <div className="xo-padding-xs xo-margin-bottom-md">
              <h2>Focus Events</h2>
              <div className="xo-margin-bottom-sm">Event names:</div>
              <div className="xo-padding-xs xo-border-light-gray xo-margin-bottom-md">
                <span className="xo-margin-right-md">onFocus</span>
                <span className="xo-margin-right-md">onBlur</span>
              </div>
              <div className="xo-margin-bottom-sm">Properties:</div>
              <div className="xo-padding-xs xo-border-light-gray">
                <span className="xo-margin-right-md">DOMEventTarget</span>
                <span className="xo-margin-right-md">relatedTarget</span>
              </div>
            </div>

            <div className="xo-padding-xs xo-margin-bottom-md">
              <h2>Form Events</h2>
              <div className="xo-margin-bottom-sm">Event names:</div>
              <div className="xo-padding-xs xo-border-light-gray xo-margin-bottom-md">
                <span className="xo-margin-right-md">onChange</span>
                <span className="xo-margin-right-md">onInput</span>
                <span className="xo-margin-right-md">onSubmit</span>
              </div>
            </div>

            <div className="xo-padding-xs xo-margin-bottom-md">
              <h2>Mouse Events</h2>
              <div className="xo-margin-bottom-sm">Event names:</div>
              <div className="xo-padding-xs xo-border-light-gray xo-margin-bottom-md xo-layout">
                <span className="xo-margin-right-md xo-left">onClick</span>
                <span className="xo-margin-right-md xo-left">onContextMenu</span>
                <span className="xo-margin-right-md xo-left">onDoubleClick</span>
                <span className="xo-margin-right-md xo-left">onDrag</span>
                <span className="xo-margin-right-md xo-left">onDragEnd</span>
                <span className="xo-margin-right-md xo-left">onDragEnter</span>
                <span className="xo-margin-right-md xo-left">onDragExit</span>
                <span className="xo-margin-right-md xo-left">onDragLeave</span>
                <span className="xo-margin-right-md xo-left">onDragOver</span>
                <span className="xo-margin-right-md xo-left">onDragStart</span>
                <span className="xo-margin-right-md xo-left">onDrop</span>
                <span className="xo-margin-right-md xo-left">onMouseDown</span>
                <span className="xo-margin-right-md xo-left">onMouseEnter</span>
                <span className="xo-margin-right-md xo-left">onMouseLeave</span>
                <span className="xo-margin-right-md xo-left">onMouseMove</span>
                <span className="xo-margin-right-md xo-left">onMouseOut</span>
                <span className="xo-margin-right-md xo-left">onMouseOver</span>
                <span className="xo-margin-right-md xo-left">onMouseUp</span>
              </div>
              <div className="xo-margin-bottom-sm">Properties:</div>
              <div className="xo-padding-xs xo-border-light-gray">
                <div className="xo-margin-right-md">boolean altKey</div>
                <div className="xo-margin-right-md">number button</div>
                <div className="xo-margin-right-md">number buttons</div>
                <div className="xo-margin-right-md">number clientX</div>
                <div className="xo-margin-right-md">number clientY</div>
                <div className="xo-margin-right-md">boolean ctrlKey</div>
                <div className="xo-margin-right-md">boolean getModifierState(key)</div>
                <div className="xo-margin-right-md">boolean metaKey</div>
                <div className="xo-margin-right-md">number pageX</div>
                <div className="xo-margin-right-md">number pageY</div>
                <div className="xo-margin-right-md">DOMEventTarget relatedTarget</div>
                <div className="xo-margin-right-md">number screenX</div>
                <div className="xo-margin-right-md">number screenY</div>
                <div className="xo-margin-right-md">boolean shiftKey</div>
              </div>
            </div>

            <div className="xo-padding-xs xo-margin-bottom-md">
              <h2>Selection Events</h2>
              <div className="xo-margin-bottom-sm">Event names:</div>
              <div className="xo-padding-xs xo-border-light-gray xo-margin-bottom-md">
                <span className="xo-margin-right-md">onSelect</span>
              </div>
            </div>

            <div className="xo-padding-xs xo-margin-bottom-md">
              <h2>Touch Events</h2>
              <div className="xo-margin-bottom-sm">Event names:</div>
              <div className="xo-padding-xs xo-border-light-gray xo-margin-bottom-md xo-layout">
                <span className="xo-margin-right-md xo-left">onTouchCancel</span>
                <span className="xo-margin-right-md xo-left">onTouchEnd</span>
                <span className="xo-margin-right-md xo-left">onTouchMove</span>
                <span className="xo-margin-right-md xo-left">onTouchStart</span>
              </div>
              <div className="xo-margin-bottom-sm">Properties:</div>
              <div className="xo-padding-xs xo-border-light-gray">
                <div className="xo-margin-right-md">boolean altKey</div>
                <div className="xo-margin-right-md">DOMTouchList changedTouches</div>
                <div className="xo-margin-right-md">boolean ctrlKey</div>
                <div className="xo-margin-right-md">boolean getModifierState(key)</div>
                <div className="xo-margin-right-md">boolean metaKey</div>
                <div className="xo-margin-right-md">boolean shiftKey</div>
                <div className="xo-margin-right-md">DOMTouchList targetTouches</div>
                <div className="xo-margin-right-md">DOMTouchList touches</div>
              </div>
            </div>

            <div className="xo-padding-xs xo-margin-bottom-md">
              <h2>UI Events</h2>
              <div className="xo-margin-bottom-sm">Event names:</div>
              <div className="xo-padding-xs xo-border-light-gray xo-margin-bottom-md">
                <span className="xo-margin-right-md">onScroll</span>
              </div>
              <div className="xo-margin-bottom-sm">Properties:</div>
              <div className="xo-padding-xs xo-border-light-gray">
                <div className="xo-margin-right-md">number detail</div>
                <div className="xo-margin-right-md">DOMAbstractView view</div>
              </div>
            </div>

            <div className="xo-padding-xs xo-margin-bottom-md">
              <h2>Wheel Events</h2>
              <div className="xo-margin-bottom-sm">Event names:</div>
              <div className="xo-padding-xs xo-border-light-gray xo-margin-bottom-md">
                <span className="xo-margin-right-md">onWheel</span>
              </div>
              <div className="xo-margin-bottom-sm">Properties:</div>
              <div className="xo-padding-xs xo-border-light-gray">
                <div className="xo-margin-right-md">number deltaMode</div>
                <div className="xo-margin-right-md">number deltaX</div>
                <div className="xo-margin-right-md">number deltaY</div>
                <div className="xo-margin-right-md">number deltaZ</div>
              </div>
            </div>

            <div className="xo-padding-xs xo-margin-bottom-md">
              <h2>Media Events</h2>
              <div className="xo-margin-bottom-sm">Event names:</div>
              <div className="xo-layout xo-padding-xs xo-border-light-gray xo-margin-bottom-md">
                <span className="xo-margin-right-md xo-left">onAbort</span>
                <span className="xo-margin-right-md xo-left">onCanPlay</span>
                <span className="xo-margin-right-md xo-left">onCanPlayThrough</span>
                <span className="xo-margin-right-md xo-left">onDurationChange</span>
                <span className="xo-margin-right-md xo-left">onEmptied</span>
                <span className="xo-margin-right-md xo-left">onEncrypted</span>
                <span className="xo-margin-right-md xo-left">onEnded</span>
                <span className="xo-margin-right-md xo-left">onError</span>
                <span className="xo-margin-right-md xo-left">onLoadedData</span>
                <span className="xo-margin-right-md xo-left">onLoadedMetadata</span>
                <span className="xo-margin-right-md xo-left">onLoadStart</span>
                <span className="xo-margin-right-md xo-left">onPause</span>
                <span className="xo-margin-right-md xo-left">onPlay</span>
                <span className="xo-margin-right-md xo-left">onPlaying</span>
                <span className="xo-margin-right-md xo-left">onProgress</span>
                <span className="xo-margin-right-md xo-left">onRateChange</span>
                <span className="xo-margin-right-md xo-left">onSeeked</span>
                <span className="xo-margin-right-md xo-left">onSeeking</span>
                <span className="xo-margin-right-md xo-left">onStalled</span>
                <span className="xo-margin-right-md xo-left">onSuspend</span>
                <span className="xo-margin-right-md xo-left">onTimeUpdate</span>
                <span className="xo-margin-right-md xo-left">onVolumeChange</span>
                <span className="xo-margin-right-md xo-left">onWaiting </span>
              </div>
            </div>

            <div className="xo-padding-xs xo-margin-bottom-md">
              <h2>Image Events</h2>
              <div className="xo-margin-bottom-sm">Event names:</div>
              <div className="xo-padding-xs xo-border-light-gray xo-margin-bottom-md xo-layout">
                <span className="xo-margin-right-md xo-left">onLoad</span>
                <span className="xo-margin-right-md xo-left">onError</span>
              </div>
            </div>

            <div className="xo-padding-xs xo-margin-bottom-md">
              <h2>Animation Events</h2>
              <div className="xo-margin-bottom-sm">Event names:</div>
              <div className="xo-padding-xs xo-border-light-gray xo-margin-bottom-md xo-layout">
                <span className="xo-margin-right-md xo-left">onAnimationStart</span>
                <span className="xo-margin-right-md xo-left">onAnimationEnd</span>
                <span className="xo-margin-right-md xo-left">onAnimationIteration</span>
              </div>
              <div className="xo-margin-bottom-sm">Properties:</div>
              <div className="xo-padding-xs xo-border-light-gray">
                <div className="xo-margin-right-md">string animationName</div>
                <div className="xo-margin-right-md">string pseudoElement</div>
                <div className="xo-margin-right-md">float elapsedTime</div>
              </div>
            </div>

            <div className="xo-padding-xs xo-margin-bottom-md">
              <h2>Transition Events</h2>
              <div className="xo-margin-bottom-sm">Event names:</div>
              <div className="xo-padding-xs xo-border-light-gray xo-margin-bottom-md xo-layout">
                <span className="xo-margin-right-md xo-left">onTransitionEnd</span>
              </div>
              <div className="xo-margin-bottom-sm">Properties:</div>
              <div className="xo-padding-xs xo-border-light-gray">
                <div className="xo-margin-right-md">string propertyName</div>
                <div className="xo-margin-right-md">string pseudoElement</div>
                <div className="xo-margin-right-md">float elapsedTime</div>
              </div>
            </div>

            <h2>Demo</h2>
            <div className="xo-padding-xs xo-border-light-gray">
              {"class MyButton extends React.Component {"}
              <br/>
              <br/>
              <div className="xo-margin-left-md">
                {"render() {"}
                <div className="xo-margin-left-md">
                  {"return ("}
                  <div className="xo-margin-left-md">
                    {"<button onClick={(e) => this.handleClick(e)}>test event click</button>"}
                  </div>
                  {")"}
                </div>
                {"}"}
              </div>
              <br/>
              <div className="xo-margin-left-md">
                {"handleClick(e) {"}
                <div className="xo-margin-left-md">
                  {"console.log('handleClick...');"}
                </div>
                {"}"}
              </div>
              <br/>
              {"}"}
            </div>

          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="reactComponentHelp">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>附属文档</h1>
            <div className="xo-padding-xs">
              <div className="xo-margin-left-md xo-margin-bottom-md">
                <a className="xo-font-primary" target="_blank" href="http://reactjs.cn/react/index.html">1.官方文档</a>
              </div>
              <div className="xo-margin-left-md xo-margin-bottom-md">
                <a className="xo-font-primary" target="_blank" href="http://reactjs.cn/react/docs/getting-started-zh-CN.html">2.入门教程</a>
              </div>
              <div className="xo-margin-left-md xo-margin-bottom-md">
                <a className="xo-font-primary" target="_blank" href="http://www.uprogrammer.cn/react-router-cn/index.html">3.react-router</a>
              </div>
              <div className="xo-margin-left-md xo-margin-bottom-md">
                <a className="xo-font-primary" target="_blank" href="https://github.com/reactjs/react-router-redux/blob/master/examples/basic/components/Home.js">4.react-router-reduxo-demo</a>
              </div>
              <div className="xo-margin-left-md xo-margin-bottom-md">
                <a className="xo-font-primary" target="_blank" href="http://cn.redux.js.org/docs/introduction/ThreePrinciples.html">5.react-redux</a>
              </div>
            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="sassFormat">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>编写规范</h1>
              <div className="xo-padding-xs">
                <div className="xo-margin-bottom-sm">(1). <b>必须</b>以小写定义文件名,单词分割符为-,前缀可加_,(注意与jsx组件合同一处则不需要_作为前缀) 如<i>_style.scss</i></div>
                <div className="xo-margin-bottom-sm">(2). <b>必须</b>xxo-xx来定义class, 如<i>main-box</i></div>
                <div className="xo-margin-bottom-sm">(3). <b>分辨率(从小到大)<i> 前缀或后缀 </i></b> xs 默认(无限制) sm >= 576px md >= 768px lg >= 992px xl >= 1200, 详细可以查看 <a className="xo-font-primary" href="#">UI / 布局</a></div>
                <div className="xo-margin-bottom-sm">(4). <b>大小(从小到大)<i> 前缀或后缀 </i></b> sm md lm lg  ls xl xs(默认), 详细可以查看 <a className="xo-font-primary" href="#">输入 / 按钮</a></div>
                <i>当前没有单独分离出编译sass完毕后的css文件,与js按需加载类似,按需内嵌入html中</i>
              </div>
              <hr/>
              <div className="xo-padding-xs">
                <div className="xo-margin-bottom-sm">
                  <div className="xo-margin-bottom-sm">(5).嵌套</div>
                  <div className="xo-border-light-gray xo-padding-md">
                    <div>.sass-box {"{"}</div>
                    <div className="xo-margin-left-lm">color: #fff;</div>
                    <div className="xo-margin-left-lm">font-size: 15px;</div>
                    <br/>
                    <div className="xo-margin-left-lm">
                      <div>&.active {"{"}</div>
                      <div className="xo-margin-left-lm">background-color: blue;</div>
                      <div className="xo-margin-left-lm">color: #fff;</div>
                      <div>{"}"}</div>
                    </div>
                    <br/>
                    <div className="xo-margin-left-lm">
                      <div>font: 2px/3px {"{"}</div>
                      <div className="xo-margin-left-lm">family: fantasy;</div>
                      <div className="xo-margin-left-lm">size: 30em;</div>
                      <div className="xo-margin-left-lm">weight: bold;</div>
                      <div>{"}"}</div>
                    </div>
                    <br/>
                    <div className="xo-margin-left-lm">
                      <div>p {"{"}</div>
                      <div className="xo-margin-left-lm">background-color: #666;</div>
                      <div className="xo-margin-left-lm">color: #000;</div>
                      <div>{"}"}</div>
                    </div>
                    <div>{"}"}</div>
                  </div>
                  <div>被翻译为:</div>
                  <div className="xo-border-light-gray xo-padding-md">
                    <div>.sass-box {"{"}</div>
                    <div className="xo-margin-left-lm">color: #fff;</div>
                    <div className="xo-margin-left-lm">font-size: 15px; {"}"}</div>
                    <div className="xo-margin-left-lm">
                      <div>.sass-box.active {"{"}</div>
                      <div className="xo-margin-left-lm">background-color: blue;</div>
                      <div className="xo-margin-left-lm">color: #fff; {"}"}</div>
                    </div>
                    <div className="xo-margin-left-lm">
                      <div>.sass-box {"{"}</div>
                      <div className="xo-margin-left-lm">
                        <div>font: 2px/3px;</div>
                        <div className="xo-margin-left-lm">font-family: fantasy;</div>
                        <div className="xo-margin-left-lm">font-size: 30em;</div>
                        <div className="xo-margin-left-lm">font-weight: bold; {"}"}</div>
                      </div>
                    </div>
                    <div className="xo-margin-left-lm">
                      <div>.sass-box p {"{"}</div>
                      <div className="xo-margin-left-lm">background-color: #666;</div>
                      <div className="xo-margin-left-lm">color: #000; {"}"}</div>
                    </div>
                  </div>
                </div>
                <div className="xo-margin-bottom-sm">
                  相比css编写更具结构化,编译后标准化输出css
                  <div className="xo-font-primary">(1).&表示父选择符,如.sass-box{"{ & {}/* &表示.sass-box */ }"}</div>
                  <div className="xo-font-primary">(2).嵌套选择符与属性,可查看上面例子对应翻译的结果</div>
                  <div className="xo-font-primary"><i>当前没有单独分离出编译sass完毕后的css文件,与js按需加载类似,按需内嵌入html中</i></div>
                </div>
              </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="sassNote">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>注释</h1>
            <label>
              SassScript 支持注释 /* */ 和 //
            </label>
            <div className="xo-border-light-gray xo-padding-md">
              <div>{"/* This comment is"}</div>
              <div>{" * several lines long. */"}</div>
              <div>{"body { color: black; }"}</div>
              <div>{"// These comments are only test comments"}</div>
              <div>{"a { color: red; }"}</div>
            </div>
            <div>被翻译为:</div>
            <div className="xo-border-light-gray xo-padding-md">
              <div>{"/* This comment is"}</div>
              <div>{" * several lines long. */"}</div>
              <div>{"body { color: black; }"}</div>
              <div>{"a { color: red; }"}</div>
            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="sassDataType">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>数据类型</h1>
            <label>SassScript 支持六种主要的数据类型:</label>
            <ul>
              <li>数字 (例如 1.2, 13, 10px)</li>
              <li>文本字符串,无论是否有引号 (例如 "foo", 'bar', baz)</li>
              <li>颜色 (例如 blue, #04a3f9, rgba(255, 0, 0, 0.5))</li>
              <li>布尔值 (例如 true, false)</li>
              <li>空值 (例如 null)</li>
              <li>值列表,用空格或逗号分隔 (例如 1.5em 1em 0 2em, Helvetica, Arial, sans-serif)</li>
            </ul>
            <div className="xo-padding-xs">
              <div>SassScript 还支持所有其他 CSS 属性值类型， 例如 Unicode 范围和 !important 声明。 然而，它不会对这些类型做特殊处理。 它们只会被当做不带引号的字符串看待。</div>
              <div><i>@media 不支持rem单位</i></div>
            </div>
            <br/>
            <h2>字符串</h2>
            <div>
              CSS提供了两种类型的字符串: 带引号的字符串, 例如 <b className="xo-margin-left-xs xo-font-primary">"Lucida Grande"</b> 或 <b className="xo-margin-left-xs xo-font-primary">'http://sasslang.com'</b>;
              不带引号的字符串, 例如 <b className="xo-margin-left-xs xo-font-primary">sans-serif</b> 或 <b className="xo-margin-left-xs xo-font-primary">bold</b>,
              <b className="xo-margin-left-xs xo-font-primary">{"#{} 插值"}</b>
              <div className="xo-padding-xs xo-border-light-gray">
                {"@mixin firefoxo-message($selector) {"}
                <div className="xo-margin-left-md">
                  {"body.firefox #{$selector}:before {"}
                  <div className="xo-margin-left-md">
                    {"content: 'Hi, Firefox users!';"}
                  </div>
                  {"}"}
                </div>
                {"}"}
                <br/>
                {"@include firefoxo-message('.header');"}
              </div>
              <br/>
              被翻译为:
              <br/>
              <div className="xo-padding-xs xo-border-light-gray">
                {"body.firefox .header:before {"}
                <div className="xo-margin-left-md">{"content: 'Hi, Firefox users!'; }"}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="sassNumOper">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>数字运算</h1>
            <label>
              SassScript 支持数字的标准运算（加 +、减 -、乘 *、除 /和取模 %），并且，如果需要的话，也可以在不同单位间做转换,
              数字也支持关系运算（{"<、>、<=、>="}）， 等式运算（==、!=）被所有数据类型支持。
            </label>
            <div className="xo-border-light-gray xo-padding-md">
              p {" { width : 1in + 8pt; }"}
            </div>
            被翻译为：
            <div className="xo-border-light-gray xo-padding-md">
              p {" { width : 1.111in; }"}
            </div>
            <br/>
            <h2>除法运算和<span className="xo-font-primary xo-margin-left-md">/</span></h2>
            <br/>
            <div>
              CSS允许<span className="xo-font-primary xo-margin-left-md xo-margin-right-md">/</span>
              出现在属性值里, 作为分隔数字的一种方法, 在默认情况下SassScript中用<span className="xo-font-primary xo-margin-left-md xo-margin-right-md">/</span>
              分隔的两个数字, 都会在CSS中原封不动的输出, 在以下的三种情况中, <span className="xo-font-primary xo-margin-left-md xo-margin-right-md">/</span>
              会被解释为除法运算:
              <ul>
                <li className="xo-margin-bottom-sm">如果数值或它的任意部分是存储在一个变量中或是函数的返回值</li>
                <li className="xo-margin-bottom-sm">如果数值被圆括号包围</li>
                <li className="xo-margin-bottom-sm">如果数值是另一个数学表达式的一部分</li>
              </ul>
              <br/>
              <div className="xo-padding-xs xo-border-light-gray">
                {"p {"}
                <div className="xo-margin-left-md">{"font: 10px/8px; // 纯CSS, 不是除法运算"}</div>
                <div className="xo-margin-left-md">{"$width: 1000px;"}</div>
                <div className="xo-margin-left-md">{"width: $width/2; // 使用了变量, 是除法运算"}</div>
                <div className="xo-margin-left-md">{"width: round(1.5)/2; // 使用了函数, 是除法运算"}</div>
                <div className="xo-margin-left-md">{"height: (500px/2); //使用了圆括号, 是除法运算"}</div>
                <div className="xo-margin-left-md">{"margin-left: 5px + 8px/2px; // 使用了另一个数学表达式的一部分, 是出发运算"}</div>
                {"}"}
              </div>
              <br/>
              被翻译为:
              <br/>
              <br/>
              <div className="xo-padding-xs xo-border-light-gray">
                {"p {"}
                <div className="xo-margin-left-md">{"font: 10px/8px;"}</div>
                <div className="xo-margin-left-md">{"width: 500px;"}</div>
                <div className="xo-margin-left-md">{"height: 250px;"}</div>
                <div className="xo-margin-left-md">{"margin-left: 9px;"}</div>
                {"}"}
              </div>
              <hr/>
              <div className="xo-padding-xs xo-border-light-gray">
                {"p {"}
                <div className="xo-margin-left-md">{"$font-size: 12px;"}</div>
                <div className="xo-margin-left-md">{"$line-height: 30px;"}</div>
                <div className="xo-margin-left-md">{"font: #{$font-size}/#{$line-height};"}</div>
                {"}"}
              </div>
              <br/>
              被翻译为:
              <br/>
              <br/>
              <div className="xo-padding-xs xo-border-light-gray">
                {"p {"}
                <div className="xo-margin-left-md">{"font: 12px/30px; }"}</div>
              </div>
              <br/>
            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="sassColorOper">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>颜色运算</h1>
            <br/>
            <label>所有算数运算都支持颜色值, 并且是分段运算的, 即 红、绿、蓝各颜色分量单独进行运算</label>
            <i className="xo-margin-left-md xo-font-primary">(格式保持一致)</i>
            <br/>
            <br/>
            <div className="xo-padding-xs xo-border-light-gray">
              {"p {"}
              <div className="xo-margin-left-md">{"color: #010203 + #040506;"}</div>
              {"}"}
            </div>
            <br/>
            计算公式为 01 + 04 = 05、 02 + 05 = 07、 03 + 06 = 09
            <br/>
            <br/>
            <div className="xo-padding-xs xo-border-light-gray">
              {"p {"}
              <div className="xo-margin-left-md">{"color: #050709; }"}</div>
            </div>
            <br/>
            <hr/>
            <br/>
            <div className="xo-padding-xs xo-border-light-gray">
              {"p {"}
              <div className="xo-margin-left-md">{"color: #010203 * 2;"}</div>
              {"}"}
            </div>
            <br/>
            计算公式为 01 * 2 = 02、 02 * 2 = 04、 03 * 2 = 06
            <br/>
            <br/>
            <div className="xo-padding-xs xo-border-light-gray">
              {"p {"}
              <div className="xo-margin-left-md">{"color: #020406; }"}</div>
            </div>
            <br/>
            <hr/>
            <br/>
            <div className="xo-padding-xs xo-border-light-gray">
              {"p {"}
              <div className="xo-margin-left-md">{"color: rgba(255, 0, 0, 0.75) + rgba(0, 255, 0, 0.75);"}</div>
              {"}"}
            </div>
            <br/>
            {"注意那些有 alpha 通道的颜色（像那些通过 {Sass::Script::Functions#rgba rgba} 或 {Sass::Script::Functions#hsla hsla} 函数创建的）必须要有同样的 alpha 值，才能执行颜色运算。 T颜色运算不会影响 alpha 值。"}
            <br/>
            <br/>
            <div className="xo-padding-xs xo-border-light-gray">
              {"p {"}
              <div className="xo-margin-left-md">{"color: rgba(255, 255, 0, 0.75); }"}</div>
            </div>
            <br/>
            <hr/>
            <br/>
            <div className="xo-padding-xs xo-border-light-gray">
              {"$translucent-red: rgba(255, 0, 0, 0.5);"}
              <br/>
              {"$green: #00ff00;"}
              <br/>
              {"div {"}
              <div className="xo-margin-left-md">
                {"filter: progid:DXImageTransform.Microsoft.gradient(enabled='false', startColorstr='#{ie-hexo-str($green)}', endColorstr='#{ie-hexo-str($translucent-red)}');"}
              </div>
              {"}"}
            </div>
            <br/>
              {"IE 滤镜需要每个颜色都包含 alpha 层， 并且得用 #AABBCCDD 这样严格的格式。你可以轻松的利用 {Sass::Script::Functions#ie_hex_str ie_hex_str} 函数对其做转换"}
            <br/>
            <br/>
            <div className="xo-padding-xs xo-border-light-gray">
              {"div {"}
              <div className="xo-margin-left-md">
              {"filter: progid:DXImageTransform.Microsoft.gradient(enabled='false', startColorstr=#FF00FF00, endColorstr=#80FF0000); }"}
              </div>
            </div>
            <br/>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="sassInterpolation">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>Interpolation:<span className="xo-font-primary xo-margin-left-xs">{"#{}"}</span></h1>
            <div className="xo-font-gray">
              <div>
                <span className="xo-font-primary xo-margin-right-xs">{"#{}"}</span>
                内插语法, 在选择器与属性名称中使用SassScript变量
              </div>
              <i>
                使用
                <span className="xo-font-primary xo-margin-left-xs xo-margin-right-xs">{"#{}"}</span>
                意味着附近的操作将被视为纯CSS
              </i>
            </div>
            <div className="xo-padding-xs xo-border-light-gray">
              <div>{"$name: foo;"}</div>
              <div>{"$attr: border;"}</div>
              <div>{"p.#{$name} {"}</div>
              <div className="xo-margin-left-md">{"#{$attr}-color: blue;"}</div>
              <div className="xo-margin-left-md">{"$font-size: 12px;"}</div>
              <div className="xo-margin-left-md">{"$line-height: 30px;"}</div>
              <div className="xo-margin-left-md">{"$font: #{$font-size}/#{$line-height};"}</div>
              <div>{"}"}</div>
            </div>
            <br/>
            被编译为:
            <br/>
            <br/>
            <div className="xo-padding-xs xo-border-light-gray">
              <div>{"p.foo {"}</div>
              <div className="xo-margin-right-md">{"border-color: blue;"}</div>
              <div className="xo-margin-right-md">{"font: 12px/30px; }"}</div>
            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="sassDefault">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>变量默认值:<span className="xo-margin-left-xs xo-font-primary">!default</span></h1>
            <label>
              在变量尚未赋值前, 通过在值的末尾处添加
              <span className="xo-margin-left-xs xo-margin-right-xs">!default</span>
              标记来指定, 若该变量已经被赋值, 就不会再次赋值, 反之, 则被赋予值,
              变量值若为null, 会被!default当作没有赋值
            </label>
            <div className="xo-padding-xs xo-border-light-gray">
              <div>$content: "First content";</div>
              <div>$content: "Second content?" !default;</div>
              <div>$new_content: "First time reference" !default;</div>
              <div>$new_content_null: null;</div>
              <div>$new_content_null: "Not-null content" !default;</div>
              <br/>
              <br/>
              <div>
                {"#main {"}
                <div className="xo-margin-left-md">
                  <div>{"content: $content;"}</div>
                  <div>{"new-content: $new_content;"}</div>
                  <div>{"new-content-null: $new_content_null;"}</div>
                </div>
                {"}"}
              </div>
            </div>
            <br/>
            被翻译为:
            <br/>
            <br/>
            <div className="xo-padding-xs xo-border-light-gray">
              {"#mian {"}
              <div className="xo-margin-left-md">content: "First content";</div>
              <div className="xo-margin-left-md">new-content: "First time reference";</div>
              <div className="xo-margin-left-md">new-content-null: "Not-null content"; {"}"}</div>
            </div>
            <br/>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="sassImport">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1 className="xo-font-primary">@import</h1>
            <div className="xo-font-lm">
              Sass扩展了CSS的<span className="xo-code">@import</span>规则，让它能够引入Scss和Sass文件，并将文件合并输出一个单一的CSS文件。
              被导入文件中所定义的变量或<span className="xo-code">mixins</span>都可以在主文件中使用。
              <br/>
              <br/>
              Sass会在当前目录下寻找其他Sass文件，如果是 Rack、 Rails 或 Merb 环境中则是Sass文件目录。也可以通过<span className="xo-code">:load_paths</span>选项 或者
              在命令中使用<span className="xo-code">--load-path</span> 选项来指定额外的搜索目录。
              <br/>
              <br/>
              <span className="xo-code">@import</span>根据文件名引入。默认情况下，它会寻找Sass文件并直接引入，但是，在少数几种情况下，它会被编译成CSS的
              <span className="xo-code">@import</span>规则：
              <ul>
                <li>如果文件的扩展名是<span className="xo-code">.css</span></li>
                <li>如果文件名以<span className="xo-code">http://</span>开头</li>
                <li>如果文件名是<span className="xo-code">url()</span></li>
                <li>如果<span className="xo-code">@import</span>包含了任何媒体查询( meida queries )</li>
              </ul>
              如果上述情况都没有出现，并且扩展名是<span className="xo-code">.scss</span>或<span className="xo-code">.sass</span>，
              该名称的文件就会被引入。如果没有扩展名，Sass将试着找出具有<span className="xo-code">.scss</span>或<span className="xo-code">.sass</span>
              扩展名的同名文件并将其引入。
              <p>例如：</p>
              <div className="xo-padding-xs xo-border-light-gray">
                @import "foo.scss";
              </div>
              <p>或</p>
              <div className="xo-padding-xs xo-border-light-gray">
                @import "foo";
              </div>
              <p>两者都将引入foo.scss文件, 而</p>
              <div className="xo-padding-xs xo-border-light-gray">
                @import "foo.css";
                <br/>
                @import "foo" screen;
                <br/>
                @import "http://foo.com/bar";
                <br/>
                @import url(foo);
              </div>
              <p>将被编译为：</p>
              <div className="xo-padding-xs xo-border-light-gray">
                @import "foo.css";
                <br/>
                @import "foo" screen;
                <br/>
                @import "http://foo.com/bar";
                <br/>
                @import url(foo);
              </div>
              <p>也可以通过一个<span className="xo-code">@import</span>引入多个文件。例如：</p>
              <div className="xo-padding-xs xo-border-light-gray">
                @import "rounded-corners", "text-shadow";
              </div>
              <p>
                将引入
                <span className="xo-code">rounded-corners</span>
                和
                <span className="xo-code">text-shadow</span>
                两个文件
              </p>
              <p className="xo-font-ls">
                <b>片段</b>
              </p>
              <p>
                如果有一个Scss或Sass文件需要引入,但又不希望引入的文件被编译为一个css文件,那么这时候就可以在文件名前面加一个下划线，
                这就告诉Sass不要把它编译为css文件，导入与之前一致，且可以省略文件前面的下划线。
              </p>
              <p>
                例如，有一个文件叫做<span className="xo-code">_colors.scss</span>。
                这样不会生成<span className="xo-code">_colors.css</span>文件
              </p>
              <div className="xo-padding-xs xo-border-light-gray">
                @import "colors";
              </div>
              <p>
                这样就能引入_colors.scss文件
              </p>
              <p>
                注意，在同一目录下面不能同时存在带下划线与不带下划线的同名文件。
                例如，<span className="xo-code">_colors.scss</span>不能与
                <span className="xo-code">color.scss</span>并存
              </p>
              <p className="xo-font-ls">
                <b>嵌套</b>
              </p>
              <p>
                <span className="xo-code">@import</span>
                可以包含在CSS规则和 <span className="xo-code">@media</span>规则中
              </p>
              <p>例如：<span className="xo-code">example.scss</span></p>
              <div className="xo-padding-xs xo-border-light-gray">
                {".example {"}
                <div className="xo-margin-left-md">{"color: red;"}</div>
                {"}"}
              </div>
              <br/>
              <div className="xo-padding-xs xo-border-light-gray">
                {"#main {"}
                <div className="xo-margin-left-md">@import "example";</div>
                {"}"}
              </div>
              <p>被编译为：</p>
              <div className="xo-padding-xs xo-border-light-gray">
                {"#main .example {"}
                <div className="xo-margin-left-md">{"color: red;"}</div>
                {"}"}
              </div>
              <p>
                <span className="xo-code">@mixin</span>
                或
                <span className="xo-code">@charset</span>
                或
                <span className="xo-code">mixins</span>
                或控制指令中嵌套
                <span className="xo-code">@import</span>
                是不允许的
              </p>
            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="sassMedia">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1 className="xo-font-primary">@media</h1>
            <div className="xo-font-lm">
              <p>
                <span className="xo-code">@media</span>
                在Sass中的行为就像在纯CSS中，可以嵌套在CSS规则，且被冒泡到样式表的顶层，
                将所有的选择器放在规则内部
              </p>
              <div className="xo-padding-xs xo-border-light-gray">
                {".sidebar {"}
                <div className="xo-margin-left-md">{"width: 300px;"}</div>
                <div className="xo-margin-left-md">
                  @medai screen and (orientation: landscape) {"{"}
                  <div className="xo-margin-left-md">{"width: 500px;"}</div>
                  {"}"}
                </div>
                {"}"}
              </div>
              <p>
                被翻译为：
              </p>
              <div className="xo-padding-xs xo-border-light-gray">
                {".sidebar {"}
                <div className="xo-margin-left-md">width: 300px; {"}"}</div>
                <div className="xo-margin-left-md">
                  @media screen and (orientation: landscape) {"{"}
                  <div className="xo-margin-left-md">
                    .sidebar {"{"}
                    <div className="xo-margin-left-md">width: 500px; {"} }"}</div>
                  </div>
                </div>
                {"}"}
              </div>
              <p>
                <span className="xo-code">@media</span>
                支持彼此嵌套，例如：
              </p>
              <div className="xo-padding-xs xo-border-light-gray">
                @media screen {"{"}
                <div className="xo-margin-left-md">
                  .sidebar {"{"}
                  <div className="xo-margin-left-md">
                    @media (orientation: landscape) {"{"}
                    <div className="xo-margin-left-md">width: 500px;</div>
                    {"}"}
                  </div>
                  {"}"}
                </div>
                {"}"}
              </div>
              <p>
                被编译为：
              </p>
              <div className="xo-padding-xs xo-border-light-gray">
                @media screen and (orientation: landscape) {"{"}
                <div className="xo-margin-left-md">
                  .sidebar {"{"}
                  <div className="xo-margin-left-md">width: 500px; {"} }"}</div>
                </div>
              </div>
              <p>
                <span className="xo-code">@media</span>
                支持SassScript表达式（包括变量，函数和运算符），例如
              </p>
              <div className="xo-padding-xs xo-border-light-gray">
                <div>$media: screen;</div>
                <div>$feature: -webkit-min-device-pixel-ratio;</div>
                <div>$value: 1.5;</div>
                <br/>
                {"@media #{$media} and ($feature: $value) {"}
                <div className="xo-margin-left-md">
                  .sidebar {"{"}
                  <div className="xo-margin-left-md">width: 500px;</div>
                  {"}"}
                </div>
                {"}"}
              </div>
              <p>被翻译为：</p>
              <div className="xo-padding-xs xo-border-light-gray">
                @media screen and (-webkit-min-device-pixel-ratio: 1.5) {"{"}
                <div className="xo-margin-left-md">
                  .sidebar {"{"}
                  <div className="xo-margin-left-md">
                    width: 500px; {"} }"}
                  </div>
                </div>
              </div>
              <br/>
            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="sassExtend">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1 className="xo-font-primary">@extend</h1>
            <div className="xo-font-lm">
              <p>继承样式，例如：</p>
              <div className="xo-padding-xs xo-border-light-gray">
                .error {"{"}
                <div className="xo-margin-left-md">border: 1px #f00;</div>
                <div className="xo-margin-left-md">background-color: #fdd;</div>
                {"}"}
                <br/>
                .seriousError {"{"}
                <div className="xo-margin-left-md">@extend .error;</div>
                <div className="xo-margin-left-md">border-width: 3px;</div>
                {"}"}
                <br/>
                #fake-links .link {"{"}
                <div className="xo-margin-left-md">@extend a;</div>
                {"}"}
                <br/>
                a {"{"}
                <div className="xo-margin-left-md">color: blue;</div>
                <div className="xo-margin-left-md">
                  &:hover {"{"}
                  <div className="xo-margin-left-md">text-decoration: underline;</div>
                  {"}"}
                </div>
                {"}"}
              </div>
              <p>被翻译为：</p>
              <div className="xo-padding-xs xo-border-light-gray">
                .error, .seriousError {"{"}
                <div className="xo-margin-left-md">border: 1px #f00;</div>
                <div className="xo-margin-left-md">background-color: #fdd;</div>
                {"}"}
                <br/>
                .seriousError {"{"}
                <div className="xo-margin-left-md">border-width: 3px;</div>
                {"}"}
                <br/>
                a, #fake-links .link {"{"}
                <div className="xo-margin-left-md">color: blue; {"}"}</div>
                <div className="xo-margin-left-md">
                  a:hover, #fake-links .link:hover {"{"}
                  <div className="xo-margin-left-md">text-decoration: underline; {"}"}</div>
                </div>
              </div>
              <p>
                <span className="xo-code">@extend</span> - Only Selectors
                <br/>
                可用于提供样式给予其他样式使用继承,防止重复代码以及样式冲突
                <br/>
              </p>
              <div className="xo-padding-xs xo-border-light-gray">
                #content a%extreme {"{"}
                <div className="xo-margin-left-md">color: blue;</div>
                <div className="xo-margin-left-md">font-weight: bold;</div>
                <div className="xo-margin-left-md">font-size: 2em;</div>
                {"}"}
                <br/>
                .notice {"{"}
                <div className="xo-margin-left-md">@extend %extreme;</div>
                {"}"}
              </div>
              <p>被编译为：</p>
              <div className="xo-padding-xs xo-border-light-gray">
                #content a.notice {"{"}
                <div className="xo-margin-left-md">color: blue;</div>
                <div className="xo-margin-left-md">font-weight: bold;</div>
                <div className="xo-margin-left-md">font-size: 2em; {"}"} </div>
              </div>
              <p>
                <span className="xo-code">@extend</span>
                不产生任何新的选择器，只需要在选择器后添加
                <span className="xo-code">!optional</span>
              </p>
              <div className="xo-padding-xs xo-border-light-gray">
                a.important {"{"}
                <div className="xo-margin-left-md">@extend .notice !optional;</div>
                {"}"}
              </div>
            </div>
            <br/>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="sassIf">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1 className="xo-font-primary">@if</h1>
            <div className="xo-font-lm">
              <div className="xo-padding-xs xo-border-light-gray">
                $type: monster;
                <br/>
                p {"{"}
                <div className="xo-margin-left-md">
                  @if $type == scean {"{"}
                  <div className="xo-margin-left-md">color: blue;</div>
                  {"}"} @else if $type == matador {"{"}
                  <div className="xo-margin-left-md">color: red;</div>
                  {"}"} @else if $type == monster {"{"}
                  <div className="xo-margin-left-md">color: green;</div>
                  {"}"} @else {"{"}
                  <div className="xo-margin-left-md">color: black;</div>
                  {"}"}
                </div>
                {"}"}
              </div>
              <p>被编译为:</p>
              <div className="xo-padding-xs xo-border-light-gray">
                p {"{"}
                <div className="xo-margin-left-md">color: green; {"}"}</div>
                {"}"}
              </div>
            </div>
            <br/>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="sassFor">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1 className="xo-font-primary">@for</h1>
            <div className="xo-font-lm">

              <div className="xo-padding-xs xo-border-light-gray">
                @for $i from 1 through 3 {"{"}
                <div className="xo-margin-left-md">.item-#{"{$i} { width: 2em * $i; }"}</div>
                {"}"}
              </div>

              <p>被编译为：</p>

              <div className="xo-padding-xs xo-border-light-gray">
                .item-1 {"{"}
                <div className="xo-margin-left-md">width: 2em; {"}"}</div>
                .item-2 {"{"}
                <div className="xo-margin-left-md">width: 4em; {"}"}</div>
                .item-3 {"{"}
                <div className="xo-margin-left-md">width: 6em; {"}"}</div>
              </div>

            </div>
            <br/>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="sassEach">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1 className="xo-font-primary">@each</h1>
            <div className="xo-font-lm">

              <div className="xo-padding-xs xo-border-light-gray">
                @each $animal in puma, sea-slug, egret, salamander {"{"}
                <div className="xo-margin-left-md">
                  {".#{$animal}-icon {"}
                  <div className="xo-margin-left-md">
                    {"background-image: url('/images/#{$animal}.png');"}
                  </div>
                  {"}"}
                </div>
                {"}"}
              </div>

              <p>被编译为：</p>

              <div className="xo-padding-xs xo-border-light-gray">
                .puma-icon {"{"}
                <div className="xo-margin-left-md">{"background-image: url('/images/puma.png'); }"}</div>
                .sea-slug-icon {"{"}
                <div className="xo-margin-left-md">{"background-image: url('/images/sea-slug.png'); }"}</div>
                .egret-icon {"{"}
                <div className="xo-margin-left-md">{"background-image: url('/images/egret.png'); }"}</div>
                .salamander-icon {"{"}
                <div className="xo-margin-left-md">{"background-image: url('/images/salamander.png'); }"}</div>
              </div>

            </div>
            <br/>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="sassWhile">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1 className="xo-font-primary">@while</h1>
            <div className="xo-font-lm">

              <div className="xo-padding-xs xo-border-light-gray">
                $i: 6;
                <br/>
                @while $i > 0 {"{"}
                <div className="xo-margin-left-md">.item-#{"{$i} { width: 2em * $i; }"}</div>
                <div className="xo-margin-left-md">$i: $i - 2;</div>
                {"}"}
              </div>
              <p>被编译为:</p>

              <div className="xo-padding-xs xo-border-light-gray">
                .item-6 {"{"}
                <div className="xo-margin-left-md">width: 12em; {"}"}</div>
                .item-4 {"{"}
                <div className="xo-margin-left-md">width: 8em; {"}"}</div>
                .item-2 {"{"}
                <div className="xo-margin-left-md">width: 4em; {"}"}</div>
              </div>

            </div>
            <br/>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="sassMixin">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1 className="xo-font-primary">@mixin</h1>
            <div className="xo-font-lm">

              <p>
                <span className="xo-code">@mixin</span>
                与
                <span className="xo-code">@include</span>
                结合使用,重复使用样式
              </p>

              <div className="xo-padding-xs xo-border-light-gray">
                @mixin large-text {"{"}
                <div className="xo-margin-left-md">
                  font: {"{"}
                  <div className="xo-margin-left-md">family: Arial;</div>
                  <div className="xo-margin-left-md">size: 20px;</div>
                  <div className="xo-margin-left-md">weight: bold;</div>
                  {"}"}
                  <br/>
                  color: #ff0000;
                </div>
                {"}"}
              </div>

              <br/>

              <div className="xo-padding-xs xo-border-light-gray">
                .page-title {"{"}
                <div className="xo-margin-left-md">@include large-text;</div>
                <div className="xo-margin-left-md">padding: 4px;</div>
                {"}"}
              </div>

              <p>被编译为：</p>

              <div className="xo-padding-xs xo-border-light-gray">
                .page-title {"{"}
                <div className="xo-margin-left-md">font-family: Arial;</div>
                <div className="xo-margin-left-md">font-size: 20px;</div>
                <div className="xo-margin-left-md">font-weight: bold;</div>
                <div className="xo-margin-left-md">color: #ff0000;</div>
                <div className="xo-margin-left-md">padding: 4px; {"}"}</div>
              </div>

              <p>Arguments</p>

              <div className="xo-padding-xs xo-border-light-gray">
                @mixin sexy-border($color, $width) {"{"}
                <div className="xo-margin-left-md">
                  border: {"{"}
                  <div className="xo-margin-left-md">color: $color;</div>
                  <div className="xo-margin-left-md">width: $width;</div>
                  <div className="xo-margin-left-md">style: dashed;</div>
                  {"}"}
                </div>
                {"}"}
                <br/>
                <br/>
                p {"{ @include  sexy-border(blue, 1in); }"}
              </div>

              <p>被编译为：</p>

              <div className="xo-padding-xs xo-border-light-gray">
                p {"{"}
                <div className="xo-margin-left-md">border-color: blue;</div>
                <div className="xo-margin-left-md">border-width: 1in;</div>
                <div className="xo-margin-left-md">border-style: dashed; {"}"}</div>
              </div>

            </div>
            <br/>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="sassHelp">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>附属文档</h1>
            <div className="xo-font-lm">

              <div className="xo-padding-xs">

                <div className="xo-margin-left-md xo-margin-bottom-sm">
                  <a className="xo-font-primary" target="_blank" href="http://sass.bootcss.com/docs/sass-reference/">1.官方文档</a>
                </div>

                <div className="xo-margin-left-md xo-margin-bottom-sm">
                  <a className="xo-font-primary" target="_blank" href="http://www.w3school.com.cn/css/index.asp">2.CSS教程</a>
                </div>

                <div className="xo-margin-left-md xo-margin-bottom-sm">
                  <a className="xo-font-primary" target="_blank" href="http://www.w3school.com.cn/css3/index.asp">3.CSS3教程</a>
                </div>

              </div>

              <p>
                除了特殊属性外，其他可以使用简单的属性，编译完毕后自行增加浏览器前缀，
                <span className="xo-code">(ie9+等主流浏览器)</span>
              </p>

              <div className="xo-padding-xs xo-border-light-gray">
                @keyframes mk {"{"}
                <div className="xo-margin-left-md">from {"{ background: red; }"}</div>
                <div className="xo-margin-left-md">from {"{ background: yellow; }"}</div>
                {"}"}
              </div>
              <p>被编译为：</p>
              <div className="xo-padding-xs xo-border-light-gray">
                @keyframes mk {"{"}
                <div className="xo-margin-left-md">from {"{ background: red; }"}</div>
                <div className="xo-margin-left-md">from {"{ background: yellow; }"}</div>
                {"}"}
                <br/>
                @-webkit-keyframes mk {"{"}
                <div className="xo-margin-left-md">from {"{ background: red; }"}</div>
                <div className="xo-margin-left-md">from {"{ background: yellow; }"}</div>
                {"}"}
                <br/>
                @-moz-keyframes mk {"{"}
                <div className="xo-margin-left-md">from {"{ background: red; }"}</div>
                <div className="xo-margin-left-md">from {"{ background: yellow; }"}</div>
                {"}"}
                <br/>
                @-o-keyframes mk {"{"}
                <div className="xo-margin-left-md">from {"{ background: red; }"}</div>
                <div className="xo-margin-left-md">from {"{ background: yellow; }"}</div>
                {"}"}
              </div>

            </div>
            <br/>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="es6Scope">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>块级作用域</h1>
            <div className="xo-font-lm">

              <p>
                <span className="xo-code">const</span>
                声明一个只读的常量，只在该作用域中有效，若是固定的简单常量则命名规范全大写，单词以下划线分割，
                反之，则参见let命名
                例如
              </p>
              <div className="xo-padding-xs xo-border-light-gray">
                const MAX_NUM = 10;
                <br/>
                console.log(MAX_NUM); <span className="xo-margin-left-xs xo-font-gray">// 10</span>
                <br/>
                MAX_NUM = 1; <span className="xo-margin-left-xs xo-font-gray">// TypeError: Assignment to constant variable.</span>
                <br/>
                <br/>
                const foo; <span className="xo-margin-left-xs xo-font-gray">// SyntaxError: Missing initializer in const declaration</span>
                <br/>
                <br/>
                {"{"}
                <div className="xo-margin-left-md">
                  const NUM = 1;
                  <br/>
                  console.log(NUM); <span className="xo-margin-left-xs xo-font-gray">// 1</span>
                </div>
                {"}"}
                <br/>
                console.log(NUM);<span className="xo-margin-left-xs xo-font-gray">// Uncaught ReferenceError: MAX is not defined</span>
              </div>

              <br/><hr/>

              <p>
                <span className="xo-code">let</span>
                声明变量，只在该作用域中有效，命名规范驼峰或全小写(单词以下划线分割)，例如
              </p>
              <div className="xo-padding-xs xo-border-light-gray">
                {"{"}
                <div className="xo-margin-left-md">let a = "a";</div>
                <div className="xo-margin-left-md">var b = "b";</div>
                {"}"}
                <br/>
                b <span className="xo-margin-left-xs xo-font-gray">// b</span>
                <br/>
                a <span className="xo-margin-left-xs xo-font-gray">// ReferenceError: a is not defined.</span>
              </div>

              <br/><hr/>

              <p>
                相同作用于下，
                <span className="xo-code">const</span>
                、
                <span className="xo-code">let</span>
                、
                <span className="xo-code">var</span>
                不能声明重复声明
              </p>
              <div className="xo-padding-xs xo-border-light-gray">
                var message = "message";
                <br/>
                let age = 20;
                <br/>
                <br/>
                <span className="xo-font-gray">// 以下报错</span>
                <br/>
                const message = "message";
                <br/>
                var age = 20;
              </div>

            </div>
            <br/>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="es6Str">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>字符串</h1>
            <div className="xo-font-lm">

              <p>
                静态字符串一律使用单引号<span className="xo-code">''</span>
                或反引号<span className="xo-code">``</span>
                ，动态字符串使用反引号
                <span className="xo-code">``</span>
                </p>
              <div className="xo-padding-xs xo-border-light-gray">
                const a = 'a'; <span className="xo-margin-left-xs xo-font-gray">// a</span>
                <br/>
                const b = `b${"{a}"}`; <span className="xo-margin-left-xs xo-font-gray">// ba</span>
                <br/>
                const c = `c`; <span className="xo-margin-left-xs xo-font-gray">// c</span>
                <br/>
                const d = `'"d"'`; <span className="xo-margin-left-xs xo-font-gray">// '"d"'</span>
                <br/>
                <i className="xo-font-gray">
                  // 优先使用<span className="xo-code">``</span>，
                  因为字符串中经常会有
                  <span className="xo-code">''</span>、
                  <span className="xo-code">""</span>，这就可以省去写过多的转义
                </i>
              </div>
              <p>
                <span className="xo-code">{"${}"}</span>
                表示插入值，前提是需要有定义好的变量命名与之对应
                <br/>
                <a className="xo-font-primary" target="_blank" href="http://es6.ruanyifeng.com/#docs/string">字符串的扩展</a>
              </p>

            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="es6Agm">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>解构赋值</h1>
            <div className="xo-font-lm">

              <p>使用数组成员对变量赋值时</p>
              <div className="xo-padding-xs xo-border-light-gray">
                const attr = [1, 2, 3];
                <br/>
                const [first, second] = attr;
                <span className="xo-margin-left-xs xo-font-gray">// 1 = first = attr[0], 2 = second = attr[1]</span>
                <br/>
                const [a, , b, c,] = attr;
                <span className="xo-margin-left-xs xo-font-gray">// 1 = a = attr[0], 3 = b = attr[2], undefined = c</span>
              </div>

              <p>函数的参数如果是对象的成员</p>
              <div className="xo-padding-xs xo-border-light-gray">
                function getFullName1(obj) {"{"}
                <div className="xo-margin-left-md">
                  const {"{ firstName, lastName }"} = obj;
                  <br/>
                  console.log(firstName + ` ` + lastName);
                </div>
                {"}"}
                <br/>
                <br/>
                function getFullName2({"{ lastName, firstName }"}) {"{"}
                <div className="xo-margin-left-md">
                  console.log(lastName + ` ` + firstName);
                </div>
                {"}"}
                <br/>
                <br/>
                const obj = {"{ firstName:`first`, lastName: `last` }"} ;
                <br/>
                getFullName1(obj); <span className="xo-margin-left-md xo-font-gray">// first last</span>
                <br/>
                getFullName2(obj); <span className="xo-margin-left-md xo-font-gray">// last first</span>
              </div>

              <p>
                数组不能随意更改顺序去解构赋值，因为数组对象默认的key就是下标值，
                对象只要key能与解构变量名相同则自行匹配
              </p>

            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="es6Obj">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>对象</h1>
            <div className="xo-font-lm">

              <p>单行定义的对象，最后一个成员不以逗号结尾，多行定义对象，最后一个成员以逗号结尾</p>
              <div className="xo-padding-xs xo-border-light-gray">
                const a = {"{ k1: v1, k2: v2 }"};
                <br/>
                const b = {"{"}
                <div className="xo-margin-left-md">k1: v1,</div>
                <div className="xo-margin-left-md">k2: v2,</div>
                {"}"};
              </div>

              <p>
                <a className="xo-font-primary" target="_blank" href="http://es6.ruanyifeng.com/#docs/object">对象的扩展</a>
              </p>

            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="es6Array">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>数组</h1>
            <div className="xo-font-lm">

              <p>使用扩展运算符<span className="xo-code">...</span>获取数组内的成员</p>
              <div className="xo-padding-xs xo-border-light-gray">
                const array = [1, 2, 3];
                <br/>
                console.log(...array); <span className="xo-margin-left-xs xo-font-gray">// 1 2 3</span>
              </div>

              <p><span className="xo-code">Array.from</span>将类似数组的对象转为数组</p>
              <div className="xo-padding-xs xo-border-light-gray">
                const foo = document.querySelectorAll('.foo');
                <br/>
                const nodes = Array.from(foo);
              </div>

              <p>
                遍历数组
                <span className="xo-code">for..in</span>、
                <span className="xo-code">forEach</span>、
                <span className="xo-code">map</span>、
                <span className="xo-code">for..of</span>
              </p>
              <div className="xo-padding-xs xo-border-light-gray">
                const array = [1, 2, 3];
                <hr/>
                <div>
                  for(let i in array) {"{"}
                  <div className="xo-margin-left-md">if(i == 0) continue;</div>
                  <div className="xo-margin-left-md">{"console.log(`${i} : ${array[i]}`);"}</div>
                  <div className="xo-margin-left-md">if(i == 1) break;</div>
                  {"}"}
                  <br/>
                  <span className="xo-font-gray">
                    1 : 2
                    <br/>
                    支持
                    <span className="xo-code">continue</span>
                    和
                    <span className="xo-code">break</span>
                  </span>
                </div>
                <hr/>
                <div>
                  array.forEach(function(arr, index) {"{"}
                  <div className="xo-margin-left-md">if(index == 1) return;</div>
                  <div className="xo-margin-left-md">console.log({"`${index} : ${arr}`"});</div>
                  {"}"});
                  <br/>
                  <span className="xo-font-gray">
                    0 : 1
                    <br/>
                    2 : 3
                    <br/>
                    不支持
                    <span className="xo-code">continue</span>
                    和
                    <span className="xo-code">break</span>
                    ，
                    <span className="xo-code">return</span>
                    代替 <span className="xo-code">continue</span>
                  </span>
                </div>
                <hr/>
                <div>
                  const _array = array.map(function(arr, index) {"{"}
                  <div className="xo-margin-left-md">console.log({"`${index} : ${arr}`"});</div>
                  <div className="xo-margin-left-md">return arr + 3;</div>
                  {"}"});
                  <br/>
                  <span className="xo-font-gray">
                    0 : 1
                    <br/>
                    1 : 2
                    <br/>
                    2 : 3
                    <br/>
                    _array = [4, 5, 6];
                    <span className="xo-code">map</span>
                    主要是用于从一个数组中作调整，从而返回出一个新的数组，不支持
                    <span className="xo-code">continue</span>和
                    <span className="xo-code">break</span>
                  </span>
                </div>
                <hr/>
                <div>
                  for(let i of array) {"{"}
                  <div className="xo-margin-left-md">{"console.log(`${i}`);"}</div>
                  {"}"}
                  <br/>
                  <span className="xo-font-gray">
                    1
                    <br/>
                    2
                    <br/>
                    3
                    <br/>
                    支持
                    <span className="xo-code">continue</span>
                    和
                    <span className="xo-code">break</span>，
                    <span className="xo-code">for..in</span> 对应下标值，
                    <span className="xo-code">for..of</span> 对应数组值
                  </span>
                </div>
              </div>

              <p>
                <a className="xo-font-primary" target="_blank" href="http://es6.ruanyifeng.com/#docs/array">数组的扩展</a>
              </p>

            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="es6Func">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>函数</h1>
            <div>
              <div className="xo-font-lm">

                <p>
                  箭头函数取代
                  <span className="xo-code">Function.prototype.bind</span>，
                  不应再用self/_this/that绑定this
                </p>
                <div className="xo-padding-xs xo-border-light-gray">
                  const boundMethod = (...params) => method.apply(this, params);
                  <br/>
                  <span className="xo-font-gray">
                    相当于
                    <br/>
                    const boundMethod = function(...params) {"{"}
                    <div className="xo-margin-left-md">return method.apply(this, params).bind(this);</div>
                    {"}"}
                  </span>
                </div>

                <p>
                  所有的配置项都应该集中在一个对象,且放在最后一个参数，布尔值不可以直接作为参数使用
                </p>
                <div className="xo-padding-xs xo-border-light-gray">
                  {"function divide(a, b, { option = false } = {}) { ... }"}
                </div>

                <p>
                  不要再函数体内使用arguments变量，使用rest运算符
                  (<span className="xo-code">...</span>)代替
                </p>
                <div className="xo-padding-xs xo-border-light-gray">
                  {"function concatenateAll(...args) { ... }"}
                </div>

                <p>
                  使用默认语法设置函数参数默认值
                </p>
                <div className="xo-padding-xs xo-border-light-gray">
                  {"function handleThings(opts = {}) { ... }"}
                </div>

                <p>
                  <a className="xo-font-primary" target="_blank" href="http://es6.ruanyifeng.com/#docs/function">函数的扩展</a>
                </p>

              </div>
            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="es6Map">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>Map</h1>
            <div className="xo-font-lm">

              <p>
                注意区分
                <span className="xo-code">Object</span>和
                <span className="xo-code">Map</span>，若只是需要
                <span className="xo-code">key : value</span>的数据结构，使用
                <span className="xo-code">Map</span>，因为
                <span className="xo-code">Map</span>有内建的遍历机制
              </p>
              <div className="xo-padding-xs xo-border-light-gray">
                let map = new Map(arr);
                <br/>
                <br/>
                for (let key of map.keys()) {"{"}
                <div className="xo-margin-left-md">console.log(key);</div>
                {"}"}
                <br/>
                <br/>
                for (let value of map.values()) {"{"}
                <div className="xo-margin-left-md">console.log(value);</div>
                {"}"}
                <br/>
                <br/>
                for (let item of map.entries()) {"{"}
                <div className="xo-margin-left-md">console.log(item);</div>
                {"}"}
              </div>

              <p>
                <a className="xo-font-primary" target="_blank" href="http://es6.ruanyifeng.com/#docs/set-map">Map和Set</a>
              </p>

            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="es6Class">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1 className="xo-font-primary">class</h1>
            <div className="xo-font-lm">

              <p>定义类</p>
              <div className="xo-padding-xs xo-border-light-gray">
                class Test {"{"}
                <div className="xo-margin-left-md">
                  constructor() {"{"}
                  <div className="xo-margin-left-md">// ...</div>
                  {"}"}
                </div>
                <div className="xo-margin-left-md">
                  pop() {"{"}
                  <div className="xo-margin-left-md"> console.log("pop"); </div>
                  {"}"}
                </div>
                {"}"}
              </div>

              <p>
                extends 继承类，且不影响
                <span className="xo-code">instanceOf</span>运算
              </p>
              <div className="xo-padding-xs xo-border-light-gray">
                class TestChild extends Test{"{"}
                <div className="xo-margin-left-md">
                  constructor() {"{"}
                  <div className="xo-margin-left-md">// ...</div>
                  {"}"}
                </div>
                <div className="xo-margin-left-md">
                  pop() {"{"}
                  <div className="xo-margin-left-md"> console.log("child pop"); </div>
                  {"}"}
                </div>
                {"}"}
              </div>

              <p>
                <a className="xo-font-primary" target="_blank" href="http://es6.ruanyifeng.com/#docs/class">class的扩展</a>
              </p>

            </div>
            <br/>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="es6Module">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>模块</h1>
            <div className="xo-font-lm">

              <p>
                若模块只输出一个值，使用
                <span className="xo-code">export default</span>，
                若模块有多个输出值，直接使用 <span className="xo-code">export</span>
              </p>

              <p>模块默认输出一个函数，输出的函数名首字母小写</p>
              <div className="xo-padding-xs xo-border-light-gray">
                function test() {"{ // ... }"}
                <br/>
                export default test;
              </div>

              <p>模块默认输出一个对象，输出的对象名首字母应该大写</p>
              <div className="xo-padding-xs xo-border-light-gray">
                const ExportObj = {"{ // ... }"}
                <br/>
                export default ExportObj;
              </div>

              <p>
                输出多个，文件名constant
              </p>
              <div className="xo-padding-xs xo-border-light-gray">
                export const MAX_NUM = 999;
                export const MIN_NUM = -999;
              </div>

              <p>导入</p>
              <div className="xo-padding-xs xo-border-light-gray">
                import test from "./test";
                <br/>
                import ExportObj from "./ExportObj";
                <br/>
                import {"{MAX_NUM, MIN_NUM}"} from "./constant";
                <br/>
                //import * as constant from "./constant";
                <br/>
                //constant.MAX_NUM  999
              </div>

              <p>
                <a className="xo-font-primary" target="_blank" href="http://es6.ruanyifeng.com/#docs/module">Module的扩展</a>
              </p>

            </div>
          </div>
        </div>

        <div className="xo-row xo-margin-bottom-md" data-toggle="es6Help">
          <div className="xo-col-lg-12 xo-api-right-toggle">
            <h1>附属文档</h1>
            <div className="xo-font-lm">

              <div className="xo-padding-xs">

                <div className="xo-margin-left-md xo-margin-bottom-sm">
                  <a className="xo-font-primary" target="_blank" href="http://www.w3school.com.cn/js/index.asp">1.js教程</a>
                </div>

                <div className="xo-margin-left-md xo-margin-bottom-sm">
                  <a className="xo-font-primary" target="_blank" href="http://es6.ruanyifeng.com/">2.es6 入门</a>
                </div>

                <div className="xo-margin-left-md">
                  <a className="xo-font-primary" target="_blank" href="http://blog.csdn.net/u013224660/article/details/53928837">3.es6管理类中的私有数据</a>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    )
  }

}
