import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Code2, Layout, Palette } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Welcome to Your Modern App
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A beautiful and minimal application built with React, Tailwind CSS, and shadcn/ui components.
          </p>
          <Button className="mt-8" size="lg">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="features" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
          </TabsList>
          <TabsContent value="features">
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <FeatureCard
                icon={<Layout className="h-8 w-8" />}
                title="Modern Layout"
                description="Clean and responsive design that works on all devices."
              />
              <FeatureCard
                icon={<Code2 className="h-8 w-8" />}
                title="Best Practices"
                description="Built with modern React patterns and practices."
              />
            </div>
          </TabsContent>
          <TabsContent value="technology">
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <FeatureCard
                icon={<Code2 className="h-8 w-8" />}
                title="React + TypeScript"
                description="Type-safe development with React and TypeScript."
              />
              <FeatureCard
                icon={<Palette className="h-8 w-8" />}
                title="Tailwind CSS"
                description="Utility-first CSS framework for rapid UI development."
              />
            </div>
          </TabsContent>
          <TabsContent value="design">
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <FeatureCard
                icon={<Palette className="h-8 w-8" />}
                title="Beautiful UI"
                description="Carefully crafted interface with attention to detail."
              />
              <FeatureCard
                icon={<Layout className="h-8 w-8" />}
                title="Component Library"
                description="Built with shadcn/ui for consistent design patterns."
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            {icon}
          </div>
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default App;