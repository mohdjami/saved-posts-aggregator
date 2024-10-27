"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Twitter, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";

export default function DashboardPage() {
  const [savedPosts, setSavedPosts] = useState([
    {
      id: 1,
      title: "10 Tips for Productivity",
      platform: "Twitter",
      date: "2023-05-15",
    },
    {
      id: 2,
      title: "The Future of AI in Business",
      platform: "LinkedIn",
      date: "2023-05-14",
    },
    {
      id: 3,
      title: "How to Build a Successful Startup",
      platform: "Facebook",
      date: "2023-05-13",
    },
    {
      id: 4,
      title: "Mastering React Hooks",
      platform: "Twitter",
      date: "2023-05-12",
    },
    {
      id: 5,
      title: "The Importance of Networking",
      platform: "LinkedIn",
      date: "2023-05-11",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [platformFilter, setPlatformFilter] = useState("all");

  const platformIcon = {
    Twitter: Twitter,
    LinkedIn: Linkedin,
    Facebook: Facebook,
  };

  const filteredPosts = savedPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (platformFilter === "all" ||
        post.platform.toLowerCase() === platformFilter)
  );

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input
          placeholder="Search saved posts..."
          className="md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select value={platformFilter} onValueChange={setPlatformFilter}>
          <SelectTrigger className="md:w-1/4">
            <SelectValue placeholder="Filter by platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Platforms</SelectItem>
            <SelectItem value="twitter">Twitter</SelectItem>
            <SelectItem value="linkedin">LinkedIn</SelectItem>
            <SelectItem value="facebook">Facebook</SelectItem>
          </SelectContent>
        </Select>
        <Button className="md:w-auto">Add New Post</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => {
          const Icon = platformIcon[post.platform as keyof typeof platformIcon];
          return (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  {post.title}
                </CardTitle>
                <CardDescription>
                  {post.platform} • {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Preview of the saved post content...</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  View Post
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
