"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const layout = {
    pythonkr: [
        {
            description: 'Start Learning Python Right Now!',
            label: '$(getting-started-beginner) 시작',
            to: 'https://www.coding-insight.com/korean/python/',
        },
        {
            description: 'Learn how to install Python Compilers',
            label: '$(extensions-install-count) 설치',
            to: 'https://www.coding-insight.com/korean/python/install',
        },
        {
            description: 'Install VSCode in your system',
            label: '$(remote-explorer-documentation) VSCode',
            to: 'https://www.coding-insight.com/korean/python/vscode',
        },
        {
            description: 'Learn how to print and get user input',
            label: '$(output) 입출력',
            to: 'https://www.coding-insight.com/korean/python/io',
        },
        {
            description: 'Learn how to declare and use variables',
            label: '$(symbol-variable) 변수',
            to: 'https://www.coding-insight.com/korean/python/variable',
        },
        {
            description: 'Learn how to create your own Python Madlibs game',
            label: '$(octoface) Mission: 매드립스',
            to: 'https://www.coding-insight.com/korean/python/madlib',
        },
        {
            description: 'Learn about different types of data',
            label: '$(database) 데이터 형태',
            to: 'https://www.coding-insight.com/korean/python/datatype',
        },
        {
            description: 'Learn how to create your own notes next to Python code',
            label: '$(comments-view-icon) 주석',
            to: 'https://www.coding-insight.com/korean/python/comment',
        },
        {
            description: 'Learn how to handle strings',
            label: '$(symbol-string) 문자열',
            to: 'https://www.coding-insight.com/korean/python/string',
        },
        {
            description: 'Learn how to handle strings - advanced 1',
            label: '$(symbol-key) 문자열 메서드 1',
            to: 'https://www.coding-insight.com/korean/python/stringmethod1',
        },
        {
            description: 'Learn how to handle strings - advanced 2',
            label: '$(symbol-key) 문자열 메서드 2',
            to: 'https://www.coding-insight.com/korean/python/stringmethod2',
        },
        {
            description: 'Create your own secure password safe using Python',
            label: '$(shield) Mission: 암호',
            to: 'https://www.coding-insight.com/korean/python/password',
        },
        {
            description: 'Learn how to avoid frustrating string errors in Python',
            label: '$(sign-out) 이스케이프 문자',
            to: 'https://www.coding-insight.com/korean/python/escapechar',
        },
        {
            description: 'Learn about ASCII',
            label: '$(symbol-number) 아스키',
            to: 'https://www.coding-insight.com/korean/python/ascii',
        },
        {
            description: 'True or False?',
            label: '$(symbol-boolean) 분리언',
            to: 'https://www.coding-insight.com/korean/python/boolean',
        },
        {
            description: 'How to handle numbers',
            label: '$(symbol-number) 숫자',
            to: 'https://www.coding-insight.com/korean/python/number',
        },
        {
            description: '+, -, X, + and many more operators in Python',
            label: '$(symbol-operator) 연산자',
            to: 'https://www.coding-insight.com/korean/python/operator',
        },
        {
            description: 'Different types of number in Python',
            label: '$(group-by-ref-type) 숫자 종류',
            to: 'https://www.coding-insight.com/korean/python/numtype',
        },
        {
            description: 'Create your own calculator in Python',
            label: '$(device-mobile) Mission: 간단한 계산기',
            to: 'https://www.coding-insight.com/korean/python/calc',
        },
        {
            description: 'How to handle numbers - advanced 1',
            label: '$(symbol-method) 숫자 메서드',
            to: 'https://www.coding-insight.com/korean/python/nummethod',
        },
        {
            description: 'How do we use list in Python?',
            label: '$(tasklist) 리스트',
            to: 'https://www.coding-insight.com/korean/python/list',
        },
        {
            description: 'How to handle lists - advanced 1',
            label: '$(tasks-list-configure) 리스트 메서드 1',
            to: 'https://www.coding-insight.com/korean/python/listmethod1',
        },
        {
            description: 'How to handle lists - advanced 2',
            label: '$(tasks-list-configure) 리스트 메서드 2',
            to: 'https://www.coding-insight.com/korean/python/listmethod2',
        },
        {
            description: 'Your own contact list manager',
            label: '$(accounts-view-bar-description) Mission: 연락 목록',
            to: 'https://www.coding-insight.com/korean/python/contact',
        },
        {
            description: 'How do we use dictionary in Python?',
            label: '$(notebook) 딕셔너리',
            to: 'https://www.coding-insight.com/korean/python/dictionary',
        },
        {
            description: 'How to handle dictionaries like a pro',
            label: '$(notebook-template) 딕셔너리 메서드',
            to: 'https://www.coding-insight.com/korean/python/dictionarymethod',
        },
        {
            description: 'How to create your own zip program',
            label: '$(file-zip) Mission: 글 압축',
            to: 'https://www.coding-insight.com/korean/python/zipping',
        },
        {
            description: 'Learn more about tuples',
            label: '$(list-filter) 튜플',
            to: 'https://www.coding-insight.com/korean/python/tuple',
        },
        {
            description: 'How to use a set in Python',
            label: '$(symbol-module) 집합',
            to: 'https://www.coding-insight.com/korean/python/set',
        },
        {
            description: 'How to handle set methods',
            label: '집합 메서드',
            to: 'https://www.coding-insight.com/korean/python/setmethod',
        },
        {
            description: 'How to handle statements',
            label: '$(git-commit) 조건문',
            to: 'https://www.coding-insight.com/korean/python/if',
        },
        {
            description: 'Dive deep into if statements in python',
            label: '$(git-compare) 조건문 마스터',
            to: 'https://www.coding-insight.com/korean/python/ifmaster',
        },
        {
            description: 'Create more secure password vault',
            label: '$(shield) Mission: 암호 (더 안전한)',
            to: 'https://www.coding-insight.com/korean/python/password-safe',
        },
        {
            description: 'More about None data type in Python',
            label: '$(circle-large-outline) None',
            to: 'https://www.coding-insight.com/korean/python/none',
        },
        {
            description: 'Use function to your advantage in Python',
            label: '$(debug-breakpoint-function) 함수',
            to: 'https://www.coding-insight.com/korean/python/function',
        },
        {
            description: 'More in-depth insight into functions',
            label: '$(debug-breakpoint-function) 함수 (자세히)',
            to: 'https://www.coding-insight.com/korean/python/functionhard',
        },
        {
            description: 'Special variables you did not know about',
            label: '$(variables-view-description) 특별한 변수',
            to: 'https://www.coding-insight.com/korean/python/specialvariable',
        },
        {
            description: 'Set types',
            label: '$(symbol-type-parameter) 타입 지정',
            to: 'https://www.coding-insight.com/korean/python/type',
        },
        {
            description: 'Anonymous Functions (Lambda)',
            label: '$(gist-secret) 익명함수',
            to: 'https://www.coding-insight.com/korean/python/anonymousfunction',
        },
        {
            description: 'For loops',
            label: '$(git-compare) For 반복문',
            to: 'https://www.coding-insight.com/korean/python/for',
        },
        {
            description: 'For loop types',
            label: '$(git-pull-request-create) 반복문 종류',
            to: 'https://www.coding-insight.com/korean/python/fortype',
        },
        {
            description: 'For loop functions',
            label: '$(git-branch) 반복문 함수',
            to: 'https://www.coding-insight.com/korean/python/forfunction',
        },
        {
            description: 'While loops',
            label: '$(git-merge) While 반복문',
            to: 'https://www.coding-insight.com/korean/python/while',
        },
        {
            description: 'How to put all your codes in one line',
            label: '$(diff-remove) 코드를 한 줄에',
            to: 'https://www.coding-insight.com/korean/python/oneliner',
        },
        {
            description: 'Different Functions (Useful!)',
            label: '$(three-bars) 다양한 함수',
            to: 'https://www.coding-insight.com/korean/python/etcfunction',
        },
        {
            description: 'Modules in Python',
            label: '$(file-submodule) 모듈',
            to: 'https://www.coding-insight.com/korean/python/module',
        },
        {
            description: 'You should learn more about module',
            label: '$(symbol-misc) 모듈 마스터',
            to: 'https://www.coding-insight.com/korean/python/modulemaster',
        },
        {
            description: 'Python Module',
            label: '$(symbol-function) 파이썬 모듈',
            to: 'https://www.coding-insight.com/korean/python/pythonmodule',
        },
        {
            description: 'How to spy on your families',
            label: '$(symbol-interface) Mission: 해킹 (인터넷 감시)',
            to: 'https://www.coding-insight.com/korean/python/hacking',
        },
        {
            description: 'Handle dates in Python',
            label: '$(calendar) 날짜',
            to: 'https://www.coding-insight.com/korean/python/date',
        },
        {
            description: 'Random data using Python',
            label: '$(debug-stackframe-dot) 랜덤',
            to: 'https://www.coding-insight.com/korean/python/random',
        },
        {
            description: 'Dice simulator using Python!',
            label: '$(debug-hint) Mission: 주사위',
            to: 'https://www.coding-insight.com/korean/python/dice',
        },
        {
            description: 'Regex in Python',
            label: '$(regex) 정규식',
            to: 'https://www.coding-insight.com/korean/python/regex',
        },
        {
            description: 'How to make your own blueprint of data',
            label: '$(symbol-class) 클래스',
            to: '/korean/python/class',
        },
        {
            description: 'Handle the blueprint you created',
            label: '$(notebook-open-as-text) 클래스 메서드',
            to: '/korean/python/classmethod',
        },
        {
            description: 'Statistics in Python',
            label: '$(versions) 수학 (통계)',
            to: '/korean/python/math',
        },
        {
            description: 'How to handle files in Python',
            label: '$(explorer-view-icon) 파일',
            to: '/korean/python/file',
        },
        {
            description: 'Reading Files in Python',
            label: '$(preferences-open-settings) 파일 읽기',
            to: '/korean/python/filereading',
        },
        {
            description: 'Writing to files in Python',
            label: '$(file-binary) 파일 쓰기',
            to: '/korean/python/filewriting',
        },
        {
            description: 'Making, Deleting and Encoding Files in Python',
            label: '$(search-new-editor) 파일 만들기, 삭제하기, encoding',
            to: '/korean/python/etcfile',
        },
        {
            description: 'Context manager in Python',
            label: '$(search-show-context) 컨텍스트 매니저',
            to: '/korean/python/contextmanager',
        },
        {
            description: 'Account Friend List Version 2.0',
            label: '$(account) 친구 목록 (v2)',
            to: '/korean/python/contact2',
        },
        {
            description: 'Changing Data Type in Python',
            label: '$(type-hierarchy-super) 데이터 형태 바꾸기',
            to: '/korean/python/datachange',
        },
        {
            description: 'Running String like a Python Code',
            label: '$(notebook-mimetype) 문자열을 코드로',
            to: '/korean/python/stringascode',
        },
        {
            description: 'Your own Python Editor',
            label: '$(diff-editor-toggle-whitespace) 프로젝트: 나만의 IDLE',
            to: '/english/python/stringascode/#idlepython',
        },
        {
            description: 'Package Manager for Python',
            label: '$(extensions-install-count) PIP',
            to: '/korean/python/pip',
        },
        {
            description: 'New Line in Python',
            label: '$(markers-view-multi-line-collapsed) 새로운 줄',
            to: '/korean/python/newline',
        },
        {
            description: 'Asynchronous Programming',
            label: '$(settings-sync-view-icon) 비동기',
            to: '/korean/python/asynchronous',
        },
        {
            description: 'Asyncio in Python',
            label: '$(sync-ignored) asyncio',
            to: '/korean/python/asyncio',
        },
        {
            description: 'The special name variable in Python',
            label: '$(diff-renamed) __name__',
            to: '/korean/python/name',
        },
        {
            description: 'Thread in Python',
            label: '$(inbox) 스레드',
            to: '/korean/python/thread',
        },
        {
            description: 'Thread in Python - Advanced 1',
            label: '$(inbox) 스레드 (자세히)',
            to: '/korean/python/complexthread',
        },
        {
            description: 'Thread in Python - Advanced 2',
            label: '$(inbox) 스레드 메서드',
            to: '/korean/python/threadmethod',
        },
        {
            description: 'Multiprocessing in Python',
            label: '$(server-process) 멀티프로세싱',
            to: '/korean/python/multiprocessing',
        },
        {
            description: 'Counter in Python',
            label: '$(symbol-enum) 카운터',
            to: '/korean/python/counter',
        },
        {
            description: 'Network programming in Python',
            label: '$(request-changes) 리퀘스트',
            to: '/korean/python/request',
        },
        {
            description: 'More about network programming in Python',
            label: '$(request-changes) 리퀘스트 메서드',
            to: '/korean/python/requestmethod',
        },
        {
            description: 'Dunder Methods in Pyhton',
            label: '$(symbol-struct) 던더메서드',
            to: '/korean/python/dundermethod',
        },
        {
            description: 'Additional Useful dunder method in Python',
            label: '$(symbol-struct) 추가 던더메서드',
            to: '/korean/python/additionaldundermethod',
        },
        {
            description: 'Other less useful but still useful dunder methods',
            label: '$(symbol-struct) 기타 던더메서드',
            to: '/korean/python/etcdundermethod',
        },
        {
            description: 'Atexit - register a function',
            label: '$(symbol-property) atexit',
            to: '/korean/python/atexit',
        },
        {
            description: 'Couroutine in Python',
            label: '$(git-pull-request-abandoned) 코루틴',
            to: '/korean/python/coroutine',
        },
        {
            description: 'Email Spamming using python',
            label: '$(inbox) 스펨 이메일',
            to: '/korean/python/spam',
        },
        {
            description: 'Automatic Zoom Program',
            label: '$(hubot) 자동 줌',
            to: '/korean/python/autozoom',
        },
        {
            description: 'Keyboard controlling in Python',
            label: '$(keyboard) 키보드',
            to: '/korean/python/keyboard',
        },
        {
            description: 'Graphing in Python',
            label: '$(graph-left) Matplotlib',
            to: '/korean/python/matplotlib',
        },
        {
            description: 'Controlling mouse in Python',
            label: '$(mirror) 마우스',
            to: '/korean/python/mouse',
        },
        {
            description: 'Drawing anything in Python',
            label: '$(settings-edit) 터틀',
            to: '/korean/python/turtle',
        },
        {
            description: 'Handling data efficiently in Python',
            label: '$(file-binary) 판다스',
            to: '/korean/python/pandas',
        },
        {
            description: 'Computer Speakking in Python',
            label: '$(device-desktop) gTTS',
            to: '/korean/python/gtts',
        },
        {
            description: 'Final Quiz of everything',
            label: '$(star) 퀴즈!',
            to: '/korean/python/quiz',
        },
        {
            description: 'See lists of video tutorial',
            label: '$(device-camera-video) 비디오 모음',
            to: '/korean/python/video',
        },
        {
            description: 'Is it the end? Check out!',
            label: '$(notebook-state-success) 끝?',
            to: '/korean/python/finished',
        },
    ],
    pythonkren: [
        {
            description: 'Start Learning Python Right Now!',
            label: '$(getting-started-beginner) Start',
            to: 'https://www.coding-insight.com/korean/python/',
        },
        {
            description: 'Learn how to install Python Compilers',
            label: '$(extensions-install-count) Install',
            to: 'https://www.coding-insight.com/korean/python/install',
        },
        {
            description: 'Install VSCode in your system',
            label: '$(remote-explorer-documentation) VSCode',
            to: 'https://www.coding-insight.com/korean/python/vscode',
        },
        {
            description: 'Learn how to print and get user input',
            label: '$(output) IO',
            to: 'https://www.coding-insight.com/korean/python/io',
        },
        {
            description: 'Learn how to declare and use variables',
            label: '$(symbol-variable) Variable',
            to: 'https://www.coding-insight.com/korean/python/variable',
        },
        {
            description: 'Learn how to create your own Python Madlibs game',
            label: '$(octoface) Mission: Madlibs',
            to: 'https://www.coding-insight.com/korean/python/madlib',
        },
        {
            description: 'Learn about different types of data',
            label: '$(database) Data Type',
            to: 'https://www.coding-insight.com/korean/python/datatype',
        },
        {
            description: 'Learn how to create your own notes next to Python code',
            label: '$(comments-view-icon) Comment',
            to: 'https://www.coding-insight.com/korean/python/comment',
        },
        {
            description: 'Learn how to handle strings',
            label: '$(symbol-string) String',
            to: 'https://www.coding-insight.com/korean/python/string',
        },
        {
            description: 'Learn how to handle strings - advanced 1',
            label: '$(symbol-key) String Method 1',
            to: 'https://www.coding-insight.com/korean/python/stringmethod1',
        },
        {
            description: 'Learn how to handle strings - advanced 2',
            label: '$(symbol-key) String Method 2',
            to: 'https://www.coding-insight.com/korean/python/stringmethod2',
        },
        {
            description: 'Create your own secure password safe using Python',
            label: '$(shield) Mission: Password',
            to: 'https://www.coding-insight.com/korean/python/password',
        },
        {
            description: 'Learn how to avoid frustrating string errors in Python',
            label: '$(sign-out) Escape Character',
            to: 'https://www.coding-insight.com/korean/python/escapechar',
        },
        {
            description: 'Learn about ASCII',
            label: '$(symbol-number) ASCII',
            to: 'https://www.coding-insight.com/korean/python/ascii',
        },
        {
            description: 'True or False?',
            label: '$(symbol-boolean) Boolean',
            to: 'https://www.coding-insight.com/korean/python/boolean',
        },
        {
            description: 'How to handle numbers',
            label: '$(symbol-number) Number',
            to: 'https://www.coding-insight.com/korean/python/number',
        },
        {
            description: '+, -, X, + and many more operators in Python',
            label: '$(symbol-operator) Operator',
            to: 'https://www.coding-insight.com/korean/python/operator',
        },
        {
            description: 'Different types of number in Python',
            label: '$(group-by-ref-type) Number Type',
            to: 'https://www.coding-insight.com/korean/python/numtype',
        },
        {
            description: 'Create your own calculator in Python',
            label: '$(device-mobile) Mission: Basic Calculator',
            to: 'https://www.coding-insight.com/korean/python/calc',
        },
        {
            description: 'How to handle numbers - advanced 1',
            label: '$(symbol-method) Number Method',
            to: 'https://www.coding-insight.com/korean/python/nummethod',
        },
        {
            description: 'How do we use list in Python?',
            label: '$(tasklist) List',
            to: 'https://www.coding-insight.com/korean/python/list',
        },
        {
            description: 'How to handle lists - advanced 1',
            label: '$(tasks-list-configure) List Method 1',
            to: 'https://www.coding-insight.com/korean/python/listmethod1',
        },
        {
            description: 'How to handle lists - advanced 2',
            label: '$(tasks-list-configure) List Method 2',
            to: 'https://www.coding-insight.com/korean/python/listmethod2',
        },
        {
            description: 'Your own contact list manager',
            label: '$(accounts-view-bar-description) Mission: Contact List 1',
            to: 'https://www.coding-insight.com/korean/python/contact',
        },
        {
            description: 'How do we use dictionary in Python?',
            label: '$(notebook) 딕셔너리',
            to: 'https://www.coding-insight.com/korean/python/dictionary',
        },
        {
            description: 'How to handle dictionaries like a pro',
            label: '$(notebook-template) Dictionary Method',
            to: 'https://www.coding-insight.com/korean/python/dictionarymethod',
        },
        {
            description: 'How to create your own zip program',
            label: '$(file-zip) Mission: Gzipping Sentence',
            to: 'https://www.coding-insight.com/korean/python/zipping',
        },
        {
            description: 'Learn more about tuples',
            label: '$(list-filter) Tuple',
            to: 'https://www.coding-insight.com/korean/python/tuple',
        },
        {
            description: 'How to use a set in Python',
            label: '$(symbol-module) Set',
            to: 'https://www.coding-insight.com/korean/python/set',
        },
        {
            description: 'How to handle set methods',
            label: 'Set Method',
            to: 'https://www.coding-insight.com/korean/python/setmethod',
        },
        {
            description: 'How to handle statements',
            label: '$(git-commit) If Statement',
            to: 'https://www.coding-insight.com/korean/python/if',
        },
        {
            description: 'Dive deep into if statements in python',
            label: '$(git-compare) If Statement Master',
            to: 'https://www.coding-insight.com/korean/python/ifmaster',
        },
        {
            description: 'Create more secure password vault',
            label: '$(shield) Mission: Password (Advanced)',
            to: 'https://www.coding-insight.com/korean/python/password-safe',
        },
        {
            description: 'More about None data type in Python',
            label: '$(circle-large-outline) None',
            to: 'https://www.coding-insight.com/korean/python/none',
        },
        {
            description: 'Use function to your advantage in Python',
            label: '$(debug-breakpoint-function) Function',
            to: 'https://www.coding-insight.com/korean/python/function',
        },
        {
            description: 'More in-depth insight into functions',
            label: '$(debug-breakpoint-function) Function (Advanced)',
            to: 'https://www.coding-insight.com/korean/python/functionhard',
        },
        {
            description: 'Special variables you did not know about',
            label: '$(variables-view-description) Special Variable',
            to: 'https://www.coding-insight.com/korean/python/specialvariable',
        },
        {
            description: 'Set types',
            label: '$(symbol-type-parameter) Type Casting',
            to: 'https://www.coding-insight.com/korean/python/type',
        },
        {
            description: 'Anonymous Functions (Lambda)',
            label: '$(gist-secret) Anonymous Function',
            to: 'https://www.coding-insight.com/korean/python/anonymousfunction',
        },
        {
            description: 'For loops',
            label: '$(git-compare) For Loop',
            to: 'https://www.coding-insight.com/korean/python/for',
        },
        {
            description: 'For loop types',
            label: '$(git-pull-request-create) Loop Types',
            to: 'https://www.coding-insight.com/korean/python/fortype',
        },
        {
            description: 'For loop functions',
            label: '$(git-branch) Loop Functions',
            to: 'https://www.coding-insight.com/korean/python/forfunction',
        },
        {
            description: 'While loops',
            label: '$(git-merge) While Loops',
            to: 'https://www.coding-insight.com/korean/python/while',
        },
        {
            description: 'How to put all your codes in one line',
            label: '$(diff-remove) Code in one line',
            to: 'https://www.coding-insight.com/korean/python/oneliner',
        },
        {
            description: 'Different Functions (Useful!)',
            label: '$(three-bars) Other Functions',
            to: 'https://www.coding-insight.com/korean/python/etcfunction',
        },
        {
            description: 'Modules in Python',
            label: '$(file-submodule) Modules',
            to: 'https://www.coding-insight.com/korean/python/module',
        },
        {
            description: 'You should learn more about module',
            label: '$(symbol-misc) Module Master',
            to: 'https://www.coding-insight.com/korean/python/modulemaster',
        },
        {
            description: 'Python Module',
            label: '$(symbol-function) Python Modules',
            to: 'https://www.coding-insight.com/korean/python/pythonmodule',
        },
        {
            description: 'How to spy on your families',
            label: '$(symbol-interface) Mission: Hacking (Sniffing)',
            to: 'https://www.coding-insight.com/korean/python/hacking',
        },
        {
            description: 'Handle dates in Python',
            label: '$(calendar) Weather',
            to: 'https://www.coding-insight.com/korean/python/date',
        },
        {
            description: 'Random data using Python',
            label: '$(debug-stackframe-dot) Random',
            to: 'https://www.coding-insight.com/korean/python/random',
        },
        {
            description: 'Dice simulator using Python!',
            label: '$(debug-hint) Mission: Dice',
            to: 'https://www.coding-insight.com/korean/python/dice',
        },
        {
            description: 'Regex in Python',
            label: '$(regex) Regex',
            to: 'https://www.coding-insight.com/korean/python/regex',
        },
        {
            description: 'How to make your own blueprint of data',
            label: '$(symbol-class) Class',
            to: '/korean/python/class',
        },
        {
            description: 'Handle the blueprint you created',
            label: '$(notebook-open-as-text) Class Method',
            to: '/korean/python/classmethod',
        },
        {
            description: 'Statistics in Python',
            label: '$(versions) Math (Statistics)',
            to: '/korean/python/math',
        },
        {
            description: 'How to handle files in Python',
            label: '$(explorer-view-icon) File',
            to: '/korean/python/file',
        },
        {
            description: 'Reading Files in Python',
            label: '$(preferences-open-settings) File Reading',
            to: '/korean/python/filereading',
        },
        {
            description: 'Writing to files in Python',
            label: '$(file-binary) File Writing',
            to: '/korean/python/filewriting',
        },
        {
            description: 'Making, Deleting and Encoding Files in Python',
            label: '$(search-new-editor) File making, deleting, encoding',
            to: '/korean/python/etcfile',
        },
        {
            description: 'Context manager in Python',
            label: '$(search-show-context) Context Manager',
            to: '/korean/python/contextmanager',
        },
        {
            description: 'Account Friend List Version 2.0',
            label: '$(account) Contact List (v2)',
            to: '/korean/python/contact2',
        },
        {
            description: 'Changing Data Type in Python',
            label: '$(type-hierarchy-super) Data Casting',
            to: '/korean/python/datachange',
        },
        {
            description: 'Running String like a Python Code',
            label: '$(notebook-mimetype) String as code',
            to: '/korean/python/stringascode',
        },
        {
            description: 'Your own Python Editor',
            label: '$(diff-editor-toggle-whitespace) Mission: My own IDLE',
            to: '/english/python/stringascode/#idlepython',
        },
        {
            description: 'Package Manager for Python',
            label: '$(extensions-install-count) PIP',
            to: '/korean/python/pip',
        },
        {
            description: 'New Line in Python',
            label: '$(markers-view-multi-line-collapsed) New Line',
            to: '/korean/python/newline',
        },
        {
            description: 'Asynchronous Programming',
            label: '$(settings-sync-view-icon) Asynchronous',
            to: '/korean/python/asynchronous',
        },
        {
            description: 'Asyncio in Python',
            label: '$(sync-ignored) asyncio',
            to: '/korean/python/asyncio',
        },
        {
            description: 'The special name variable in Python',
            label: '$(diff-renamed) __name__',
            to: '/korean/python/name',
        },
        {
            description: 'Thread in Python',
            label: '$(inbox) Thread',
            to: '/korean/python/thread',
        },
        {
            description: 'Thread in Python - Advanced 1',
            label: '$(inbox) Thread (Advanced)',
            to: '/korean/python/complexthread',
        },
        {
            description: 'Thread in Python - Advanced 2',
            label: '$(inbox) Thread Method',
            to: '/korean/python/threadmethod',
        },
        {
            description: 'Multiprocessing in Python',
            label: '$(server-process) Multiprocessing',
            to: '/korean/python/multiprocessing',
        },
        {
            description: 'Counter in Python',
            label: '$(symbol-enum) Counter',
            to: '/korean/python/counter',
        },
        {
            description: 'Network programming in Python',
            label: '$(request-changes) Request',
            to: '/korean/python/request',
        },
        {
            description: 'More about network programming in Python',
            label: '$(request-changes) Request Method',
            to: '/korean/python/requestmethod',
        },
        {
            description: 'Dunder Methods in Pyhton',
            label: '$(symbol-struct) Dunder Method',
            to: '/korean/python/dundermethod',
        },
        {
            description: 'Additional Useful dunder method in Python',
            label: '$(symbol-struct) Additional Dunder Method',
            to: '/korean/python/additionaldundermethod',
        },
        {
            description: 'Other less useful but still useful dunder methods',
            label: '$(symbol-struct) Other Dunder Method',
            to: '/korean/python/etcdundermethod',
        },
        {
            description: 'Atexit - register a function',
            label: '$(symbol-property) atexit',
            to: '/korean/python/atexit',
        },
        {
            description: 'Couroutine in Python',
            label: '$(git-pull-request-abandoned) Coroutine',
            to: '/korean/python/coroutine',
        },
        {
            description: 'Email Spamming using python',
            label: '$(inbox) Spam Email',
            to: '/korean/python/spam',
        },
        {
            description: 'Automatic Zoom Program',
            label: '$(hubot) Auto Zoom Program',
            to: '/korean/python/autozoom',
        },
        {
            description: 'Keyboard controlling in Python',
            label: '$(keyboard) Keyboard',
            to: '/korean/python/keyboard',
        },
        {
            description: 'Graphing in Python',
            label: '$(graph-left) Matplotlib',
            to: '/korean/python/matplotlib',
        },
        {
            description: 'Controlling mouse in Python',
            label: '$(mirror) Mouse',
            to: '/korean/python/mouse',
        },
        {
            description: 'Drawing anything in Python',
            label: '$(settings-edit) Turtle',
            to: '/korean/python/turtle',
        },
        {
            description: 'Handling data efficiently in Python',
            label: '$(file-binary) Pandas',
            to: '/korean/python/pandas',
        },
        {
            description: 'Computer Speakking in Python',
            label: '$(device-desktop) gTTS',
            to: '/korean/python/gtts',
        },
        {
            description: 'Final Quiz of everything',
            label: '$(star) Quiz!',
            to: '/korean/python/quiz',
        },
        {
            description: 'See lists of video tutorial',
            label: '$(device-camera-video) Video Tutorial',
            to: '/korean/python/video',
        },
        {
            description: 'Is it the end? Check out!',
            label: '$(notebook-state-success) Finished?',
            to: '/korean/python/finished',
        },
    ],
};
function activate(context) {
    let searchCodingInsight = vscode.commands.registerCommand('python-factory-web-search.searchCodingInsight', async () => {
        const val = (await vscode.window.showQuickPick(layout.pythonkr)) ?? {
            to: 'not defined by user',
        };
        vscode.env.openExternal(vscode.Uri.parse(val.to));
    }), searchCodingInsightEN = vscode.commands.registerCommand('python-factory-web-search.searchCodingInsightEN', async () => {
        const val = (await vscode.window.showQuickPick(layout.pythonkren)) ?? {
            to: 'not defined by user',
        };
        vscode.env.openExternal(vscode.Uri.parse(val.to));
    });
    context.subscriptions.push(searchCodingInsight);
    context.subscriptions.push(searchCodingInsightEN);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
