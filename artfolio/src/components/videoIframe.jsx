import React, { useEffect, useRef } from "react";

const VideoIframe = ({ src }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleTimeUpdate = () => {
      const iframe = iframeRef.current;
      const video = iframe.contentWindow.document.querySelector("video");

      if (video) {
        const currentTime = video.currentTime;
        const duration = video.duration;

        if (currentTime >= duration - 0.001) {
          video.pause();
        }
      }
    };

    const handleLoad = () => {
      const iframe = iframeRef.current;
      const video = iframe.contentWindow.document.querySelector("video");

      if (video) {
        video.addEventListener("timeupdate", handleTimeUpdate);
      }
    };

    const iframe = iframeRef.current;
    iframe.addEventListener("load", handleLoad);

    return () => {
      if (iframe) {
        iframe.removeEventListener("load", handleLoad);
        const video = iframe.contentWindow.document.querySelector("video");
        if (video) {
          video.removeEventListener("timeupdate", handleTimeUpdate);
        }
      }
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      width="640"
      height="360"
      title="Video Iframe"
      style={{ border: "none" }}
    ></iframe>
  );
};

export default VideoIframe;
