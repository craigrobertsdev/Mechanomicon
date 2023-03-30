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
};
