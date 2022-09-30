//React Hooks
import React, { useEffect, useState, useRef } from "react";

//Custom Components and assets
import Lottie from "lottie-react";
import levelUp from "../../src/assets/lottie/level-up.json";
import Keypad from "../../src/components/Keypad";
import logic from "../../src/components/logic";
import Timer from "../../src/components/Timer";

//Timer hook
import { useTimer } from "react-timer-hook";

//UI components from Chakra and Amplify
import {
  Box,
  Flex,
  useColorModeValue,
  HStack,
  VStack,
  Text,
  Spacer,
  Fade,
  Progress,
  Switch,
  Collapse,
  useDisclosure,
  Button,
  Badge,
  useBoolean,
  SlideFade,
  useMediaQuery,
  Center,
} from "@chakra-ui/react";
import { ArrowForwardIcon, CheckIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { NavBar } from "../../src/ui-components";

export default function Game() {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
  const [success, setSuccess] = useBoolean();
  const [incorrect, setIncorrect] = useBoolean();
  const [levelDone, setLevelDone] = useBoolean();
  const [hint, setHint] = useBoolean();
  const inputRef = useRef(null);
  const [isLargerThan640] = useMediaQuery("(min-width: 640px)");

  //Use this to set the timer for each round
  const [totalTime, setTotalTime] = useState(13);

  //The quiz state is defines the progress of the game
  const [quiz, setQuiz] = useState({
    level: "1",

    levelCode: {
      custom: false,
      firstDigit: 1,
      secondDigit: 1,
      operator: "add",
    },

    skill: {
      add: "0.1",
      subtract: "0.1",
      multiply: "0.1",
      divide: "0.1",
    },

    skillStatus: {
      add: false,
      subtract: false,
      multiply: false,
      divide: false,
    },

    combo: {
      status: false,
      mulitplier: 0,
    },

    question: ["5", "+", "3"],
    answerCorrect: "8",
    answerDisplay: "Ready?",
    totalSteps: 100,

    history: [
      {
        stepNumber: 1,
        question: [""],
        answerCorrect: "",
        timeToComplete: 0,
        maxCombo: 0,
      },
    ],
  });

  function updateQuiz(keyPress) {
    pause();

    // A new temp quiz is created -> modification will be done to this
    const newQuiz = logic(quiz, keyPress);

    //Level has been complete
    if (newQuiz.level !== quiz.level) {
      setLevelDone.on();
      newQuiz.history[newQuiz.history.length - 1].timeToComplete = Number(totalTime - (minutes * 60 + seconds));
      newQuiz.history[newQuiz.history.length - 1].maxCombo = Number(newQuiz.combo.mulitplier);
      setQuiz(newQuiz);
      restartTimer();
    }
    // if the answer is correct
    else if (newQuiz.history.length !== quiz.history.length) {
      setSuccess.on();
      setIncorrect.off();
      setHint.off();
      newQuiz.history[newQuiz.history.length - 1].timeToComplete = Number(totalTime - (minutes * 60 + seconds));
      newQuiz.history[newQuiz.history.length - 1].maxCombo = Number(newQuiz.combo.mulitplier);
      setTimeout(() => {
        setQuiz(newQuiz);
        restartTimer();
      }, 800);
    }
    // if the answer is incorrect
    else if (quiz.answerDisplay.length >= quiz.answerCorrect.length) {
      setIncorrect.on();
      newQuiz.combo.status = false;
      newQuiz.combo.mulitplier = 0;
      setQuiz(newQuiz);
      resume();
    } else {
      setIncorrect.off();
      setHint.off();
      setQuiz(newQuiz);
      resume();
    }
  }

  const handleUpgradeLevel = () => {
    setLevelDone.off();
    updateQuiz();
  };

  useEffect(() => {
    // eslint-disable-next-line
    setSuccess.off();
  }, [quiz.history]);

  //set focus back to the main flex div so that the keyboard input is automatically detected
  useEffect(() => {
    inputRef.current.focus();
  }, [quiz]);

  const progress = (quiz.history.length / quiz.totalSteps) * 100;
  const levelCleared = levelDone;

  const answerTextColor = useColorModeValue(success ? "green.500" : "gray.700", success ? "green.400" : "gray.700");
  const questionColor = useColorModeValue("gray.700", "gray.300");
  const answerTextShadow = useColorModeValue("0px 0px 2px rgba(255,255,255,0.1)", "0px 0px 2px rgba(255,255,255,0.4)");

  const countDownTimeInSeconds = 15;
  //count down timer and current time will be sent to the Timer component
  const getTime = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + countDownTimeInSeconds);
    return time;
  }; // The Seconds you want the timer for ->  hard coded to 2 mins

  //Set the timer
  const expiryTimestamp = () => {
    const time = new Date();
    return time.setSeconds(time.getSeconds() + totalTime); // 20 sec timer
  };

  //Timer functionality
  const { seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({ expiryTimestamp, onExpire: () => timerExpired() });

  //Restart the timer
  const restartTimer = () => {
    // Restarts to totalTime
    const time = new Date();
    time.setSeconds(time.getSeconds() + totalTime);
    restart(time);
  };

  const timerExpired = () => {
    const newQuiz = { ...quiz };

    // give user a buffer of 1 sec incase the answer is put in the last second
    newQuiz.combo.status = false;
    newQuiz.combo.mulitplier = 0;
    setQuiz(newQuiz);
  };

  return (
    <>
      <NavBar width={"100vw"} />
      <Flex
        minH="calc(100vh - 3.5rem)"
        align={"center"}
        justify={"center"}
        bgGradient={useColorModeValue("linear(to-br, #faaca8,#ddd6f3)", "linear(to-br, #c33764,#1d2671)")}
        tabIndex={0}
        ref={inputRef}
        onKeyDown={(event) => updateQuiz(event.key)}
      >
        <VStack minH={"90vh"}>
          {/* Progress Bar */}
          {!levelCleared && (
            <VStack>
              <HStack w="100%">
                {/* // Combo badge ---> need to implement a combo tracker */}
                {!levelCleared && (
                  <Collapse in={quiz.combo.mulitplier >= 3} animateOpacity>
                    <Badge fontSize="0.6rem" rounded={"md"} variant="outline" p={1} colorScheme="pink">
                      {`🚀 Combo x${quiz.combo.mulitplier}`}
                    </Badge>
                  </Collapse>
                )}
              </HStack>

              <HStack rounded={"lg"} bg={"whiteAlpha.700"} boxShadow={"lg"} minW={"60"} p={3}>
                <VStack gap={2}>
                  <HStack w={"100%"} justifyContent={"space-between"}>
                    <Text fontWeight={"semibold"} fontSize={"xs"} color={"gray.700"}>
                      {`Level ${quiz.level}`}
                    </Text>
                    <Text fontWeight={"semibold"} fontSize={"xs"} color={"gray.700"}>
                      {`${quiz.history.length} of ${quiz.totalSteps}`}
                    </Text>
                  </HStack>
                  <Progress w={56} size="sm" colorScheme={success ? "green" : "pink"} value={progress} hasStripe isAnimated />
                </VStack>
                {/* The seconds - 1 gives the user a buffer of 1 second visually so that they don't lose the combo if the answer is given in the last second */}
                {quiz.answerDisplay !== "Ready?" && <Timer minutes={minutes} seconds={seconds - 1} totalTime={totalTime} />}
              </HStack>

              <HStack w={"100%"}>
                <Collapse in={incorrect} animateOpacity>
                  <Button size={"xs"} fontSize="0.6rem" rounded={"md"} onClick={() => setHint.toggle()}>
                    Hint
                  </Button>
                </Collapse>
                <SlideFade color={answerTextColor} in={hint} offsetX="-20px" offsetY="0px" animateOpacity>
                  <Text fontSize={"0.8rem"} fontWeight={"semibold"}>{`${quiz.answerCorrect}`}</Text>
                </SlideFade>
                <Spacer />
                <Collapse in={incorrect} animateOpacity>
                  <Badge fontSize="0.6rem" rounded={"md"} variant="subtle" p={1} colorScheme="red">
                    <SmallCloseIcon /> Incorrect
                  </Badge>
                </Collapse>
                <Collapse in={success} animateOpacity>
                  <Badge fontSize="0.6rem" rounded={"md"} variant="subtle" p={1} colorScheme="green">
                    <CheckIcon /> Correct
                  </Badge>
                </Collapse>
              </HStack>
            </VStack>
          )}
          {!levelCleared && <Spacer />}

          {/* Question */}
          {!levelCleared && (
            <Fade in transition={{ enter: { duration: 0.5, delay: 1 } }}>
              <Text fontSize={"5xl"} color={questionColor} textAlign="center">
                {quiz.question}
              </Text>
            </Fade>
          )}
          {/* Answer */}
          <Spacer />
          {!levelCleared && (
            <Fade in transition={{ enter: { duration: 0.5 } }}>
              <Text fontSize={"7xl"} color={answerTextColor} textShadow={answerTextShadow}>
                {!quiz.answerDisplay[0] ? "?" : quiz.answerDisplay}
              </Text>
              {quiz.answerDisplay === "Ready?" && (
                <Flex rounded={"lg"} bg={"whiteAlpha.400"} p={1} mx={"auto"} justifyContent={"center"} width={"8em"}>
                  <Text fontSize={"sm"}>{"Press 8 to begin"}</Text>
                </Flex>
              )}
            </Fade>
          )}

          {/* Can be turned into a modal if needed */}
          {levelCleared && (
            <Fade in={levelCleared} transition={{ enter: { duration: 1 } }}>
              <VStack>
                <Text align="center" fontWeight={"semibold"} fontSize={"3xl"}>{`Good Job, Captain! 👏`}</Text>
                <Text align="center" fontSize={"xl"}>{`Level Completed`}</Text>
                <Lottie animationData={levelUp} loop={true} style={{ width: 300 }} />

                <Text fontWeight={"semibold"} fontSize={"sm"} align="center">{`Your Max Combo is`}</Text>
                <Badge fontSize="1rem" rounded={"md"} variant="outline" p={2} colorScheme="pink">
                  {`🚀 Combo x${quiz.history.map((item) => item.maxCombo).reduce((a, b) => Math.max(a, b), -Infinity)}`}
                </Badge>
              </VStack>
            </Fade>
          )}

          <Spacer />
          {/* Keypad */}
          <Collapse in={isOpen && !levelCleared} animateOpacity>
            <Keypad upadateQuiz={updateQuiz} />
          </Collapse>
          {/* Hide the toggle button if the display is on mobile */}
          {isLargerThan640 && (
            <HStack>
              <Text fontWeight={"semibold"} fontSize={"xs"}>
                Keypad
              </Text>
              <Switch onChange={onToggle} colorScheme={"purple"} isDisabled={levelCleared} />
            </HStack>
          )}
          {/* Action */}
          {levelCleared && (
            <Fade in={levelCleared} transition={{ enter: { delay: 1, duration: 0.5 } }}>
              <HStack rounded={"lg"} bg={"whiteAlpha.600"} boxShadow={"lg"} minW={"60"} p={3} gap={2}>
                <Text color={"blackAlpha.800"} fontWeight={"semibold"}>
                  {`Next Round`}
                </Text>
                <Spacer />
                <Button rightIcon={<ArrowForwardIcon />} colorScheme="purple" variant="solid" onClick={handleUpgradeLevel}>
                  Continue
                </Button>
              </HStack>
            </Fade>
          )}
          {levelCleared && <Spacer />}
        </VStack>
      </Flex>
    </>
  );
}
