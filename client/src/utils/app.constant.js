export const CONSTANTS = {
    USER_SIGN_UP: {
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    },
    USER_LOGIN: {
        username: "",
        password: ""
    },
    GENDER: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" }
    ]
}

export const API_URL = {
    USERS: "/api/users",
    SIGNUP: "/api/auth/signup",
    LOGIN: "/api/auth/login",
    LOGOUT: "/api/auth/logout",
    SEND_MESSAGE: "/api/messages/send/",
    GET_MESSAGES: "/api/messages/",
}

export const HTTP_METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
}

export const HEADERS = {
    "Content-Type": "application/json"
}

export const ALERT_MESSAGES = {
    SUCCESS: {
        SIGNUP_SUCCESS: "Signup successfully!",
        LOGIN_SUCCESS: "Login successfully!",
        LOGOUT_SUCCESS: "Logout successfully!"
    },
    ERROR: {
        SIGNUP_ERROR: "Signup failed!",
        LOGIN_ERROR: "Login failed!",
        LOGOUT_ERROR: "Logout failed!"
    }
}