
// Email validation

function isValidEmail(email) {
    // TODO - fn that validates if the give email(string) is valid pattern wise.
  
    const pattern = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
    if(email.match(pattern)) {
      return true;
    }else {
      return false;
    }
    // return !!email.match(pattern)
}

console.log(isValidEmail("abbasifahad.i05@gmail.com"))


















