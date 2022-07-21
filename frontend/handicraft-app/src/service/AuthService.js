module.exports = {

    getUser: function() {
        const email = sessionStorage.getItem('email');
        if(email === 'undefined' || !email){
            return null;
        }
        else {
            return JSON.parse(email);
        }       
    },

    getToken: function() {
        return sessionStorage.getItem('token');
      },
    
      setUserSession: function(email, token) {
        sessionStorage.setItem('email', JSON.stringify(email));
        sessionStorage.setItem('token', token);
      },
    
      resetUserSession: function() {
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('token');
      }

}