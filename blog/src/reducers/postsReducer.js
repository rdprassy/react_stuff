export default (state = [], action) => {
   // if(action.type === 'FETCH_POSTS') {
   //    return action.payload;
   // }

   //try to use switch

   switch (action.type){
      case 'FETCH_POSTS':
         return action.payload;
      default:
         return state;
   }

   // return state;
};


