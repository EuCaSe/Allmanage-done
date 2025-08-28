"use client";

import { useState } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

interface FilterSectionDialogProps {
  sectionTypes: string[];
  onFilter: (type: string) => void;
  onClose: () => void;
}

export function FilterSectionDialog({
  sectionTypes,
  onFilter,
  onClose,
}: FilterSectionDialogProps) {
  const [selectedType, setSelectedType] = useState<string>(sectionTypes[0] || "All");

  const handleApply = () => {
    onFilter(selectedType);
    onClose();
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Filter Sections</DialogTitle>
      </DialogHeader>

      <div className="py-4">
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="w-full border">
            <SelectValue placeholder="Select section type" />
          </SelectTrigger>
          <SelectContent>
            {sectionTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleApply}>Apply</Button>
      </DialogFooter>
    </DialogContent>
  );
}
