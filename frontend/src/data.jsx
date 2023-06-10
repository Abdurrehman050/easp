import newRequest from "./utils/newRequest";

export const fetchCategories = async () => {
  try {
    const response = await newRequest.get("/cat");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const cards = async () => {
  try {
    const categories = await fetchCategories();
    console.log(categories); // Check the value of categories
    return categories.map((category) => ({
      id: category.id,
      title: category.name,
      img: category.image,
      cat: category.name,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const projects = [
  {
    id: 1,
    img: "/public/img/plumber2.jpg",
    pp: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cat: "Plumber",
    username: "Jilani BHai Bulao",
  },
  {
    id: 2,
    img: "/public/img/machenic.jpg",
    pp: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cat: "Machenic",
    username: "Jilani BHaic Bulao",
  },
  {
    id: 3,
    img: "/public/img/gardener.jpg",
    pp: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cat: "Gardener",
    username: "Jilani BHair Bulao",
  },
  {
    id: 4,
    img: "/public/img/electrician.jpg",
    pp: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cat: "Electrician",
    username: "Jilani BHaician Bulao",
  },
  {
    id: 5,
    img: "/public/img/carpenter.jpg",
    pp: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cat: "Carpenter",
    username: "Jilani BHai Bulao",
  },
];
