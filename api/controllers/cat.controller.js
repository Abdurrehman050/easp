import Cat from "../models/cat.model.js";
import createError from "../utils/createError.js";

export const getCat = async (req, res, next) => {
  try {
    const cat = await Cat.find(req.params.id);
    if (!cat) next(createError(404, "Category not found!"));
    res.status(200).send(cat);
  } catch (err) {
    next(err);
  }
};

export const createCat = async (req, res, next) => {
  const { name, image } = req.body;

  try {
    const lastCat = await Cat.findOne({}, {}, { sort: { id: -1 } });
    const lastId = lastCat ? lastCat.id : 0;
    const newCat = new Cat({
      id: lastId !== 0 ? lastId + 1 : 1,
      name: name,
      image: image,
    });

    const savedCat = await newCat.save();
    res.status(201).json(savedCat);
  } catch (err) {
    next(err);
  }
};
