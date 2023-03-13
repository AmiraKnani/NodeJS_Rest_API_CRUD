const router = require("../routes/posts.router");

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", router); 

test("getAll/create routes work", done => {
    request(app)
      .get("/")     
      .expect(200, done);
  }); 

  test("getById/Update/delete routes work", done => {
    request(app)
      .get("/:id")     
      .expect(200, done);
  }); 




