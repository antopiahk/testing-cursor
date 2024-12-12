import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./components/ui/card";
import { 
  Moon, 
  Sun, 
  Activity, 
  Share2, 
  Heart, 
  BookMarked, 
  ChevronRight, 
  Settings2, 
  Bell,
  BarChart3,
  Zap,
  Sparkles,
  Palette,
  Gauge
} from "lucide-react";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Switch } from "./components/ui/switch";
import { Badge } from "./components/ui/badge";
import { Slider } from "./components/ui/slider";
import { useTheme } from "./components/theme-provider";
import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const chartData = [
  { month: "Jan", value: 1200 },
  { month: "Feb", value: 900 },
  { month: "Mar", value: 1600 },
  { month: "Apr", value: 1400 },
  { month: "May", value: 2100 },
  { month: "Jun", value: 1800 },
];

function App() {
  const { theme, setTheme } = useTheme();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(124);
  const [isLiked, setIsLiked] = useState(false);
  const [volume, setVolume] = useState(50);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold tracking-tight">
              Component Library
            </h1>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {/* Analytics Card - Spans 2 columns */}
          <Card className="md:col-span-2 lg:col-span-2 hover:shadow-primary/5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Analytics Overview</CardTitle>
                </div>
                <Badge variant="secondary" className="gap-1">
                  <Activity className="h-3 w-3" />
                  Live Data
                </Badge>
              </div>
              <CardDescription>Your performance this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--background))',
                        border: '2px solid hsl(var(--border))',
                        borderRadius: '0.75rem'
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="gap-1 text-primary border-primary">
                  <Zap className="h-3 w-3" />
                  +12.3%
                </Badge>
                <span className="text-sm text-muted-foreground">from last month</span>
              </div>
              <Button variant="ghost" size="sm" className="gap-1">
                View Details <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Settings Card */}
          <Card className="hover:shadow-primary/5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-secondary/10 rounded-xl">
                    <Settings2 className="h-5 w-5 text-secondary" />
                  </div>
                  <CardTitle>Settings</CardTitle>
                </div>
              </div>
              <CardDescription>Customize your preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Theme</Label>
                  <p className="text-sm text-muted-foreground">
                    <Palette className="h-3 w-3 inline mr-1" />
                    Appearance
                  </p>
                </div>
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={(checked) =>
                    setTheme(checked ? "dark" : "light")
                  }
                />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  Volume
                  <Gauge className="h-3 w-3" />
                </Label>
                <Slider
                  value={[volume]}
                  onValueChange={(value) => setVolume(value[0])}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground text-right">{volume}%</p>
              </div>
            </CardContent>
          </Card>

          {/* Social Engagement Card */}
          <Card className="hover:shadow-primary/5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-accent/10 rounded-xl">
                    <Share2 className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle>Social Engagement</CardTitle>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsBookmarked(!isBookmarked)}
                  >
                    <BookMarked
                      className={`h-4 w-4 ${isBookmarked ? "fill-primary text-primary" : ""}`}
                    />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center">
                <span className="text-white text-lg font-medium">Featured Content</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsLiked(!isLiked);
                  setLikes(isLiked ? likes - 1 : likes + 1);
                }}
                className="flex items-center gap-2"
              >
                <Heart
                  className={`h-4 w-4 transition-colors ${isLiked ? "fill-red-500 text-red-500" : ""}`}
                />
                <span>{likes}</span>
              </Button>
              <div className="flex gap-2">
                <Badge variant="secondary">Trending</Badge>
                <Badge variant="outline">New</Badge>
              </div>
            </CardFooter>
          </Card>

          {/* Form Controls Card */}
          <Card className="md:col-span-2 lg:col-span-2 hover:shadow-primary/5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-secondary/10 rounded-xl">
                    <Bell className="h-5 w-5 text-secondary" />
                  </div>
                  <CardTitle>Form Controls</CardTitle>
                </div>
              </div>
              <CardDescription>Interactive form elements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Enter your email" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="notifications" />
                    <Label htmlFor="notifications">Enable notifications</Label>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input type="text" id="name" placeholder="John Doe" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="marketing" />
                    <Label htmlFor="marketing">Receive updates</Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto gap-2">
                Save Changes
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Button Showcase Card */}
          <Card className="hover:shadow-primary/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Button Styles</CardTitle>
              </div>
              <CardDescription>Various button variations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>

          {/* Badge Showcase Card */}
          <Card className="hover:shadow-primary/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-accent/10 rounded-xl">
                  <Sparkles className="h-5 w-5 text-accent" />
                </div>
                <CardTitle>Badges</CardTitle>
              </div>
              <CardDescription>Status indicators and labels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge className="bg-primary hover:bg-primary/90">Custom</Badge>
                <Badge variant="outline" className="border-secondary text-secondary">
                  Success
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;