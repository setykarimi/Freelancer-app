import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import { expect, test, vi } from "vitest";
import SendOTPForm from "../send-otp";

const mockedFunction = vi.fn();

describe("SendOTPForm", () => {
  test("show button when isSendingOtp false", () => {
    const isSendingOtp = false;
    render(
      <SendOTPForm
        onSubmit={mockedFunction}
        isSendingOtp={isSendingOtp}
        register={mockedFunction}
        errors={[]}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toBeDefined();
  });

  test("show loading when isSendingOtp true", () => {
    const isSendingOtp = true;
    render(
      <SendOTPForm
        onSubmit={mockedFunction}
        isSendingOtp={isSendingOtp}
        register={mockedFunction}
        errors={[]}
      />
    );

    const loadingComponent = screen.getByTestId("loading-component");
    expect(loadingComponent).toBeTruthy();

    const button = screen.queryByText("ارسال کد تایید");
    expect(button).not.toBe("");
  });
});
