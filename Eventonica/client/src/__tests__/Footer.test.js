import { render, screen, cleanup } from "@testing-library/react";
import Footer from "./components/footer";


  afterEach(() => {
    cleanup();
  })
  // Test if Footer renders
  describe("Footer", () => {
    test("App renders", ()=>{
      render(<Footer />)

    });
  });