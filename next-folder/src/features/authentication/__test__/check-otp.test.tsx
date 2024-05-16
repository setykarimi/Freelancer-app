import { describe, expect, test, vi } from "vitest";
import { fireEvent, getByRole, render, screen } from "../../../utils/test-utils";
import CheckOTPForm from "../check-otp";

const mockedFunction = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    pathname: "/",
    push: mockedFunction,
  }),
}));

const renderComp = (time?: number) => {
  return render(
    <CheckOTPForm
      onBack={mockedFunction}
      onResendOtp={mockedFunction}
      setTime={mockedFunction}
      otpResponse={true}
      phoneNumber="09190979722"
      time={time ? time : 10}
    />
  );
};

describe("check otp", () => {
  test("render check otp component", () => {
    renderComp();
    const timeRender = screen.getByText("10");
    expect(timeRender).toBeDefined();
  });

  test("Check time less than 0", () => {
    renderComp(-1);
    const button = screen.getByRole("button", { name: "ارسال مجدد کد تایید" });
    expect(button).toBeDefined();

    fireEvent.click(button);
    expect(mockedFunction).toBeCalled();
  });

  test("Check input value", () => {
    renderComp()
    const otpInput = screen.getAllByRole("textbox")[0];
    fireEvent.change(otpInput, { target: { value: "7" } });

    expect(otpInput.value).toBe("7")

    // const submitBuuton =screen.getByRole("button", {name: /تایید/i})
    // fireEvent.click(submitBuuton)

    // expect(mockedFunction).toHaveBeenCalledWith({
    //   phoneNumber: "09190979722",
    //   opt: "7"
    // })
  });
});
