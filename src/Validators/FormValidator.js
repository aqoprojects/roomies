class Validator {
    constructor() {
        this.rules = {
            name: [
                this.required("Name"),
                this.alphaOnly("Name"),
                this.minLength("Name", 2)
            ],
            email: [
                this.required("Email"),
                this.email()
            ],
            username: [
                this.required("Username"),
                this.alphaNumeric("Username"),
                this.minLength("Username", 3),
                this.maxLength("Username", 20)
            ],
            password: [
                this.required("Password"),
                this.minLength("Password", 8),
                this.hasUpperCase(),
                this.hasLowerCase(),
                this.hasNumber(),
                this.hasSpecialChar()
            ],
            phoneNumber: [
                this.required("Phone number"),
                this.digitsOnly("Phone number"),
                this.minLength("Phone number", 10),
                this.maxLength("Phone number", 11)
            ]
        };
    }

    // ----------- CORE VALIDATION ENGINE -----------
    validate(data) {
        const errors = {};

        for (const field in data) {
            if (this.rules[field]) {
                const value = data[field];

                for (const rule of this.rules[field]) {
                    const error = rule(value);
                    if (error) {
                        errors[field] = error;
                        break; // stop at first error
                    }
                }
            }
        }

        return {
            isValid: Object.keys(errors).length === 0,
            errors
        };
    }

    validateField(field, value) {
        if (!this.rules[field]) return null;

        for (const rule of this.rules[field]) {
            const error = rule(value);
            if (error) return error;
        }

        return null;
    }

    // ----------- FIELD-SPECIFIC SHORTCUTS -----------
    nameValidator(value) {
        return this.validateField("name", value);
    }

    emailValidator(value) {
        return this.validateField("email", value);
    }

    usernameValidator(value) {
        return this.validateField("username", value);
    }

    passwordValidator(value) {
        return this.validateField("password", value);
    }

    phoneNumberValidator(value) {
        return this.validateField("phoneNumber", value);
    }

    // ----------- RULE BUILDERS -----------

    required(fieldName) {
        return (value) =>
            !value || value.toString().trim() === "" ?
            `${fieldName} cannot be empty` :
            null;
    }

    minLength(fieldName, length) {
        return (value) =>
            value && value.length < length ?
            `${fieldName} must be at least ${length} characters` :
            null;
    }

    maxLength(fieldName, length) {
        return (value) =>
            value && value.length > length ?
            `${fieldName} must be at most ${length} characters` :
            null;
    }

    email() {
        return (value) =>
            value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ?
            "Invalid email format" :
            null;
    }

    digitsOnly(fieldName) {
        return (value) =>
            value && !/^\d+$/.test(value) ?
            `${fieldName} must contain only digits` :
            null;
    }

    alphaOnly(fieldName) {
        return (value) =>
            value && !/^[a-zA-Z]+$/.test(value) ?
            `${fieldName} must contain only letters` :
            null;
    }

    alphaNumeric(fieldName) {
        return (value) =>
            value && !/^[a-zA-Z0-9]+$/.test(value) ?
            `${fieldName} must be alphanumeric` :
            null;
    }

    hasUpperCase() {
        return (value) =>
            value && !/[A-Z]/.test(value) ?
            "Password must contain at least one uppercase letter" :
            null;
    }

    hasLowerCase() {
        return (value) =>
            value && !/[a-z]/.test(value) ?
            "Password must contain at least one lowercase letter" :
            null;
    }

    hasNumber() {
        return (value) =>
            value && !/[0-9]/.test(value) ?
            "Password must contain at least one number" :
            null;
    }

    hasSpecialChar() {
        return (value) =>
            value && !/[!@#$%^&*(),.?":{}|<>]/.test(value) ?
            "Password must contain at least one special character" :
            null;
    }
}

export default Validator;

// const validator = new Validator();

// const result = validator.validate({
//     name: "",
//     email: "bad@email",
//     password: "123",
//     phoneNumber: "abc123"
// });

// console.log(result.errors);
// /*
// {
//   name: "Name cannot be empty",
//   email: "Invalid email format",
//   password: "Password must be at least 8 characters",
//   phoneNumber: "Phone number must contain only digits"
// }
// */

// // Single field validation
// console.log(validator.phoneNumberValidator("123abc"));
// // "Phone number must contain only digits"