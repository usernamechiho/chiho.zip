export default function Home() {
  return (
    <video
      width={"100%"}
      height={300}
      autoPlay
      muted
      loop
      playsInline
      style={{ objectFit: "cover" }}
    >
      <source src="/assets/videos/touch.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
