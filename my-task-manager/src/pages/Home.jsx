import MainLayout from "@/layouts/MainLayout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="flex justify-center">
        <Card className="w-full max-w-2xl space-y-6 text-center">
          <h1 className="text-3xl font-bold">Welcome to TaskManager App</h1>
          <p className="text-gray-600 dark:text-gray-300">
            A modern task management app built with React, Vite, Tailwind CSS, and real API integration.
          </p>

          <div className="flex justify-center gap-4">
            <Button variant="primary" onClick={() => navigate("/tasks")}>
              Manage Tasks
            </Button>
            <Button variant="secondary" onClick={() => navigate("/posts")}>
              View Posts
            </Button>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
