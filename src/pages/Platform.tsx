
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, ArrowLeft } from "lucide-react";
import { BottomNavigation } from "@/components/BottomNavigation";

const Platform = () => {
  const { platformId } = useParams();

  const platformData = {
    prepladder: {
      name: "PrepLadder",
      description: "Comprehensive medical exam preparation platform",
      color: "blue",
      subjects: [
        { id: "anatomy", name: "Anatomy", lectures: 245, duration: "120 hrs", difficulty: "Beginner" },
        { id: "physiology", name: "Physiology", lectures: 189, duration: "95 hrs", difficulty: "Intermediate" },
        { id: "pathology", name: "Pathology", lectures: 298, duration: "150 hrs", difficulty: "Advanced" },
        { id: "pharmacology", name: "Pharmacology", lectures: 156, duration: "80 hrs", difficulty: "Intermediate" },
        { id: "microbiology", name: "Microbiology", lectures: 178, duration: "90 hrs", difficulty: "Intermediate" },
        { id: "medicine", name: "Internal Medicine", lectures: 445, duration: "220 hrs", difficulty: "Advanced" }
      ]
    },
    marrow: {
      name: "Marrow",
      description: "India's leading medical education platform",
      color: "green", 
      subjects: [
        { id: "surgery", name: "General Surgery", lectures: 356, duration: "180 hrs", difficulty: "Advanced" },
        { id: "obstetrics", name: "Obstetrics & Gynecology", lectures: 234, duration: "115 hrs", difficulty: "Intermediate" },
        { id: "pediatrics", name: "Pediatrics", lectures: 289, duration: "145 hrs", difficulty: "Intermediate" },
        { id: "psychiatry", name: "Psychiatry", lectures: 145, duration: "75 hrs", difficulty: "Beginner" },
        { id: "radiology", name: "Radiology", lectures: 198, duration: "100 hrs", difficulty: "Advanced" },
        { id: "anesthesia", name: "Anesthesiology", lectures: 167, duration: "85 hrs", difficulty: "Advanced" }
      ]
    },
    dams: {
      name: "DAMS",
      description: "Delhi Academy of Medical Sciences", 
      color: "purple",
      subjects: [
        { id: "ent", name: "ENT", lectures: 134, duration: "70 hrs", difficulty: "Intermediate" },
        { id: "ophthalmology", name: "Ophthalmology", lectures: 156, duration: "80 hrs", difficulty: "Intermediate" },
        { id: "orthopedics", name: "Orthopedics", lectures: 267, duration: "135 hrs", difficulty: "Advanced" },
        { id: "dermatology", name: "Dermatology", lectures: 189, duration: "95 hrs", difficulty: "Beginner" },
        { id: "forensic", name: "Forensic Medicine", lectures: 98, duration: "50 hrs", difficulty: "Beginner" },
        { id: "community", name: "Community Medicine", lectures: 123, duration: "65 hrs", difficulty: "Intermediate" }
      ]
    }
  };

  const platform = platformData[platformId as keyof typeof platformData];

  if (!platform) {
    return <div>Platform not found</div>;
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800"; 
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className={`bg-gradient-to-r from-${platform.color}-600 to-${platform.color}-700 text-white p-6`}>
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 mb-4 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </button>
          <h1 className="text-3xl font-bold mb-2">{platform.name}</h1>
          <p className="text-white/90">{platform.description}</p>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>{platform.subjects.length} Subjects</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Premium Access</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Available Subjects</h2>
          <p className="text-muted-foreground">Choose a subject to start learning</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {platform.subjects.map((subject) => (
            <Card key={subject.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {subject.name}
                  </CardTitle>
                  <Badge className={getDifficultyColor(subject.difficulty)}>
                    {subject.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Lectures:</span>
                    <span className="font-medium">{subject.lectures}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {subject.duration}
                    </span>
                  </div>
                  <button 
                    onClick={() => window.location.href = `/platform/${platformId}/subject/${subject.id}`}
                    className={`w-full bg-${platform.color}-600 text-white py-2 rounded-lg font-medium hover:bg-${platform.color}-700 transition-colors`}
                  >
                    Start Learning
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Platform;
