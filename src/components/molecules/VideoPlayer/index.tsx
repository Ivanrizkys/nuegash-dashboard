import screenfull from "screenfull";
import { findDOMNode } from "react-dom";
import VideoBar from "@/src/components/atoms/VideoBar";
import ReactPlayer from "react-player/youtube";
import { OnProgressProps } from "react-player/base";
import { useState, useCallback, useRef } from "react";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  const [pip, setPip] = useState<boolean>(false);
  const [play, setPlay] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [elapsed, setElapsed] = useState<number>(0);
  const [seeking, setSeeking] = useState<boolean>(false);

  const playerRef = useRef<ReactPlayer>(null);

  const handleProgress = useCallback((e: OnProgressProps) => {
    if (!seeking) {
      setElapsed(e.played);
    }
  }, []);

  const handleScreenFull = useCallback(() => {
    screenfull.request(findDOMNode(playerRef.current) as Element);
  }, []);

  return (
    <div className="w-full h-[500px]  p-6">
      <div className="h-full overflow-hidden rounded-default relative">
        <ReactPlayer
          ref={playerRef}
          style={{ borderRadius: "10px" }}
          url={src}
          width="100%"
          height="100%"
          pip={true}
          playing={play}
          onDuration={(e) => setDuration(e)}
          onProgress={handleProgress}
        />
        <div className="w-full absolute bottom-6 flex justify-center">
          <div className="w-4/5">
            <VideoBar
              play={play}
              duration={duration}
              elapsed={elapsed}
              setPlay={setPlay}
              setElapsed={setElapsed}
              setSeeking={setSeeking}
              playerRef={playerRef}
              handlePip={() => setPip(!pip)}
              handleScreenFull={handleScreenFull}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
