import React from 'react'
import BaseComponent from './BaseComponent'

import { Tabs, Code, Table, Button, xoSystem, Carousel } from '../components'

export default class CarouselAPI extends BaseComponent {

  getLeftDOMList() {
    return (
      [
        {
          'name': 'Carousel',
          list: [
            {
              'data-target': 'carousel',
              'name': '轮播'
            }
          ]
        }
      ]
    )
  }

  getRightDOMList() {
    return (
      [
        {
          'data-toggle': 'carousel',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <h2>加载框</h2>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div style={{height: 600}}>
                      <Carousel>
                        <Carousel.Item>
                          <img src={require('../images/1.jpeg')} style={{width: '100%', height: '100%'}}/>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img src={require('../images/2.jpeg')} style={{width: '100%', height: '100%'}}/>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img src={require('../images/3.jpeg')} style={{width: '100%', height: '100%'}}/>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<div style={{height: 600}}>\n` +
                          `\t<Carousel>\n` +
                            `\t\t<Carousel.Item>\n` +
                              `\t\t\t<img src={require('../images/1.jpeg')} style={{width: '100%', height: '100%'}}/>\n` +
                            `\t\t</Carousel.Item>\n` +
                            `\t\t<Carousel.Item>\n` +
                              `\t\t\t<img src={require('../images/2.jpeg')} style={{width: '100%', height: '100%'}}/>\n` +
                            `\t\t</Carousel.Item>\n` +
                            `\t\t<Carousel.Item>\n` +
                              `\t\t\t<img src={require('../images/3.jpeg')} style={{width: '100%', height: '100%'}}/>\n` +
                            `\t\t</Carousel.Item>\n` +
                          `\t</Carousel>\n` +
                        `</div>`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
              </div>
            )
          }
        }
      ]
    )
  }

}

const cellRender = (sender) => {
  if(sender.column.field == 'desc' && !xoSystem.isEmpty(sender.data.desc)) {
    let descList = sender.data.desc.split('\n');
    return(
      descList.map((desc, index) => {
        return <p key={index}>{desc}</p>
      })
    )
  }
}
