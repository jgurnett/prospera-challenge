import Navigation from "./formNavigation"

export default function FormLayout({
  children
}: {
        children: React.ReactNode
}) {
  return (
        <section className="flex flex-col items-center">
          <Navigation />
          {children}
        
    </section>
  )
}