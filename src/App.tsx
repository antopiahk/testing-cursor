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
  Gauge,
  PieChartIcon,
  TableIcon
} from "lucide-react";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Switch } from "./components/ui/switch";
import { Badge } from "./components/ui/badge";
import { Slider } from "./components/ui/slider";
import { useTheme } from "./components/theme-provider";
import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Pie, Cell, Legend } from "recharts";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";

const chartData = [
  { month: "Jan", value: 1200 },
  { month: "Feb", value: 900 },
  { month: "Mar", value: 1600 },
  { month: "Apr", value: 1400 },
  { month: "May", value: 2100 },
  { month: "Jun", value: 1800 },
];

const pieData = [
  { name: 'Mobile', value: 400, color: 'hsl(var(--primary))' },
  { name: 'Desktop', value: 300, color: 'hsl(var(--secondary))' },
  { name: 'Tablet', value: 200, color: 'hsl(var(--accent))' },
  { name: 'Other', value: 100, color: 'hsl(var(--muted-foreground))' },
];

const tableData = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Pending", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Inactive", role: "User" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", status: "Active", role: "Editor" },
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
        <div className="flex justify-between items-center mb-12">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-min">
          {/* Analytics Card */}
          <Card className="lg:col-span-2 hover:shadow-primary/5">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-xl">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Analytics Overview</CardTitle>
                    <CardDescription className="text-base mt-1.5">Your performance this month</CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-sm">
                  <Activity className="h-3.5 w-3.5" />
                  Live Data
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--background))',
                        border: '2px solid hsl(var(--border))',
                        borderRadius: '0.75rem',
                        padding: '12px'
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-4">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="gap-1.5 text-primary border-primary px-3 py-1 text-sm">
                  <Zap className="h-3.5 w-3.5" />
                  +12.3%
                </Badge>
                <span className="text-sm text-muted-foreground">from last month</span>
              </div>
              <Button variant="ghost" size="sm" className="gap-2 text-base">
                View Details <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Settings Card */}
          <Card className="hover:shadow-primary/5">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-secondary/10 rounded-xl">
                    <Settings2 className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Settings</CardTitle>
                    <CardDescription className="text-base mt-1.5">Customize your preferences</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8 pt-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1.5">
                  <Label className="text-base">Theme</Label>
                  <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <Palette className="h-4 w-4" />
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
              <div className="space-y-3">
                <Label className="text-base flex items-center gap-2">
                  Volume Control
                  <Gauge className="h-4 w-4" />
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
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-accent/10 rounded-xl">
                    <Share2 className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Social Engagement</CardTitle>
                    <CardDescription className="text-base mt-1.5">Share and interact</CardDescription>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsBookmarked(!isBookmarked)}
                  >
                    <BookMarked
                      className={`h-5 w-5 ${isBookmarked ? "fill-primary text-primary" : ""}`}
                    />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center p-8">
                <span className="text-2xl font-medium text-white text-center">Featured Content</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsLiked(!isLiked);
                  setLikes(isLiked ? likes - 1 : likes + 1);
                }}
                className="flex items-center gap-2 text-base"
              >
                <Heart
                  className={`h-5 w-5 transition-colors ${isLiked ? "fill-red-500 text-red-500" : ""}`}
                />
                <span>{likes}</span>
              </Button>
              <div className="flex gap-2">
                <Badge variant="secondary" className="px-3 py-1">Trending</Badge>
                <Badge variant="outline" className="px-3 py-1">New</Badge>
              </div>
            </CardFooter>
          </Card>

          {/* Form Controls Card */}
          <Card className="lg:col-span-2 hover:shadow-primary/5">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-secondary/10 rounded-xl">
                    <Bell className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Form Controls</CardTitle>
                    <CardDescription className="text-base mt-1.5">Interactive form elements</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">Email</Label>
                    <Input type="email" id="email" placeholder="Enter your email" className="text-base" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <Switch id="notifications" />
                    <Label htmlFor="notifications" className="text-base">Enable notifications</Label>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">Full Name</Label>
                    <Input type="text" id="name" placeholder="John Doe" className="text-base" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <Switch id="marketing" />
                    <Label htmlFor="marketing" className="text-base">Receive updates</Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-4">
              <Button className="ml-auto gap-2 text-base px-6">
                Save Changes
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Button Showcase Card */}
          <Card className="hover:shadow-primary/5">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary/10 rounded-xl">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Button Styles</CardTitle>
                  <CardDescription className="text-base mt-1.5">Various button variations</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="flex flex-wrap gap-3">
                <Button size="lg">Default</Button>
                <Button variant="secondary" size="lg">Secondary</Button>
                <Button variant="destructive" size="lg">Destructive</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="lg">Outline</Button>
                <Button variant="ghost" size="lg">Ghost</Button>
                <Button variant="link" size="lg">Link</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>

          {/* Badge Showcase Card */}
          <Card className="hover:shadow-primary/5">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-accent/10 rounded-xl">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl">Badges</CardTitle>
                  <CardDescription className="text-base mt-1.5">Status indicators and labels</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-3">
                <Badge className="px-3 py-1 text-sm">Default</Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">Secondary</Badge>
                <Badge variant="destructive" className="px-3 py-1 text-sm">Destructive</Badge>
                <Badge variant="outline" className="px-3 py-1 text-sm">Outline</Badge>
                <Badge className="bg-primary hover:bg-primary/90 px-3 py-1 text-sm">Custom</Badge>
                <Badge variant="outline" className="border-secondary text-secondary px-3 py-1 text-sm">
                  Success
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Pie Chart Card */}
          <Card className="hover:shadow-primary/5">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary/10 rounded-xl">
                  <PieChartIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Device Distribution</CardTitle>
                  <CardDescription className="text-base mt-1.5">User device analytics</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend 
                      verticalAlign="bottom" 
                      height={36}
                      formatter={(value) => <span className="text-sm">{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Data Table Card */}
          <Card className="hover:shadow-primary/5">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-secondary/10 rounded-xl">
                  <TableIcon className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-xl">User Data</CardTitle>
                  <CardDescription className="text-base mt-1.5">Interactive data table</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <Table>
                <TableCaption>A list of recent users.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Role</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className="font-medium">{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            row.status === "Active" ? "default" : 
                            row.status === "Pending" ? "secondary" : 
                            "outline"
                          }
                          className="px-2 py-0.5"
                        >
                          {row.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{row.role}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;