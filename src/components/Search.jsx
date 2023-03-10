// import { useState } from "react";

// const Search = () => {
//   const [searchText, setSearchText] = useState("");

//   const onInputChange = (e) => {
//     let value = e.target.value;
//     setSearchText(value);
//   };

//   const onFormSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <section className="search-section">
//       <div className="container">
//         <h1 className="search-section-title">
//           Great restaurants in Bangalore, delivering to you
//         </h1>
//         <p className="search-section-subtitle">
//           Set exact location to find the right restaurants near you.
//         </p>
//         <form onSubmit={(e) => onFormSubmit(e)} className="search-wrapper">
//           <input
//             className="input-search"
//             placeholder="Enter street name, area etc..."
//             type="text"
//             value={searchText}
//             onChange={(e) => onInputChange(e)}
//           />
//           <button className="btn-search">Find Food</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Search;
