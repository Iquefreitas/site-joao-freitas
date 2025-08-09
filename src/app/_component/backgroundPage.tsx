export default function BackgroundPage() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-center bg-cover -z-50"
      style={{
        backgroundImage: "url('/backgroundImg/bg-4.jpg')",
        backgroundRepeat: "repeat-y",
      }}
    />
  );
}
