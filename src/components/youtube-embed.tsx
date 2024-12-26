// components/YouTubeEmbed.tsx

interface YouTubeEmbedProps {
  videoId: string;
}

const YouTubeEmbed = ({ videoId }: YouTubeEmbedProps) => {
  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${videoId}?controls=0&amp;rel=0&amp;playsinline=1&amp;modestbranding=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;showinfo=0&amp;modestbranding=1`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
