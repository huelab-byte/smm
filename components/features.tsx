"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Calendar, 
  BarChart3, 
  Zap, 
  Users, 
  MessageSquare, 
  TrendingUp,
  Sparkles,
  Clock,
  Share2
} from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Schedule posts across all platforms with our intuitive calendar. Set it and forget it."
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track performance with detailed analytics and insights to optimize your strategy."
  },
  {
    icon: Zap,
    title: "AI-Powered Content",
    description: "Generate engaging captions and hashtags with our advanced AI assistant."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with your team. Assign roles and manage permissions."
  },
  {
    icon: MessageSquare,
    title: "Unified Inbox",
    description: "Manage all comments and messages from one central inbox across platforms."
  },
  {
    icon: TrendingUp,
    title: "Best Time to Post",
    description: "AI analyzes your audience to suggest optimal posting times for maximum engagement."
  },
  {
    icon: Sparkles,
    title: "Content Library",
    description: "Access thousands of pre-made templates and content ideas to keep your feed fresh."
  },
  {
    icon: Clock,
    title: "Auto-Queue",
    description: "Automatically fill your posting schedule with evergreen content that performs well."
  },
  {
    icon: Share2,
    title: "Cross-Platform",
    description: "Post to Instagram, Twitter, LinkedIn, Facebook, TikTok, and more from one place."
  }
]

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to save you time and grow your social media presence
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

