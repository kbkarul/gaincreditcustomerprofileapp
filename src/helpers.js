import moment from 'moment';

const helpers = {
  formatDate: function(date) {
    return moment(date).format('DD-MMM-YYYY');
  },
  formatDateTime: function(date) {
    return moment(date).format('DD-MMM-YYYY h:m a');
  }
}

export default helpers;
