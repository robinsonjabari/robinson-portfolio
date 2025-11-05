import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  description: string
  url: string
  status?: "complete" | "ongoing"
  liveDemo?: string
}

const FEATURED: Project = {
  title: "UNCP Navigate",
  description:
    "A web application to help University of North Carolina Pembroke students and faculty navigate campus.",
  url: "https://github.com/robinsonjabari/UNCP-Navigate",
  status: "ongoing",
}

const PROJECTS: Project[] = [
  {
    title: "Your Project 2",
    description: "Short description about what this project does.",
    url: "https://github.com/robinsonjabari/your-repo-name-2",
    status: "complete",
  },
  {
    title: "Your Project 3",
    description: "Short description about what this project does.",
    url: "https://github.com/robinsonjabari/your-repo-name-3",
  },
]

export default function Projects() {
  return (
    <section className='my-16'>
      {/* Featured project */}
      <div className='mb-10'>
        <Card className='h-full flex flex-col'>
          <CardHeader>
            <div className='flex items-center gap-2'>
              <CardTitle>{FEATURED.title}</CardTitle>
              <span className='text-xs px-2 py-1 rounded-full font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'>
                Featured
              </span>
              {FEATURED.status && (
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    FEATURED.status === "complete"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  }`}
                >
                  {FEATURED.status === "complete" ? "✓ Complete" : "⚡ Ongoing"}
                </span>
              )}
            </div>
          </CardHeader>
          <CardContent className='flex-1 space-y-4'>
            <div>
              <p className='text-sm font-semibold mb-2'>Description:</p>
              <CardDescription>{FEATURED.description}</CardDescription>
            </div>
          </CardContent>
          <CardFooter className='mt-auto justify-end items-center gap-2'>
            {FEATURED.liveDemo && (
              <Button variant='ghost' size='sm' asChild>
                <a href={FEATURED.liveDemo} target='_blank' rel='noopener noreferrer'>
                  Live
                </a>
              </Button>
            )}
            <Button variant='outline' size='sm' asChild>
              <a href={FEATURED.url} target='_blank' rel='noopener noreferrer'>
                View
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Other projects */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {PROJECTS.map((p) => (
          <Card key={p.title} className='h-full flex flex-col'>
            <CardHeader>
              <div className='flex items-center gap-2'>
                <CardTitle>{p.title}</CardTitle>
                {p.status && (
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      p.status === "complete"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                    }`}
                  >
                    {p.status === "complete" ? "✓ Complete" : "⚡ Ongoing"}
                  </span>
                )}
              </div>
            </CardHeader>
            <CardContent className='flex-1 space-y-4'>
              <div>
                <p className='text-sm font-semibold mb-2'>Description:</p>
                <CardDescription>{p.description}</CardDescription>
              </div>
            </CardContent>
            <CardFooter className='mt-auto justify-end items-center gap-2'>
              {p.liveDemo && (
                <Button variant='ghost' size='sm' asChild>
                  <a href={p.liveDemo} target='_blank' rel='noopener noreferrer'>
                    Live
                  </a>
                </Button>
              )}
              <Button variant='outline' size='sm' asChild>
                <a href={p.url} target='_blank' rel='noopener noreferrer'>
                  View
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
