import { render, screen, cleanup } from "@testing-library/react";
import Users from "./components/users";


  afterEach(() => {
    cleanup();
  })
  // Test if Users renders
  describe("Users", () => {
    test("Users renders", ()=>{
      render(<Users />)

    });
  });