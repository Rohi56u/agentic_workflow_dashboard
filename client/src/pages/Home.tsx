import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Brain, Workflow, BarChart3, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Ethereal Data Garden Design Philosophy
 * - Soft sage green and lavender palette
 * - Organic flowing layouts with botanical influences
 * - Gentle animations and glass-morphism effects
 * - Sophisticated yet approachable aesthetic
 */

interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: "pending" | "active" | "complete";
}

const displayFontStyle = { fontFamily: "'Playfair Display', serif" };

export default function Home() {
  const [workflowSteps, setWorkflowSteps] = useState<WorkflowStep[]>([
    {
      id: 1,
      title: "Search Web",
      description: "Agent searches for latest iPhone and Samsung Galaxy S24 specifications",
      icon: <Zap className="w-6 h-6" />,
      status: "complete",
    },
    {
      id: 2,
      title: "Analyze Data",
      description: "AI processes and compares features and battery life metrics",
      icon: <Brain className="w-6 h-6" />,
      status: "complete",
    },
    {
      id: 3,
      title: "Generate Insights",
      description: "Agent synthesizes findings into actionable conclusions",
      icon: <BarChart3 className="w-6 h-6" />,
      status: "complete",
    },
  ]);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-foreground via-background to-primary-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Hero Image with Parallax */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url('/images/hero-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-foreground/40 via-transparent to-background/80 -z-10" />

        {/* Content */}
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="space-y-6 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass soft-shadow">
              <Workflow className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">AI-Powered Workflow Engine</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight" style={displayFontStyle}>
              Agentic <span className="text-accent">Workflows</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-foreground/80 font-light max-w-2xl mx-auto">
              Experience the power of intelligent AI agents orchestrating complex tasks through multi-step reasoning, tool use, and persistent memory.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Results <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Workflow Architecture Section */}
      <section className="py-20 px-4 relative">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4" style={displayFontStyle}>
              How Agentic Workflows Work
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our intelligent agent demonstrates the core principles of advanced AI orchestration
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {workflowSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Connection Line */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[40%] h-1 bg-gradient-to-r from-accent/50 to-transparent" />
                )}

                {/* Card */}
                <div
                  className={`glass soft-shadow p-8 rounded-2xl h-full transition-all duration-500 hover:shadow-2xl ${
                    step.status === "complete" ? "border-accent/30" : "border-border/50"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
                      step.status === "complete"
                        ? "bg-accent/20 text-accent"
                        : "bg-muted text-foreground/50"
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3" style={displayFontStyle}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 mb-4">{step.description}</p>

                  {/* Status Badge */}
                  {step.status === "complete" && (
                    <div className="flex items-center gap-2 text-accent">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-sm font-semibold">Completed</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="divider-organic my-12" />
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 relative">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4" style={displayFontStyle}>
              Workflow Results
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive analysis of smartphone specifications and battery life comparison
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* iPhone Card */}
            <Card className="glass soft-shadow p-8 rounded-2xl border-accent/20 hover:border-accent/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground" style={displayFontStyle}>
                    iPhone 16 Pro Max
                  </h3>
                  <p className="text-accent text-sm font-semibold mt-1">Latest Generation</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-foreground/70 text-sm font-semibold mb-2">Key Features</p>
                  <ul className="space-y-2">
                    {["A19 Bionic Chip", "ProMotion XDR Display", "Titanium Frame"].map(
                      (feature) => (
                        <li key={feature} className="flex items-center gap-2 text-foreground">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          {feature}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-foreground/70 text-sm font-semibold mb-2">Battery Life</p>
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-bold text-accent" style={displayFontStyle}>28</span>
                    <span className="text-foreground/70 mb-1">hours</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Samsung Card */}
            <Card className="glass soft-shadow p-8 rounded-2xl border-secondary/20 hover:border-secondary/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground" style={displayFontStyle}>
                    Samsung Galaxy S24 Ultra
                  </h3>
                  <p className="text-secondary text-sm font-semibold mt-1">Flagship Device</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-foreground/70 text-sm font-semibold mb-2">Key Features</p>
                  <ul className="space-y-2">
                    {["Snapdragon 8 Gen 3", "Dynamic AMOLED 2X Display", "S Pen"].map(
                      (feature) => (
                        <li key={feature} className="flex items-center gap-2 text-foreground">
                          <div className="w-2 h-2 rounded-full bg-secondary" />
                          {feature}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-foreground/70 text-sm font-semibold mb-2">Battery Life</p>
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-bold text-secondary" style={displayFontStyle}>26</span>
                    <span className="text-foreground/70 mb-1">hours</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Comparison Insight */}
          <Card className="glass soft-shadow p-8 rounded-2xl border-accent/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2" style={displayFontStyle}>
                  Key Finding
                </h4>
                <p className="text-foreground/80">
                  The iPhone 16 Pro Max demonstrates superior battery longevity with a 2-hour
                  advantage over the Samsung Galaxy S24 Ultra. This multi-step analysis showcases
                  how agentic workflows orchestrate search, analysis, and synthesis to deliver
                  comprehensive insights.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4" style={displayFontStyle}>
              Agentic Workflow Capabilities
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Core architectural patterns that power intelligent agent systems
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Meta-Tooling",
                description:
                  "Agents dynamically select and chain tools, using outputs from one tool as inputs for another.",
                icon: "🔧",
              },
              {
                title: "Persistent Memory",
                description:
                  "Conversation history maintained across steps enables context-aware reasoning and decision-making.",
                icon: "💾",
              },
              {
                title: "Workflow Orchestration",
                description:
                  "Multi-step reasoning with automatic control flow management ensures efficient task completion.",
                icon: "🎯",
              },
              {
                title: "Advanced Reasoning",
                description:
                  "Agents leverage language models for complex problem decomposition and solution synthesis.",
                icon: "🧠",
              },
              {
                title: "Runtime Observability",
                description:
                  "Full visibility into agent decisions, tool calls, and reasoning steps for transparency and debugging.",
                icon: "👁️",
              },
              {
                title: "Multi-Agent Coordination",
                description:
                  "Specialized agents collaborate and communicate to solve complex, multi-domain problems.",
                icon: "🤝",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="glass soft-shadow p-6 rounded-2xl border-border/50 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2" style={displayFontStyle}>
                  {feature.title}
                </h3>
                <p className="text-foreground/70 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="glass soft-shadow p-12 rounded-3xl border-accent/20">
            <h2 className="text-4xl font-bold text-foreground mb-4" style={displayFontStyle}>
              Ready to Build Agentic Workflows?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Join the Workshop 5: Building agentic workflows in Python on December 23rd, 2025 to
              master these advanced techniques.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 rounded-full text-lg font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-4">
        <div className="container max-w-6xl mx-auto text-center text-foreground/60">
          <p className="mb-2">
            Agentic Workflow Dashboard • Powered by AI for Bharat Workshop 5
          </p>
          <p className="text-sm">
            Demonstrating advanced patterns in intelligent agent orchestration and multi-step
            reasoning
          </p>
        </div>
      </footer>
    </div>
  );
}
