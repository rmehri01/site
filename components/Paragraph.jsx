export default function Paragraph({ children }) {
  return (
    <p className="text-xl md:text-2xl 2xl:text-4xl py-1 md:py-2 xl:py-3">
      {children}
    </p>
  );
}
