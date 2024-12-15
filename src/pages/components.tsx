import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { 
  MixerHorizontalIcon, 
  SunIcon, 
  MoonIcon, 
  BellIcon, 
  GearIcon,
  RocketIcon,
  HeartIcon,
  StarIcon
} from "@radix-ui/react-icons"

export function ComponentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Components</h2>
        <p className="text-muted-foreground">
          A collection of pre-built components ready to use.
        </p>
      </div>

      <Tabs defaultValue="buttons" className="space-y-4">
        <TabsList>
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
        </TabsList>

        <TabsContent value="buttons" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>Different button styles for various purposes.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button>Default Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link Button</Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button>
                  <RocketIcon className="mr-2 h-4 w-4" />
                  With Icon
                </Button>
                <Button variant="secondary">
                  <HeartIcon className="mr-2 h-4 w-4" />
                  Like
                </Button>
                <Button variant="outline" size="icon">
                  <StarIcon className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cards" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>A simple card layout.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Cards can contain any content you want to display.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Card with Icon</CardTitle>
                <GearIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Card Content</div>
                <p className="text-xs text-muted-foreground">With custom styling</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="forms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Form Controls</CardTitle>
              <CardDescription>Essential form input components.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" />
                </div>
                <div className="flex items-center space-x-4">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications">Enable notifications</Label>
                </div>
                <div className="space-y-2">
                  <Label>Volume</Label>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="badges" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
              <CardDescription>Status indicators and labels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-blue-500 hover:bg-blue-600">Info</Badge>
                <Badge className="bg-green-500 hover:bg-green-600">Success</Badge>
                <Badge className="bg-yellow-500 hover:bg-yellow-600">Warning</Badge>
                <Badge className="bg-red-500 hover:bg-red-600">Error</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 