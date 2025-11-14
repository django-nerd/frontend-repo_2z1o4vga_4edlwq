export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-black border-t border-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black/60">© {new Date().getFullYear()} Novo — All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
