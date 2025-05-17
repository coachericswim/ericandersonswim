export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <h4 className="text-lg font-bold mb-3">Eric Anderson Swim</h4>
          <p className="text-gray-400">Elite swim calculators & training tools for swimmers and coaches worldwide.</p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-3">Explore</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/calculators/100m" className="hover:text-white">Calculators</a></li>
            <li><a href="/blog" className="hover:text-white">Workouts</a></li>
            <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="/register" className="hover:text-white">Sign Up</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-3">Legal</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-3">Connect</h4>
          <div className="flex gap-4 text-gray-400">
            <a href="https://instagram.com/YOURHANDLE" target="_blank" aria-label="Instagram" className="hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 8.25a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5zm6.5-.5a1 1 0 110 2 1 1 0 010-2zm-6.5 2.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM7.75 3.5h8.5A4.25 4.25 0 0120.5 7.75v8.5A4.25 4.25 0 0116.25 20.5h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5z"/></svg>
            </a>
            <a href="https://linkedin.com/in/YOURHANDLE" target="_blank" aria-label="LinkedIn" className="hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.5 7h4V24h-4V7zm7.5 0h3.8v2.4h.1c.5-.95 1.9-2 3.9-2 4.2 0 5 2.8 5 6.5V24h-4v-8.5c0-2-.04-4.5-3-4.5s-3.5 2.1-3.5 4.4V24h-4V7z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-10">
        &copy; {new Date().getFullYear()} Eric Anderson Swim. All rights reserved.
      </div>
    </footer>
  )
}