"use client";

import { useState, useEffect } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Strand } from "./StrandManagement";

interface StrandFormDialogProps {
  strand: Strand | null;
  onSave: (data: Partial<Strand>) => void;
  onClose: () => void;
}

export function StrandFormDialog({
  strand,
  onSave,
  onClose,
}: StrandFormDialogProps) {
  const [strandName, setStrandName] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    if (strand) {
      setStrandName(strand.strand);
      setType(strand.type);
    }
  }, [strand]);

  const handleSubmit = () => {
    if (!strandName || !type) return;
    onSave({ strand: strandName, type });
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          {strand ? "Edit Strand" : "Add Strand"}
        </DialogTitle>
      </DialogHeader>

      <div className="flex flex-col gap-4 py-4">
        {/* Strand Name */}
        <Input
          placeholder="Enter strand name"
          value={strandName}
          onChange={(e) => setStrandName(e.target.value)}
        />

        {/* Type Dropdown */}
        <Select value={type} onValueChange={setType}>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Academic">Academic</SelectItem>
            <SelectItem value="Technical-Vocational">
              Technical-Vocational
            </SelectItem>
            <SelectItem value="Sports">Sports</SelectItem>
            <SelectItem value="Arts & Design">Arts & Design</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>
          {strand ? "Save Changes" : "Add Strand"}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
