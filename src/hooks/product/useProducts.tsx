// import { useState, useEffect } from "react";
// import type { Movie } from "../../services/movie/type";
// import { getPopular } from "../../services/movie";

// export const useProducts = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getPopular();
//         if (response) {
//           setPopularMovie(response.results);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return { popularMovie };
// };

