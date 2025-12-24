"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Play, Sparkles, Calendar, TrendingUp, Users, MessageSquare, Instagram, Twitter, Facebook, Linkedin, BarChart3, Clock, CheckCircle2 } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent dark:from-blue-950/10" />
      <div className="container relative px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="mr-2 h-3 w-3" />
            AI-Powered Social Media Management
          </Badge>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Manage All Your Social Media
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}in One Place
            </span>
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl md:mb-12 md:text-2xl">
            Schedule posts, analyze performance, and grow your audience across all platforms.
            Save hours every week with our powerful automation tools.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
        
        <div className="mt-16 md:mt-24">
          <div className="relative mx-auto max-w-5xl rounded-2xl border bg-card p-2 shadow-2xl">
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-background p-4">
              {/* Dashboard Header */}
              <div className="mb-4 flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600" />
                  <span className="font-semibold">Sentosh Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="h-6 w-6 rounded-full border-2 border-background bg-blue-500" />
                    <div className="h-6 w-6 rounded-full border-2 border-background bg-purple-500" />
                    <div className="h-6 w-6 rounded-full border-2 border-background bg-pink-500" />
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="mb-4 grid grid-cols-4 gap-2">
                <div className="rounded-lg border bg-muted/50 p-2">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>Followers</span>
                  </div>
                  <div className="mt-1 text-sm font-semibold">12.5K</div>
                  <div className="text-[10px] text-green-600">+12%</div>
                </div>
                <div className="rounded-lg border bg-muted/50 p-2">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MessageSquare className="h-3 w-3" />
                    <span>Engagement</span>
                  </div>
                  <div className="mt-1 text-sm font-semibold">8.2%</div>
                  <div className="text-[10px] text-green-600">+5%</div>
                </div>
                <div className="rounded-lg border bg-muted/50 p-2">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>Scheduled</span>
                  </div>
                  <div className="mt-1 text-sm font-semibold">24</div>
                  <div className="text-[10px] text-muted-foreground">This week</div>
                </div>
                <div className="rounded-lg border bg-muted/50 p-2">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3" />
                    <span>Growth</span>
                  </div>
                  <div className="mt-1 text-sm font-semibold">+18%</div>
                  <div className="text-[10px] text-muted-foreground">vs last month</div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="grid grid-cols-3 gap-3">
                {/* Left: Calendar View */}
                <div className="col-span-2 rounded-lg border bg-muted/30 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-semibold">Content Calendar</span>
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                      <div key={i} className="text-center text-[10px] text-muted-foreground">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded text-[10px] ${
                          i === 5 || i === 8 || i === 12
                            ? "bg-blue-500/20 border border-blue-500/30"
                            : "bg-muted/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right: Recent Posts */}
                <div className="rounded-lg border bg-muted/30 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-semibold">Recent Posts</span>
                    <Clock className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    {[
                      { platform: "Instagram", time: "2h ago", status: "published" },
                      { platform: "Twitter", time: "5h ago", status: "scheduled" },
                      { platform: "LinkedIn", time: "1d ago", status: "published" },
                    ].map((post, i) => (
                      <div key={i} className="flex items-center gap-2 rounded border bg-background p-1.5">
                        <div className="flex h-5 w-5 items-center justify-center rounded bg-blue-500/10">
                          {post.platform === "Instagram" && <Instagram className="h-3 w-3 text-pink-600" />}
                          {post.platform === "Twitter" && <Twitter className="h-3 w-3 text-blue-400" />}
                          {post.platform === "LinkedIn" && <Linkedin className="h-3 w-3 text-blue-600" />}
                        </div>
                        <div className="flex-1">
                          <div className="text-[10px] font-medium">{post.platform}</div>
                          <div className="text-[9px] text-muted-foreground">{post.time}</div>
                        </div>
                        {post.status === "published" && (
                          <CheckCircle2 className="h-3 w-3 text-green-600" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom: Platform Stats */}
              <div className="mt-3 flex items-center gap-2 rounded-lg border bg-muted/30 p-2">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <BarChart3 className="h-3 w-3" />
                  <span>Platform Performance</span>
                </div>
                <div className="ml-auto flex gap-3">
                  {[
                    { icon: Instagram, color: "bg-pink-500", value: "45%" },
                    { icon: Twitter, color: "bg-blue-400", value: "30%" },
                    { icon: Facebook, color: "bg-blue-600", value: "15%" },
                    { icon: Linkedin, color: "bg-blue-700", value: "10%" },
                  ].map((platform, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <div className={`h-2 w-2 rounded-full ${platform.color}`} />
                      <span className="text-[10px] text-muted-foreground">{platform.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

