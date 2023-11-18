// shout function
function shout(string) {
    return string.toUpperCase();
  }
  
  // whisper function
  function whisper(string) {
    return string.toLowerCase();
  }
  
  // logShout function
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // logWhisper function
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // sayHiToGrandma function
  function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "I love you, Grandma.") {
      return "I love you, too.";
    }
  }
  
  // sayHiToHeadphonedRoommate function
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  