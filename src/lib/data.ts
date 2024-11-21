import project from "@/lib/json/project.json";

export const projects = [...project].sort((a: any, b: any) => {
    const priorityA = a.priority !== undefined ? a.priority : Infinity;
    const priorityB = b.priority !== undefined ? b.priority : Infinity;
    return priorityA - priorityB;
});