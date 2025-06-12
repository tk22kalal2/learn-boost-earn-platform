
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Eye, ArrowLeft } from "lucide-react";
import { BottomNavigation } from "@/components/BottomNavigation";

const Videos = () => {
  const featuredVideos = [
    {
      id: "1",
      title: "Complete Anatomy Overview - Human Body Systems",
      instructor: "Dr. Rajesh Kumar",
      platform: "PrepLadder",
      duration: "2h 45m",
      views: "45.2K",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=225&fit=crop",
      category: "Anatomy"
    },
    {
      id: "2", 
      title: "Cardiovascular Physiology Made Simple",
      instructor: "Dr. Priya Sharma",
      platform: "Marrow",
      duration: "1h 30m", 
      views: "32.8K",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=225&fit=crop",
      category: "Physiology"
    },
    {
      id: "3",
      title: "Pathology Basics - Cell Injury and Adaptation", 
      instructor: "Dr. Amit Verma",
      platform: "DAMS",
      duration: "2h 15m",
      views: "28.5K", 
      thumbnail: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=225&fit=crop",
      category: "Pathology"
    },
    {
      id: "4",
      title: "Pharmacology - Drug Mechanisms Explained",
      instructor: "Dr. Sneha Patel", 
      platform: "PrepLadder",
      duration: "1h 45m",
      views: "41.3K",
      thumbnail: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=225&fit=crop", 
      category: "Pharmacology"
    },
    {
      id: "5",
      title: "Surgery Techniques - Basic Procedures",
      instructor: "Dr. Rahul Singh",
      platform: "Marrow", 
      duration: "3h 20m",
      views: "38.7K",
      thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=225&fit=crop",
      category: "Surgery"
    },
    {
      id: "6",
      title: "Pediatrics Essentials - Child Development",
      instructor: "Dr. Kavya Reddy",
      platform: "DAMS",
      duration: "2h 10m", 
      views: "25.9K",
      thumbnail: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=400&h=225&fit=crop",
      category: "Pediatrics"
    }
  ];

  const categories = ["All", "Anatomy", "Physiology", "Pathology", "Pharmacology", "Surgery", "Pediatrics"];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 mb-4 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </button>
          <h1 className="text-3xl font-bold mb-2">Video Lectures</h1>
          <p className="text-white/90">Learn from top medical educators</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredVideos.map((video) => (
            <Card key={video.id} className="hover:shadow-lg transition-shadow cursor-pointer group overflow-hidden">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Play className="h-8 w-8 text-white" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {video.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 space-y-2">
                <p className="text-sm text-muted-foreground">{video.instructor}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-primary font-medium">{video.platform}</span>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Eye className="h-3 w-3" />
                    <span>{video.views}</span>
                  </div>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors mt-3">
                  Watch Now
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Videos;
