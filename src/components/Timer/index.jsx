import React from "react";
import { VStack, Text, CircularProgress, CircularProgressLabel, Collapse } from "@chakra-ui/react";

export default function MyTimer({ minutes, seconds, totalTime }) {
  const currentTime = minutes * 60 + seconds;
  const timeRemainingSeconds = totalTime - currentTime;
  const timePercent = Math.round((timeRemainingSeconds / totalTime) * 100);

  return (
    <>
      <VStack>
        <Collapse in={timePercent < 100} animateOpacity>
          <CircularProgress value={100 - timePercent} color={100 - timePercent > 30 ? "yellow.300" : "red.300"} capIsRound trackColor="gray.100">
            <CircularProgressLabel>{100 - timePercent > 100 ? "Done" : `${minutes}:${seconds}`}</CircularProgressLabel>
          </CircularProgress>
        </Collapse>
      </VStack>
    </>
  );
}
