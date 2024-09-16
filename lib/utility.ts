import { format, isThisYear } from "date-fns";

export const formatShortDate = (date: string) => {
  const _date = new Date(date)

  return isThisYear(_date) ? format(_date, "MMM d") : format(_date, "MMM d, y")
}


export const createSlug = (slug: string): string => {
    slug = slug.toLowerCase();
  
    slug = slug.replace(/[^a-z0-9\s]/g, "");
    slug = slug.replace(/\s+/g, "-");
  
    return slug;
  };
  