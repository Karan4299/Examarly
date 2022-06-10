import React from "react";

export interface ModalDataProps {
  onClose: (event: React.SyntheticEvent) => void;
  Title: string;
  description: string;
  progress: {
    weak: number;
    Average: number;
    Improvement: number;
    CuttoffLevel: number;
  };
  onFinish: (event: React.SyntheticEvent) => void;
}
