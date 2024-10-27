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
import { Twitter, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState([
    { name: "Twitter", icon: Twitter, connected: false },
    { name: "LinkedIn", icon: Linkedin, connected: false },
    { name: "Facebook", icon: Facebook, connected: false },
  ]);

  const toggleConnection = (name: string) => {
    setIntegrations(
      integrations.map((integration) =>
        integration.name === name
          ? { ...integration, connected: !integration.connected }
          : integration
      )
    );
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Integrations</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration) => (
          <Card key={integration.name}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <integration.icon className="h-6 w-6" />
                {integration.name}
              </CardTitle>
              <CardDescription>
                Connect your {integration.name} account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {integration.connected
                  ? `Your ${integration.name} account is connected.`
                  : `Connect your ${integration.name} account to start saving posts.`}
              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant={integration.connected ? "outline" : "default"}
                onClick={() => toggleConnection(integration.name)}
              >
                {integration.connected ? "Disconnect" : "Connect"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
