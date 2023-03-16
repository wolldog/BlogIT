const moment = require("moment/moment");

module.exports = {
    
    formatDate: (date, format) => {
        const mmnt = moment(date)
        return mmnt.format(format)
    },
  };