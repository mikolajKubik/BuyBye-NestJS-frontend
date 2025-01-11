import Container from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Container>
      <div className="h-[80vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold mb-4">Not Found</h2>
        <p className="text-xl mb-8">Could not find requested resource</p>
        <Button variant="destructive" size="lg" asChild>
          <a href="/">Return Home</a>
        </Button>
      </div>
    </Container>
  )
}