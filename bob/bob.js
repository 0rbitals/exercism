export const hey = (message) => {
  // check if empty string
  if (message.match(/^\s*$/)) {
    return "Fine. Be that way!";
  } else if (message.match(/([?])\s*$/)) { // Check if question 
    // Check if shouting a question (all caps)
    if (message.match(/\b^[^a-z0-9]*$/)) {
      return "Calm down, I know what I'm doing!";
    } else {
      return "Sure.";
    }
  } else if (message.match(/^[^a-z]*\D$/)) { // check if shouting (all caps)
    return "Whoa, chill out!";
  } else {
    return "Whatever.";
  }
};