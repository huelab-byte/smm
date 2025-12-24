"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    description: "Perfect for individuals and small businesses",
    features: [
      "5 Social Media Accounts",
      "100 Scheduled Posts",
      "Basic Analytics",
      "AI Content Assistant",
      "Email Support",
      "Mobile App Access"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    description: "Ideal for growing businesses and agencies",
    features: [
      "15 Social Media Accounts",
      "Unlimited Scheduled Posts",
      "Advanced Analytics",
      "AI Content Assistant",
      "Team Collaboration (5 members)",
      "Priority Support",
      "Custom Branding",
      "API Access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited Social Media Accounts",
      "Unlimited Scheduled Posts",
      "Enterprise Analytics",
      "Advanced AI Features",
      "Unlimited Team Members",
      "Dedicated Account Manager",
      "Custom Integrations",
      "SLA Guarantee",
      "White-label Options"
    ],
    popular: false
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 lg:gap-6">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative border-2 transition-all ${
                plan.popular 
                  ? "border-primary shadow-xl scale-105" 
                  : "hover:border-primary/50 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary">Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <p className="mt-12 text-center text-sm text-muted-foreground">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  )
}

