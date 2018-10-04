const { app, BrowserWindow, Menu, MenuItem } = require('electron')

let mainWindow

function createWindow () {
  let initOptions = {
    width: 800,
    heightn: 600,
    title: 'IMS Apps',
    darkTheme: true
  }

  let mainMenu = createMenu()

  mainWindow = new BrowserWindow(initOptions)
  mainWindow.setMenu(mainMenu)
  mainWindow.loadFile('src/index.html')

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => { mainWindow = null })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

function createMenu () {
  // return null

  let mainMenu = new Menu()
  let menuItems = [
    new MenuItem({click: reload, label: 'Reload'}),
    new MenuItem({click: quit, label: 'Exit'})
  ]

  menuItems.forEach((item) => {
    mainMenu.append(item)
  })

  return mainMenu
}

function reload (menuItem, mainWindow, event) {
  console.log({menuItem, mainWindow, event})
}

function quit (menuItem, mainWindow, event) {
  console.log({menuItem, mainWindow, event})
}
