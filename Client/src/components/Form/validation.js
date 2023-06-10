export default function validation(email) {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  if (!email) {
    return "El inputs no puede estar vacio";
  }
  if (email.length > 1 && email.length < 35) {
    if (!regexEmail.test(email)) {
      return "Debe ser un correo electronico";
    }
  } else {
    if (email.length > 35) {
      return "El usuario tiene que ser menor a 35";
    }
  }

  return "";
}
export function validationPass(password) {
  /*   const regexPass = /^(?=.*\d)/
  if (regexPass.test(password)) {
    return "Debe contener almenos un numero";
  } */

  if (password.length < 6) {
    return "Debe ser un password mayor a 6 y menor 10";
  }
  if (!validarNumeroEnString(password)) {
    return "Debe contener al menos un numero";
  }
  if (password.length > 10) {
    return "Debe ser un password mayor a 6 y menor 10";
  }

  return "";
}

function validarNumeroEnString(str) {
  for (var i = 0; i < str.length; i++) {
    if (!isNaN(str.charAt(i))) {
      return true;
    }
  }
  return false;
}

