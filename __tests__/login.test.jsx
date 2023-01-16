import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "../components/Form/LoginForm";
import userEvent from '@testing-library/user-event'

describe("Login Page", () => {

 

  // })
  it("should have a form with email and password inputs and a Login button", () => {
    const handleChanges = jest.fn();
    const handleSubmit = jest.fn();
    const { getByTestId } = render(
      <LoginForm
        handleChanges={handleChanges}
        handleSubmit={handleSubmit}
        error={false}
      />
    );

    const emailInput = getByTestId("email");
    const passwordInput = getByTestId("password");
    const loginButton = getByTestId("login_button");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
  it("should show an error if no email or password is inputed", () => {
    const handleChanges = jest.fn();
    const handleSubmit = jest.fn();
    const { getByTestId,  container } = render(
      <LoginForm
        handleChanges={handleChanges}
        handleSubmit={handleSubmit}
        error={true}
      />
    );

    const emailInput = getByTestId("email");
    const passwordInput = getByTestId("password");
    const loginButton = getByTestId("login_button");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    fireEvent.click(loginButton);

    const emailHelperText = container.querySelector("#email-helper-text");
    expect(emailHelperText).toHaveTextContent("wrong/incorrect email");
    const passwordHelperText = container.querySelector("#password-helper-text");
    expect(passwordHelperText).toHaveTextContent("wrong/incorrect password");
  });

  it("should show an error if wrong email or password is inputed", async() => {

    const user = userEvent.setup()
    const handleChanges = jest.fn();
    const handleSubmit = jest.fn();
    const { getByTestId,  container } = render(
      <LoginForm
        handleChanges={handleChanges}
        handleSubmit={handleSubmit}
        error={true}
      />
    );


    const emailInput = getByTestId("email");
    const passwordInput = getByTestId("password");
    const loginButton = getByTestId("login_button");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    const email = 'test@test'
    const password = 'testing1234'

    await user.type(emailInput,email)
    await user.type(passwordInput,password)

    expect(emailInput).toHaveValue(email)
    expect(passwordInput).toHaveValue(password )

    await user.click(loginButton);

    const emailHelperText = container.querySelector("#email-helper-text");
    expect(emailHelperText).toHaveTextContent("wrong/incorrect email");
    const passwordHelperText = container.querySelector("#password-helper-text");
    expect(passwordHelperText).toHaveTextContent("wrong/incorrect password");
  });


});
