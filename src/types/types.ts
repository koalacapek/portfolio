// eslint-disable
import React, { MouseEventHandler } from "react";

export interface NavButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
