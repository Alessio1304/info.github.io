// Adapted from: https://ui.shadcn.com/docs/components/toast
import { useToast as useToastOriginal } from "@/components/ui/use-toast";

// Exporting the hook with the same interface for compatibility
export const useToast = useToastOriginal;

// Re-export types
export type { Toast, ToasterToast } from "@/components/ui/use-toast";
