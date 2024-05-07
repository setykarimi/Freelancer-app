import { ThreeDots } from "react-loader-spinner";
import { LoadingPropsType } from "./type";

export default function Loading({ width = 76, height = 40 }: LoadingPropsType) {
  return (
    <div data-testid="loading-component">
      <ThreeDots
        height={height}
        width={width}
        radius={9}
        color="rgb(var(--color-primary-900))"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
        }}
        visible={true}
      />
    </div>
  );
}
