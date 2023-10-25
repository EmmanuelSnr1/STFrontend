import React from "react";
import { YourHoldingsEmpty } from "../components/YourHoldingsEmpty";

// A sample Workspace for implementing Funcionality in the stocXtune App.
// Change Function name and File name to suit the kind of thing you wanna implement

export function Canvas({
  title,
  spansize,
  width = "w-full",
  height = "h-auto",
}) {
  return (
    <div className={`${spansize} ${width} ${height}`}>
      <div className="rounded-xl shadow-lg shadow-accent/20 bg-gradient-to-b from-darker-teal to-black">
        <div className="p-4 md:p-8">
          <div className="flex justify-between">
            <div className="font-bold text-base">{title}</div>
            <div className="tabs">
              {/* <button className="btn btn-primary btn-sm" disabled>
                View All
              </button> */}
            </div>
          </div>
          <YourHoldingsEmpty />
        </div>
      </div>
    </div>
  );
}
