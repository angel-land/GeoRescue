"use client";
import Lottie from "lottie-react";
import animationData from "../../../public/lottie/health.json"

export function LottiePlayer() {
  return <Lottie animationData={animationData} loop />;
}