import React from "react";
import APIComponent from "./APIComponent";

export default class Format extends APIComponent {

  renderLeftDOM() {
    return (
      <div className="x-api-left" ref={(leftTarget) => this.__leftTarget = leftTarget}>
        <ul className="x-ul">
          <h3>React组件规范</h3>
          <li data-target="reactComponentFormat">组件规范</li>
          <li data-target="reactComponentCycle">生命周期</li>
          <li data-target="reactComponentDemo">实例</li>
          <li data-target="reactComponentRef">ref</li>
          <li data-target="reactComponentAPI">api</li>
          <li data-target="reactComponentEvent">事件</li>
          <li data-target="reactComponentHelp">附属文档</li>
        </ul>
        <ul className="x-ul">
          <h3>Sass规范</h3>
          <li data-target="sassFormat">编写规范</li>
          <li data-target="sassNote">注释</li>
          <li data-target="sassDataType">数据类型</li>
          <li data-target="sassNumOper">数字运算</li>
          <li data-target="sassColorOper">颜色运算</li>
        </ul>
        <ul className="x-ul">
          <h3>{this.props.routeParams.name}</h3>
          <li data-target="codeStyle">编程风格</li>
        </ul>
      </div>
    )
  }

  renderRightDOM() {
    return (
      <div className="x-api-right" ref={(rightToggle) => this.__rightToggle = rightToggle}>

        <div className="x-row x-margin-bottom-md" data-toggle="reactComponentFormat">
          <div className="x-col-lg-12 x-api-right-toggle">
            <h1>React组件规范</h1>
            <div className="x-padding-xs">
              <div className="x-margin-bottom-sm">(1). <b>必须</b>使用PascalCase作为文件名</div>
              <div className="x-margin-bottom-sm">(2). <b>必须</b>使用jsx作为文件后缀名  <i className="x-margin-left-xs">如 -> Component.jsx</i></div>
              <div className="x-margin-bottom-sm">(3). <b>必须</b>令文件名与所包含的export default class React Component名字相同</div>
              <div className="x-margin-bottom-sm">(4). <b>必须</b>令class为className <i className="x-margin-left-xs">如 -> {"<Component className='x-span-box' />"}</i></div>
              <div className="x-margin-bottom-sm">(5). <b>必须</b>令自定属性以data-作为前缀 <i className="x-margin-left-xs">如 -> {"<Component data-toggle='toggle' />"}</i></div>
              <div className="x-margin-bottom-sm">(6). <b>必须</b>使用如下图所示DOM片段对齐</div>
              <div className="x-margin-bottom-sm x-border-light-gray x-padding-md">
                {"<Component"}
                <br/>
                <span className="x-margin-left-lm">mProp1="mProp1"</span>
                <br/>
                {"/>"}
                <br/>
                <br/>
                {"<Component"}
                <br/>
                <span className="x-margin-left-lm">mProp1="mProp1"</span>
                <br/>
                {">"}
                <br/>
                <span className="x-margin-left-lm">{"<ChildComponent />"}</span>
                <br/>
                {"</Component>"}
                <br/>
                <br/>
                <i>属性类型如果是普通的字符串可以直接使用字符串,但是有运算符或者是对象,数字等其它类型则需要用{"{}"}包括</i>
                <br/>
                {"<Component"}
                <br/>
                <span className="x-margin-left-lm">mProp1="mProp1"</span>
                <br/>
                <span className="x-margin-left-lm">mProp2={"{123}"}</span>
                <br/>
                <span className="x-margin-left-lm">mProp3={"{{att1 : 1, att2 : 2}}"}</span>
                <br/>
                {"/>"}
              </div>
            </div>
          </div>
        </div>

        <div className="x-row x-margin-bottom-md" data-toggle="reactComponentCycle">
          <div className="x-col-lg-12 x-api-right-toggle">
            <h1>React组件生命周期</h1>
            <div className="x-padding-xs">
              <div>当创建组件的实例并将其插入DOM中的时候,将调用一下方法</div>
              <ul className="x-font-lm">
                <b><i>Mounting</i></b>
                <li className="x-margin-bottom-md"> constructor() <span className="x-font-gray x-font-xs">//构造函数,当实现React.Component子类的构造函数时,需要该函数中执行任何语句之前调用 super(props); 初始化的时候执行,只会执行一次</span></li>
                <li className="x-margin-bottom-md"> componentWillMount() <span className="x-font-gray x-font-xs">//在render()之前被调用, 初始化的时候执行,只会执行一次,state的更新不会触发重新呈现</span></li>
                <li className="x-margin-bottom-md"> render() <span className="x-font-gray x-font-xs">//浏览器即将要渲染的DOM,受props与state影响,当不需要渲染时,返回null或false, <b>(shouldComponentUpdate() 返回false, render()将不会被调用)</b></span></li>
                <li> componentDidMount() <span className="x-font-gray x-font-xs">//在render()之后被调用, 初始化的时候执行,只会执行一次,state的更新不会触发重新呈现</span></li>
              </ul>
              <ul className="x-font-lm">
                <b><i>Updating</i></b>
                <li className="x-margin-bottom-md"> componentWillReceiveProps(nextProps) <span className="x-font-gray x-font-xs">//在装入的组件接收新props之前被调用,初始化不会执行,可以在此方法中比较this.props和nextProps并使用this.setState()执行状态转换,this.setState()不会触发componentWillReceiveProps</span></li>
                <li className="x-margin-bottom-md"> shouldComponentUpdate(nextProps, nextState)
                  <span className="x-font-gray x-font-xs">
                  //接收到新的props与state,在render()之前调用,初始化与使用forceUpdate()不执行,默认为true,返回false不会阻止子组件在状态更改时render(),
                  <br/>
                  如果shouldComponentUpdate() 返回false, 那么不会调用componentWillUpdate(), render(), componentDidUpdate(),
                  <i>注意，在将来React可以将shouldComponentUpdate() 作为提示而不是strict指令,返回false仍然可能导致组件的重新渲染</i>
                  <br/>
                  如果确定一个特定的组件在分析后缓慢,可以改变它继承自React.PureComponent,它实现了具有浅道具和状态比较的shouldComponentUpdate(), 如果你确信你想手工编写它,你可以比较this.props与nextProps和this.state与nextState和返回false告诉React可以跳过更新
                  </span>
                </li>
                <li className="x-margin-bottom-md"> componentWillUpdate(nextProps, nextState)
                  <span className="x-font-gray x-font-xs">
                    //在接受到新的props与state,并且在render() 之前调用, 初始化与shouldComponentUpdate()返回false不会调用componentWillUpdate()
                  </span>
                </li>
                <li className="x-margin-bottom-md"> render() <span className="x-font-gray x-font-xs">渲染组件</span></li>
                <li className="x-margin-bottom-md"> componentDidUpdate(prevProps, prevState)
                  <span className="x-font-gray x-font-xs">
                  //在render() 之后调用, 初始化与shouldComponentUpdate()返回false不会调用componentDidUpdate()
                  </span>
                </li>
              </ul>
              <ul className="x-font-lm">
                <b><i>Unmounting</i></b>
                <li className="x-margin-bottom-md">componentWillUnmount()
                  <span className="x-font-gray x-font-xs">
                    //在组件被销毁之前调用,在此方法中执行任何必要的清理,如计时器无效,取消网络请求或清理元素等
                  </span>
                </li>
              </ul>
              <ul className="x-font-lm">
                <b><i>Other APIs </i></b>
                <li className="x-margin-bottom-md">setState(nextState, callback)
                  <span className="x-font-gray x-font-xs">
                    //设置新的状态,this.setState({"{name:123}"});
                    setState() 总是会导致重新渲染, 除非在 shouldComponentUpdate()返回false
                  </span>
                </li>
                <li className="x-margin-bottom-md">forceUpdate(callback)
                  <span className="x-font-gray x-font-xs">
                    //主动触发render(),跳过shouldComponentUpdate(),但是将触发子组件的正常生命周期方法,包括每个子组件的shouldComponentUpdate()
                  </span>
                </li>
              </ul>
              <ul className="x-font-lm">
                <b><i>Class Properties</i></b>
                <li className="x-margin-bottom-md">defaultProps
                  <span className="x-font-gray x-font-xs">
                    //定义组件本身的属性
                  </span>
                  <div className="x-padding-xs x-border-light-gray">
                    {"class MyComponent extends React.Component {"}
                    <br/>
                    <span className="x-margin-left-xs">//...</span>
                    <br/>
                    {"}"}
                    <br/>
                    <br/>
                    {"MyComponent.defaultProps = {"}
                    <br/>
                    <span className="x-margin-left-xs">prop1: "prop1"</span>
                    <br/>
                    {"}"}
                  </div>
                </li>
                <li className="x-margin-bottom-md">displayName
                  <span className="x-font-gray x-font-xs">
                    //字符串用于调试消息,JSX自动设置此值
                  </span>
                  <div className="x-padding-xs x-border-light-gray">
                    {"class MyComponent extends React.Component {"}
                    <br/>
                    <span className="x-margin-left-xs">displayName = "MyComponent";</span>
                    <br/>
                    <span className="x-margin-left-xs">//...</span>
                    <br/>
                    {"}"}
                  </div>
                </li>
                <li className="x-margin-bottom-md">propTypes
                  <span className="x-font-gray x-font-xs">
                    //属性类型
                  </span>
                  <div className="x-padding-xs x-border-light-gray">
                    {"class MyComponent extends React.Component {"}
                    <br/>
                    <span className="x-margin-left-xs">//...</span>
                    <br/>
                    {"}"}
                    <br/>
                    <br/>
                    {"MyComponent.defaultProps = {"}
                    <br/>
                    <span className="x-margin-left-xs">prop1: React.PropTypes.string</span>
                    <div className="x-margin-left-xs x-font-gray">//React.PropTypes.array</div>
                    <div className="x-margin-left-xs x-font-gray">//React.PropTypes.bool</div>
                    <div className="x-margin-left-xs x-font-gray">//React.PropTypes.func</div>
                    <div className="x-margin-left-xs x-font-gray">//React.PropTypes.number</div>
                    <div className="x-margin-left-xs x-font-gray">//React.PropTypes.object</div>
                    <div className="x-margin-left-xs x-font-gray">//React.PropTypes.string</div>
                    <div className="x-margin-left-xs x-font-gray">//React.PropTypes.symbol</div>
                    <div className="x-margin-left-xs x-font-gray">
                      <i>
                        //以上为基本类型, 详细使用可以参考
                        <a className="x-margin-left-xs x-font-primary" target="_blank" href="https://facebook.github.io/react/docs/typechecking-with-proptypes.html">Typechecking With PropTypes</a>
                        <a className="x-margin-left-xs x-font-primary" target="_blank" href="http://blog.csdn.net/u013224660/article/details/51163067">Props 验证</a>
                      </i>
                    </div>
                    <div className="x-margin-left-xs x-font-gray">
                      <b><i>//必须声明props类型</i></b>
                    </div>
                    {"}"}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="x-row x-margin-bottom-md" data-toggle="reactComponentDemo">
          <div className="x-col-lg-12 x-api-right-toggle">
            <h1>实例</h1>
            <div className="x-padding-xs">
              <h3>Component.jsx</h3>
              <div className="x-padding-xs x-border-light-gray">
                <div>import React from "react";</div>
                <br/>
                <div>{"export default class Component extends React.Component {"}</div>
                <br/>
                <div className="x-margin-left-md">{"displayName = 'Component';"}</div>
                <br/>
                <div className="x-margin-left-md">
                  {"constructor() {"}
                  <div className="x-margin-left-md">{"super(props);"}</div>
                  {"}"}
                </div>
                <br/>
                <div className="x-margin-left-md">
                  {"componentWillMount() {"}
                  <div className="x-margin-left-md">//...</div>
                  {"}"}
                </div>
                <br/>
                <div className="x-margin-left-md">
                  {"render() {"}
                  <div className="x-margin-left-md">
                  {"return ("}
                  <div className="x-margin-left-md">
                    {"<div>this.props.prop1</div>"}
                  </div>
                  {")"}
                  </div>
                  {"}"}
                </div>
                <br/>
                <div className="x-margin-left-md">
                  {"componentDidMount() {"}
                  <div className="x-margin-left-md">//...</div>
                  {"}"}
                </div>
                <br/>
                <div>{"}"}</div>
                <br/>
                <div>{"Component.defaultProps = {"}</div>
                <div className="x-margin-left-md">{"prop1: 'prop1'"}</div>
                <div>{"};"}</div>
                <br/>
                <div>{"Component.propTypes = {"}</div>
                <div className="x-margin-left-md">{"prop1: React.PropTypes.string"}</div>
                <div>{"};"}</div>
              </div>
              <h3>TestComponent.jsx</h3>
              <div className="x-padding-xs x-border-light-gray">
                <div>import React from "react";</div>
                <div>import Component from "./Component";</div>
                <br/>
                <div>{"export default class TestComponent extends React.Component {"}</div>
                <br/>
                <div className="x-margin-left-md">{"displayName = 'TestComponent';"}</div>
                <br/>
                <div className="x-margin-left-md">
                  {"render() {"}
                  <div className="x-margin-left-md">
                    {"return ("}
                    <div className="x-margin-left-md">
                      {"<div>TestComponent"}
                      <div className="x-margin-left-md">{"<Component prop1='prop1' />"}</div>
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

        <div className="x-row x-margin-bottom-md" data-toggle="reactComponentRef">
          <div className="x-col-lg-12 x-api-right-toggle">
            <h1>Ref</h1>
            ref属性接受一个回调,回调将在组件被挂载和卸载后立即执行, 当DOM元素使用ref属性, ref接受DOM,并且可以对其进行操作, 也可以用于组件之间的协调
            <a className="x-margin-left-md x-font-primary" target="_blank" href="https://facebook.github.io/react/docs/refs-and-the-dom.html">官方文档</a>
            <div className="x-padding-xs">
              <div>{"class TestRef extends React.Component {"}</div>
              <br/>
              <div className="x-margin-left-md">
                {"render() {"}
                <div className="x-margin-left-md">
                  {"return ("}
                  <div className="x-margin-left-md">{"<div> Test Ref </div>"}</div>
                  {")"}
                </div>
                {"}"}
              </div>
              <br/>
              <div className="x-margin-left-md">
                {"test() {"}
                <div className="x-margin-left-md">
                  {"console.log('This is the TestRef Component function!');"}
                </div>
                {"}"}
              </div>
              <br/>
              <div>{"}"}</div>
            </div>
            <hr/>
            <div className="x-padding-xs">
              <div>{"class MyComponent extends React.Component {"}</div>
              <br/>
              <div className="x-margin-left-md">{"testRef = null;"}</div>
              <br/>
              <div className="x-margin-left-md">
                {"render() {"}
                <div className="x-margin-left-md">
                  {"return ("}
                  <div className="x-margin-left-md">
                    {"<div>"}
                    <div className="x-margin-left-md">{"<TestRef ref={(_testRef) => { this.testRef = _testRef; }} />"}</div>
                    <div className="x-margin-left-md">{"<button onClick={(e) => this.testClick(e)}>test</button>"}</div>
                    {"</div>"}
                  </div>
                  {")"}
                </div>
                {"}"}
              </div>
              <br/>
              <div className="x-margin-left-md">
                {"testClick(e) {"}
                <div className="x-margin-left-md">
                  {"this.testRef.test();"}
                  <i className="x-margin-left-md x-font-gray">//This is the TestRef Component function!</i>
                </div>
                {"}"}
              </div>
              <br/>
              <div>{"}"}</div>
            </div>
          </div>
        </div>

        <div className="x-row x-margin-bottom-md" data-toggle="reactComponentAPI">
          <div className="x-col-lg-12 x-api-right-toggle">
            <h1>常用API</h1>
            <a className="x-margin-left-md x-font-primary" target="_blank" href="https://facebook.github.io/react/docs/react-api.html">官方API</a>
            <div className="x-padding-xs">
              <ul>
                <li className="x-margin-bottom-md">实现 React.Component 或者 React.PureComponent</li>
                <li className="x-margin-bottom-md">
                  React.cloneElement()
                  <span className="x-margin-left-md">使用元素作为起点,克隆并返回一个新的React元素, key与ref从原始开始保留</span>
                  <div className="x-padding-xs x-border-light-gray">
                    React.cloneElement(
                    <div className="x-margin-left-md">element,</div>
                    <div className="x-margin-left-md">[props],</div>
                    <div className="x-margin-left-md">[...children]</div>
                    )
                  </div>
                </li>
                <li className="x-margin-bottom-md">
                  React.isValidElement()
                  <span className="x-margin-left-md">验证对象是否为React元素, 返回 true / false </span>
                  <div className="x-padding-xs x-border-light-gray">
                    React.isValidElement(object)
                  </div>
                </li>
                <li className="x-margin-bottom-md">
                  React.Children
                  <span className="x-margin-left-md">提供了处理this.props.children不透明数据的实用函数</span>
                  <div className="x-padding-xs x-border-light-gray x-margin-bottom-md">
                    <b>
                      React.Children.map(children, function[(thisArg)])
                      <i className="x-font-gray x-margin-left-md">//遍历每一个子元素, 如果children为空则不执行,返回数组,如果children为空则返回null或undefined</i>
                    </b>
                  </div>
                  <div className="x-padding-xs x-border-light-gray x-margin-bottom-md">
                    <b>
                      React.Children.forEach(children, function[(thisArg)])
                      <i className="x-font-gray x-margin-left-md">//遍历每一个子元素, 但是不返回数组</i>
                    </b>
                  </div>
                  <div className="x-padding-xs x-border-light-gray x-margin-bottom-md">
                    <b>
                      Children.count(children)
                      <i className="x-font-gray x-margin-left-md">//返回子元素中的组件总数，等于传递给map或forEach的回调的次数将被调用</i>
                    </b>
                  </div>
                  <div className="x-padding-xs x-border-light-gray x-margin-bottom-md">
                    <b>
                      React.Children.only(children)
                      <i className="x-font-gray x-margin-left-md">//返回子元素中的唯一子元素,否则抛出异常</i>
                    </b>
                  </div>
                  <div className="x-padding-xs x-border-light-gray x-margin-bottom-md">
                    <b>
                      React.Children.toArray(children)
                      <i className="x-font-gray x-margin-left-md">
                      //更改键以在展平子级列表时保留嵌套数组的语义,也就是说,toArray为返回的数组中的每个键赋予前缀,以使每个元素的键的范围限定为包含它的输入数组
                      </i>
                    </b>
                  </div>
                </li>
                <li className="x-margin-bottom-md">
                  React.PropTypes
                  <span className="x-margin-left-md">组件属性传递验证器</span>
                  <div className="x-padding-xs x-margin-bottom-md x-border-light-gray">
                    <b>
                      React.PropTypes.array
                      <i className="x-margin-left-md x-font-gray">//数组</i>
                    </b>
                  </div>
                  <div className="x-padding-xs x-margin-bottom-md x-border-light-gray">
                    <b>
                      React.PropTypes.bool
                      <i className="x-margin-left-md x-font-gray">//布尔</i>
                    </b>
                  </div>
                  <div className="x-padding-xs x-margin-bottom-md x-border-light-gray">
                    <b>
                      React.PropTypes.func
                      <i className="x-margin-left-md x-font-gray">//function</i>
                    </b>
                  </div>
                  <div className="x-padding-xs x-margin-bottom-md x-border-light-gray">
                    <b>
                      React.PropTypes.number
                      <i className="x-margin-left-md x-font-gray">//数字</i>
                    </b>
                  </div>
                  <div className="x-padding-xs x-margin-bottom-md x-border-light-gray">
                    <b>
                      React.PropTypes.object
                      <i className="x-margin-left-md x-font-gray">//对象</i>
                    </b>
                  </div>
                  <div className="x-padding-xs x-margin-bottom-md x-border-light-gray">
                    <b>
                      React.PropTypes.string
                      <i className="x-margin-left-md x-font-gray">//字符串</i>
                    </b>
                  </div>
                  <div className="x-padding-xs x-margin-bottom-md x-border-light-gray">
                    <b>
                      React.PropTypes.symbol
                      <i className="x-margin-left-md x-font-gray">//symbol</i>
                    </b>
                  </div>
                  <div className="x-padding-xs x-margin-bottom-md x-border-light-gray">
                    <b>
                      React.PropTypes.node
                      <i className="x-margin-left-md x-font-gray">//node</i>
                    </b>
                  </div>
                  <div className="x-padding-xs x-margin-bottom-md x-border-light-gray">
                    <b>
                      React.PropTypes.element
                      <i className="x-margin-left-md x-font-gray">//react element</i>
                    </b>
                  </div>
                  <div className="x-padding-xs x-margin-bottom-md x-border-light-gray">
                    <b>
                      React.PropTypes.instanceOf(class)
                      <i className="x-margin-left-md x-font-gray">//与js中的instanceOf相似, 如 instanceOf(Array)</i>
                    </b>
                  </div>
                  <div className="x-padding-xs x-margin-bottom-md x-border-light-gray">
                    <b>
                      React.PropTypes.oneOf(arrayOfValues)
                      <i className="x-margin-left-md x-font-gray">//数组中的某个值,类似enum</i>
                    </b>
                    <br/>
                    <div>{"MyComponent.propsTypes = {"}</div>
                    <div className="x-margin-left-md">
                      {"optionalEnum: React.PropTypes.oneOf(['one', 'two']),"}
                    </div>
                    <div>{"}"}</div>
                  </div>
                  <div className="x-padding-xs x-margin-bottom-md x-border-light-gray">
                    <b>
                      React.PropTypes.oneOfType(arrayOfPropTypes)
                      <i className="x-margin-left-md x-font-gray">//react propsTypes中的一个</i>
                    </b>
                    <br/>
                    <div>{"MyComponent.PropTypes = {"}</div>
                    <div className="x-margin-left-md">
                      <div>{"optionalUnion: React.propsTypes.oneOfType(["}</div>
                      <div className="x-margin-left-md">{"React.PropTypes.string,"}</div>
                      <div className="x-margin-left-md">{"React.PropTypes.number,"}</div>
                      <div className="x-margin-left-md">{"React.PropTypes.instanceOf(Message),"}</div>
                      <div>{"])"}</div>
                    </div>
                    <div>{"}"}</div>
                  </div>
                  <div className="x-padding-xs x-margin-bottom-md x-border-light-gray">
                    <b>
                      React.PropTypes.arrayOf(propType)
                      <i className="x-margin-left-md x-font-gray">//数组类型</i>
                    </b>
                    <br/>
                    <div>{"MyComponent.propType = {"}</div>
                    <div className="x-margin-left-md">{"optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),"}</div>
                    <div>{"}"}</div>
                  </div>
                  <div className="x-padding-xs x-margin-bottom-md x-border-light-gray">
                    <b>
                      React.PropTypes.objectOf(propType)
                      <i className="x-margin-left-md x-font-gray">//对象类型</i>
                    </b>
                    <br/>
                    <div>{"MyComponent.propType = {"}</div>
                    <div className="x-margin-left-md">{"optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),"}</div>
                  </div>
                  <div className="x-padding-xs x-margin-bottom-md x-border-light-gray">
                    <b>
                      React.PropTypes.shape(object)
                      <i className="x-margin-left-md x-font-gray">//具体对象</i>
                    </b>
                    <br/>
                    <div>{"MyComponent.propType = {"}</div>
                    <div className="x-margin-left-md">
                      <div>{"optionalWithShape: React.PropTypes.shape({"}</div>
                      <div className="x-margin-left-md">{"color: React.PropTypes.string,"}</div>
                      <div className="x-margin-left-md">{"fontSize: React.PropTypes.number"}</div>
                      <div>{"}),"}</div>
                    </div>
                    <div>{"}"}</div>
                  </div>
                  <div className="x-padding-xs x-margin-bottom-md x-border-light-gray">
                    <b>
                      React.PropTypes.any
                      <i className="x-margin-left-md x-font-gray">//任何数据类型值,通常为isRequired</i>
                    </b>
                    <br/>
                    <div>{"MyComponent.propType = {"}</div>
                    <div className="x-margin-left-md">{"optionalAny: React.PropTypes.any.isRequired,"}</div>
                  </div>
                  <div className="x-padding-xs x-margin-bottom-md x-border-light-gray">
                    <b>
                      propType.isRequired
                      <i className="x-margin-left-md x-font-gray">//使用组件必须提供对应的prop,否则显示警告</i>
                    </b>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="x-row x-margin-bottom-md" data-toggle="reactComponentEvent">
          <div className="x-col-lg-12 x-api-right-toggle">
            <h1>事件</h1>
            <a className="x-margin-left-md x-font-primary" target="_blank" href="http://reactjs.cn/react/docs/events.html">Event System</a>

            <div className="x-padding-xs x-margin-bottom-md">
              事件处理程序将传递SyntheticEvent实例,这是一个跨浏览器本机事件的包装器,它具有与浏览器本机事件相同的接口,包括stopPropagation()
              和preventDefault(),如果需要底层浏览器事件,只需要使用nativeEvent属性来获取它,每个SyntheticEvent都有以下属性:
              <div className="x-border-light-gray x-padding-xs">
                <div className="x-margin-left-md x-margin-bottom-sm">boolean bubbles</div>
                <div className="x-margin-left-md x-margin-bottom-sm">boolean cancelable</div>
                <div className="x-margin-left-md x-margin-bottom-sm">DOMEventTarget currentTarget</div>
                <div className="x-margin-left-md x-margin-bottom-sm">boolean defaultPrevented</div>
                <div className="x-margin-left-md x-margin-bottom-sm">number eventPhase</div>
                <div className="x-margin-left-md x-margin-bottom-sm">boolean isTrusted</div>
                <div className="x-margin-left-md x-margin-bottom-sm">DOMEvent nativeEvent</div>
                <div className="x-margin-left-md x-margin-bottom-sm">void preventDefault()</div>
                <div className="x-margin-left-md x-margin-bottom-sm">boolean isDefaultPrevented()</div>
                <div className="x-margin-left-md x-margin-bottom-sm">void stopPropagation()</div>
                <div className="x-margin-left-md x-margin-bottom-sm">boolean isPropagationStopped()</div>
                <div className="x-margin-left-md x-margin-bottom-sm">DOMEventTarget target</div>
                <div className="x-margin-left-md x-margin-bottom-sm">number timeStamp</div>
                <div className="x-margin-left-md">string type</div>
              </div>
            </div>

            <div className="x-padding-xs x-margin-bottom-md">
              <h2>Clipboard Events</h2>
              <div className="x-margin-bottom-sm">Event names:</div>
              <div className="x-padding-xs x-border-light-gray x-margin-bottom-md">
                <span className="x-margin-right-md">onCopy</span>
                <span className="x-margin-right-md">onCut</span>
                <span className="x-margin-right-md">onPaste</span>
              </div>
              <div className="x-margin-bottom-sm">Properties:</div>
              <div className="x-padding-xs x-border-light-gray">
                <span className="x-margin-right-md">DOMDataTransfer</span>
                <span className="x-margin-right-md">clipboardData</span>
              </div>
            </div>

            <div className="x-padding-xs x-margin-bottom-md">
              <h2>Composition Events</h2>
              <div className="x-margin-bottom-sm">Event names:</div>
              <div className="x-padding-xs x-border-light-gray x-margin-bottom-md">
                <span className="x-margin-right-md">onCompositionEnd</span>
                <span className="x-margin-right-md">onCompositionStart</span>
                <span className="x-margin-right-md">onCompositionUpdate</span>
              </div>
              <div className="x-margin-bottom-sm">Properties:</div>
              <div className="x-padding-xs x-border-light-gray">
                <span className="x-margin-right-md">string</span>
                <span className="x-margin-right-md">data</span>
              </div>
            </div>

            <div className="x-padding-xs x-margin-bottom-md">
              <h2>Keyboard Events</h2>
              <div className="x-margin-bottom-sm">Event names:</div>
              <div className="x-padding-xs x-border-light-gray x-margin-bottom-md">
                <span className="x-margin-right-md">onKeyDown</span>
                <span className="x-margin-right-md">onKeyPress</span>
                <span className="x-margin-right-md">onKeyUp</span>
              </div>
              <div className="x-margin-bottom-sm">Properties:</div>
              <div className="x-padding-xs x-border-light-gray">
                <div className="x-margin-right-md">boolean altKey</div>
                <div className="x-margin-right-md">number charCode</div>
                <div className="x-margin-right-md">boolean ctrlKey</div>
                <div className="x-margin-right-md">boolean getModifierState(key)</div>
                <div className="x-margin-right-md">string key</div>
                <div className="x-margin-right-md">number keyCode</div>
                <div className="x-margin-right-md">string locale</div>
                <div className="x-margin-right-md">number location</div>
                <div className="x-margin-right-md">boolean metaKey</div>
                <div className="x-margin-right-md">boolean repeat</div>
                <div className="x-margin-right-md">boolean shiftKey</div>
                <div className="x-margin-right-md">number which</div>
              </div>
            </div>

            <div className="x-padding-xs x-margin-bottom-md">
              <h2>Focus Events</h2>
              <div className="x-margin-bottom-sm">Event names:</div>
              <div className="x-padding-xs x-border-light-gray x-margin-bottom-md">
                <span className="x-margin-right-md">onFocus</span>
                <span className="x-margin-right-md">onBlur</span>
              </div>
              <div className="x-margin-bottom-sm">Properties:</div>
              <div className="x-padding-xs x-border-light-gray">
                <span className="x-margin-right-md">DOMEventTarget</span>
                <span className="x-margin-right-md">relatedTarget</span>
              </div>
            </div>

            <div className="x-padding-xs x-margin-bottom-md">
              <h2>Form Events</h2>
              <div className="x-margin-bottom-sm">Event names:</div>
              <div className="x-padding-xs x-border-light-gray x-margin-bottom-md">
                <span className="x-margin-right-md">onChange</span>
                <span className="x-margin-right-md">onInput</span>
                <span className="x-margin-right-md">onSubmit</span>
              </div>
            </div>

            <div className="x-padding-xs x-margin-bottom-md">
              <h2>Mouse Events</h2>
              <div className="x-margin-bottom-sm">Event names:</div>
              <div className="x-padding-xs x-border-light-gray x-margin-bottom-md x-layout">
                <span className="x-margin-right-md x-left">onClick</span>
                <span className="x-margin-right-md x-left">onContextMenu</span>
                <span className="x-margin-right-md x-left">onDoubleClick</span>
                <span className="x-margin-right-md x-left">onDrag</span>
                <span className="x-margin-right-md x-left">onDragEnd</span>
                <span className="x-margin-right-md x-left">onDragEnter</span>
                <span className="x-margin-right-md x-left">onDragExit</span>
                <span className="x-margin-right-md x-left">onDragLeave</span>
                <span className="x-margin-right-md x-left">onDragOver</span>
                <span className="x-margin-right-md x-left">onDragStart</span>
                <span className="x-margin-right-md x-left">onDrop</span>
                <span className="x-margin-right-md x-left">onMouseDown</span>
                <span className="x-margin-right-md x-left">onMouseEnter</span>
                <span className="x-margin-right-md x-left">onMouseLeave</span>
                <span className="x-margin-right-md x-left">onMouseMove</span>
                <span className="x-margin-right-md x-left">onMouseOut</span>
                <span className="x-margin-right-md x-left">onMouseOver</span>
                <span className="x-margin-right-md x-left">onMouseUp</span>
              </div>
              <div className="x-margin-bottom-sm">Properties:</div>
              <div className="x-padding-xs x-border-light-gray">
                <div className="x-margin-right-md">boolean altKey</div>
                <div className="x-margin-right-md">number button</div>
                <div className="x-margin-right-md">number buttons</div>
                <div className="x-margin-right-md">number clientX</div>
                <div className="x-margin-right-md">number clientY</div>
                <div className="x-margin-right-md">boolean ctrlKey</div>
                <div className="x-margin-right-md">boolean getModifierState(key)</div>
                <div className="x-margin-right-md">boolean metaKey</div>
                <div className="x-margin-right-md">number pageX</div>
                <div className="x-margin-right-md">number pageY</div>
                <div className="x-margin-right-md">DOMEventTarget relatedTarget</div>
                <div className="x-margin-right-md">number screenX</div>
                <div className="x-margin-right-md">number screenY</div>
                <div className="x-margin-right-md">boolean shiftKey</div>
              </div>
            </div>

            <div className="x-padding-xs x-margin-bottom-md">
              <h2>Selection Events</h2>
              <div className="x-margin-bottom-sm">Event names:</div>
              <div className="x-padding-xs x-border-light-gray x-margin-bottom-md">
                <span className="x-margin-right-md">onSelect</span>
              </div>
            </div>

            <div className="x-padding-xs x-margin-bottom-md">
              <h2>Touch Events</h2>
              <div className="x-margin-bottom-sm">Event names:</div>
              <div className="x-padding-xs x-border-light-gray x-margin-bottom-md x-layout">
                <span className="x-margin-right-md x-left">onTouchCancel</span>
                <span className="x-margin-right-md x-left">onTouchEnd</span>
                <span className="x-margin-right-md x-left">onTouchMove</span>
                <span className="x-margin-right-md x-left">onTouchStart</span>
              </div>
              <div className="x-margin-bottom-sm">Properties:</div>
              <div className="x-padding-xs x-border-light-gray">
                <div className="x-margin-right-md">boolean altKey</div>
                <div className="x-margin-right-md">DOMTouchList changedTouches</div>
                <div className="x-margin-right-md">boolean ctrlKey</div>
                <div className="x-margin-right-md">boolean getModifierState(key)</div>
                <div className="x-margin-right-md">boolean metaKey</div>
                <div className="x-margin-right-md">boolean shiftKey</div>
                <div className="x-margin-right-md">DOMTouchList targetTouches</div>
                <div className="x-margin-right-md">DOMTouchList touches</div>
              </div>
            </div>

            <div className="x-padding-xs x-margin-bottom-md">
              <h2>UI Events</h2>
              <div className="x-margin-bottom-sm">Event names:</div>
              <div className="x-padding-xs x-border-light-gray x-margin-bottom-md">
                <span className="x-margin-right-md">onScroll</span>
              </div>
              <div className="x-margin-bottom-sm">Properties:</div>
              <div className="x-padding-xs x-border-light-gray">
                <div className="x-margin-right-md">number detail</div>
                <div className="x-margin-right-md">DOMAbstractView view</div>
              </div>
            </div>

            <div className="x-padding-xs x-margin-bottom-md">
              <h2>Wheel Events</h2>
              <div className="x-margin-bottom-sm">Event names:</div>
              <div className="x-padding-xs x-border-light-gray x-margin-bottom-md">
                <span className="x-margin-right-md">onWheel</span>
              </div>
              <div className="x-margin-bottom-sm">Properties:</div>
              <div className="x-padding-xs x-border-light-gray">
                <div className="x-margin-right-md">number deltaMode</div>
                <div className="x-margin-right-md">number deltaX</div>
                <div className="x-margin-right-md">number deltaY</div>
                <div className="x-margin-right-md">number deltaZ</div>
              </div>
            </div>

            <div className="x-padding-xs x-margin-bottom-md">
              <h2>Media Events</h2>
              <div className="x-margin-bottom-sm">Event names:</div>
              <div className="x-layout x-padding-xs x-border-light-gray x-margin-bottom-md">
                <span className="x-margin-right-md x-left">onAbort</span>
                <span className="x-margin-right-md x-left">onCanPlay</span>
                <span className="x-margin-right-md x-left">onCanPlayThrough</span>
                <span className="x-margin-right-md x-left">onDurationChange</span>
                <span className="x-margin-right-md x-left">onEmptied</span>
                <span className="x-margin-right-md x-left">onEncrypted</span>
                <span className="x-margin-right-md x-left">onEnded</span>
                <span className="x-margin-right-md x-left">onError</span>
                <span className="x-margin-right-md x-left">onLoadedData</span>
                <span className="x-margin-right-md x-left">onLoadedMetadata</span>
                <span className="x-margin-right-md x-left">onLoadStart</span>
                <span className="x-margin-right-md x-left">onPause</span>
                <span className="x-margin-right-md x-left">onPlay</span>
                <span className="x-margin-right-md x-left">onPlaying</span>
                <span className="x-margin-right-md x-left">onProgress</span>
                <span className="x-margin-right-md x-left">onRateChange</span>
                <span className="x-margin-right-md x-left">onSeeked</span>
                <span className="x-margin-right-md x-left">onSeeking</span>
                <span className="x-margin-right-md x-left">onStalled</span>
                <span className="x-margin-right-md x-left">onSuspend</span>
                <span className="x-margin-right-md x-left">onTimeUpdate</span>
                <span className="x-margin-right-md x-left">onVolumeChange</span>
                <span className="x-margin-right-md x-left">onWaiting </span>
              </div>
            </div>

            <div className="x-padding-xs x-margin-bottom-md">
              <h2>Image Events</h2>
              <div className="x-margin-bottom-sm">Event names:</div>
              <div className="x-padding-xs x-border-light-gray x-margin-bottom-md x-layout">
                <span className="x-margin-right-md x-left">onLoad</span>
                <span className="x-margin-right-md x-left">onError</span>
              </div>
            </div>

            <div className="x-padding-xs x-margin-bottom-md">
              <h2>Animation Events</h2>
              <div className="x-margin-bottom-sm">Event names:</div>
              <div className="x-padding-xs x-border-light-gray x-margin-bottom-md x-layout">
                <span className="x-margin-right-md x-left">onAnimationStart</span>
                <span className="x-margin-right-md x-left">onAnimationEnd</span>
                <span className="x-margin-right-md x-left">onAnimationIteration</span>
              </div>
              <div className="x-margin-bottom-sm">Properties:</div>
              <div className="x-padding-xs x-border-light-gray">
                <div className="x-margin-right-md">string animationName</div>
                <div className="x-margin-right-md">string pseudoElement</div>
                <div className="x-margin-right-md">float elapsedTime</div>
              </div>
            </div>

            <div className="x-padding-xs x-margin-bottom-md">
              <h2>Transition Events</h2>
              <div className="x-margin-bottom-sm">Event names:</div>
              <div className="x-padding-xs x-border-light-gray x-margin-bottom-md x-layout">
                <span className="x-margin-right-md x-left">onTransitionEnd</span>
              </div>
              <div className="x-margin-bottom-sm">Properties:</div>
              <div className="x-padding-xs x-border-light-gray">
                <div className="x-margin-right-md">string propertyName</div>
                <div className="x-margin-right-md">string pseudoElement</div>
                <div className="x-margin-right-md">float elapsedTime</div>
              </div>
            </div>

            <h2>Demo</h2>
            <div className="x-padding-xs x-border-light-gray">
              {"class MyButton extends React.Component {"}
              <br/>
              <br/>
              <div className="x-margin-left-md">
                {"render() {"}
                <div className="x-margin-left-md">
                  {"return ("}
                  <div className="x-margin-left-md">
                    {"<button onClick={(e) => this.handleClick(e)}>test event click</button>"}
                  </div>
                  {")"}
                </div>
                {"}"}
              </div>
              <br/>
              <div className="x-margin-left-md">
                {"handleClick(e) {"}
                <div className="x-margin-left-md">
                  {"console.log('handleClick...');"}
                </div>
                {"}"}
              </div>
              <br/>
              {"}"}
            </div>

          </div>
        </div>

        <div className="x-row x-margin-bottom-md" data-toggle="reactComponentHelp">
          <div className="x-col-lg-12 x-api-right-toggle">
            <h1>附属文档</h1>
            <div className="x-padding-xs">
              <div className="x-margin-left-md x-margin-bottom-md">
                <a className="x-font-primary" target="_blank" href="http://reactjs.cn/react/index.html">1.官方文档</a>
              </div>
              <div className="x-margin-left-md x-margin-bottom-md">
                <a className="x-font-primary" target="_blank" href="http://reactjs.cn/react/docs/getting-started-zh-CN.html">2.入门教程</a>
              </div>
              <div className="x-margin-left-md x-margin-bottom-md">
                <a className="x-font-primary" target="_blank" href="http://www.uprogrammer.cn/react-router-cn/index.html">3.react-router</a>
              </div>
              <div className="x-margin-left-md x-margin-bottom-md">
                <a className="x-font-primary" target="_blank" href="https://github.com/reactjs/react-router-redux/blob/master/examples/basic/components/Home.js">4.react-router-redux-demo</a>
              </div>
              <div className="x-margin-left-md x-margin-bottom-md">
                <a className="x-font-primary" target="_blank" href="http://cn.redux.js.org/docs/introduction/ThreePrinciples.html">5.react-redux</a>
              </div>
            </div>
          </div>
        </div>

        <div className="x-row x-margin-bottom-md" data-toggle="sassFormat">
          <div className="x-col-lg-12 x-api-right-toggle">
            <h1>编写规范</h1>
              <div className="x-padding-xs">
                <div className="x-margin-bottom-sm">(1). <b>必须</b>以小写定义文件名,单词分割符为-,前缀可加_,(注意与jsx组件合同一处则不需要_作为前缀) 如<i>_style.scss</i></div>
                <div className="x-margin-bottom-sm">(2). <b>必须</b>xx-xx来定义class, 如<i>main-box</i></div>
                <div className="x-margin-bottom-sm">(3). <b>分辨率(从小到大)<i> 前缀或后缀 </i></b> xs 默认(无限制) sm >= 576px md >= 768px lg >= 992px xl >= 1200, 详细可以查看 <a className="x-font-primary" href="#">UI / 布局</a></div>
                <div className="x-margin-bottom-sm">(4). <b>大小(从小到大)<i> 前缀或后缀 </i></b> sm md lm lg  ls xl xs(默认), 详细可以查看 <a className="x-font-primary" href="#">输入 / 按钮</a></div>
                <i>当前没有单独分离出编译sass完毕后的css文件,与js按需加载类似,按需内嵌入html中</i>
              </div>
              <hr/>
              <div className="x-padding-xs">
                <div className="x-margin-bottom-sm">
                  <div className="x-margin-bottom-sm">(5).嵌套</div>
                  <div className="x-border-light-gray x-padding-md">
                    <div>.sass-box {"{"}</div>
                    <div className="x-margin-left-lm">color: #fff;</div>
                    <div className="x-margin-left-lm">font-size: 15px;</div>
                    <br/>
                    <div className="x-margin-left-lm">
                      <div>&.active {"{"}</div>
                      <div className="x-margin-left-lm">background-color: blue;</div>
                      <div className="x-margin-left-lm">color: #fff;</div>
                      <div>{"}"}</div>
                    </div>
                    <br/>
                    <div className="x-margin-left-lm">
                      <div>font: 2px/3px {"{"}</div>
                      <div className="x-margin-left-lm">family: fantasy;</div>
                      <div className="x-margin-left-lm">size: 30em;</div>
                      <div className="x-margin-left-lm">weight: bold;</div>
                      <div>{"}"}</div>
                    </div>
                    <br/>
                    <div className="x-margin-left-lm">
                      <div>p {"{"}</div>
                      <div className="x-margin-left-lm">background-color: #666;</div>
                      <div className="x-margin-left-lm">color: #000;</div>
                      <div>{"}"}</div>
                    </div>
                    <div>{"}"}</div>
                  </div>
                  <div>被翻译为:</div>
                  <div className="x-border-light-gray x-padding-md">
                    <div>.sass-box {"{"}</div>
                    <div className="x-margin-left-lm">color: #fff;</div>
                    <div className="x-margin-left-lm">font-size: 15px; {"}"}</div>
                    <div className="x-margin-left-lm">
                      <div>.sass-box.active {"{"}</div>
                      <div className="x-margin-left-lm">background-color: blue;</div>
                      <div className="x-margin-left-lm">color: #fff; {"}"}</div>
                    </div>
                    <div className="x-margin-left-lm">
                      <div>.sass-box {"{"}</div>
                      <div className="x-margin-left-lm">
                        <div>font: 2px/3px;</div>
                        <div className="x-margin-left-lm">font-family: fantasy;</div>
                        <div className="x-margin-left-lm">font-size: 30em;</div>
                        <div className="x-margin-left-lm">font-weight: bold; {"}"}</div>
                      </div>
                    </div>
                    <div className="x-margin-left-lm">
                      <div>.sass-box p {"{"}</div>
                      <div className="x-margin-left-lm">background-color: #666;</div>
                      <div className="x-margin-left-lm">color: #000; {"}"}</div>
                    </div>
                  </div>
                </div>
                <div className="x-margin-bottom-sm">
                  相比css编写更具结构化,编译后标准化输出css
                  <div className="x-font-primary">(1).&表示父选择符,如.sass-box{"{ & {}/* &表示.sass-box */ }"}</div>
                  <div className="x-font-primary">(2).嵌套选择符与属性,可查看上面例子对应翻译的结果</div>
                  <div className="x-font-primary"><i>当前没有单独分离出编译sass完毕后的css文件,与js按需加载类似,按需内嵌入html中</i></div>
                </div>
              </div>
          </div>
        </div>

        <div className="x-row x-margin-bottom-md" data-toggle="sassNote">
          <div className="x-col-lg-12 x-api-right-toggle">
            <h1>注释</h1>
            <label>
              SassScript 支持注释 /* */ 和 //
            </label>
            <div className="x-border-light-gray x-padding-md">
              <div>{"/* This comment is"}</div>
              <div>{" * several lines long. */"}</div>
              <div>{"body { color: black; }"}</div>
              <div>{"// These comments are only test comments"}</div>
              <div>{"a { color: red; }"}</div>
            </div>
            <div>被翻译为:</div>
            <div className="x-border-light-gray x-padding-md">
              <div>{"/* This comment is"}</div>
              <div>{" * several lines long. */"}</div>
              <div>{"body { color: black; }"}</div>
              <div>{"a { color: red; }"}</div>
            </div>
          </div>
        </div>

        <div className="x-row x-margin-bottom-md" data-toggle="sassDataType">
          <div className="x-col-lg-12 x-api-right-toggle">
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
            <div className="x-padding-xs">
              <div>SassScript 还支持所有其他 CSS 属性值类型， 例如 Unicode 范围和 !important 声明。 然而，它不会对这些类型做特殊处理。 它们只会被当做不带引号的字符串看待。</div>
              <div><i>@media 不支持rem单位</i></div>
            </div>
            <br/>
            <h2>字符串</h2>
            <div>
              CSS提供了两种类型的字符串: 带引号的字符串, 例如 <b className="x-margin-left-xs x-font-primary">"Lucida Grande"</b> 或 <b className="x-margin-left-xs x-font-primary">'http://sasslang.com'</b>;
              不带引号的字符串, 例如 <b className="x-margin-left-xs x-font-primary">sans-serif</b> 或 <b className="x-margin-left-xs x-font-primary">bold</b>,
              <b className="x-margin-left-xs x-font-primary">{"#{} 插值"}</b>
              <div className="x-padding-xs x-border-light-gray">
                {"@mixin firefox-message($selector) {"}
                <div className="x-margin-left-md">
                  {"body.firefox #{$selector}:before {"}
                  <div className="x-margin-left-md">
                    {"content: 'Hi, Firefox users!';"}
                  </div>
                  {"}"}
                </div>
                {"}"}
                <br/>
                {"@include firefox-message('.header');"}
              </div>
              <br/>
              被翻译为:
              <br/>
              <div className="x-padding-xs x-border-light-gray">
                {"body.firefox .header:before {"}
                <div className="x-margin-left-md">{"content: 'Hi, Firefox users!'; }"}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="x-row x-margin-bottom-md" data-toggle="sassNumOper">
          <div className="x-col-lg-12 x-api-right-toggle">
            <h1>数字运算</h1>
            <label>
              SassScript 支持数字的标准运算（加 +、减 -、乘 *、除 /和取模 %），并且，如果需要的话，也可以在不同单位间做转换,
              数字也支持关系运算（{"<、>、<=、>="}）， 等式运算（==、!=）被所有数据类型支持。
            </label>
            <div className="x-border-light-gray x-padding-md">
              p {" { width : 1in + 8pt; }"}
            </div>
            被翻译为：
            <div className="x-border-light-gray x-padding-md">
              p {" { width : 1.111in; }"}
            </div>
            <br/>
            <h2>除法运算和<span className="x-font-primary x-margin-left-md">/</span></h2>
            <br/>
            <div>
              CSS允许<span className="x-font-primary x-margin-left-md x-margin-right-md">/</span>
              出现在属性值里, 作为分隔数字的一种方法, 在默认情况下SassScript中用<span className="x-font-primary x-margin-left-md x-margin-right-md">/</span>
              分隔的两个数字, 都会在CSS中原封不动的输出, 在以下的三种情况中, <span className="x-font-primary x-margin-left-md x-margin-right-md">/</span>
              会被解释为除法运算:
              <ul>
                <li className="x-margin-bottom-sm">如果数值或它的任意部分是存储在一个变量中或是函数的返回值</li>
                <li className="x-margin-bottom-sm">如果数值被圆括号包围</li>
                <li className="x-margin-bottom-sm">如果数值是另一个数学表达式的一部分</li>
              </ul>
              <br/>
              <div className="x-padding-xs x-border-light-gray">
                {"p {"}
                <div className="x-margin-left-md">{"font: 10px/8px; // 纯CSS, 不是除法运算"}</div>
                <div className="x-margin-left-md">{"$width: 1000px;"}</div>
                <div className="x-margin-left-md">{"width: $width/2; // 使用了变量, 是除法运算"}</div>
                <div className="x-margin-left-md">{"width: round(1.5)/2; // 使用了函数, 是除法运算"}</div>
                <div className="x-margin-left-md">{"height: (500px/2); //使用了圆括号, 是除法运算"}</div>
                <div className="x-margin-left-md">{"margin-left: 5px + 8px/2px; // 使用了另一个数学表达式的一部分, 是出发运算"}</div>
                {"}"}
              </div>
              <br/>
              被翻译为:
              <br/>
              <br/>
              <div className="x-padding-xs x-border-light-gray">
                {"p {"}
                <div className="x-margin-left-md">{"font: 10px/8px;"}</div>
                <div className="x-margin-left-md">{"width: 500px;"}</div>
                <div className="x-margin-left-md">{"height: 250px;"}</div>
                <div className="x-margin-left-md">{"margin-left: 9px;"}</div>
                {"}"}
              </div>
              <hr/>
              <div className="x-padding-xs x-border-light-gray">
                {"p {"}
                <div className="x-margin-left-md">{"$font-size: 12px;"}</div>
                <div className="x-margin-left-md">{"$line-height: 30px;"}</div>
                <div className="x-margin-left-md">{"font: #{$font-size}/#{$line-height};"}</div>
                {"}"}
              </div>
              <br/>
              被翻译为:
              <br/>
              <br/>
              <div className="x-padding-xs x-border-light-gray">
                {"p {"}
                <div className="x-margin-left-md">{"font: 12px/30px; }"}</div>
              </div>
              <br/>
            </div>
          </div>
        </div>

        <div className="x-row x-margin-bottom-md" data-toggle="sassColorOper">
          <div className="x-col-lg-12 x-api-right-toggle">
            <h1>颜色运算</h1>
            <br/>
            <label>所有算数运算都支持颜色值, 并且是分段运算的, 即 红、绿、蓝各颜色分量单独进行运算</label>
            <i className="x-margin-left-md x-font-primary">(格式保持一致)</i>
            <br/>
            <br/>
            <div className="x-padding-xs x-border-light-gray">
              {"p {"}
              <div className="x-margin-left-md">{"color: #010203 + #040506;"}</div>
              {"}"}
            </div>
            <br/>
            计算公式为 01 + 04 = 05、 02 + 05 = 07、 03 + 06 = 09
            <br/>
            <br/>
            <div className="x-padding-xs x-border-light-gray">
              {"p {"}
              <div className="x-margin-left-md">{"color: #050709; }"}</div>
            </div>
            <br/>
            <hr/>
            <br/>
            <div className="x-padding-xs x-border-light-gray">
              {"p {"}
              <div className="x-margin-left-md">{"color: #010203 * 2;"}</div>
              {"}"}
            </div>
            <br/>
            计算公式为 01 * 2 = 02、 02 * 2 = 04、 03 * 2 = 06
            <br/>
            <br/>
            <div className="x-padding-xs x-border-light-gray">
              {"p {"}
              <div className="x-margin-left-md">{"color: #020406; }"}</div>
            </div>
            <br/>
            <hr/>
            <br/>
            <div className="x-padding-xs x-border-light-gray">
              {"p {"}
              <div className="x-margin-left-md">{"color: rgba(255, 0, 0, 0.75) + rgba(0, 255, 0, 0.75);"}</div>
              {"}"}
            </div>
            <br/>
            {"注意那些有 alpha 通道的颜色（像那些通过 {Sass::Script::Functions#rgba rgba} 或 {Sass::Script::Functions#hsla hsla} 函数创建的）必须要有同样的 alpha 值，才能执行颜色运算。 T颜色运算不会影响 alpha 值。"}
            <br/>
            <br/>
            <div className="x-padding-xs x-border-light-gray">
              {"p {"}
              <div className="x-margin-left-md">{"color: rgba(255, 255, 0, 0.75); }"}</div>
            </div>
            <br/>
            <hr/>
            <br/>
            <div className="x-padding-xs x-border-light-gray">
              {"$translucent-red: rgba(255, 0, 0, 0.5);"}
              <br/>
              {"$green: #00ff00;"}
              <br/>
              {"div {"}
              <div className="x-margin-left-md">
                {"filter: progid:DXImageTransform.Microsoft.gradient(enabled='false', startColorstr='#{ie-hex-str($green)}', endColorstr='#{ie-hex-str($translucent-red)}');"}
              </div>
              {"}"}
            </div>
            <br/>
              {"IE 滤镜需要每个颜色都包含 alpha 层， 并且得用 #AABBCCDD 这样严格的格式。你可以轻松的利用 {Sass::Script::Functions#ie_hex_str ie_hex_str} 函数对其做转换"}
            <br/>
            <br/>
            <div className="x-padding-xs x-border-light-gray">
              {"div {"}
              <div className="x-margin-left-md">
              {"filter: progid:DXImageTransform.Microsoft.gradient(enabled='false', startColorstr=#FF00FF00, endColorstr=#80FF0000); }"}
              </div>
            </div>
            <br/>
          </div>
        </div>

        <div className="x-row x-margin-bottom-md" data-toggle="codeStyle">
          <div className="x-col-lg-12 x-api-right-toggle">
            <h1>编程风格</h1>
            <p>
              使用ES6新语法,与传统的js结合,写出合理的,易于阅读和维护的代码。
            </p>
            <hr/>
            <p>
            </p>
          </div>
        </div>

      </div>
    )
  }

}
