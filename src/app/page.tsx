export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 typing-text">
        🎬 Welcome to MovieMatch!
      </h1>
      <p className="text-xl mb-6 opacity-0 animate-fade-in animation-delay-1500">
        Your personalized movie recommendation platform.
      </p>
    </div>
  );
}