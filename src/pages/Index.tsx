
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, Users, Award } from "lucide-react";
import { BottomNavigation } from "@/components/BottomNavigation";

const Index = () => {
  const platforms = [
    {
      id: "prepladder",
      name: "PrepLadder",
      description: "Comprehensive medical exam preparation platform with expert faculty",
      icon: BookOpen,
      color: "bg-blue-600",
      subjects: 45,
      lectures: 2500,
      students: "50K+",
      href: "/platform/prepladder"
    },
    {
      id: "marrow",
      name: "Marrow",
      description: "India's leading medical education platform for NEET PG preparation",
      icon: Award,
      color: "bg-green-600", 
      subjects: 38,
      lectures: 2200,
      students: "40K+",
      href: "/platform/marrow"
    },
    {
      id: "dams",
      name: "DAMS",
      description: "Delhi Academy of Medical Sciences - Premier medical coaching institute",
      icon: Users,
      color: "bg-purple-600",
      subjects: 42,
      lectures: 2800,
      students: "35K+",
      href: "/platform/dams"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">MedEdu Hub</h1>
          <p className="text-primary-foreground/90">Your gateway to medical education excellence</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-primary">170+</div>
            <div className="text-sm text-muted-foreground">Total Pages</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-green-600">7500+</div>
            <div className="text-sm text-muted-foreground">Video Lectures</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-blue-600">125K+</div>
            <div className="text-sm text-muted-foreground">Active Students</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-purple-600">98%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>

        {/* Platform Cards */}
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Choose Your Learning Platform</h2>
            <p className="text-muted-foreground">Select from our premium medical education partners</p>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {platforms.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <Card key={platform.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-3 rounded-lg ${platform.color} text-white`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {platform.name}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-1">Premium Partner</Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {platform.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="font-semibold text-lg">{platform.subjects}</div>
                        <div className="text-xs text-muted-foreground">Subjects</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-lg">{platform.lectures}</div>
                        <div className="text-xs text-muted-foreground">Lectures</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-lg">{platform.students}</div>
                        <div className="text-xs text-muted-foreground">Students</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => window.location.href = platform.href}
                      className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      Explore {platform.name}
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Featured Content */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-blue-800">Latest Video Lectures</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 mb-4">Access newest medical education content from top educators</p>
              <button 
                onClick={() => window.location.href = '/videos'}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Watch Now
              </button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-600" />
                <CardTitle className="text-green-800">Question Bank</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 mb-4">Practice with thousands of curated medical exam questions</p>
              <button 
                onClick={() => window.location.href = '/qbank'}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Start Practice
              </button>
            </CardContent>
          </Card>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Index;
