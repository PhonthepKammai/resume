import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Database, LayoutPanelTop, BrainCircuit, Workflow } from 'lucide-react';

import { StatusBadge, type SkillStatus } from '../components/StatusBadge';

function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftState, setScrollLeftState] = useState(0);

    const cards = [
        { 
            id: 1, 
            title: "Database & Data", 
            list: [
                { id: 1, name: "SQL Querying", status: "Experienced" },
                { id: 2, name: "Database Design", status: "Experienced" },
                { id: 3, name: "MariaDB", status: "Experienced" }
            ],
            icon: Database 
        },
        { 
            id: 2, 
            title: "Web Development", 
            list: [
                { id: 1, name: "HTML · Bootstrap 5", status: "Experienced" },
                { id: 2, name: "PHP · jQuery", status: "Experienced" },
                { id: 3, name: "React · TypeScript", status: "In Progress" }
            ],
            icon: LayoutPanelTop 
        },
        { 
            id: 3, 
            title: "Software Development", 
            list: [
                { id: 1, name: "Browser Extension", status: "In Progress" },
                { id: 2, name: "Modular Architecture", status: "In Progress" },
            ], 
            icon: Workflow 
        },
        { 
            id: 4, 
            title: "AI & Developer Tools", 
            list: [
                { id: 1, name: "Local LLM", status: "Exploring" },
                { id: 2, name: "Git · GitHub · VS Code", status: "Experienced" },
            ], 
            icon: BrainCircuit 
        },
    ];

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const onWheel = (e: WheelEvent) => {
        // ถ้าไม่ได้หมุนแนวตั้งเป็นหลัก ให้ข้ามไป
        if (e.deltaY === 0) return;
        
        // ป้องกันไม่ให้ทั้งหน้าเว็บเลื่อนลง แต่ให้แถวการ์ดเลื่อนแนวนอนแทน
        e.preventDefault();
        el.scrollLeft += e.deltaY;
        };

        // จำเป็นต้องใช้ passive: false เพื่อให้ e.preventDefault() ทำงานได้
        el.addEventListener('wheel', onWheel, { passive: false });
        return () => el.removeEventListener('wheel', onWheel);
    }, []);

    // 2. ลอจิกคลิกค้างแล้วลาก (Click to Drag)
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeftState(containerRef.current.scrollLeft);
    };

    const handleMouseLeaveOrUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !containerRef.current) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // ปรับตัวคูณความเร็วในการลากได้ที่นี่
        containerRef.current.scrollLeft = scrollLeftState - walk;
    };

    // ปุ่มกดเลื่อนซ้าย-ขวา
    const handleScrollBtn = (direction: 'left' | 'right') => {
        if (containerRef.current) {
        const scrollAmount = 320;
        containerRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
        }
    };

    return (
        <>
            <div className="w-full">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-slate-900">Skills & Capabilities</h2>
                    
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleScrollBtn('left')}
                            className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 transition-colors"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={() => handleScrollBtn('right')}
                            className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 transition-colors"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
                <div className="w-20 h-1 bg-orange-600 rounded-full mb-4"></div>


                <div 
                    ref={containerRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeaveOrUp}
                    onMouseUp={handleMouseLeaveOrUp}
                    onMouseMove={handleMouseMove}
                    className={`flex gap-4 overflow-x-auto pb-4 select-none scrollbar-none transition-colors ${
                        isDragging ? 'cursor-grabbing' : 'cursor-grab'
                    }`}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {cards.map((card) => (
                        <div 
                            key={card.id} 
                            className="flex-none w-80 p-5 bg-white border border-slate-200 rounded-xl shadow-sm snap-start flex flex-col justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-semibold text-orange-600">{card.icon && <card.icon size={18} />}</span>
                                <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                            </div>
                            <div className="mt-4 flex-1 flex flex-col justify-start gap-3">
                                {card.list.map((skill) => (
                                <div 
                                    key={skill.id} 
                                    className="flex items-center justify-between">
                                    <p className="text-sm text-slate-700">{skill.name}</p>
                                    <StatusBadge status={skill.status as SkillStatus} />
                                </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills
