//imports
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const users = require("./server/models/user");
const themes = require("./server/models/theme");
const reviews = require("./server/models/review");
const products = require("./server/models/product");
const orders = require("./server/models/order");
const carts = require("./server/models/cart");

//other declarations
const app = express();
app.use(bodyParser.json());
const uri =
  "mongodb+srv://sanjaykmsmoorthy:Sanjay99652@giftshop.jync2qq.mongodb.net/giftshop?retryWrites=true&w=majority";

//middle ware
app.use((req, res, next) => {
  // set headers to allow cross-origin requests
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//insert users

// const newUser = new users({
//   userId: "user-4",
//   userName: "ADMIN",
//   email: "admin@gmail.com",
//   mobileNumber: "9087653480",
//   password: "admin",
//   role: "admin",
//   active: "false",
// });
// newUser.save().then(() => {
//   console.log("inserted users");
// });

//insert themes

// const newtheme = new themes({
//   id: "theme-5",
//   themeName: "Handmade gifts",
//   price: "35.12",
//   themeDesc: "Antique",
// });
// newtheme.save().then(() => {
//   console.log("inserted themes");
// });

//insert review

// const newreview = new reviews({
//   userId: "user-1",
//   giftId: "product-1",
//   userName: "RAM",
//   reviewText: "This is really a nice product... Loved it !!!",
//   reviewId: "pro",
// });
// newreview.save().then(() => {
//   console.log("inserted review");
// });

//insert product

// const newproduct = new products({
//   giftId: "product-7",
//   url: "https://5.imimg.com/data5/BA/WI/MY-25071105/modern-nameplate-500x500.jpg",
//   productName: "Modern Nameboard",
//   price: "150",
//   quantity: "15",
//   giftDetails: "",
// });
// newproduct.save().then(() => {
//   console.log("inserted product");
// });

//insert order

// const neworder = new orders({
//   giftId: "product-2",
//   orderId: "ORDER-1684487793407",
//   price: "200",
//   productName: "Wooden Board",
//   quantity: 1,
//   status: "Order placed",
//   themePrice: "",
//   totalAmount: 200,
//   url: "https://5.imimg.com/data5/SELLER/Default/2021/9/TH/HJ/JH/27990694/door-name-plate-250x250.jpg",
//   userId: "user-3",
// });
// neworder.save().then(() => {
//   console.log("inserted order");
// });

//insert order

// const newcart = new carts({
//   cartItemId: "CART-1684487747204",
//   giftId: "product-2",
//   price: "200",
//   productName: "Wooden Board",
//   quantity: 1,
//   totalAmount: "200.00",
//   url: "https://5.imimg.com/data5/SELLER/Default/2021/9/TH/HJ/JH/27990694/door-name-plate-250x250.jpg",
//   userId: "user-3",
// });
// newcart.save().then(() => {
//   console.log("inserted cart");
// });

//process
app.get("/", (req, res) => {
  res.send("Hello");
});

//users
app.get("/users", async (req, res) => {
  try {
    const result = await users.find({});
    res.json(result);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).send("Error retrieving users");
  }
});

//users POST ADDING

app.post("/usersadd", async (req, res) => {
  const val = req.body;
  const newUser = new users(val);
  newUser.save().then(() => {
    console.log("inserted the user");
  });
});

//users post updating

app.post("/usersupdate", async (req, res) => {
  try {
    const { userId, ...updatedFields } = req.body;

    await users.updateOne({ userId: userId }, { $set: updatedFields });

    console.log("User is updated successfully");
    res.sendStatus(200);
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).send("Error updating document");
  }
});

//users post deleting

app.post("/usersdelete", async (req, res) => {
  try {
    const { userId } = req.body;

    await users.deleteOne({ userId: userId });

    console.log("User is deleted successfully");
    res.sendStatus(200);
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).send("Error updating document");
  }
});

//products
app.get("/products", async (req, res) => {
  try {
    const result = await products.find({});
    res.json(result);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).send("Error retrieving products");
  }
});

//products POST ADDING

app.post("/productsadd", async (req, res) => {
  const val = req.body;
  const newProduct = new products(val);
  newProduct.save().then(() => {
    console.log("inserted the product");
  });
});

//products post updating

app.post("/productsupdate", async (req, res) => {
  try {
    const { giftId, ...updatedFields } = req.body;

    await products.updateOne({ giftId: giftId }, { $set: updatedFields });

    console.log("Product is updated successfully");
    res.sendStatus(200);
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).send("Error updating document");
  }
});

//products post deleting

app.post("/productsdelete", async (req, res) => {
  try {
    const { giftId } = req.body;

    await products.deleteOne({ giftId: giftId });

    console.log("Product is deleted successfully");
    res.sendStatus(200);
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).send("Error updating document");
  }
});

//review
app.get("/reviews", async (req, res) => {
  try {
    const result = await reviews.find({});
    res.json(result);
  } catch (error) {
    console.error("Error retrieving reviews:", error);
    res.status(500).send("Error retrieving reviews");
  }
});

//review POST ADDING

app.post("/reviewsadd", async (req, res) => {
  const val = req.body;
  const newRev = new reviews(val);
  newRev.save().then(() => {
    console.log("inserted the review");
  });
});

//reviews post updating

app.post("/reviewsupdate", async (req, res) => {
  try {
    const { reviewId, ...updatedFields } = req.body;

    await reviews.updateOne({ reviewId: reviewId }, { $set: updatedFields });

    console.log("Review is updated successfully");
    res.sendStatus(200);
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).send("Error updating document");
  }
});

//reviews post deleting

app.post("/reviewsdelete", async (req, res) => {
  try {
    const { reviewId } = req.body;

    await reviews.deleteOne({ reviewId: reviewId });

    console.log("review is deleted successfully");
    res.sendStatus(200);
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).send("Error updating document");
  }
});

//theme
app.get("/themes", async (req, res) => {
  try {
    const result = await themes.find({});
    res.json(result);
  } catch (error) {
    console.error("Error retrieving themes:", error);
    res.status(500).send("Error retrieving themes");
  }
});

//themes POST ADDING

app.post("/themesadd", async (req, res) => {
  const val = req.body;
  const newUser = new themes(val);
  newUser.save().then(() => {
    console.log("inserted the theme");
  });
});

//themes post updating

app.post("/themesupdate", async (req, res) => {
  try {
    const { id, ...updatedFields } = req.body;

    await themes.updateOne({ id: id }, { $set: updatedFields });

    console.log("Theme is updated successfully");
    res.sendStatus(200);
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).send("Error updating document");
  }
});

//themes post deleting

app.post("/themesdelete", async (req, res) => {
  try {
    const { id } = req.body;

    await themes.deleteOne({ id: id });

    console.log("Theme is deleted successfully");
    res.sendStatus(200);
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).send("Error updating document");
  }
});

//orders
app.get("/orders", async (req, res) => {
  try {
    const result = await orders.find({});
    res.json(result);
  } catch (error) {
    console.error("Error retrieving orders:", error);
    res.status(500).send("Error retrieving orders");
  }
});

//orders POST ADDING

app.post("/ordersadd", async (req, res) => {
  const val = req.body;
  const newOrder = new orders(val);
  newOrder.save().then(() => {
    console.log("inserted the order");
  });
});

//orders post updating

app.post("/ordersupdate", async (req, res) => {
  try {
    const { orderId, ...updatedFields } = req.body;

    await orders.updateOne({ orderId: orderId }, { $set: updatedFields });

    console.log("Order is updated successfully");
    res.sendStatus(200);
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).send("Error updating document");
  }
});

//orders post deleting

app.post("/ordersdelete", async (req, res) => {
  try {
    const { orderId } = req.body;

    await orders.deleteOne({ orderId: orderId });

    console.log("Order is deleted successfully or removed");
    res.sendStatus(200);
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).send("Error updating document");
  }
});

//carts
app.get("/carts", async (req, res) => {
  try {
    const result = await carts.find({});
    res.json(result);
  } catch (error) {
    console.error("Error retrieving carts:", error);
    res.status(500).send("Error retrieving carts");
  }
});

//carts POST ADDING

app.post("/cartsadd", async (req, res) => {
  const val = req.body;
  const newCart = new carts(val);
  newCart.save().then(() => {
    console.log("inserted the Cart");
  });
});

//carts post updating

app.post("/cartsupdate", async (req, res) => {
  try {
    const { cartItemId, ...updatedFields } = req.body;

    await carts.updateOne({ cartItemId: cartItemId }, { $set: updatedFields });

    console.log("Cart is updated successfully");
    res.sendStatus(200);
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).send("Error updating document");
  }
});

//carts post deleting

app.post("/cartsdelete", async (req, res) => {
  try {
    const { cartItemId } = req.body;

    await carts.deleteOne({ cartItemId: cartItemId });

    console.log("Cart is deleted successfully or removed");
    res.sendStatus(200);
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).send("Error updating document");
  }
});

//server port
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    var server = app.listen(8000, () => {
      console.log(
        "running" + server.address().address + " " + server.address().port
      );
    });
  });
