import { ImageResponse } from "next/og";
import { markDataUri } from "@/lib/mark-svg";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070A12",
        }}
      >
        <img src={markDataUri()} width={156} height={156} alt="" />
      </div>
    ),
    size,
  );
}
