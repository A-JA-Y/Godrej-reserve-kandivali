"use client";

import "lite-youtube-embed";

export default function LiteYT({ videoId }) {
  return (
    <div className="w-full h-full">
      <lite-youtube
        videoid={videoId}
        class="w-full h-full block"
        style={{ width: "100%", height: "100%" }}
      ></lite-youtube>
    </div>
  );
}
