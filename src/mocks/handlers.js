import { rest } from "msw";

const API_BASE_URL = "http://localhost:8001/api/v1";

export const handlers = [
  // User registration
  rest.post(`${API_BASE_URL}/user/register`, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({ status:"Register Successfully!" })
    )
  ),
  
  // User login
  rest.post(`${API_BASE_URL}/users/login`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({ status: "success", token: "your_jwt_token_here" })
    )
  ),

  // Get all users
  rest.get(`${API_BASE_URL}/admin/getAllUsers`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            "success": true,
            "message": "users data list",
            "data": [
                {
                    "_id": "64cf1e1f35e6f260ebba627f",
                    "name": "Test User",
                    "email": "test2@gmail.com",
                    "password": "$2a$10$a7mi5JEXlIjml7brmtxiRuqJlFarR3omDoKyihYfFViJF0OzcVAuq",
                    "isAdmin": false,
                    "isDoctor": false,
                    "notifcation": [],
                    "seennotification": [],
                    "__v": 0
                },
                {
                    "_id": "64cf1e1f8de5bb4cf618ecc1",
                    "name": "Admin",
                    "email": "admin5@gmail.com",
                    "password": "$2a$10$IMu19lzn6YAwjIM2yyshleB7hWmNGHKDtNX1ZUGG2YwCU4.b6fWM.",
                    "isAdmin": false,
                    "isDoctor": false,
                    "notifcation": [],
                    "seennotification": [],
                    "__v": 0
                },
                {
                    "_id": "64cf1e1f77b9a8d3f990bbcd",
                    "name": "User5",
                    "email": "user10@gmail.com",
                    "password": "$2a$10$8CrBAS24OfTk4H/sE1dzLOr6MxSXaarcYqMf8VKRuMfxanatAlvAO",
                    "isAdmin": false,
                    "isDoctor": false,
                    "notifcation": [],
                    "seennotification": [],
                    "__v": 1
                },
            ]
        }
        ],
      })
    )
  ),

  // Get all doctors
  rest.get(`${API_BASE_URL}/admin/getAllDoctors`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            "success": true,
            "message": "Docots Lists Fetched Successfully",
            "data": [
                {
                    "_id": "64cf1e2077b9a8d3f990bbdf",
                    "firstName": "John",
                    "lastName": "Doe",
                    "phone": "1234567890",
                    "email": "john.doe@example.com",
                    "website": "johndoe.com",
                    "address": "123 Main St",
                    "specialization": "Cardiology",
                    "experience": "5 years",
                    "feesPerCunsaltation": 100,
                    "status": "approved",
                    "timings": {
                        "Monday": "10:00 AM - 5:00 PM",
                        "Tuesday": "9:00 AM - 4:00 PM"
                    },
                    "createdAt": "2023-08-06T04:14:24.515Z",
                    "updatedAt": "2023-08-06T04:14:24.515Z",
                    "__v": 0
                },
                {
                    "_id": "64cf1e2077b9a8d3f990bbe1",
                    "firstName": "Jane",
                    "lastName": "Smith",
                    "phone": "9876543210",
                    "email": "jane.smith@example.com",
                    "website": "janesmith.com",
                    "address": "456 Park Ave",
                    "specialization": "Dermatology",
                    "experience": "3 years",
                    "feesPerCunsaltation": 80,
                    "status": "approved",
                    "timings": {
                        "Monday": "10:00 AM - 5:00 PM",
                        "Tuesday": "9:00 AM - 4:00 PM"
                    },
                    "createdAt": "2023-08-06T04:14:24.518Z",
                    "updatedAt": "2023-08-06T04:14:24.518Z",
                    "__v": 0
                },
            ]
        }
        ],
      })
    )
  ),

  // Change account status
  rest.put(`${API_BASE_URL}/admin/changeAccountStatus`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            "success": true,
            "message": "Account Status Changed Successfully",
            "data": [
                {
                    "_id": "64cf1e2077b9a8d3f990bbdf",
                    "firstName": "John",
                    "lastName": "Doe",
                    "phone": "1234567890",
                    "email": "john.doe@example.com",
                    "website": "johndoe.com",
                    "address": "123 Main St",
                    "specialization": "Cardiology",
                    "experience": "5 years",
                    "feesPerCunsaltation": 100,
                    "status": "approved",
                    "timings": {
                        "Monday": "10:00 AM - 5:00 PM",
                        "Tuesday": "9:00 AM - 4:00 PM"
                    },
                    "createdAt": "2023-08-06T04:14:24.515Z",
                    "updatedAt": "2023-08-06T04:14:24.515Z",
                    "__v": 0
                },
                {
                  "_id": "64cf1e2077b9a8d3f990bbe1",
                  "firstName": "Jane",
                  "lastName": "Smith",
                  "phone": "9876543210",
                  "email": "jane.smith@example.com",
                  "website": "janesmith.com",
                  "address": "456 Park Ave",
                  "specialization": "Dermatology",
                  "experience": "3 years",
                  "feesPerCunsaltation": 80,
                  "status": "approved",
                  "timings": {
                      "Monday": "10:00 AM - 5:00 PM",
                      "Tuesday": "9:00 AM - 4:00 PM"
                  },
                  "createdAt": "2023-08-06T04:14:24.518Z",
                  "updatedAt": "2023-08-06T04:14:24.518Z",
                  "__v": 0
              },
            ]
        }
        ],
      })
    )
  ),

  //get appointments
  rest.get(`${API_BASE_URL}/user/user-appointments`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            "success": true,
            "message": "Users Appointments Fetch SUccessfully",
            "data": [
                {
                    "_id": "64cfd8e2dd1966687cfbe635",
                    "userId": "64cfd8cadd1966687cfbe626",
                    "doctorId": "64cfd82cdd1966687cfbe5c4",
                    "doctorInfo": "64cfd82cdd1966687cfbe5c4",
                    "userInfo": "64cfd8cadd1966687cfbe626",
                    "date": "2023-08-06T18:15:00.000Z",
                    "status": "approved",
                    "time": "2023-08-05T20:15:00.000Z",
                    "createdAt": "2023-08-06T17:31:14.518Z",
                    "updatedAt": "2023-08-06T17:31:32.322Z",
                    "__v": 0
                }
            ]
        }
        ],
      })
    )
  ),


  rest.post(`${API_BASE_URL}/api/v1/user/book-appointment`, (req, res, ctx) => {
    const { doctorId, appointmentDate, appointmentTime } = req.body;

    if (!doctorId || !appointmentDate || !appointmentTime) {
      return res(
        ctx.status(400),
        ctx.json({
          status: "fail",
          message: "Please provide doctorId, appointmentDate and appointmentTime",
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        status: "success",
        message: "Appointment booked successfully",
      })
    );
  }),

//   // Get user info from user id
//   rest.get(`${API_BASE_URL}/users/:user_id`, (req, res, ctx) =>
//     res(
//       ctx.status(200),
//       ctx.json({
//         id: "user_id_here",
//         username: "username_here",
//         fullname: "fullname_here",
//       })
//     )
//   ),

//   // Update password
//   rest.put(`${API_BASE_URL}/users/change-password`, (req, res, ctx) =>
//     res(ctx.status(204))
//   ),

//   // Update user profile
//   rest.put(`${API_BASE_URL}/users/edit-profile`, (req, res, ctx) =>
//     res(
//       ctx.status(200),
//       ctx.json({
//         data: [
//           {
//             id: "user_id_here",
//             username: "username_here",
//             fullname: "fullname_here",
//           },
//         ],
//       })
//     )
//   ),

//   // Upload image
//   rest.post(`${API_BASE_URL}/users/uploadImage`, (req, res, ctx) =>
//     res(ctx.status(200), ctx.json({ success: true, data: "image_url_here" }))
//   ),

//   // Get all exchange requests for a user
//   rest.get(
//     `${API_BASE_URL}/users/:user_id/exchange-requests`,
//     (req, res, ctx) =>
//       res(
//         ctx.status(200),
//         ctx.json({
//           exchangeRequests: [
//             {
//               id: "exchange_request_id",
//               book: "book_id_here",
//               message: "exchange_message_here",
//             },
//           ],
//         })
//       )
//   ),

//   // User logout
//   rest.get(`${API_BASE_URL}/users/logout`, (req, res, ctx) =>
//     res(
//       ctx.status(200),
//       ctx.json({ status: "success", message: "User logged out" })
//     )
//   ),
];