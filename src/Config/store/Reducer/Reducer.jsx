const initalState = {
   uid:""
  };
  
  // in nthis function add new user 
  
  export default (state = initalState, action) => {
    switch (action.type) {
      case "uid":
        console.log("user uid",action.data)
        return {
            
          ...state,
          uid: action.data
          
        };
          default:
            return state;
        }
      };


      //uid 
      // sir ye addpro pe  hi a rahi he na
      // jb page h ho gya to n sa empty h

      // ach acha ok sir me ak bar apke samne try kr leta hun