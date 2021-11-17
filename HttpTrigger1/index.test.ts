import httpTrigger from "./index";
import { Context } from "@azure/functions";

describe("Test for Demo Function", () => {
    let context: Context;
  
    beforeEach(() => {
      context = ({ log: jest.fn() } as unknown) as Context;
    });
  
    test("should return a 200", async () => {
        // Arrange
        const request = {
          query: {},
          body: { name: "John" },
        };
    
        // Action
        await httpTrigger(context, request);
    
        // Assertion
        expect(context.log).toBeCalledTimes(1);
        expect(context.res.status).toEqual(200);
        expect(context.res.body).toBe("Hello, John. This HTTP triggered function executed successfully.");
      });
  
  });