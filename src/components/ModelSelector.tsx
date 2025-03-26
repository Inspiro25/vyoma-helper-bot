
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const models = [
  {
    id: 'gpt-free',
    name: 'GPT 3.5',
    description: 'General purpose AI',
    isPremium: false,
  },
  {
    id: 'claude-lite',
    name: 'Claude Lite',
    description: 'Fast & efficient',
    isPremium: false,
  },
  {
    id: 'gpt-4',
    name: 'GPT 4',
    description: 'Advanced reasoning',
    isPremium: true,
  },
  {
    id: 'claude-sonnet',
    name: 'Claude Sonnet',
    description: 'High performance',
    isPremium: true,
  },
];

const ModelSelector = () => {
  const [selectedModel, setSelectedModel] = useState(models[0]);
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border border-border flex items-center space-x-2">
          <span>{selectedModel.name}</span>
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {models.map((model) => (
          <DropdownMenuItem
            key={model.id}
            className={`flex items-center justify-between ${model.isPremium ? 'opacity-50' : ''}`}
            disabled={model.isPremium}
            onClick={() => setSelectedModel(model)}
          >
            <div className="flex flex-col">
              <span className="font-medium">{model.name}</span>
              <span className="text-xs text-muted-foreground">{model.description}</span>
            </div>
            {model.id === selectedModel.id && <Check size={16} className="text-vyoma" />}
            {model.isPremium && (
              <span className="pill bg-secondary text-xs">Premium</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModelSelector;
