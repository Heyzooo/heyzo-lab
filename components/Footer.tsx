export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-sm text-gray-600">
            © 2024 Happy Lab. Made with 💖 to spread happiness
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}