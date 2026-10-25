import { 
    type BadgeStatus,
    StatusBadge
} from "./StatusBadge"
import type { LucideIcon } from "lucide-react";

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  icon: LucideIcon;
  badge?: BadgeStatus;
  description?: string[]
  isCurrent?: boolean;
}

export function Timeline({ items }: { items: TimelineItem[] }) {

    return (
        <>
            <div className="flex-col">
                {items.map((item, index) => (
                    <div key={item.id} className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className={`rounded-full w-12 h-12 flex items-center justify-center ${index === 0 ? 'bg-orange-100' : 'bg-gray-100'}`}>
                                <item.icon className={`${index === 0 ? 'text-orange-600' : 'text-gray-600'}`} />
                            </div>
                            <div className={`w-0.5 flex-1 bg-gray-400 rounded-full ${index === items.length - 1 ? 'hidden' : ''}`}></div>
                        </div>
                        <div className="flex flex-col pt-3 pb-8">
                            <div className="flex items-center gap-2 mb-1">
                                <StatusBadge status={item.badge as BadgeStatus} />
                                <span>{item.period}</span>
                            </div>
                            <h2 className="text-2xl text-orange-600">{item.title}</h2>
                            <h3 className="text-xl">{item.subtitle}</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 mt-2">
                                {item.description?.map((desc, idx) => (
                                    <li key={idx}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}