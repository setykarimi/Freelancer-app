import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import SendOTPForm from "../send-otp";

const mockedFunction = vi.fn();

test("SendOTPForm", () => {
  render(
    <SendOTPForm
      onSubmit={mockedFunction}
      isSendingOtp={false}
      register={mockedFunction}
      errors={[]}
    />
  );
  const button = screen.getByRole("button");

  expect(button).toBeDefined();
});
