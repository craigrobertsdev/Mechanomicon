module.exports = {
  // for converting the time of a booking to the appropriate row on the workshop calendar
  rowHelper: (jobTime) => {
    const hour = new Date(jobTime).getHours();
    return hour - 8;
  },

  technicianConverter: (is_technician) => {
    return is_technician ? "Yes" : "";
  },

  jobLength: (jobType) => {
    return jobType === "service & inspection" ? "1 hour" : "3 hours";
  },

  jobCount: (jobs) => {
    return jobs.length;
  },

  pascalCase: (phrase) => {
    const words = phrase.split(" ");
    // make the first letter of each word a capital
    const capitalisedWords = words.map((word) =>
      word.replace(word[0], word[0].toUpperCase())
    );

    return capitalisedWords.join(" ");
  },

  boolConverter: (bool) => {
    return bool ? "Yes" : "No";
  },
};
