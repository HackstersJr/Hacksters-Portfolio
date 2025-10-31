export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-8 bg-black/40 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center">
          <p className="text-sm text-gray-500 font-chillax">
            © {currentYear} Hacksters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
