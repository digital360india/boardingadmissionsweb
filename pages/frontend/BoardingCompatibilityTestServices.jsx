import BoardingCompatibilityTestHero from "@/components/frontend/BoardingCompatibilityTestHero";
import BoardingCompatibilityTestPage from "@/components/frontend/BoardingCompatibilityTestPage";
import React from "react";

const BoardingCompatibilityTestServices = () => {
  const packageId = "0qhKkbXUptCF6xCyBRVY"; 

  return (
    <>
      <BoardingCompatibilityTestHero id={packageId} />
      <BoardingCompatibilityTestPage />
    </>
  );
};

export default BoardingCompatibilityTestServices;
