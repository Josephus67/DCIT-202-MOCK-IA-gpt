const quizData = [
        {
        question: "What is React Native?",
        options: ["A JavaScript library", "A mobile app framework", "A programming language", "A database system"],
        correctAnswer: 1
        },
   
        {
        question: "What is the primary purpose of React Native?",
        options: ["To build desktop applications", "To create web applications", "To develop mobile apps for iOS and Android", "To build games"],
        correctAnswer: 2
        },
        
        {
        question: "Which programming language is used in React Native?",
        options: ["Java", "Swift", "Objective-C", "JavaScript"],
        correctAnswer: 3
        },
        
        {
        question: "React Native uses a similar component-based architecture to which other popular JavaScript library?",
        options: ["Angular", "Vue.js", "React.js", "jQuery"],
        correctAnswer: 2
        },
        
        {
        question: "Which React Native feature allows developers to write code once and deploy it to multiple platforms?",
        options: ["Hot Reloading", "Expo", "Native Modules", "Platform-specific Code"],
        correctAnswer: 3
        },
        
        {
        question: "What is the purpose of the 'StyleSheet' API in React Native?",
        options: ["To manage application state", "To handle user input events", "To style React Native components", "To interact with the device's camera"],
        correctAnswer: 2
        },
        
        {
        question: "Which React Native component is used to display text in a mobile app?",
        options: ["Text", "View", "Image", "ScrollView"],
        correctAnswer: 0
        },
        
        {
        question: "What is the role of the 'Navigator' API in React Native?",
        options: ["To manage app navigation and transitions between screens", "To handle network requests and API calls", "To access device hardware features", "To manage application state and data flow"],
        correctAnswer: 0
        },
        
        {
        question: "React Native applications are bundled and deployed as which type of package?",
        options: ["APK", "IPA", "NPM package", "Docker container"],
        correctAnswer: 0
        },
        
        {
        question: "Which React Native API is used to access device sensors like the camera, GPS, or accelerometer?",
        options: ["Expo", "React Native APIs", "React Native Firebase", "Native Modules"],
        correctAnswer: 1
        },
        
        {
        question: "What is the primary benefit of using React Native for mobile app development?",
        options: ["Increased development speed", "Improved user experience", "Reduced app size", "Better performance"],
        correctAnswer: 0
        },
        {
            question: "Which React Native feature allows developers to see changes in the app without having to rebuild the entire application?",
            options: ["Hot Reloading", "Live Reloading", "Fast Refresh", "Instant Run"],
            correctAnswer: 0
            },
            
            {
            question: "What is the purpose of the 'RCTRootView' component in React Native?",
            options: ["To manage app navigation", "To handle user input events", "To render the root component of the application", "To access device hardware features"],
            correctAnswer: 2
            },
            
            {
            question: "Which JavaScript framework or library is React Native based on?",
            options: ["Angular", "Vue.js", "React.js", "jQuery"],
            correctAnswer: 2
            },
            
            {
            question: "React Native applications are compiled to which platform-specific code?",
            options: ["Java/Kotlin for Android, Swift/Objective-C for iOS", "C++ for both Android and iOS", "Python for both Android and iOS", "Assembly language for both platforms"],
            correctAnswer: 0
            },
            
            {
            question: "What is the purpose of the 'NativeModules' API in React Native?",
            options: ["To access device hardware features", "To handle app navigation", "To manage application state", "To style React Native components"],
            correctAnswer: 0
            },
            
            {
            question: "Which React Native component is used to display images in a mobile app?",
            options: ["Image", "Text", "View", "ScrollView"],
            correctAnswer: 0
            },
            
            {
            question: "What is the role of the 'Linking' API in React Native?",
            options: ["To handle user input events", "To access device hardware features", "To manage app navigation", "To open external links and URLs"],
            correctAnswer: 3
            },
            
            {
            question: "Which React Native component is used to create scrollable views in a mobile app?",
            options: ["ScrollView", "FlatList", "SectionList", "All of the above"],
            correctAnswer: 3
            },
            
            {
            question: "What is the purpose of the 'Animated' API in React Native?",
            options: ["To handle user input events", "To access device hardware features", "To create animations and transitions", "To manage application state"],
            correctAnswer: 2
            },
            
            {
            question: "Which React Native feature allows developers to create platform-specific code for iOS and Android?",
            options: ["Platform-specific Code", "Native Modules", "Expo", "React Native CLI"],
            correctAnswer: 0
            },
            {
                question: "What is the purpose of the 'PanResponder' API in React Native?",
                options: ["To handle touch and gesture-based interactions", "To create animations and transitions", "To access device hardware sensors", "To manage app navigation"],
                correctAnswer: 0
                },
                
                {
                question: "Which React Native API is used to handle asynchronous tasks and API calls?",
                options: ["Axios", "Fetch", "AsyncStorage", "RCTNetworking"],
                correctAnswer: 1
                },
                
                {
                question: "How does React Native achieve native-like performance for mobile apps?",
                options: ["By using a JavaScript bridge to communicate with native components", "By compiling the React Native code directly to native binaries", "By utilizing a virtual DOM and efficient diffing algorithm", "All of the above"],
                correctAnswer: 3
                },
                
                {
                question: "What is the purpose of the 'InteractionManager' API in React Native?",
                options: ["To handle touch and gesture-based interactions", "To manage app navigation and transitions", "To schedule tasks that require the UI thread to be idle", "To access device hardware sensors"],
                correctAnswer: 2
                },
                
                {
                question: "Which React Native component is used to create performant lists and grids?",
                options: ["<ScrollView>", "<FlatList>", "<SectionList>", "All of the above"],
                correctAnswer: 3
                },
                
                {
                question: "How can React Native applications access device-specific APIs and native modules?",
                options: ["Through the 'NativeModules' API", "By using the 'Linking' API", "By creating custom native components", "All of the above"],
                correctAnswer: 3
                },
                
                {
                question: "What is the purpose of the 'RCTBridgeModule' protocol in React Native?",
                options: ["To handle app navigation and transitions", "To create custom native components", "To expose native modules to the JavaScript runtime", "To access device hardware sensors"],
                correctAnswer: 2
                },
                
                {
                question: "How can React Native applications handle push notifications and in-app messaging?",
                options: ["Using the 'PushNotificationIOS' and 'PushNotificationAndroid' APIs", "By integrating with a third-party push notification service like Firebase Cloud Messaging", "Through the 'Notifications' API provided by React Native", "All of the above"],
                correctAnswer: 3
                },
                
                {
                question: "What is the purpose of the 'RCTViewManager' class in React Native?",
                options: ["To manage app navigation and transitions", "To create custom native components", "To handle touch and gesture-based interactions", "To access device hardware sensors"],
                correctAnswer: 1
                },
                
                {
                question: "How can React Native applications handle device-specific layouts and UI elements?",
                options: ["By using the 'Platform' API to detect the current platform", "By creating custom native components for each platform", "By using the 'StyleSheet' API to handle platform-specific styles", "All of the above"],
                correctAnswer: 3
                },
                {
                    question: "What is the purpose of the 'AsyncStorage' API in React Native?",
                    options: ["To manage app navigation and transitions", "To handle touch and gesture-based interactions", "To store and retrieve key-value pairs of data on the device", "To access device hardware sensors"],
                    correctAnswer: 2
                    },
                    
                    {
                    question: "What are the key limitations of the 'AsyncStorage' API in React Native?",
                    options: ["It has a maximum storage limit of 6MB", "It is a synchronous API, which can block the main thread", "It is not available on the web version of React Native", "All of the above"],
                    correctAnswer: 3
                    },
                    
                    {
                    question: "How can React Native applications store larger amounts of data on the device?",
                    options: ["By using the 'SQLite' API", "By integrating with a third-party database solution like Realm", "By storing data in the device's file system", "All of the above"],
                    correctAnswer: 3
                    },
                    
                    {
                    question: "What is the purpose of the 'RCTAsyncLocalStorage' module in React Native?",
                    options: ["To manage app navigation and transitions", "To handle touch and gesture-based interactions", "To provide a low-level API for the 'AsyncStorage' API", "To access device hardware sensors"],
                    correctAnswer: 2
                    },
                    
                    {
                    question: "How can React Native applications encrypt data stored on the device?",
                    options: ["By using the 'Crypto' API provided by React Native", "By integrating with a third-party encryption library", "By leveraging the device's secure enclave or keychain", "All of the above"],
                    correctAnswer: 3
                    },
                    
                    {
                    question: "What is the purpose of the 'RCTRootView' component in the context of data storage?",
                    options: ["To manage the application's root view and lifecycle", "To provide a way to access the device's file system", "To handle synchronization of data across multiple app instances", "To encrypt and decrypt data stored on the device"],
                    correctAnswer: 2
                    },
                    
                    {
                    question: "How can React Native applications synchronize data across multiple devices?",
                    options: ["By using the 'Sync' API provided by React Native", "By integrating with a cloud-based data synchronization service", "By implementing a custom data synchronization solution", "All of the above"],
                    correctAnswer: 1
                    },
                    
                    {
                    question: "What is the purpose of the 'RCTNetworking' module in the context of data storage?",
                    options: ["To handle network requests and API calls", "To provide a low-level interface for the 'AsyncStorage' API", "To manage data synchronization across multiple devices", "To encrypt and decrypt data stored on the device"],
                    correctAnswer: 0
                    },
                    
                    {
                    question: "How can React Native applications handle data persistence across app sessions?",
                    options: ["By using the 'AsyncStorage' API", "By integrating with a third-party database solution", "By storing data in the device's file system", "All of the above"],
                    correctAnswer: 3
                    },
                    
                    {
                    question: "What is the purpose of the 'RCTDeviceInfo' module in the context of data storage?",
                    options: ["To provide information about the device's hardware and software", "To manage data synchronization across multiple devices", "To handle encryption and decryption of data stored on the device", "To provide a low-level interface for the 'AsyncStorage' API"],
                    correctAnswer: 0
                    },
                    {
                        question: "What is the purpose of the 'NavigationContainer' component in React Native?",
                        options: ["To manage the application's navigation stack", "To handle touch and gesture-based interactions", "To provide access to device hardware sensors", "To create custom native components"],
                        correctAnswer: 0
                        },
                        
                        {
                        question: "What is the purpose of the 'StackNavigator' component in React Native?",
                        options: ["To manage a stack-based navigation flow", "To create a tab-based navigation interface", "To handle drawer-style navigation", "To implement a nested navigation structure"],
                        correctAnswer: 0
                        },
                        
                        {
                        question: "How can React Native applications handle deep linking and universal links?",
                        options: ["Using the 'Linking' API", "Through the 'NavigationContainer' component", "By integrating with a third-party deep linking service", "All of the above"],
                        correctAnswer: 3
                        },
                        
                        {
                        question: "What is the purpose of the 'StyleSheet' API in React Native?",
                        options: ["To manage the application's navigation stack", "To handle touch and gesture-based interactions", "To create and manage styles for UI components", "To access device hardware sensors"],
                        correctAnswer: 2
                        },
                        
                        {
                        question: "How can React Native applications handle platform-specific styles?",
                        options: ["By using the 'Platform' API to detect the current platform", "By creating separate style definitions for each platform", "By using the 'StyleSheet' API to handle platform-specific styles", "All of the above"],
                        correctAnswer: 3
                        },
                        
                        {
                        question: "What is the purpose of the 'Dimensions' API in React Native?",
                        options: ["To manage the application's navigation stack", "To handle touch and gesture-based interactions", "To retrieve information about the device's screen size and orientation", "To access device hardware sensors"],
                        correctAnswer: 2
                        },
                        
                        {
                        question: "How can React Native applications handle responsive and adaptive UI design?",
                        options: ["By using the 'Dimensions' API to detect screen size and orientation changes", "By creating separate UI components for different screen sizes and orientations", "By leveraging the 'StyleSheet' API to handle responsive styles", "All of the above"],
                        correctAnswer: 3
                        },
                        
                        {
                        question: "What is the purpose of the 'PixelRatio' API in React Native?",
                        options: ["To manage the application's navigation stack", "To handle touch and gesture-based interactions", "To retrieve the device's pixel density information", "To access device hardware sensors"],
                        correctAnswer: 2
                        },
                        
                        {
                        question: "How can React Native applications handle dynamic theming and styling?",
                        options: ["By using the 'StyleSheet' API to create modular styles", "By integrating with a third-party styling library like Styled Components", "By leveraging the 'Context' API to manage theme-related state", "All of the above"],
                        correctAnswer: 3
                        },
                        
                        {
                        question: "What is the purpose of the 'Animated' API in React Native?",
                        options: ["To manage the application's navigation stack", "To create and control animations for UI components", "To handle touch and gesture-based interactions", "To access device hardware sensors"],
                        correctAnswer: 1
                        }

];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 1800; // 30 minutes in seconds

const startScreen = document.getElementById('start-screen');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const progressBar = document.getElementById('progress');
const questionNumber = document.getElementById('question-number');
const scoreText = document.getElementById('score');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', function() {
    startScreen.style.display = 'none';
    quizContainer.style.display = 'block';
    startQuiz();
});

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
    startTimer();
}

function startTimer() {
    timer = setInterval(function() {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            showScore();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById('time').textContent = `${minutes}:${seconds}`;
}

function showQuestion() {
    resetState();
    let question = quizData[currentQuestion];
    let questionNo = currentQuestion + 1;
    questionText.innerHTML = questionNo + ". " + question.question;

    question.options.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerHTML = answer;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        button.addEventListener('click', () => selectAnswer(index));
    });

    questionNumber.innerHTML = `Question ${questionNo} of ${quizData.length}`;
    updateProgressBar();
}

function resetState() {
    nextButton.style.display = 'block';
    prevButton.style.display = currentQuestion === 0 ? 'none' : 'block';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(index) {
    const buttons = answerButtons.getElementsByTagName('button');
    for (let button of buttons) {
        button.disabled = true;
    }

    if (index === quizData[currentQuestion].correctAnswer) {
        buttons[index].style.backgroundColor = 'green';
        score++;
    } else {
        buttons[index].style.backgroundColor = 'red';
        buttons[quizData[currentQuestion].correctAnswer].style.backgroundColor = 'green';
    }

    nextButton.style.display = 'block';
}

function showScore() {
    clearInterval(timer);
    resetState();
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    const percentage = (score / quizData.length) * 100;
    scoreText.innerHTML = `
        <p>You scored ${score} out of ${quizData.length}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
    `;
}

function handleNextButton() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function goToPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
}

nextButton.addEventListener('click', handleNextButton);
prevButton.addEventListener('click', goToPreviousQuestion);

// Initial setup
quizContainer.style.display = 'none';
resultContainer.style.display = 'none';