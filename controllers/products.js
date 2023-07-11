const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    const { price, title, sort, select } = req.query;
    const queryObject = {};
    if (price) {
        queryObject.price = price;

    }
    if (title) {
        queryObject.title = { $regex: title, $options: "i" };
    }

    let apiData = Product.find(queryObject);

    if (sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        //let selectFix = select.replace(","," ");
        let selectFix = select.split(",").join(" ");

        apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
    let skip = (page - 1) * limit;

    // page = 2;
    // limit = 10;
    // skip = 1*10 = 10;

    apiData = apiData.skip(skip).limit(limit);
    console.log(queryObject);

    const myData = await apiData;
    //.sort( sort );

    res.status(200).json({ myData, nbHits : myData.length });

};

const getAllProductsTesting = async (req, res) => {
    // const myData = await Product.find( req.query ).sort("title");
    console.log(req.query);
    const myData = await Product.find(req.query);
    //.select("title price")

    res.status(200).json({ myData, nbHits : myData.length });
};

module.exports = { getAllProducts, getAllProductsTesting };