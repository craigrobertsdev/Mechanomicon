module.exports = {
  // for converting the time of a booking to the appropriate row on the workshop calendar
  rowHelper: (jobTime) => {
    const hour = new Date(jobTime).getHours();
    return hour - 8;
  },
};
