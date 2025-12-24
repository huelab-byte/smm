"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-blue-600 to-purple-600 p-8 md:p-16 text-center text-white">
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Transform Your Social Media?
            </h2>
            <p className="mb-8 text-lg text-blue-50 sm:text-xl">
              Join thousands of creators and businesses already using Sentosh to grow their audience.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Schedule a Demo
              </Button>
            </div>
            <p className="mt-6 text-sm text-blue-100">
              No credit card required • Setup in 5 minutes • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

