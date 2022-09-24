
import { render, screen, cleanup } from "@testing-library/react"
import App from 'App';



  afterEach(() => {
    cleanup();
  })
  // Test if App renders
  describe("App", () => {
    test("App renders", ()=>{
      render(<App />)

    });
  });

  test("render Users header", ()=>{
    render(<Users />);
    expect(screen.getByText(/Add User/));
  });