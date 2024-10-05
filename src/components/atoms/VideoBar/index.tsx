import dayjs from "dayjs";
import durationPlugin from "dayjs/plugin/duration";
import Maximize from "@/src/assets/icons/Maximize";
import Pause from "@/src/assets/icons/Pause";
import ScreenMiroring from "@/src/assets/icons/ScreenMiroring";
import Volume from "@/src/assets/icons/Volume";
import { Progress } from "./custom";
import Play from "@/src/assets/icons/Play";
import React, { useCallback } from "react";
import YouTubePlayer from "react-player/youtube";

interface VideobarProps {
  play: boolean;
  duration: number;
  elapsed: number;
  playerRef: React.RefObject<YouTubePlayer>;
  setSeeking: React.Dispatch<React.SetStateAction<boolean>>;
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
  setElapsed: React.Dispatch<React.SetStateAction<number>>;
  handlePip: () => void;
  handleScreenFull: () => void;
}

const VideoBar = (props: VideobarProps) => {
  const {
    play,
    duration,
    elapsed,
    playerRef,
    setSeeking,
    setPlay,
    setElapsed,
    handlePip,
    handleScreenFull,
  } = props;

  dayjs.extend(durationPlugin);

  const handleSeekMouseUp = useCallback(
    (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      setSeeking(false);
      const target = e.target as EventTarget & HTMLInputElement;
      playerRef.current?.seekTo(parseFloat(target.value), "fraction");
    },
    [],
  );

  return (
    <div className="w-full bg-white rounded-default py-[12px] px-6 flex items-center justify-between">
      <div className="flex items-center gap-6 w-4/5">
        <button onClick={() => setPlay(!play)}>
          {play ? <Play /> : <Pause />}
        </button>
        <Progress
          step="any"
          min={0}
          max={0.999999}
          value={elapsed}
          onMouseDown={() => setSeeking(true)}
          onChange={(e) => {
            setElapsed(e.target.value ? parseFloat(e.target.value) : 0);
          }}
          onMouseUp={handleSeekMouseUp}
        />
        <p className="text-secondary-500 font-medium text-sm">
          {dayjs
            .duration(elapsed * duration + 1, "second")
            .format(elapsed * duration >= 3600 ? "H:m:ss" : "m:ss")}
          /
          {dayjs
            .duration(duration, "second")
            .format(duration >= 3600 ? "H:m:ss" : "m:ss")}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={() => handleScreenFull()}>
          <Maximize />
        </button>
        <button onClick={() => handlePip()}>
          <ScreenMiroring />
        </button>
        <button>
          <Volume />
        </button>
      </div>
    </div>
  );
};

export default VideoBar;
