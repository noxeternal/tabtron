const TabGroup = require('electron-tabs')
let tabs = new TabGroup({newTab: {title: 'New Tab'}})

let tabList = [
  {title: 'Google', src: 'https://www.google.com'},
  {title: 'GitHub', src: 'https://www.github.com/noxeternal'}
]

tabList.forEach((tab) => {
  tabs.addTab(tab)
}
)
