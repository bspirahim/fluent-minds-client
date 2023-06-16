# Fluent Minds

## Features

1. User Registration and Login
   - Secure user registration and login system with email and password
   - Social login option for convenience
   - Error handling for password requirements
   
2. Homepage
   - Visually appealing top slider section with relevant images and messages
   - Display of popular classes and instructors based on student enrollment
   - Additional attractive sections with animations

3. Instructors Page
   - Display of all instructors with their images, names, and emails

4. Classes Page
   - Display of all classes with images, names, instructors, available seats, and prices
   - Select button for booking a class (disabled if seats are unavailable or logged in as admin/instructor)
   - Red background for classes with no available seats

5. Student Dashboard
   - Private dashboard accessible only to students
   - "My Selected Classes" section to view booked classes with relevant information, delete option, and pay button
   - "My Enrolled Classes" section to view successfully enrolled classes

6. Payment
   - Payment page for finalizing class bookings
   - Successful payment reduces available seats for the class
   - Payment history page for students to view their payment records

7. Instructor Dashboard
   - Private dashboard accessible only to instructors
   - "Add a Class" page with a form for adding new classes
   - "My Classes" section to view added classes, including status, enrolled students, feedback, and update option

8. Admin Dashboard
   - Private dashboard accessible only to admins
   - "Manage Classes" page to view and manage all classes
   - "Manage Users" page to view and update user roles (student, instructor, admin)

9. Responsive Design
10. Packages/Technologies Used
    - React
    - React Router
    - React Query
    - Axios
    - React Hook Form
    - Framer Motion (for animations)
    - Bootstrap (or any other CSS framework)
