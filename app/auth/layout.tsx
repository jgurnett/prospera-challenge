export default function AuthLayout({
  children
}: {
        children: React.ReactNode
}) {
  return (
        <section className="h-screen flex flex-column items-center justify-center">
        <nav></nav>
        <div className="bg-white p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
              <div className="flex justify-between items-center mb-4">
                  {children}
            </div>
        </div>
    </section>
  )
}