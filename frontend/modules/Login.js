// import validator from "validator";

// export default class Login {
//     constructor(formClass) {
//         this.form = document.querySelector(formClass);
//     }

//     init() {
//         this.events();
//     }

//     events() {
//         if (!this.form) return;
//         this.form.addEventListener('submit', e => {
//             e.preventDefault();
//             alert('FORM NOT SUBMITED');
//             this.validate()
//         })
//     }

//     validate(e) {
//         const el = el.target;
//         const emailInput = el.querySelector('input[name="email"]');
//         const passwordInput = el.querySelector('input[name="password"]');
//         let error = false;

//         if (!validator.isEmail(emailInput.value)) {
//             alert('Invalid email');
//             error = true;
//         }

//         if (passwordInput.value.length < 3 || passwordInput.value.length >50) {
//             alert('The password must contain between 4 and 50 characters.');
//             error = true;
//         }

//         if(!error) el.submit();

//     }
// }