import sys
from PyQt5.QtWidgets import QToolBar, QAction, QApplication, QMainWindow
from PyQt5.QtWebEngineWidgets import QWebEngineView
from PyQt5.QtCore import QUrl

class Window(QMainWindow):
    def __init__(self):
        super(Window,self).__init__()
        self.browser = QWebEngineView()
        self.browser.setUrl(QUrl('https://www.coding-insight.com'))
        self.setCentralWidget(self.browser)
        self.showMaximized()

        navbar = QToolBar()

        self.addToolBar(navbar)
        prevBtn = QAction('❮',self)
        prevBtn.triggered.connect(self.browser.back)
        navbar.addAction(prevBtn)

        nextBtn = QAction('❯', self)
        nextBtn.triggered.connect(self.browser.forward)
        navbar.addAction(nextBtn)

        refreshBtn = QAction('Reload',self)
        refreshBtn.triggered.connect(self.browser.reload)
        navbar.addAction(refreshBtn)

        homeBtn = QAction('Home',self)
        homeBtn.triggered.connect(self.home)
        navbar.addAction(homeBtn)

    def home(self): self.browser.setUrl(QUrl('https://www.coding-insight.com/'))

MyApp = QApplication(sys.argv)
QApplication.setApplicationName('Python Factory Computer App 1.0.3')
window = Window()
MyApp.exec_()
