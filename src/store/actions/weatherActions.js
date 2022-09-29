/* 
    This is a blank file where you can start writing your
    actions. You can feel free to add multiple actions,
    based on your discretion.
*/


export const  fetchApi= (weather) => {
    return {
      type:"FETCH_API",
      payload:weather,
    }
  }
 