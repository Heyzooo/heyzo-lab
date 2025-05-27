export default function ProjectsPage() {
  // Redirect to home page since this is now a single-page portfolio
  if (typeof window !== 'undefined') {
    window.location.href = '/'
  }
  
  return null
}