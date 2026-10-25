import { 
    type LucideIcon,
    CheckCircle, 
    LoaderCircle, 
    FlaskConical,
} from "lucide-react";

export type SkillStatus = "Experienced" | "In Progress" | "Exploring";
export type EducationStatus = "Graduated" | "Studying";
export type BadgeStatus = SkillStatus | EducationStatus;

interface BadgeItemConfig {
    label: string;
    icon: LucideIcon | null;
    className: string;
}

const badgeConfig: Record<BadgeStatus, BadgeItemConfig> = {
  // Skills
  Experienced: {
    label: "Experienced",
    icon: CheckCircle,
    className:
      "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  "In Progress": {
    label: "In Progress",
    icon: LoaderCircle,
    className:
      "bg-sky-50 text-sky-700 border-sky-200",
  },
  Exploring: {
    label: "Exploring",
    icon: FlaskConical,
    className:
      "bg-amber-50 text-amber-800 border-amber-200",
  },
  // Education
  Graduated: {
    label: "Graduated",
    icon: null,
    className:
      "bg-gray-50 text-gray-700 border-gray-200",
  },
  Studying: {
    label: "Studying",
    icon: null,
    className:
      "bg-emerald-50 text-emerald-700 border-emerald-200",
  }
};

export function StatusBadge({ status }: { status:  BadgeStatus }) {
  const config = badgeConfig[status];
  if (!config) return null;

  const Icon = config.icon || (() => null);

  return (
    <span
        title={config.label}
        aria-label={config.label}
        className={`inline-flex items-center rounded-full border gap-1 px-2.5 py-1 text-xs font-semibold ${config.className}`}
    >
        <Icon size={12} aria-hidden="true"/>
        {config.label}
    </span>
  );
}
