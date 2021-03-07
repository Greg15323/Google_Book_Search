import React from "react";

 function Form({ q, handleInputChange, handleFormSubmit }) {
   return (
     <form>
       <div className="form-group">
         <label htmlFor="Query">
           <strong></strong>
         </label>
         <input
           className="form-control"
           id="Title"
           type="text"
           value={q}
           placeholder="Harry Potter"
           name="q"
           onChange={handleInputChange}
           required
         />
       </div>
       <div className="pull-right">
         <button
           onClick={handleFormSubmit}
           type="submit"
           className="btn btn-lg btn-dark float-right"
         >
           Search
         </button>
       </div>
     </form>
   );
 }

 export default Form;