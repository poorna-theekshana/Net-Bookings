const request = require("supertest");
const express = require("express");
const app = require("../server");

describe("Auth Routes", () => {
  it("should return 200 on /login POST with correct body", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "admin@gmail.com", password: "123456" });

    expect(res.statusCode).toBe(200);
  });

  it("should return 400 on /login POST with missing body", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({});

    expect(res.statusCode).toBe(400);
  });

  it("should return a success message from the root route", async () => {
    const res = await request(app).get("/api/auth/");
  
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Auth Service is working!");
  });
});
