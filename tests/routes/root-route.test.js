const build = require("../../src/app");
let app;

describe("App route", () => {
  beforeEach(async () => {
    app = build();       // <-- Call the function!
    await app.ready();   // <-- Wait for Fastify to be ready
  });

  afterEach(() => {
    app.close();
  });

  it("should return 200 when root route called", async () => {
    const res = await app.inject({
      url: "/",
    });

    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({ hello: "world!" });
  });
});
