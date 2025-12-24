"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    content: "Sentosh has completely transformed how we manage our social media. We've saved 15+ hours per week and our engagement has increased by 40%.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Content Creator",
    company: "Independent",
    content: "The AI content suggestions are incredible. It's like having a creative team at my fingertips. Best investment I've made for my brand.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "EcoLife",
    content: "As a small business owner, Sentosh gives me enterprise-level tools at an affordable price. The analytics alone are worth it.",
    rating: 5,
    avatar: "ER"
  },
  {
    name: "David Kim",
    role: "Social Media Manager",
    company: "Agency Pro",
    content: "Managing multiple client accounts used to be a nightmare. Now I can handle 20+ accounts efficiently. Game changer!",
    rating: 5,
    avatar: "DK"
  },
  {
    name: "Lisa Thompson",
    role: "E-commerce Owner",
    company: "StyleShop",
    content: "The scheduling feature is perfect for our product launches. We can plan months in advance and never miss a post.",
    rating: 5,
    avatar: "LT"
  },
  {
    name: "James Wilson",
    role: "CEO",
    company: "Growth Labs",
    content: "The team collaboration features are excellent. Our entire marketing team can work together seamlessly on campaigns.",
    rating: 5,
    avatar: "JW"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-muted/50">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Loved by Thousands
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of creators, marketers, and businesses growing with Sentosh
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

