A full-stack Invoice Processing System built with React (frontend), Java Spring Boot (backend), and MySQL (database). 
This system allows users to add invoices, view pending invoices, and mark invoices as done without deleting them from the database.
*** Features:-
1. Add new invoices with vendor, product, amount, and date.
2. View a list of pending invoices in a clean table.
3. Mark invoices as done, removing them from the pending list while keeping them in the database.
4. Fully responsive UI using Material-UI (MUI).
5. Backend API with Spring Boot and JPA/Hibernate.
6. MySQL database integration.
7. CORS enabled for seamless frontend-backend communication.

*** Tech Stack:-
1. Frontend:- React, Material-UI
2. Backend:-	Java, Spring Boot
3. Database:-	MySQL
4. API Client:-	Axios

*** Project Structure:-
invoice-processing-system/
│
├── frontend/                # React frontend code
│   ├── src/
│   │   ├── components/      # React components (Header, AddInvoice, Invoices)
│   │   ├── services/        # API calls using Axios
│   │   └── pages/           # Home page
│   └── public/              # index.html, assets
│
├── backend/                 # Java Spring Boot backend
│   ├── src/main/java/com/sdinvoiceprocessing/server/
│   │   ├── controller/      # REST controllers
│   │   ├── model/           # Invoice entity
│   │   ├── dao/             # JPA repository
│   │   └── services/        # Service layer
│   └── resources/
│       └── application.properties # MySQL configuration
└── README.md

*** Setup Instructions:-
* Backend:-
1. Clone the repository and open in your favorite IDE (e.g., IntelliJ, Eclipse).
2. Make sure MySQL is installed and running.
3. Create a database named invoiceprocessingsystem.
4. Update application.properties with your MySQL username and password:-

application.properties:-
spring.datasource.url=jdbc:mysql:///invoiceprocessingsystem
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update

* Frontend:-
1. Navigate to the frontend folder:-
   cd frontend
3. Install dependencies:-
   npm install
5. Start the React app:-
   npm start
6. The frontend runs on http://localhost:3000 and communicates with backend automatically.

*** See the Screenshots:-

*** Usage:-
1. Open the application in your browser.
2. Click Add Invoice to create a new invoice.
3. View all pending invoices in the table.
4. Click Mark Done to remove it from the pending list without deleting it from the database.
