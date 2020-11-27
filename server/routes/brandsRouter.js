const express = require("express");
const brandsRouter = express.Router();
const BrandList = require("../models/brandlist.js");
const Sequelize = require("sequelize");

const  Op = Sequelize.Op;

const brandList = [
  { image: "https://i.ibb.co/Q639v0c/pizza-hut.jpg", title: "Pizza Hut" },
  { image: "https://i.ibb.co/Q639v0c/pizza-hut.jpg", title: "Dunkin' Donuts" },
  { image: "https://i.ibb.co/Q639v0c/pizza-hut.jpg", title: "Taco Bell" },
  { image: "https://i.ibb.co/Q639v0c/pizza-hut.jpg", title: "Pizza Hut" },
  { image: "https://i.ibb.co/Q639v0c/pizza-hut.jpg", title: "Dunkin' Donuts" },
  { image: "https://i.ibb.co/Q639v0c/pizza-hut.jpg", title: "Taco Bell" },
  { image: "https://i.ibb.co/Q639v0c/pizza-hut.jpg", title: "Pizza Hut" },
  { image: "https://i.ibb.co/Q639v0c/pizza-hut.jpg", title: "Dunkin' Donuts" },
  { image: "https://i.ibb.co/Q639v0c/pizza-hut.jpg", title: "Taco Bell" },
];

brandsRouter.get("/:searchString", (request, response) => {
  // const filteredBrandList = request.params.searchString
  //   ? brandList.filter((item) =>
  //       item.title
  //         .toString()
  //         .toLowerCase()
  //         .includes(request.params.searchString.toString().toLowerCase())
  //     )
  //   : brandList;

  BrandList.findAll({
    where: {title: { [Op.like]: '%' + request.params.searchString + '%' }
  } 
  })
    .then((filteredBrandList) => {
      // console.log("filteredBrandList", filteredBrandList);
      return response.send(filteredBrandList);
      
    })
    .catch((err) => console.log(err));

  // response.send(filteredBrandList);
});

brandsRouter.get("/", (request, response) => {
  BrandList.findAll({ raw: true })
    .then((brandlists) => {
       response.send(brandlists);
    })
    .catch((err) => console.log(err));

    
  // response.send(brandList);
});

module.exports = brandsRouter;

//https://drive.google.com/file/d/12z2snOoomb5NBeWB9A-n_zh8WjG0dIJg/view?usp=sharing
