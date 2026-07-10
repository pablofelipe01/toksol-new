import {
  ArrowLeftRight,
  Banknote,
  Building2,
  Coins,
  Copyright,
  Landmark,
  Layers,
  Lock,
  ShieldCheck,
  Wheat,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Explicit registry rather than a dynamic `lucide-react` lookup: content files
 * reference icons by name, and this keeps the bundle to the icons actually used.
 */
const REGISTRY = {
  ArrowLeftRight,
  Banknote,
  Building2,
  Coins,
  Copyright,
  Landmark,
  Layers,
  Lock,
  ShieldCheck,
  Wheat,
  Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof REGISTRY;

export default function Icon({ name, className }: { name: string; className?: string }) {
  const Component = REGISTRY[name as IconName] ?? Coins;
  return <Component className={className} aria-hidden="true" />;
}
