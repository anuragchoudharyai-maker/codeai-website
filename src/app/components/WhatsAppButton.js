export default function WhatsAppButton() {
  const phone = "917756064254";

  const message = encodeURIComponent(
    "Hi CodeAI Institute, I want to know more about your AI courses."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300 animate-bounce">
        <span className="text-3xl">💬</span>
      </div>
    </a>
  );
}