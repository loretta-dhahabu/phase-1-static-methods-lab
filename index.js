class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, "");
  }

  static titleize(string) {
    let newArray = [];
    const stringArray = string.split(" ");
    const exceptWord = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    stringArray.forEach((word) => {
      if (exceptWord.indexOf(word) !== -1) {
        if (stringArray.indexOf(word) === 0) {
          newArray.push(this.capitalize(word));
        } else {
          newArray.push(word);
        }
      } else {
        newArray.push(this.capitalize(word));
      }
    });
    return newArray.join(" ");
  }
}