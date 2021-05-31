# Shivam-Tax-Block-Client
A React-Redux based frontEnd UI application powered with Material UI for Loan Application Management
The APP takes data from backend which I have created in ExpressJS and Database used is MongoDB.
The app uses JWT token for secure transfer of data between frontend and backend. 
Authorization is done using PassportJS.
Redux is used for data fetching for client in async Thunk. Redux store is used to save data.
Features: User can signup/login and can apply for loan by filling loan form. When form gets submitted. The data is handled by ExpressJS and gets stored in DB after sanitization and validation
          They can View their Previous Loan application in View Loan tab .
          The form EMI calcution is done using formula emi=(loan expiry date - loan start date)/LoanAmount. and you cannot change EMI on its own.
          The Expiry Date is always more or equal to Start Date. 
          And Can Simply Logout After your work is done.

Below is My project Github Link
https://shivam16122000.github.io/Shivam-Tax-Block-Client/

--Thanks for Reading--
          
