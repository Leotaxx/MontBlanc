# MontBlanc
MU_HD_SD_CS385_GroupProject
Structure of this project
MontBlanc/
│
├── client/ (React Frontend)
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── LoginPage/
│   │   │   │   └── LoginPage.js
│   │   │   ├── ContentPage/
│   │   │   │   └── ContentPage.js
│   │   │   └── ProfilePage/
│   │   │       └── ProfilePage.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── server/ (Node.js Backend)
    ├── models/
    │   ├── User.js
    │   └── Car.js
    ├── routes/
    │   ├── auth.js
    │   └── car.js
    ├── .env (to store environment variables)
    ├── server.js
    └── package.json
