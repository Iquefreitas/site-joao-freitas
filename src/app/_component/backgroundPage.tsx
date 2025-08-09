export default function BackgroundPage() {
  return (
    <>
      {/* Fundo para mobile */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat md:hidden -z-50"
        style={{ backgroundImage: "url('/backgroundImg/bg-4-small.jpg')" }}
      />

      {/* Fundo para desktop */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat hidden md:block -z-50"
        style={{ backgroundImage: "url('/backgroundImg/bg-4.jpg')" }}
      />
    </>
  );
}
