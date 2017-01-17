import React from "react";
import APIComponent from "./APIComponent";

import "./environment.scss";

export default class Environment extends APIComponent {

  renderLeftDOM() {
    return (
      <div>
        <ul className="x-ul">
          <h3>{this.props.routeParams.name}</h3>
          <li data-target="node">node</li>
          <li data-target="npm">npm</li>
          <li data-target="github">github</li>
          <li data-target="project">项目地址</li>
          <li data-target="build">编译部署</li>
        </ul>
      </div>
    )
  }

  renderRightDOM() {
    return (
      <div>
        <div className="x-row x-margin-bottom-md" data-toggle="node">
          <div className="x-col-lg-12 x-api-right-toggle">
            <h1>node</h1>
            <h5>
              Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。Node.js 的包管理器 npm，是全球最大的开源库生态系统。
            </h5>
            <table>
              <tbody>
                <tr>
                  <th><i className="fa fa-windows x-margin-right-xs"></i>Windows (.msi)</th>
                  <td colSpan="1"><a target="_blank" href="https://nodejs.org/dist/v6.2.0/node-v6.2.0-x86.msi">node-v6.2.0-x32.msi</a></td>
                  <td colSpan="1"><a target="_blank" href="https://nodejs.org/dist/v6.2.0/node-v6.2.0-x64.msi">node-v6.2.0-x64.msi</a></td>
                </tr>
                <tr>
                  <th><i className="fa fa-windows x-margin-right-xs"></i>Windows (.exe)</th>
                  <td colSpan="1"><a target="_blank" href="https://nodejs.org/dist/v6.2.0/win-x86/node.exe">node-v6.2.0-x32.exe</a></td>
                  <td colSpan="1"><a target="_blank" href="https://nodejs.org/dist/v6.2.0/win-x64/node.exe">node-v6.2.0-x64.exe</a></td>
                </tr>
                <tr>
                  <th><i className="fa fa-apple x-margin-right-xs"></i>Mac OS X (.pkg)</th>
                  <td colSpan="2"><a target="_blank" href="https://nodejs.org/dist/v6.2.0/node-v6.2.0.pkg">node-v6.2.0.pkg</a></td>
                </tr>
                <tr>
                  <th><i className="fa fa-apple x-margin-right-xs"></i>Mac OS X (.tar.gz)</th>
                  <td colSpan="2"><a target="_blank" href="https://nodejs.org/dist/v6.2.0/node-v6.2.0-darwin-x64.tar.gz">node-v6.2.0.tar.gz</a></td>
                </tr>
                <tr>
                  <th><i className="fa fa-linux x-margin-right-xs"></i>Linux (.tar.gz)</th>
                  <td colSpan="1"><a target="_blank" href="https://nodejs.org/dist/v6.2.0/node-v6.2.0-linux-x86.tar.gz">node-v6.2.0-x32.tar.gz</a></td>
                  <td colSpan="1"><a target="_blank" href="https://nodejs.org/dist/v6.2.0/node-v6.2.0-linux-x64.tar.gz">node-v6.2.0-x64.tar.gz</a></td>
                </tr>
              </tbody>
            </table>
            <p>
            当前提供的版本为6.2.0, 参见
            <a className="x-font-primary x-margin-right-xs x-margin-left-xs" target="_blank" href="http://nodejs.cn/">node.js中文网</a>
            <a className="x-font-primary x-margin-right-xs x-margin-left-xs" target="_blank" href="https://nodejs.org/en/">node.js</a>
            </p>
          </div>
        </div>
        <div className="x-row x-margin-bottom-md" data-toggle="npm">
          <div className="x-col-lg-12 x-api-right-toggle">
            <h1>npm</h1>
            <h5>
              NPM的全称是Node Package Manager，是随同NodeJS一起安装的包管理和分发工具，它很方便让JavaScript开发者下载、安装、上传以及管理已经安装的包。
            </h5>
            <p>
              <b>常用命令</b>
              <br/>
              <code>
                npm install (with no args, in package dir)
                <br/>
                npm install [@scope/][name]
                <br/>
                npm install [@scope/][name]@[tag]
                <br/>
                npm install [@scope/][name]@[version]
                <br/>
                npm install [@scope/][name]@[version range]
                <br/>
                npm install [tarball file]
                <br/>
                npm install [tarball url]
                <br/>
                npm install [folder]
                <br/>
                alias: npm i
                <br/>
                common options: [-S|--save|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [--dry-run]
                <br/>

                <tt>例子</tt>
                <br/>
                npm install react //安装react,默认会安装最新版本
                <br/>
                npm install react@15.3.2 //安装react版本15.3.2
                <br/>
                <b>-S, --save 安装包信息将加入到dependencies（生产阶段的依赖）</b>
                <br/>
                npm install react --save 或 npm install react --S
                <br/>
                <b>-D, --save-dev 安装包信息将加入到devDependencies（开发阶段的依赖），所以开发阶段一般使用它</b>
                <br/>
                npm install react --save-dev 或 npm install react --D
                <br/>
                <b>-O, --save-optional 安装包信息将加入到optionalDependencies（可选阶段的依赖）</b>
                <br/>
                npm install react --save-optional 或 npm install react --O
                <br/>
                <b>本地安装(local)</b>
                <br/>
                npm install gulp
                <br/>
                <b>全局安装(global),使用-g 或 --global</b>
                <br/>
                npm install gulp -g

              </code>
              <code>
                <b>npm ls查看安装的模块</b>
                <br/>
                npm ls [[@scope/]pkg ...]aliases: list, la, ll
                <br/>
                <b>查看全局安装的模块及依赖</b>
                <br/>
                npm ls -g
                <br/>
              </code>
              <br/>
              <code>
                <b>npm uninstall卸载模块</b>
                <br/>
                npm uninstall [@scope/][pkg][@version]... [-S|--save|-D|--save-dev|-O|--save-optional]aliases: remove, rm, r, un, unlink
                <br/>
                如: npm uninstall gulp --save-dev
                <br/>
              </code>
              <br/>
              <code>
                <b>npm update更新模块</b>
                <br/>
                npm update [-g] [[pkg]...]
                <br/>
              </code>
              <code>
                <b>npm 代理设置</b>
                <br/>
                npm config delete proxy //删除代理
                <br/>
                npm config set proxy=http://host:prot //设置代理
                <br/>
              </code>
              <br/>
              <a className="x-font-primary" target="_blank" href="http://www.jb51.net/article/86253.htm">npm命令基本使用</a>
            </p>
          </div>
        </div>
        <div className="x-row x-margin-bottom-md" data-toggle="github">
          <div className="x-col-lg-12 x-api-right-toggle">
            <h1>github desktop</h1>
            <h5>
              github客户端,方便管理github项目
              <a className="x-font-primary x-margin-left-xs" target="_blank" href="http://m.blog.csdn.net/article/details?id=50261857">使用教程</a>
            </h5>
            <table>
              <tbody>
                <tr>
                  <th><i className="fa fa-windows x-margin-right-xs"></i>Windows</th>
                  <td colSpan="2"><a target="_blank" href="https://github-windows.s3.amazonaws.com/GitHubSetup.exe">GitHub Desktop (Windows 7 or later)</a></td>
                </tr>
                <tr>
                  <th><i className="fa fa-apple x-margin-right-xs"></i>Mac OS X</th>
                  <td colSpan="2"><a target="_blank" href="https://central.github.com/mac/latest">GitHub Desktop (OS X 10.9 or later)</a></td>
                </tr>
              </tbody>
            </table>
            <p>
              <a className="x-font-primary" target="_blank" href="https://desktop.github.com/">GitHub Desktop</a>
            </p>
          </div>
        </div>
        <div className="x-row x-margin-bottom-md" data-toggle="project">
          <div className="x-col-lg-12 x-api-right-toggle">
            <h1>项目地址</h1>
            <p>
              主要用于测试与练习demo
            </p>
            <table>
              <tbody>
                <tr>
                  <th>前端-React</th>
                  <td colSpan="2"><a target="_blank" href="https://github.com/theMxb/h5_react">h5-react</a></td>
                </tr>
              </tbody>
            </table>
            <p></p>
          </div>
        </div>
        <div className="x-row x-margin-bottom-md" data-toggle="build">
          <div className="x-col-lg-12 x-api-right-toggle">
            <h1>编译部署</h1>
            <p>
              <b>一、 <a className="x-font-primary" target="_blank" href="https://github.com/theMxb/h5_react">h5-react</a></b>
              <br/>
              1.安装node
              <br/>
              2.使用github客户端 或者 直接在github对应的项目地址上下载
              <br/>
              3.使用终端进入项目的目录, 如 <b>cd D:\project\html\h5_react</b>, 输入命令 <b>npm install</b> ,
              <br/>
              &nbsp;&nbsp;&nbsp;安装完毕后 输入命令 <b>npm run dev</b>,编译完毕后进入浏览器打开
              <a className="x-font-primary" target="_blank" href="http://localhost:8082">http://localhost:8082</a> 即可
              <br/>
              4. <b>npm run dev</b> 热编译更新(开发环境)
                 <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<b>npm run build</b> 编译(生产环境)
            </p>
          </div>
        </div>
      </div>
    )
  }

  // srender() {
  //   return(
  //     <div className="x-container x-font-xs" ref={(thisDom) => this.__thisDom = thisDom}>
  //       <div className="x-col-lg-12">
  //         <div className="x-row">
  //           <div className="x-api-left" ref={(leftTarget) => this.__leftTarget = leftTarget}>
  //             <ul className="x-ul">
  //               <h3>{this.props.routeParams.name}</h3>
  //               <li data-target="node">node</li>
  //               <li data-target="npm">npm</li>
  //               <li data-target="github">github</li>
  //               <li data-target="project">项目地址</li>
  //               <li data-target="build">编译部署</li>
  //             </ul>
  //           </div>
  //           <div className="x-api-right" ref={(rightToggle) => this.__rightToggle = rightToggle}>
  //             <div className="x-row x-margin-bottom-md" data-toggle="node">
  //               <div className="x-col-lg-12 x-api-right-toggle">
  //                 <h1>node</h1>
  //                 <h5>
  //                   Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。Node.js 的包管理器 npm，是全球最大的开源库生态系统。
  //                 </h5>
  //                 <table>
  //                   <tbody>
  //                     <tr>
  //                       <th><i className="fa fa-windows x-margin-right-xs"></i>Windows (.msi)</th>
  //                       <td colSpan="1"><a target="_blank" href="https://nodejs.org/dist/v6.2.0/node-v6.2.0-x86.msi">node-v6.2.0-x32.msi</a></td>
  //                       <td colSpan="1"><a target="_blank" href="https://nodejs.org/dist/v6.2.0/node-v6.2.0-x64.msi">node-v6.2.0-x64.msi</a></td>
  //                     </tr>
  //                     <tr>
  //                       <th><i className="fa fa-windows x-margin-right-xs"></i>Windows (.exe)</th>
  //                       <td colSpan="1"><a target="_blank" href="https://nodejs.org/dist/v6.2.0/win-x86/node.exe">node-v6.2.0-x32.exe</a></td>
  //                       <td colSpan="1"><a target="_blank" href="https://nodejs.org/dist/v6.2.0/win-x64/node.exe">node-v6.2.0-x64.exe</a></td>
  //                     </tr>
  //                     <tr>
  //                       <th><i className="fa fa-apple x-margin-right-xs"></i>Mac OS X (.pkg)</th>
  //                       <td colSpan="2"><a target="_blank" href="https://nodejs.org/dist/v6.2.0/node-v6.2.0.pkg">node-v6.2.0.pkg</a></td>
  //                     </tr>
  //                     <tr>
  //                       <th><i className="fa fa-apple x-margin-right-xs"></i>Mac OS X (.tar.gz)</th>
  //                       <td colSpan="2"><a target="_blank" href="https://nodejs.org/dist/v6.2.0/node-v6.2.0-darwin-x64.tar.gz">node-v6.2.0.tar.gz</a></td>
  //                     </tr>
  //                     <tr>
  //                       <th><i className="fa fa-linux x-margin-right-xs"></i>Linux (.tar.gz)</th>
  //                       <td colSpan="1"><a target="_blank" href="https://nodejs.org/dist/v6.2.0/node-v6.2.0-linux-x86.tar.gz">node-v6.2.0-x32.tar.gz</a></td>
  //                       <td colSpan="1"><a target="_blank" href="https://nodejs.org/dist/v6.2.0/node-v6.2.0-linux-x64.tar.gz">node-v6.2.0-x64.tar.gz</a></td>
  //                     </tr>
  //                   </tbody>
  //                 </table>
  //                 <p>
  //                 当前提供的版本为6.2.0, 参见
  //                 <a className="x-font-primary x-margin-right-xs x-margin-left-xs" target="_blank" href="http://nodejs.cn/">node.js中文网</a>
  //                 <a className="x-font-primary x-margin-right-xs x-margin-left-xs" target="_blank" href="https://nodejs.org/en/">node.js</a>
  //                 </p>
  //               </div>
  //             </div>
  //             <div className="x-row x-margin-bottom-md" data-toggle="npm">
  //               <div className="x-col-lg-12 x-api-right-toggle">
  //                 <h1>npm</h1>
  //                 <h5>
  //                   NPM的全称是Node Package Manager，是随同NodeJS一起安装的包管理和分发工具，它很方便让JavaScript开发者下载、安装、上传以及管理已经安装的包。
  //                 </h5>
  //                 <p>
  //                   <b>常用命令</b>
  //                   <br/>
  //                   <code>
  //                     npm install (with no args, in package dir)
  //                     <br/>
  //                     npm install [@scope/][name]
  //                     <br/>
  //                     npm install [@scope/][name]@[tag]
  //                     <br/>
  //                     npm install [@scope/][name]@[version]
  //                     <br/>
  //                     npm install [@scope/][name]@[version range]
  //                     <br/>
  //                     npm install [tarball file]
  //                     <br/>
  //                     npm install [tarball url]
  //                     <br/>
  //                     npm install [folder]
  //                     <br/>
  //                     alias: npm i
  //                     <br/>
  //                     common options: [-S|--save|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [--dry-run]
  //                     <br/>
  //
  //                     <tt>例子</tt>
  //                     <br/>
  //                     npm install react //安装react,默认会安装最新版本
  //                     <br/>
  //                     npm install react@15.3.2 //安装react版本15.3.2
  //                     <br/>
  //                     <b>-S, --save 安装包信息将加入到dependencies（生产阶段的依赖）</b>
  //                     <br/>
  //                     npm install react --save 或 npm install react --S
  //                     <br/>
  //                     <b>-D, --save-dev 安装包信息将加入到devDependencies（开发阶段的依赖），所以开发阶段一般使用它</b>
  //                     <br/>
  //                     npm install react --save-dev 或 npm install react --D
  //                     <br/>
  //                     <b>-O, --save-optional 安装包信息将加入到optionalDependencies（可选阶段的依赖）</b>
  //                     <br/>
  //                     npm install react --save-optional 或 npm install react --O
  //                     <br/>
  //                     <b>本地安装(local)</b>
  //                     <br/>
  //                     npm install gulp
  //                     <br/>
  //                     <b>全局安装(global),使用-g 或 --global</b>
  //                     <br/>
  //                     npm install gulp -g
  //
  //                   </code>
  //                   <code>
  //                     <b>npm ls查看安装的模块</b>
  //                     <br/>
  //                     npm ls [[@scope/]pkg ...]aliases: list, la, ll
  //                     <br/>
  //                     <b>查看全局安装的模块及依赖</b>
  //                     <br/>
  //                     npm ls -g
  //                     <br/>
  //                   </code>
  //                   <br/>
  //                   <code>
  //                     <b>npm uninstall卸载模块</b>
  //                     <br/>
  //                     npm uninstall [@scope/][pkg][@version]... [-S|--save|-D|--save-dev|-O|--save-optional]aliases: remove, rm, r, un, unlink
  //                     <br/>
  //                     如: npm uninstall gulp --save-dev
  //                     <br/>
  //                   </code>
  //                   <br/>
  //                   <code>
  //                     <b>npm update更新模块</b>
  //                     <br/>
  //                     npm update [-g] [[pkg]...]
  //                     <br/>
  //                   </code>
  //                   <code>
  //                     <b>npm 代理设置</b>
  //                     <br/>
  //                     npm config delete proxy //删除代理
  //                     <br/>
  //                     npm config set proxy=http://host:prot //设置代理
  //                     <br/>
  //                   </code>
  //                   <br/>
  //                   <a className="x-font-primary" target="_blank" href="http://www.jb51.net/article/86253.htm">npm命令基本使用</a>
  //                 </p>
  //               </div>
  //             </div>
  //             <div className="x-row x-margin-bottom-md" data-toggle="github">
  //               <div className="x-col-lg-12 x-api-right-toggle">
  //                 <h1>github desktop</h1>
  //                 <h5>
  //                   github客户端,方便管理github项目
  //                   <a className="x-font-primary x-margin-left-xs" target="_blank" href="http://m.blog.csdn.net/article/details?id=50261857">使用教程</a>
  //                 </h5>
  //                 <table>
  //                   <tbody>
  //                     <tr>
  //                       <th><i className="fa fa-windows x-margin-right-xs"></i>Windows</th>
  //                       <td colSpan="2"><a target="_blank" href="https://github-windows.s3.amazonaws.com/GitHubSetup.exe">GitHub Desktop (Windows 7 or later)</a></td>
  //                     </tr>
  //                     <tr>
  //                       <th><i className="fa fa-apple x-margin-right-xs"></i>Mac OS X</th>
  //                       <td colSpan="2"><a target="_blank" href="https://central.github.com/mac/latest">GitHub Desktop (OS X 10.9 or later)</a></td>
  //                     </tr>
  //                   </tbody>
  //                 </table>
  //                 <p>
  //                   <a className="x-font-primary" target="_blank" href="https://desktop.github.com/">GitHub Desktop</a>
  //                 </p>
  //               </div>
  //             </div>
  //             <div className="x-row x-margin-bottom-md" data-toggle="project">
  //               <div className="x-col-lg-12 x-api-right-toggle">
  //                 <h1>项目地址</h1>
  //                 <p>
  //                   主要用于测试与练习demo
  //                 </p>
  //                 <table>
  //                   <tbody>
  //                     <tr>
  //                       <th>前端-React</th>
  //                       <td colSpan="2"><a target="_blank" href="https://github.com/theMxb/h5_react">h5-react</a></td>
  //                     </tr>
  //                   </tbody>
  //                 </table>
  //                 <p></p>
  //               </div>
  //             </div>
  //             <div className="x-row x-margin-bottom-md" data-toggle="build">
  //               <div className="x-col-lg-12 x-api-right-toggle">
  //                 <h1>编译部署</h1>
  //                 <p>
  //                   <b>一、 <a className="x-font-primary" target="_blank" href="https://github.com/theMxb/h5_react">h5-react</a></b>
  //                   <br/>
  //                   1.安装node
  //                   <br/>
  //                   2.使用github客户端 或者 直接在github对应的项目地址上下载
  //                   <br/>
  //                   3.使用终端进入项目的目录, 如 <b>cd D:\project\html\h5_react</b>, 输入命令 <b>npm install</b> ,
  //                   <br/>
  //                   &nbsp;&nbsp;&nbsp;安装完毕后 输入命令 <b>npm run dev</b>,编译完毕后进入浏览器打开
  //                   <a className="x-font-primary" target="_blank" href="http://localhost:8082">http://localhost:8082</a> 即可
  //                   <br/>
  //                   4. <b>npm run dev</b> 热编译更新(开发环境)
  //                      <br/>
  //                   &nbsp;&nbsp;&nbsp;&nbsp;<b>npm run build</b> 编译(生产环境)
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

}
