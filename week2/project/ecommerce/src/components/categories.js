// import React, { useState } from "react";
// import "./Categories.css";

// const Categories = ({ handleSelectCategory }) => {

//   // in order to make the user see the selected category
//   const [selectedCategoryId, setSelectedCategoryId] = useState(-1);

//   const handleCategoryClick = (index) => {
//     setSelectedCategoryId(index);
//     handleSelectCategory(index);
//   };

//   return (
//     <div className="categories">
//       {categories.map((category, index) => (
//         <button
//           key={index}
//           onClick={(index) => {
//             handleCategoryClick(index);
//           }}
//           className={selectedCategoryId === index ? "active" : ""}
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Categories;
