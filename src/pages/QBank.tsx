
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Target, TrendingUp, ArrowLeft } from "lucide-react";
import { BottomNavigation } from "@/components/BottomNavigation";

const QBank = () => {
  const questionSets = [
    {
      id: "1",
      title: "NEET PG 2024 - Anatomy",
      questions: 150,
      timeLimit: "180 min",
      difficulty: "High",
      category: "Anatomy",
      attempts: "2.3K",
      avgScore: "72%"
    },
    {
      id: "2", 
      title: "Physiology Mock Test Series",
      questions: 200,
      timeLimit: "240 min",
      difficulty: "Medium", 
      category: "Physiology",
      attempts: "1.8K",
      avgScore: "68%"
    },
    {
      id: "3",
      title: "Pathology Quick Practice",
      questions: 100,
      timeLimit: "120 min",
      difficulty: "Medium",
      category: "Pathology", 
      attempts: "3.1K",
      avgScore: "75%"
    },
    {
      id: "4",
      title: "Pharmacology Challenge",
      questions: 175,
      timeLimit: "210 min", 
      difficulty: "High",
      category: "Pharmacology",
      attempts: "1.5K", 
      avgScore: "65%"
    },
    {
      id: "5",
      title: "Surgery Basics Test",
      questions: 120,
      timeLimit: "150 min",
      difficulty: "Medium",
      category: "Surgery",
      attempts: "2.7K",
      avgScore: "71%"
    },
    {
      id: "6", 
      title: "Medicine Comprehensive",
      questions: 250,
      timeLimit: "300 min",
      difficulty: "High", 
      category: "Medicine",
      attempts: "1.2K",
      avgScore: "63%"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "High": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const categories = ["All", "Anatomy", "Physiology", "Pathology", "Pharmacology", "Surgery", "Medicine"];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 mb-4 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </button>
          <h1 className="text-3xl font-bold mb-2">Question Bank</h1>
          <p className="text-white/90">Practice with curated medical exam questions</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-primary">15K+</div>
            <div className="text-sm text-muted-foreground">Questions</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-green-600">95%</div>
            <div className="text-sm text-muted-foreground">Accuracy</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-muted-foreground">Test Series</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-purple-600">24/7</div>
            <div className="text-sm text-muted-foreground">Available</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Subject Categories</h2>
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

        {/* Question Sets Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {questionSets.map((set) => (
            <Card key={set.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                    {set.title}
                  </CardTitle>
                  <Badge className={getDifficultyColor(set.difficulty)}>
                    {set.difficulty}
                  </Badge>
                </div>
                <Badge variant="secondary" className="w-fit">
                  {set.category}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{set.questions} Questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{set.timeLimit}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <span>{set.avgScore} Avg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <span>{set.attempts} Attempts</span>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Start Practice
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

export default QBank;
