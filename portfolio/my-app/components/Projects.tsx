import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  language: string | null
}

export default function Projects() {
  // Edit this map to override display title/description for any repo by its GitHub name
  const overrides: Record<
    string,
    { title?: string; description?: string }
  > = {
    // Example:
    // "my-repo": { title: "My App", description: "A short, hand-crafted description" },
  }

  const [repos, setRepos] = React.useState<Repo[] | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    let mounted = true
    const controller = new AbortController()

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(
          "https://api.github.com/users/robinsonjabari/repos?sort=updated&per_page=12",
          { signal: controller.signal }
        )
        if (!res.ok) throw new Error(`GitHub API error ${res.status}`)
        const data: Repo[] = await res.json()
        if (mounted) setRepos(data)
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err)
        if (mounted) setError(msg || "Failed to fetch repos")
      } finally {
        if (mounted) setLoading(false)
      }
    }

    load()
    return () => {
      mounted = false
      controller.abort()
    }
  }, [])

  return (
    <section className='my-16'>
      {loading && <p className='text-center'>Loading projects…</p>}
      {error && (
        <p className='text-center text-destructive'>
          Error loading projects: {error}
        </p>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {(repos ?? []).map((repo) => {
          const ov = overrides[repo.name]
          const title = ov?.title ?? repo.name
          const description = ov?.description ?? repo.description
          return (
          <Card key={repo.id} className='h-full'>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {description ?? "No description provided."}
              </CardDescription>
            </CardContent>
            <CardFooter className='mt-auto justify-between items-center'>
              <div className='text-sm text-muted-foreground'></div>
              <Button variant='outline' size='sm' asChild>
                <a
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View
                </a>
              </Button>
            </CardFooter>
          </Card>
          )
        })}

        {!loading && repos && repos.length === 0 && (
          <p className='col-span-full text-center text-muted-foreground'>
            No public repositories found.
          </p>
        )}
      </div>
    </section>
  )
}
